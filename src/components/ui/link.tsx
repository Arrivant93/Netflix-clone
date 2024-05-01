import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import NextLink from "next/link";
import React, { HTMLAttributes } from "react";

const linkVariants = cva("", {
  variants: {
    variant: {
      "nav-links": "text-[14px] text-zinc-300 hover:text-white font-medium transition-colors",
      "nav-dropdown": "text-[14px] hover:underline",
      "footer-links": "text-zinc-400 text-[13px] font-medium hover:underline",
    },
  },
  defaultVariants: {},
});

interface LinkProps extends HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
  href: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, href, ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        href={href}
        {...props}
        className={cn(linkVariants({ variant, className }))}
      />
    );
  }
);

Link.displayName = "Link";

interface LinkIconProps
  extends HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
  icon: JSX.Element;
}

const LinkIcon = React.forwardRef<HTMLAnchorElement, LinkIconProps>(
  ({ className, variant, href, icon, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-3">
        <span>{icon}</span>
        <NextLink
          ref={ref}
          href={href}
          {...props}
          className={cn(linkVariants({ variant, className }))}
        />
      </div>
    );
  }
);

LinkIcon.displayName = "LinkIcon";

export { Link, LinkIcon };
