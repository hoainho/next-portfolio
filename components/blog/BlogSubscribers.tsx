import clsx from "clsx";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

type BlogSubscribersProps = {
  isDark?: boolean;
};

const BlogSubscribers = ({ isDark = false }: BlogSubscribersProps) => {
  return (
    <div
      className={clsx(
        "followit--follow-form-container w-full p-5 lg:p-10 xl:p-12 z-10",
        isDark ? "bg-transparent" : "bg-bg-default",
      )}
    >
      <div className="bg-gradient-purple-coral p-[0.5px] rounded-lg">
        <div
          className={clsx(
            "flex justify-between items-center border p-5 lg:p-8 xl:p-10 rounded-lg flex-col xl:flex-row gap-2",
            isDark ? "bg-dark" : "bg-bg-default",
          )}
        >
          <div className="flex flex-col gap-y-5 items-start justify-center">
            <h3 className="text-3xl font-bold text-fg-default">
              Subscribe to our newsletter
            </h3>
            <p className="text-fg-muted text-xl">
              Get the latest posts delivered right to your inbox
            </p>
          </div>
          <form
            action="https://api.follow.it/subscription-form/TXhFZ3QzMVF1eDdxVStZTzdsZVVKeG5WdnMxTnJQbGJDZ1pTRGZ4NUpYMHlvdW52eE4vVEVzcm1OWXRvYy9MQ3pHbmlzYnl0Skgxamg1WjBJK2JDMkZDQkV5aFFma21xYll3WkF1bVFYMXBYb1JidFAyN0wreTBhbUowRkRldnN8anhCV3ZXSmphcDhLV3pRNmNrR25sRCtGNWp1MlRxQmM3aTNXT1pPU3Y2WT0=/21"
            method="post"
            target="_blank"
            className="w-full sm:w-[450px]"
          >
            <div className="form-preview flex flex-col xl:flex-row gap-5 items-center">
              <div className="preview-input-field w-full">
                <input
                  data-v-62cf1fb8=""
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  spellCheck="false"
                  className="bg-black bg-opacity-10 text-fg-default text-lg font-semibold p-3 rounded-lg outline-none w-full"
                />
              </div>
              <div className="flex relative text-gradient-purple-light text-xl items-center justify-center gap-x-2 group group:hover:text-white">
                <div className="z-[1] absolute left-0 bg-black w-[50px] h-[50px] group-hover:w-full rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"></div>
                <div className="flex items-center justify-center ml-4 z-[2]">
                  <FaArrowRight className="text-fg-default text-xl mr-5" />
                  <button
                    type="submit"
                    className="pr-3 text-gradient-purple-coral z-[3]"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogSubscribers;
