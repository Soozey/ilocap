import assert from 'node:assert/strict';
import { createFormRateLimit, escapeHtml, isEmail, isOptionalText, readPublicForm } from '../src/lib/public-form.ts';

function request(body, contentType = 'application/json; charset=utf-8') {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': contentType },
    body,
  });
}

const lead = { nom: 'Équipe ILOCAP', email: 'recette@example.test', optIn: true };
assert.deepEqual(await readPublicForm(request(JSON.stringify(lead))), lead);
assert.equal((await readPublicForm(request('null'))).status, 400);
assert.equal((await readPublicForm(request('[]'))).status, 400);
assert.equal((await readPublicForm(request('{'))).status, 400);
assert.equal((await readPublicForm(request('{}', 'text/plain'))).status, 415);
assert.equal((await readPublicForm(request(JSON.stringify({ nom: 'é'.repeat(8_000) })))).status, 413);
assert.equal(isEmail(lead.email), true);
assert.equal(isEmail({ address: lead.email }), false);
assert.equal(isOptionalText(null, 200), true);
assert.equal(isOptionalText(123, 200), false);
assert.equal(escapeHtml('R&D <équipe>'), 'R&amp;D &lt;équipe&gt;');
const limit = createFormRateLimit(1, 60_000);
assert.equal(limit(), undefined);
const limitResponse = limit();
assert.equal(limitResponse.status, 429);
assert(Number(limitResponse.headers.get('retry-after')) > 0);
console.log('PASS: JSON form limits, rate limits, validation and HTML escaping.');
