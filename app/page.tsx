import { DomainCards } from "@/components/main/domain-card";
import { FloatingNavComponent } from "@/components/main/floating-navbar";
import { GlobeDemo } from "@/components/main/globe";
import { GlowingCard } from "@/components/main/glowing-card";
import { HeroHeading } from "@/components/main/hero-heading";
import { EventTimeLine } from "@/components/main/time-line";
import { EvervaultBackground } from "@/components/ui/evervault-card";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const scrollAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <main className="bg-black flex flex-col gap-4 md:gap-20 w-full h-full">
        {/* Hero Heading */}
        <div className="w-full h-screen overflow-hidden px-20" id="home">
          <EvervaultBackground />
        </div>
        {/* Hackathon Description */}
        <div className="flex flex-col gap-2 w-full h-fit items-center justify-center px-2 md:px-20">
          <h1
            className="text-white text-2xl sm:text-3xl md:text-5xl font-bold antialiased"
            id="about"
          >
            Be a part of North East's
          </h1>
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold antialiased">
            Largest Hackathon
          </h1>
          <p className="text-xs md:text-base py-4 text-center text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ex
            quo consequuntur facere laudantium doloribus! Nam rerum, veniam, eos
            ut numquam optio dolorem tempore omnis a laudantium maiores, nemo
            veritatis.
          </p>
        </div>
        <div className="-mt-5">
          <GlobeDemo />
        </div>
        {/* Tracks in Hackathon */}
        <div
          className="flex flex-col gap-2 w-full items-center pt-40 px-2 md:px-20"
          id="tracks"
        >
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold antialiased">
            Tracks
          </h1>
          <p className="text-center text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ex
            quo consequuntur facere laudantium doloribus! Nam rerum, veniam, eos
          </p>
          <DomainCards />
        </div>
        <div className="py-10 flex items-center flex-col md:flex-row gap-2 px-2 md:px-20">
          <div className="relative w-8/12 md:w-full h-80 overflow-hidden py-8 px-2">
            <div className="absolute w-full h-full">
              <Image
                src="/contri-back.jpg"
                width={400}
                height={400}
                alt="contri-bg"
                className="transform rotate-[-5deg] transition-transform duration-600 hover:rotate-[-10deg]"
              />
            </div>
            <div className="absolute w-full h-full">
              <Image
                src="/contri-front.jpg"
                width={400}
                height={200}
                alt="contri-bg"
                className="transform rotate-[5deg] transition-transform duration-600 hover:rotate-[10deg]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center w-full items-center">
            <h2 className="text-white text-xl sm:text-3xl md:text-5xl font-bold text-center md:text-left">
              Contribution and Showing off don't have to be different.
            </h2>
            <p className="text-xs w-full md:w-2/3 md:text-sm text-neutral-400 text-center md:text-left">
              Along with the competition, at IIT Guwahati, you will get to
              explore the beautiful campus, connect with people from all over
              India, and attend talks by industry leaders.
            </p>
          </div>
        </div>
        <div className="h-[40rem] w-full flex items-center justify-center overflow-hidden px-4 md:px-20">
          <MaskContainer
            revealText={
              <div className="flex flex-col gap-8 text-black px-10">
                <div className="flex flex-col gap-1">
                  <h2 className="text-4xl font-bold">The Sprits Of</h2>
                  <h2 className="text-4xl w-1/4 font-bold"> Ethoos</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-2 mx-0 md:mx-8">
                  <div className="flex-1">
                    <h3 className="font-medium text-xl">Connect</h3>
                    <p className="mx-2">
                      Opportunity to connect and interact with the smartest
                      minds across the country, and to meet industry leaders
                      across a multitude of domains and expertise.{" "}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-xl">Build</h3>
                    <p className="mx-2">
                      Write code, build websites, and create apps. This will be
                      your chance to convert your ideas to reality.{" "}
                    </p>
                  </div>
                </div>
              </div>
            }
            className="h-[40rem] border rounded-md"
          >
            <div className="flex flex-col md:flex-row gap-2 mx-8">
              <div className="flex-1">
                <h3 className="font-bold text-2xl text-blue-600">Connect</h3>
                <p className="mx-2 text-sm">
                  Opportunity to connect and interact with the smartest minds
                  across the country, and to meet industry leaders across a
                  multitude of domains and expertise.{" "}
                </p>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl text-blue-600">Build</h3>
                <p className="mx-2 text-sm">
                  Write code, build websites, and create apps. This will be your
                  chance to convert your ideas to reality.{" "}
                </p>
              </div>
            </div>
          </MaskContainer>
        </div>

        <div className="py-10 lg:py-0 flex gap-4 px-4 md:px-20 md:flex-row flex-col">
          <div className="flex items-center justify-center antialiased overflow-hidden">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>Intense 48-hour showdown</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription className="text-sm w-full">
                  With problems from Assam police, you will get a chance to
                  solve genuine issues faced in the North East.
                </GlowingStarsDescription>
              </div>
            </GlowingStarsBackgroundCard>
          </div>

          <div className="flex items-center justify-center antialiased overflow-hidden">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>Teams from all over India</GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription className="text-sm w-full">
                  Compete against talent from different parts of the nation, and
                  learn from the unique blend of diversity and unity.
                </GlowingStarsDescription>
              </div>
            </GlowingStarsBackgroundCard>
          </div>

          <div className="flex items-center justify-center antialiased overflow-hidden">
            <GlowingStarsBackgroundCard>
              <GlowingStarsTitle>
                Chance to visit IIT Guwahati
              </GlowingStarsTitle>
              <div className="flex justify-between items-end">
                <GlowingStarsDescription className="text-sm w-full">
                  Experience the beautiful campus of IIT Guwahati and all it has
                  to offer, build connections and attend talks here on the
                  campus.
                </GlowingStarsDescription>
              </div>
            </GlowingStarsBackgroundCard>
          </div>
        </div>
        <div id="timeline">
          <EventTimeLine />
        </div>

        <div className="px-20">
          <h2 className="w-full text-2xl sm:text-3xl md:text-5xl font-bold antialiased text-center">
            Sponsors and Patners
          </h2>
        </div>

        <div className="px-4 md:px-20">
          <HeroHeading />
        </div>

        <div className="px-20" id="faqs">
          <h2 className="w-full text-2xl sm:text-3xl md:text-5xl font-bold antialiased text-center">
            FAQs
          </h2>
        </div>
        <FloatingNavComponent />
      </main>
      <div className="flex flex-col md:flex-row justify-between bg-neutral-950 p-4 md:p-20">
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl text-white">ethos</h3>
          <p className="ml-0 md:ml-4 text-neutral-400 max-w-2xl text-xs">
            Ethos by us is a way for people all across India to take a crack at
            solving real-world problems. With problems from the government of
            Assam, you will get a chance to solve genuine issues faced in the
            North East.
          </p>
          <div>{/*Add Socials */}</div>
        </div>
        <div className="flex flex-row gap-2 md:flex-col text-neutral-400">
          <p>Tracks</p>
          <p>About Ethos</p>
          <p>Timeline</p>
          <p>Faqs</p>
        </div>
      </div>
    </>
  );
}
