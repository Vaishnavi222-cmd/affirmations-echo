import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-semibold" : "text-foreground hover:text-primary";
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Affirmations Harmony
          </Link>
          <div className="space-x-8">
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
            <Link to="/affirmations" className={isActive("/affirmations")}>
              Affirmations
            </Link>
            <Link to="/gratitude" className={isActive("/gratitude")}>
              Gratitude
            </Link>
            <Link to="/our-message" className={isActive("/our-message")}>
              Our Message
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;