import React from "react";

const calculateYearsOfExperience = (startYear: number, startMonth: number): number => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-indexed
  
  // Calculate total months of experience
  const totalMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth);
  
  // Convert to years with one decimal place precision
  const years = Math.floor(totalMonths / 12 * 10) / 10;
  
  return years;
};

const Introduce = () => {
  // Started working in June 2019
  const yearsOfExperience = calculateYearsOfExperience(2019, 6);
  
  return (
    <>
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Hoai Nho
        </span>{" "}
        👋
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="text-black">
          I'm a software engineer from Vietnam. With {yearsOfExperience} years of experience
          in the field. Throughout my career, I have demonstrated proficiency in
          utilizing technologies such as React and Vue for frontend development,
          while also adeptly handling backend tasks with Node.js. My deep
          understanding of JavaScript fundamentals, coupled with a comprehensive
          knowledge of its ecosystem, equips me to tackle complex challenges and
          deliver top-notch solutions.
        </p>
      </div>
    </>
  );
};

export default Introduce;
