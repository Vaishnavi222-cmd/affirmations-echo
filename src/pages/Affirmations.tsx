import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const affirmations = [
  "I am strong, confident, and capable.",
  "Each day, I grow stronger and more resilient.",
  "I deserve happiness and success.",
  "I am worthy of love and respect.",
  "My potential is limitless.",
  "I trust in my abilities and inner wisdom.",
  "I attract positive energy and opportunities.",
  "I am grateful for all that I have.",
  "I choose to be happy and spread joy.",
  "I am becoming the best version of myself."
];

const Affirmations = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState(affirmations[0]);

  const getRandomAffirmation = () => {
    const newAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    setCurrentAffirmation(newAffirmation);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground">
              Daily Positive Affirmations
            </h1>
            <p className="text-lg text-gray-600">
              Take a moment to reflect on these powerful affirmations. Let them guide you
              towards self-love, confidence, and inner peace.
            </p>
            <div className="bg-soft-purple p-8 rounded-lg shadow-lg">
              <p className="text-2xl font-medium text-secondary mb-8">
                {currentAffirmation}
              </p>
              <button
                onClick={getRandomAffirmation}
                className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get a Random Affirmation
              </button>
            </div>
            <div className="mt-8 p-6 bg-soft-pink rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Why Daily Affirmations?</h2>
              <p className="text-gray-700">
                Daily affirmations help rewire our thoughts, boost confidence, and create
                a positive mindset. Practice them regularly to experience their transformative power.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Affirmations;