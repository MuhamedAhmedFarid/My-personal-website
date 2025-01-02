import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
export default function Card({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:border-2 after:border-white/20 after:rounded-3xl after:pointer-events-none p-6",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
}
// px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20
