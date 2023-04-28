import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function InformationComp({}: Props) {
  const [infoModal, setInfoModal] = useState<boolean>(false);
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="absolute w-6 h-6 cursor-pointer right-4 md:right-8 top-4 md:top-8"
        onClick={() => setInfoModal(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
      {infoModal && (
        <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black/70">
          <div className="relative flex flex-col w-full h-full gap-4 px-8 py-6 text-lg text-gray-100 rounded-sm shadow-lg lg:w-2/4 bg-emerald-500 lg:h-2/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              onClick={() => setInfoModal(false)}
              className="absolute w-6 h-6 cursor-pointer top-3 right-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            <h2 className="text-2xl font-bold text-center uppercase border-b">
              Life Span Progress Tracker
            </h2>
            <div>
              <p className="font-bold">About:</p>
              <p className="text-base">
                Visualize your Life Span Progress with our interactive graph
                tracker. Simply input your date of birth and see how many weeks
                you've already lived and how many you have left until the age of
                <span
                  title="Average life expectancy in Bangladesh"
                  className="ml-2"
                >
                  72*
                </span>
                . Stay motivated and track your progress towards your life goals
                with ease.
              </p>
            </div>
            <div>
              <p className="font-bold">Legends:</p>
              <div className="flex flex-col gap-2 p-2 lg:px-8">
                <div className="table border border-b-0 border-gray-500/70">
                  <div className="flex py-1 border-b row border-inherit">
                    <div className="flex items-center justify-center w-1/3 border-r column border-inherit">
                      <div
                        className={`w-4 h-4 text-xs border border-white`}
                      ></div>
                    </div>
                    <div className="flex items-center justify-center w-2/3 p-2 text-base lg:p-0 column">
                      Each EMPTY box refers to a week you still have.
                    </div>
                  </div>
                  <div className="flex py-1 border-b row border-inherit">
                    <div className="flex items-center justify-center w-1/3 border-r column border-inherit">
                      <div
                        className={`w-4 h-4 text-xs border-white bg-red-400`}
                      ></div>
                    </div>
                    <div className="flex items-center justify-center w-2/3 p-2 text-base lg:p-0 column">
                      Each RED box refers to a week you passed away.
                    </div>
                  </div>
                  <div className="flex py-1 border-b row border-inherit">
                    <div className="flex items-center justify-center w-1/3 border-r column border-inherit">
                      <p>X</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center w-2/3 p-2 text-base lg:p-0 column">
                      On X axis, it's age. From 0 to 72 (Average life expectancy
                      in Bangladesh)
                    </div>
                  </div>
                  <div className="flex py-1 border-b row border-inherit">
                    <div className="flex items-center justify-center w-1/3 border-r column border-inherit">
                      <p>Y</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center w-2/3 p-2 text-base lg:p-0 column">
                      On Y axis, it's weeks. There are 52 weeks in a column. (
                      52 weeks = 1 year )
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center -mb-2 text-sm gap-x-4">
              <Link href="" className="border-b" target="_blank">Github</Link>
              <Link href="" className="border-b" target="_blank">Portfolio</Link>
              <Link href="" className="border-b" target="_blank">Blog</Link>
            </div>
            <p className="text-sm text-center">© 2023 - Shahriar Ahmed Shovon</p>
          </div>
        </div>
      )}
    </div>
  );
}
