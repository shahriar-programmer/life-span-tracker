import React, { useState } from "react";

type propsTypes = {
  setDOB: React.Dispatch<React.SetStateAction<string>>;
  setInputModal: React.Dispatch<React.SetStateAction<boolean>>;
  inputModal: boolean;
};

type inputDataTypes = {
  year: string;
  month: string;
  date: string;
};

type validationMsgTypes = string[];

export default function InputModal({
  setDOB,
  setInputModal,
  inputModal,
}: propsTypes) {
  const [inputData, setInputData] = useState<inputDataTypes>({
    year: "",
    month: "",
    date: "",
  });
  const [validationMsg, setValidationMsg] = useState<validationMsgTypes>([]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    setValidationMsg([]);
    e.preventDefault();
    const error = checkInput();
    if (error.length == 0) {
      setDOB(`${inputData.year}-${inputData.month}-${inputData.date}`);
      setInputData({
        year: "",
        month: "",
        date: "",
      });
      setInputModal(false);
    } else {
      console.log("Error");
    }
  };

  const checkInput = () => {
    const error = [];
    if (inputData.year.length != 4) {
      error.push("Year must be at least 4 characters.");
      setValidationMsg((prevMsg) => [
        ...prevMsg,
        "Year must be at least 4 characters.",
      ]);
    }

    if (inputData.month.length < 1 || inputData.month.length > 12) {
      error.push("Month must be between 1-12.");
      setValidationMsg((prevMsg) => [
        ...prevMsg,
        "Month must be between 1-12.",
      ]);
    }

    if (inputData.date.length < 1 || inputData.date.length > 31) {
      error.push("Date must be between 1-31.");
      setValidationMsg((prevMsg) => [...prevMsg, "Date must be between 1-31."]);
    }
    return error;
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        fill="white"
        viewBox="0 0 30 30"
        onClick={() => {
          setDOB("");
          setInputModal(true);
        }}
        className="absolute w-6 h-6 cursor-pointer right-14 md:right-8 top-4 md:top-16"
      >
        <path d="M 15 3 A 1.0001 1.0001 0 1 0 15 5 C 20.534534 5 25 9.4654664 25 15 C 25 20.534534 20.534534 25 15 25 C 9.4654664 25 5 20.534534 5 15 C 5 12.650241 5.8085376 10.496834 7.1601562 8.7929688 L 9 11 L 11 4 L 4 5 L 5.8671875 7.2402344 C 4.086665 9.3350655 3 12.041787 3 15 C 3 21.615466 8.3845336 27 15 27 C 21.615466 27 27 21.615466 27 15 C 27 8.3845336 21.615466 3 15 3 z"></path>
      </svg>
      {inputModal && (
        <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black/70">
          <form
            onSubmit={(e) => submitHandler(e)}
            className="flex flex-col items-center justify-center w-full gap-4 p-8 text-lg text-white bg-blue-600 md:w-2/3 lg:w-1/3 h-1/3"
          >
            <p className="text-xl">Please input your date of birth:</p>
            <div className="flex items-center justify-center w-full gap-2 text-base">
              <input
                type="number"
                name="year"
                id="year"
                required
                placeholder="YYYY"
                value={inputData.year}
                onChange={(e) =>
                  setInputData((prevInput) => ({
                    ...prevInput,
                    year: e.target.value,
                  }))
                }
                className="w-20 p-1 text-center text-gray-900 border outline-none bg-white/90 border-white/50"
              />
              <p>-</p>
              <input
                type="number"
                name="month"
                id="month"
                required
                placeholder="MM"
                min={1}
                max={12}
                value={inputData.month}
                onChange={(e) =>
                  setInputData((prevInput) => ({
                    ...prevInput,
                    month: e.target.value,
                  }))
                }
                className="w-20 p-1 text-center text-gray-900 border outline-none bg-white/90 border-white/50"
              />
              <p>-</p>
              <input
                type="number"
                name="date"
                id="date"
                required
                placeholder="DD"
                min={1}
                max={31}
                value={inputData.date}
                onChange={(e) =>
                  setInputData((prevInput) => ({
                    ...prevInput,
                    date: e.target.value,
                  }))
                }
                className="w-20 p-1 text-center text-gray-900 border outline-none bg-white/90 border-white/50"
              />
            </div>
            <div className="text-sm text-red-300">
              {validationMsg.map((msg) => (
                <p key={msg}>{msg}</p>
              ))}
            </div>
            <button
              type="submit"
              className="p-1 px-8 mt-8 text-gray-900 transition rounded-sm bg-white/80 hover:bg-white/90"
            >
              Track
            </button>
          </form>
        </div>
      )}
    </>
  );
}
