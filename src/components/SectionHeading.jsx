import React from "react";

const SectionHeading = ({ level = "h2", className = "", children }) => {
  const Tag = level;

  const levelStyles = {
    h2: "text-4xl font-extrabold",
    h3: "text-2xl font-bold",
  };

  const lineOffsets = {
    h2: "top-[4px] h-[2px]",
    h3: "top-[1px] h-[1.5px]",
  };

  const textClasses = levelStyles[level] || "text-2xl font-bold";
  const lineOffset = lineOffsets[level] || "top-[3px]";

  return (
    <div className="flex items-center gap-4 w-full mb-6">
      <Tag
        className={`about-heading ${textClasses} leading-none whitespace-nowrap tracking-tight text-typo dark:text-white-heat ${className}`}
      >
        {children}
      </Tag>
      <div
        className={`about-line relative ${lineOffset} flex-grow bg-typo dark:bg-white-heat`}
      />
    </div>
  );
};

export default SectionHeading;
