import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../lib/utils";

// This makes the paragraph component reusable using the class variance authority libary (basically defines which styles to apply to the component depending on the props passed in)
const paragraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center", // Tailwind styling that applies for everything in the component that implements paragraph variants
  {
    variants: {
      // the properties in variants are available as props for the parent components rendering this component
      // different variants we want for the paragraph
      size: {
        default: "text-base sm:text-lg", // text-base determines a tailwind font size (this is default)
        sm: "text-sm sm:text-base",
        blah: "text-sm bloo",
      },
    },
    defaultVariants: {
      // this will apply the default variant as the default
      size: "default",
    },
  }
);

// define the interface for the props that will be passed in
interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>, // HTMLAttributes is a react type that takes a generic (like a function that takes types instead of parameters. It takes an HTMLParagraph type which means any component that uses the Paragraph component can see the props that are available to an HTML paragraph
    VariantProps<typeof paragraphVariants> {} //

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  // everything in the props (first) argument of the function component will be of type HTMLParagraphElement and Paragraph Props
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn([paragraphVariants({ size, className })])}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
