import Image from "next/image";

type AnimatedLogoProps = {
  variant?: "dark" | "coloured";
  placement?: "header" | "footer";
};

export default function AnimatedLogo({ variant = "dark", placement = "header" }: AnimatedLogoProps) {
  const prefix = variant === "dark" ? "dark" : "coloured";
  const dimensions = variant === "dark"
    ? { left: [80, 112], center: [112, 112], right: [181, 112] }
    : { left: [74, 116], center: [103, 116], right: [162, 116] };

  const heightClass = placement === "header" ? "h-11 md:h-14 lg:h-16" : "h-12 md:h-14";

  return (
    <span role="img" aria-label="ILOCAP" className={`inline-flex items-center ${heightClass}`}>
      <Image src={`/logo-${prefix}-il.png`} alt="" width={dimensions.left[0]} height={dimensions.left[1]} className="h-full w-auto" priority={placement === "header"} />
      <Image src={`/logo-${prefix}-o.png`} alt="" width={dimensions.center[0]} height={dimensions.center[1]} className="animate-logo-o h-full w-auto" priority={placement === "header"} />
      <Image src={`/logo-${prefix}-cap.png`} alt="" width={dimensions.right[0]} height={dimensions.right[1]} className="h-full w-auto" priority={placement === "header"} />
    </span>
  );
}
