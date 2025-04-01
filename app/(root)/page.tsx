import { Button } from "@/components/ui/button";
import InerviewCard from "@/components/InerviewCard";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get interview ready with an AI-Powered practice and feedback</h2>
          <p className="text-lg">
            Practice on real interview question & Get realtime feedback
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InerviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>You haven&apos;t taken any interview yet</p> */}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interviews</h2>
        <div className="interviews-section">
        {dummyInterviews.map((interview) => (
            <InerviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>There are no interviews available</p> */}
        </div>
      </section>
    </>
  );
};

export default page;
