"use client";

import { useState } from "react";

const quotes = [
  {
    quote: "I'm ready! I'm ready! I'm ready!",
    character: "SpongeBob SquarePants",
  },
  {
    quote:
      "I wumbo, you wumbo, he she me wumbo. Wumboing, wumbology, the study of wumbo. It's first grade, SpongeBob!",
    character: "Patrick Star",
  },
  { quote: "Is mayonnaise an instrument?", character: "Patrick Star" },
  {
    quote: "The inner machinations of my mind are an enigma.",
    character: "Patrick Star",
  },
  {
    quote:
      "F is for friends who do stuff together. U is for you and me. N is for anywhere and anytime at all, down here in the deep blue sea!",
    character: "SpongeBob SquarePants",
  },
  {
    quote:
      "I don't need it... I don't need it... I definitely don't need it... I NEEEEED IT!",
    character: "SpongeBob SquarePants",
  },
  {
    quote: "Ravioli, ravioli, give me the formuoli!",
    character: "Plankton",
  },
  { quote: "I'm ugly and I'm proud!", character: "SpongeBob SquarePants" },
  {
    quote: "The best time to wear a striped sweater is all the time.",
    character: "SpongeBob SquarePants",
  },
  { quote: "My leg!", character: "Fred" },
  {
    quote:
      "Gary, I'm absorbing his blows like I'm made of some sort of... spongy material!",
    character: "SpongeBob SquarePants",
  },
  { quote: "I'm a goofy goober, yeah!", character: "SpongeBob SquarePants" },
  { quote: "Imagination!", character: "SpongeBob SquarePants" },
  {
    quote: "Holographic meatloaf? My favorite!",
    character: "SpongeBob SquarePants",
  },
  { quote: "I'm not a Krusty Krab!", character: "SpongeBob SquarePants" },
];

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [buttonAnimation, setButtonAnimation] = useState("");

  const getRandomQuote = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);

    setCurrentQuoteIndex(newIndex);
    setButtonAnimation("animate-wiggle");
    setTimeout(() => setButtonAnimation(""), 500);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-ocean-blue via-ocean-blue to-sea-green">
      {/* Top: Big playful title */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-16 text-center drop-shadow-2xl tracking-tight">
        Random SpongeBob Quote
      </h1>

      {/* Middle: Quote card */}
      <div className="w-full max-w-3xl mb-16">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl animate-float border-4 border-jellyfish-purple/20">
          <p className="text-2xl md:text-4xl font-bold text-deep-navy text-center mb-8 leading-relaxed">
            &ldquo;{quotes[currentQuoteIndex].quote}&rdquo;
          </p>
          <p className="text-lg md:text-xl text-dark-brown text-center font-semibold opacity-80">
            {quotes[currentQuoteIndex].character}
          </p>
        </div>
      </div>

      {/* Bottom: Big fun button */}
      <button
        onClick={getRandomQuote}
        className={`
          bg-spongebob-yellow 
          text-deep-navy 
          font-bold 
          text-xl md:text-2xl 
          px-10 md:px-16 
          py-5 md:py-7 
          rounded-2xl 
          shadow-2xl 
          border-4 
          border-dark-brown 
          hover:bg-pineapple-orange 
          hover:scale-105 
          hover:shadow-2xl
          active:scale-95 
          transition-all 
          duration-200
          ${buttonAnimation}
        `}
      >
        Give me another quote
      </button>
    </main>
  );
}
