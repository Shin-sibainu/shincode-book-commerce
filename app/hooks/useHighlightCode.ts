"use client";

import { useEffect } from "react";
import hljs from "highlight.js";

const useHighlightCode = () => {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block: any) => {
      hljs.highlightBlock(block);
    });
  }, []);
};

export default useHighlightCode;
