import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const titleVariants = cva("text-[#e5e5e5] font-medium", {
  variants: {
    variant: {
      section: "text-[1.4vw]",
    },
  },
  defaultVariants: {},
});

interface titleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {}

const Title = React.forwardRef<HTMLHeadingElement, titleProps>(
  ({ className, variant, ...props }, ref) => {
    return <h2 ref={ref} {...props} className={cn(titleVariants({ variant, className }))} />;
  }
);

Title.displayName = "Title";

export { Title };
