import React from "react";

export const ServicesTicker: React.FC = () => {
  const tickerItems = [
    "Website Development",
    "AI & Machine Learning",
    "Video Editing",
    "Content Writing",
    "Data Analytics",
    "Mobile Apps",
    "Graphic Design",
    "Enterprise Integrations",
    "Technical Consulting",
  ];

  // Duplicate items array to ensure a seamless infinite scroll loop
  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="font-gerbil font-extralight  bg-[#0A4F3A] py-4 sm:py-5 border-y border-[#0D7A58]/50 overflow-hidden relative select-none">
      {/* Edge gradient fade masks for smooth transition */}
      <div className="font-gerbil font-extralight absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0A4F3A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0A4F3A] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center mx-4 sm:mx-6 group cursor-default"
          >
            <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-white/80 group-hover:text-[#7FFFD4] transition-colors duration-200">
              {item}
            </span>
            <span className="text-xs text-[#15D69C] font-black ml-8 sm:ml-12 opacity-70">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesTicker;
