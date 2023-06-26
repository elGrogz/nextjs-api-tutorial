"use client";

import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Highlight, themes } from "prism-react-renderer";

// set the props passed into the component
interface CodeProps {
  code: string;
  show: boolean;
  language: "nodejs" | "python";
  animationDelay?: number;
  animated?: boolean;
}

const Code: FC<CodeProps> = ({
  code,
  show,
  language,
  animationDelay,
  animated,
}) => {
  const { theme: applicationTheme } = useTheme(); // use the nextjs theme
  const [text, setText] = useState(animated ? "" : code); // if the component is to be animated then start empty so the component can fill up, if not then just show everything

  useEffect(() => {
    if (show && animated) {
      // only run the use effect if we want to show the code and if we want to animate it
      let i = 0; // start the counter at 0
      setTimeout(() => {
        // setTimeout starts something after the value in the second argument - either from the parent component as a prop, or a set value of 150
        const intervalId = setInterval(() => {
          // setInterval does something per x seconds from the second argyment (15 ms)
          setText(code.slice(0, i)); // replaces the current code with all characters between the first character of the code and the character at position i
          i++; //incremenet the count

          if (i > code.length) {
            clearInterval(intervalId); // stop the intervals (code expanding) when we reach the end of the characters
          }

          return () => clearInterval(intervalId); // stop the intervals if the component unmounts to prevent memory leaks
        }, 15);
      }, animationDelay || 150);
    }
  }, [code, show, animated, animationDelay]); // rerun the use effect if the code, show, animated or animationDelay props change (only going to be code in this case)

  // number of lines

  const lines = text.split(/\r\n|\r|\n/).length;

  const theme =
    applicationTheme === "light" ? themes.nightOwlLight : themes.nightOwl;

  return (
    <Highlight code={text} language={language} theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={
            className +
            "transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar"
          }
          style={{
            maxHeight: show ? lines * 24 : 0,
            opacity: show ? 1 : 0,
          }}
        >
          {tokens.map((line, i) => {
            // eslint-disable-next-line no-unused-vars
            const { key, ...rest } = getLineProps({ line, key: i });

            return (
              <div key={`line=${i}`} style={{ position: "relative" }} {...rest}>
                {line.map((token, index) => {
                  const { key, ...props } = getTokenProps({ token, i });
                  return <span key={index} {...props}></span>;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
