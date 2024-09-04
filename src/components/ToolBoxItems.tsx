import React from "react";
import TechIcon from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";

const ToolBoxItems = ({
  toolboxItems,
  className,
}: {
  toolboxItems: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex  [mask-image:liner-gradient(to_right, transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div className="flex flex-none py-0.5">
        {toolboxItems.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolBoxItems;
