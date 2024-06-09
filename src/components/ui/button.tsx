import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for class names

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className = "", ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn("base-button ", className)} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button };
