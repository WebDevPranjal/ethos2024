import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/time-line";

export function EventTimeLine() {
  const data = [
    {
      title: "Registrations",
      content: (
        <div>
          <h2 className="text-xl py-2">2th Sep to 25th Sep 2024</h2>
          <p className="w-full lg:w-3/4 text-neutral-400 text-xs md:text-sm font-normal mb-8">
            Participants can register for the hackathon on Devfolio, and can
            start working on the problem statements. During this time, they can
            also form teams and choose the idea they wish to work on.
          </p>
          <div className="h-[20vh]"></div>
        </div>
      ),
    },
    {
      title: "Round 1 Deadline",
      content: (
        <div>
          <h2 className="text-xl py-2">1st October</h2>
          <p className="text-neutral-400 text-xs md:text-sm font-normal mb-8">
            Participants are expected to submit their first round submissions on
            Devfolio, in the form of PPTs. The submissions will be evaluated by
            the judges and the top teams will be selected for the final round.
          </p>
          <div className="h-[20vh]"></div>
        </div>
      ),
    },
    {
      title: "Round 1 Results",
      content: (
        <div>
          <h2 className="text-xl py-2">5th October</h2>
          <p className="text-neutral-400 text-xs md:text-sm font-normal mb-4">
            We will release the list of the shortlisted teams for the final
            round. These participants will be eligible to make the final code
            submissions.
          </p>
          <div className="h-[20vh]"></div>
        </div>
      ),
    },
    {
      title: "Final Round",
      content: (
        <div>
          <h2 className="text-xl py-2">25th to 27th Oct 2024</h2>
          <p className="text-neutral-400 text-xs md:text-sm font-normal mb-4">
            The final round will be conducted on the 10th of October. The
            participants will have to submit their final code submissions on
            Devfolio. The submissions will be evaluated by the judges and the
            winners will be announced.
          </p>
          <div className="h-[20vh]"></div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
