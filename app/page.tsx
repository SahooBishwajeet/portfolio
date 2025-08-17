"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/BGBeamsCollision";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Cover } from "@/components/ui/Cover";
import { MultiStepLoader as Loader } from "@/components/ui/Loader";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TbSquareRoundedX } from "react-icons/tb";

const choices = [
  {
    title: "I'm Not Tech Savvy",
    desc: "View the portfolio in the original classic style.",
    href: "/classic",
    loadingStates: [
      { text: "Warming up the classics..." },
      { text: "Polishing the interface..." },
      { text: "Fetching timeless assets..." },
      { text: "Almost ready to explore..." },
      { text: "Here's your classic experience!" },
    ],
  },
  {
    title: "I'm A Nerd",
    desc: "Explore the terminal-themed portfolio experience.",
    href: "/terminal",
    loadingStates: [
      { text: "Booting terminal..." },
      { text: "Initializing command-line magic..." },
      { text: "Compiling epic experiences..." },
      { text: "Decrypting secrets..." },
      { text: "All systems go, hacker!" },
    ],
  },
];

export default function Home() {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleCardClick = (i: number, href: string) => {
    setLoadingIndex(i);
    // Redirect after loader duration
    setTimeout(() => {
      router.push(href);
    }, choices[i].loadingStates.length * 2000);
  };

  return (
    <BackgroundBeamsWithCollision className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <h1 className="mb-16 text-3xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-700 via-pink-500 to-red-500 tracking-tight relative z-20 drop-shadow-lg">
        Choose Your Experience
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-6xl relative z-20">
        {choices.map((c, i) => (
          <div key={c.title} className="relative">
            <CardSpotlight
              onClick={() => handleCardClick(i, c.href)}
              className="cursor-pointer flex flex-col items-center text-center p-10 rounded-2xl shadow-2xl relative"
            >
              <p className="relative text-white/80 text-base md:text-lg mb-6">
                {c.desc}
              </p>

              <h2 className="relative text-3xl md:text-4xl font-bold">
                <Cover>{c.title}</Cover>
              </h2>
            </CardSpotlight>

            {loadingIndex === i && (
              <>
                <Loader
                  loading={true}
                  loadingStates={c.loadingStates}
                  duration={2000}
                />
                <button
                  className="fixed top-4 right-4 text-black dark:text-white z-[120]"
                  onClick={() => setLoadingIndex(null)}
                >
                  <TbSquareRoundedX className="h-10 w-10" />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </BackgroundBeamsWithCollision>
  );
}
