"use client";

import React from "react";
import { experiences } from "@/lib/constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Link from "next/link";
import "react-vertical-timeline-component/style.min.css";
import ImageLoader from "../loader/ImageLoader";

const Experience = () => {
  return (
    <div className="py-16">
      <h3 className="subhead-text">Work Experience</h3>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="text-black">
          I have gained experience working with several firms, enhancing my
          abilities and collaborating with talented individuals. Here's the
          rundown:
        </p>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              visible={true}
              key={experience?.company_name}
              date={experience?.date}
              iconStyle={{ background: experience?.icon_bg }}
              icon={
                <Link
                  href={experience?.company_link}
                  className="flex justify-center items-center w-full h-full cursor-pointer"
                  target={experience?.company_link === "#" ? "_self" : "_blank"}
                >
                  <ImageLoader
                    src={experience?.icon}
                    alt={experience?.company_name}
                    width={20}
                    height={20}
                    className="w-[80%] h-[80%] object-contain"
                  />
                </Link>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience?.icon_bg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience?.title}
                </h3>
                <Link
                  href={experience?.company_link}
                  className={`cursor-pointer hover:underline hover:underline-offset-2`}
                  target={experience?.company_link === "#" ? "_self" : "_blank"}
                >
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience?.company_name}
                  </p>
                </Link>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience?.points?.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-black-500/50 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
