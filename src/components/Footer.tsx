import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-soft-purple mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-primary">
              Homepage
            </Link>
            <Link to="/affirmations" className="hover:text-primary">
              Affirmations
            </Link>
            <Link to="/gratitude" className="hover:text-primary">
              Daily Gratitude
            </Link>
            <Link to="/our-message" className="hover:text-primary">
              Our Message
            </Link>
          </div>
          <p className="text-sm text-gray-600">Stay positive. Stay inspired.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;