import StarIcon from "@/assets/icons/star.svg";
const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Responsive",
  "Scalable",
  "API integration",
  "Adaptability",
  "Version control",
  "User Friendly",
  "Maintainable",
  "Search Optimize",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 overflow-x-clip lg:py-24">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex [mask-image:liner-gradient(to_right,transparent,black_10%,black_70%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word, index) => (
              <div key={index} className="inline-flex items-center gap-4">
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
