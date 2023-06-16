import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// This makes the paragraph component reusable using the class variance authority libary (basically defines which styles to apply to the component depending on the props passed in)
const largeHeadingVariants = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-right", // Tailwind styling that applies for everything in the component that implements paragraph variants
  // leading tight - letters closer together
  {
    variants: {
      // the properties in variants are available as props for the parent components rendering this component
      // different variants we want for the paragraph
      size: {
        default: "text-4xl md:text:5xl lg:text-6xl", // text-base determines a tailwind font size (this is default)
        sm: "text-2xl md:text:3xl lg:text-4xl",
        lg: "text-5xl md:text:6xl lg:text-7xl",
      },
    },
    defaultVariants: {
      // this will apply the default variant as the default
      size: "default",
    },
  }
);

// define the interface for the props that will be passed in
interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>, // HTMLAttributes is a react type that takes a generic (like a function that takes types instead of parameters. It takes an HTMLParagraph type which means any component that uses the Paragraph component can see the props that are available to an HTMLParagraph
    VariantProps<typeof largeHeadingVariants> {} //

// forward ref allows us to pass a link to a DOM node
// It takes two generics:
// 1. The type of the element that it will render (HTMLParagraphElement)
// 2. The type of the props that we will pass to the component (our own paragraph props)
const Paragraph = forwardRef<HTMLParagraphElement, LargeHeadingProps>(
  // everything in the props (first) argument of the function component will be of type HTMLParagraphElement and Paragraph Props
  ({ className, size, children, ...props }, ref) => {
    // the ref is optional and allows access to the referenced node
    //destructured props className, size and children. Everything else is availabe as props
    return (
      <p
        ref={ref} // this is the link to the DOM node (parent?)
        {...props}
        className={cn(largeHeadingVariants({ size, className }))} // Dynamic tailwind classname. Uses a utility function to take the size and classnames passed in and make them valid TW styles.
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph"; // for debugging

export default Paragraph;
