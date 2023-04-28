import React, { useState } from "react";

type propsTypes = {
  setDOB: React.Dispatch<React.SetStateAction<string>>;
  setInputModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type inputDataTypes = {
  year: string;
  month: string;
  date: string;
};

type validationMsgTypes = string[];

export default function InputModal({ setDOB, setInputModal }: propsTypes) {
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
    <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black/70">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex flex-col items-center justify-center w-1/3 gap-4 p-8 text-lg text-white bg-blue-600 h-1/3"
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
  );
}
