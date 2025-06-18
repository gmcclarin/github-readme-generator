import { useState } from "react";
import generateMarkdown from "../utils/generateMarkdown";
import { type ReadMeFormValues } from "../schemas/readMeSchema";

export function useMarkdownGenerator() {
    const [markdown, setMarkdown] = useState<string>("");

    const generate = (data: ReadMeFormValues) => {
        const md = generateMarkdown(data);
        setMarkdown(md);
    }

    const download = (filename = "README.md") => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = async () => {
    if (!markdown) return;
    await navigator.clipboard.writeText(markdown);
    alert("Markdown copied to clipboard! 🚀");
  };

  return {
    markdown,
    generate,
    download,
    copyToClipboard,
  };
}