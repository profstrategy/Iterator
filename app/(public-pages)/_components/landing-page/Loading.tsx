"use client";
import { whiteSpaces } from "@/utilities/globalspace";
import React from "react";

interface SkeletonProps {
  theme: "light" | "dark";
}

const ActivePackagesSkeleton = ({ theme = "light" }: SkeletonProps) => {
  const themeStyles = {
    light: {
      background: "bg-gray-100",
      border: "border-gray-200",
      shimmer: "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200",
    },
    dark: {
      background: "bg-[#2A2A2A]",
      border: "border-[#333333]",
      shimmer: "bg-gradient-to-r from-[#333333] via-[#444444] to-[#333333]",
    },
  };

  const styles = themeStyles[theme];

  return (
    <section className={`xmd:max-w-[375px] mobile:max-w-[700px] sm:max-w-[900px] lg:max-w-[2000px] md:max-w-[1500px] m-auto py-4 md:py-16 w-full ${whiteSpaces.paddingX}`}>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            className={`${styles.background} p-6 rounded-lg border ${styles.border} transition-all duration-500 h-full animate-pulse`} key={index}
          >
            <div>
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gray-300 rounded-md relative overflow-hidden">
                <div className={`w-full h-full ${styles.shimmer} animate-shimmer`} />
              </div>

              {/* Badge Placeholder */}
              <div className="flex items-center gap-2 mt-4 mb-2">
                <div className="w-6 h-6 rounded-full bg-gray-300" />
                <div className="w-24 h-4 bg-gray-300 rounded-md" />
                <div className="w-16 h-4 bg-gray-300 rounded-md" />
              </div>

              {/* Title Placeholder */}
              <div className="w-1/2 h-5 bg-gray-300 rounded-md mb-2" />
              <div className="w-1/3 h-6 bg-gray-300 rounded-md mb-4" />

              {/* Description Placeholder */}
              <div className="w-full h-4 bg-gray-300 rounded-md mb-2" />
              <div className="w-3/4 h-4 bg-gray-300 rounded-md mb-6" />

              {/* Features Placeholder */}
              <ul className="space-y-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded-full" />
                    <div className="w-3/4 h-4 bg-gray-300 rounded-md" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Button Placeholder */}
            <div className="w-full mt-6 py-2 bg-gray-300 rounded-md" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActivePackagesSkeleton;
