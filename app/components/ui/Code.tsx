"use client";

import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { themes } from "prism-react-renderer";

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
  const { theme: applicationTheme } = useTheme();
  const [text, setText] = useState(animated ? "" : code);

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
          i++;

          if (i > code.length) {
            clearInterval(intervalId);
          }

          return () => clearInterval(intervalId);
        }, 15);
      }, animationDelay || 150);
    }
  }, [code, show, animated, animationDelay]);

  // number of lines

  const lines = text.split(/\r\n|\r|\n/);

  const theme =
    applicationTheme === "light" ? themes.nightOwlLight : themes.nightOwl;

  return <div>Code</div>;
};

export default Code;
