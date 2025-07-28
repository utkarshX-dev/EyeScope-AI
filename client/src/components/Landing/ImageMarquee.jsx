import React from "react";

function ImageMarquee() {
  // Duplicate images for seamless infinite loop
  const images = [1, 3, 4, 1, 3, 4];

  return (
    <div className="relative w-full py-8 overflow-hidden">
      <div
        className="marquee flex gap-10 items-center animate-marquee"
        style={{
          animation: "marquee 22s linear infinite",
        }}
      >
        {images.concat(images).map((num, idx) => (
          <div key={idx} className="flex-shrink-0">
            <img
              src={`/images/${num}.webp`}
              alt={`Image ${num}`}
              className="max-h-[32rem] max-w-full rounded-3xl shadow-lg border border-border transition-transform duration-300 hover:scale-110"
              style={{
                height: "auto",
                width: "auto",
                display: "block",
                boxShadow: "0 4px 24px 0 rgba(34,139,230,0.10)",
              }}
            />
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee {
            width: 200%;
          }
          .marquee img:hover {
            z-index: 10;
          }
        `}
      </style>
    </div>
  );
}

export default ImageMarquee;