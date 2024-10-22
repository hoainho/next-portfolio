"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center p-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M6.293 9.293a1 1 0 011.414 0L10 11.586V4a1 1 0 112 0v7.586l2.293-2.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
      Back
    </button>
  );
};

export default BackButton;