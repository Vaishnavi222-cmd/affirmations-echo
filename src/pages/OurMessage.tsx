import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OurMessage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-foreground">
              Our Message to You
            </h1>
            <p className="text-xl text-secondary">
              Every moment is an opportunity for growth and self-discovery.
            </p>
            <div className="bg-soft-purple p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                At Affirmations Harmony, we believe in the power of positive thinking
                and self-affirmation. Our mission is to help you cultivate a mindset
                of growth, gratitude, and inner peace.
              </p>
              <p className="text-lg text-gray-700">
                Through daily affirmations and gratitude practices, we invite you to
                join us on this transformative journey towards self-discovery and
                personal growth.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OurMessage;