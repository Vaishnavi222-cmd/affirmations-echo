import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl font-bold text-foreground">
              Begin Your Journey to Self-Discovery
            </h1>
            <p className="text-2xl text-secondary font-medium">
              Empowering your mind, one thought at a time.
            </p>
            <p className="text-lg text-gray-600">
              Affirmations Harmony is your safe space for personal growth,
              positivity, and mindfulness. Explore daily affirmations and gratitude
              practices to elevate your mindset.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;