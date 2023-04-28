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
