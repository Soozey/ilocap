#!/bin/bash

# Script pour ajouter, commit et push sur main
# Le message de commit sera la date du jour

# Ajouter tous les fichiers
git add .

# Commit avec la date du jour
git commit -m "$(date '+%Y-%m-%d %H:%M:%S')"

# Push vers la branche main
git push origin main
