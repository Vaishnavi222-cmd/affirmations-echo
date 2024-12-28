import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gratitude = () => {
  const [gratitudeItems, setGratitudeItems] = useState(["", "", ""]);

  const handleInputChange = (index: number, value: string) => {
    const newItems = [...gratitudeItems];
    newItems[index] = value;
    setGratitudeItems(newItems);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto space-y-12 animate-fade-in">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Daily Gratitude Journal
              </h1>
              <p className="text-2xl text-secondary">
                Start Your Day with Gratitude
              </p>
            </div>

            <div className="bg-soft-pink p-8 rounded-lg shadow-lg text-center mb-8">
              <p className="text-xl italic text-gray-700 mb-4">
                "Gratitude turns what we have into enough."
              </p>
              <p className="text-gray-600">
                Taking time to appreciate life's blessings, both big and small,
                can transform your perspective and bring more joy to each day.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">
                What are you grateful for today?
              </h2>
              <div className="space-y-4">
                {gratitudeItems.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <label className="text-sm text-gray-600">Gratitude {index + 1}</label>
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      placeholder="I am grateful for..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-soft-purple p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Examples of gratitude:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Family and friends who support and love me</li>
                <li>Good health and the ability to enjoy life</li>
                <li>A new day full of possibilities and opportunities</li>
                <li>The beauty of nature and the world around us</li>
                <li>Personal growth and learning experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gratitude;