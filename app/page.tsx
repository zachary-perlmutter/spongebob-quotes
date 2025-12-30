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
  {
    quote:
      "Oh, why must every eleven minutes of my life be filled with misery?",
    character: "Squidward Tentacles",
  },
  {
    quote:
      "I order the food, you cook the food. The customer gets the food. We do that for 40 years, and then we die.",
    character: "Squidward Tentacles",
  },
  {
    quote: "Too bad SpongeBob isn't here to enjoy SpongeBob not being here.",
    character: "Squidward Tentacles",
  },
  {
    quote: "I wonder if a fall from this height would be enough to kill me.",
    character: "Squidward Tentacles",
  },
  { quote: "Money!", character: "Mr. Krabs" },
  {
    quote:
      "Do you smell it? That smell. A kind of smelly smell. The smelly smell that smells... smelly.",
    character: "Mr. Krabs",
  },
  {
    quote: "Hello, customers! How may I serve you today?",
    character: "Mr. Krabs",
  },
  {
    quote:
      "Hear me, Krabs! When I discover your formula for Krabby Patties, I'll run you out of business!",
    character: "Plankton",
  },
  {
    quote: "It's evil. It's diabolical. It's lemon-scented!",
    character: "Plankton",
  },
  {
    quote:
      "His chops are too righteous! The helmets can't handle this level of rock 'n' roll!",
    character: "Plankton",
  },
  { quote: "Finland!", character: "Patrick Star" },
  {
    quote: "Who you calling Pinhead? I wanna be Dirty Dan!",
    character: "Patrick Star",
  },
  { quote: "East? I thought you said weast!", character: "Patrick Star" },
  { quote: "I can't see my forehead!", character: "Patrick Star" },
  {
    quote: "Don't you dare take the name of Texas in vain!",
    character: "Sandy Cheeks",
  },
  { quote: "Yee-haw! Sound the alarm, y'all!", character: "Sandy Cheeks" },
  {
    quote:
      "Home is where you're surrounded by other critters that care about ya.",
    character: "Sandy Cheeks",
  },
  { quote: "Oh, SpongeBob... whyyyyy?!", character: "Mrs. Puff" },
  {
    quote: "What I learned in boating school is... blankety, blankety, blank!",
    character: "Mrs. Puff",
  },
  { quote: "No more SpongeBob!", character: "Mrs. Puff" },
  { quote: "Meow.", character: "Gary the Snail" },
  {
    quote:
      "There once was a man from Peru who dreamed he was eating his shoe...",
    character: "Gary the Snail",
  },
  {
    quote:
      "Once there was an ugly barnacle. He was so ugly that everyone died. The end.",
    character: "Patrick Star",
  },
  {
    quote: "We should take Bikini Bottom and push it somewhere else!",
    character: "Patrick Star",
  },
  { quote: "Firmly grasp it!", character: "Patrick Star" },
  { quote: "I hate all of you.", character: "Squidward Tentacles" },
  {
    quote:
      "Boy, that critter put up some sort of fight, but as you can see, I'm from Texas!",
    character: "Sandy Cheeks",
  },
  { quote: "Felicitations, malefactors!", character: "Plankton" },
  {
    quote: "The boy cries you a sweater of tears... and you kill him.",
    character: "Squidward Tentacles",
  },
  {
    quote: "Hello, delivery for Mr. Squidward Tentacles?",
    character: "Delivery Fish",
  },
  {
    quote:
      "All bubble-blowing babies will be beaten senseless by every able-bodied patron in the bar!",
    character: "Thugs",
  },
  {
    quote: "It's not just a boulder... it's a rock!",
    character: "SpongeBob SquarePants",
  },
  { quote: "Chocolate! CHOCOLATE!", character: "Patrick Star" },
  {
    quote:
      "If I were to die right now in a fiery explosion due to the carelessness of a friend... well, that would just be okay.",
    character: "SpongeBob SquarePants",
  },
  {
    quote:
      "Knowledge can't replace friendship. I'd rather be an idiot than lose you.",
    character: "Patrick Star",
  },
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
