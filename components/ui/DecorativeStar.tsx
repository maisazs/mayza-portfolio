import Image from "next/image";
import type { ComponentProps } from "react";
import { withBasePath } from "@/lib/paths";

type DecorativeStarProps = {
  variant?: "burst" | "sparkles";
  className?: string;
  size?: number;
} & Omit<
  ComponentProps<typeof Image>,
  "src" | "width" | "height" | "alt"
>;

export function DecorativeStar({
  variant = "burst",
  className = "",
  size = 120,
  ...props
}: DecorativeStarProps) {
  const src = withBasePath(
    variant === "burst"
      ? "/decorations/star-burst.png"
      : "/decorations/sparkles.png",
  );

  return (
    <Image
      className={className}
      src={src}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      {...props}
    />
  );
}