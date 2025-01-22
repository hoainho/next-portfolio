import React from "react";
import { SKILL_TYPE, skills } from "@/lib/constants";
import clsx from "clsx";
import getColorByDay from "@/utils/getColorByDay";
import ImageLoader from "@/components/loader/ImageLoader";

const SkillWithType = ({ type = SKILL_TYPE.BACKEND }) => {
  return (
    <>
      {skills
        .filter((skill) => skill.type === type)
        .sort((a, b) => b.yoe - a.yoe)
        .map((skill) => (
          <div
            className="group relative block-container w-20 h-20"
            key={skill.name}
          >
            <div
              className={`btn-back btn-back-${getColorByDay()} rounded-xl`}
            />
            <span
              className={clsx(
                "transition-all group-hover:-bottom-[40px] group-hover:opacity-100",
                "absolute bottom-[20px] right-1/2 translate-x-1/2 opacity-0 z-10",
                "btn justify-center items-center w-[max-content] h-[max-content]",
                "inline-flex rounded-md bg-gray-50 px-2 py-1 text-xs font-medium",
                "text-gray-600 ring-1 ring-inset ring-gray-500/10 whitespace-nowrap",
                `btn-back-${getColorByDay()}`,
              )}
            >
              {skill.yoe} year
            </span>
            <div
              className={clsx(
                "transition-all	group-hover:-top-[40px] group-hover:opacity-100",
                "absolute top-0 right-1/2 translate-x-1/2 opacity-0",
                "rounded-xl btn z-10",
                "flex justify-center items-center",
                "w-[max-content] h-[max-content]",
                `btn-back-${getColorByDay()}`,
              )}
            >
              <p className="text-white font-semibold drop-shadow whitespace-nowrap">
                {skill.name}
              </p>
            </div>
            <div className="btn-front rounded-xl flex justify-center items-center">
              <ImageLoader
                src={skill.image_url}
                alt={skill.name}
                width={100}
                height={100}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      <hr className="w-full border-slate-200" />
    </>
  );
};

export default SkillWithType;
