"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { Button } from "../ui/moving-border";
import Link from "next/link";

const loadingStates = [
  {
    text: "Register YourSelf",
  },
  {
    text: "Quality First Round",
  },
  {
    text: "Prepare for 2nd Round",
  },
  {
    text: "Visit IIT Guwahati",
  },
  {
    text: "Competite in Hackathon",
  },
];

export function RegistrationStep() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      <div className="flex gap-2">
        <Button
          onClick={() => setLoading(true)}
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <p className="font-bold">Know More</p>
        </Button>
        <Button className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
          <Link href={"/problems"}>Problem Statement</Link>
        </Button>
      </div>

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
