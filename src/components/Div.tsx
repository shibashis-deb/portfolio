import { cn } from "@/lib/utils";
import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Div({ className, ...props }: DivProps) {
  return <div className={cn(className)} {...props}></div>;
}
