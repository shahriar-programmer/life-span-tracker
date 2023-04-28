import InformationComp from "@/components/InformationComp";
import InputModal from "@/components/InputModal";
import ProgressDiv from "@/components/ProgressDiv";
import SingleWeek from "@/components/SingleWeek";
import WeekBox from "@/components/WeekBox";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [totalWeeks, setTotalWeeks] = useState<number>(0);
  const [inputModal, setInputModal] = useState<boolean>(true);
  const [dob, setDOB] = useState<string>("");

  useEffect(() => {
    const dateOfBirth: number = new Date(dob).valueOf();
    const todayDate: number = new Date().valueOf();
    setTotalWeeks(Math.round((todayDate - dateOfBirth) / 604800000));
  }, [dob]);

  return (
    <main className="w-full h-screen p-4 bg-gray-900 text-white/70">
      <Head>
        <title>Life Span Progress Tracker</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Visualize your Life Span Progress with our interactive graph tracker. Simply input your date of birth and see how many weeks you've already lived and how many you have left until the age of 72. Stay motivated and track your progress towards your life goals with ease."
        />
        <meta
          name="keywords"
          content="Life span, progress, tracker, shahriar ahmed shovon"
        />
        <meta name="author" content="Shahriar Ahmed Shovon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {inputModal && (
        <InputModal setDOB={setDOB} setInputModal={setInputModal} />
      )}
      <ProgressDiv totalWeeks={totalWeeks} />
      <InformationComp />
    </main>
  );
}

// ${
//   week <= totalWeeks && "bg-red-400/60 border-0"
// }
