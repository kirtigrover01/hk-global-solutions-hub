import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { name: "Order-to-Cash", path: "/services/order-to-cash" },
  { name: "Bookkeeping", path: "/services/bookkeeping" },
  { name: "AR/AP Services", path: "/services/ar-ap-services" },
  { name: "Inventory Valuation", path: "/services/inventory-valuation" },
  { name: "Order Management", path: "/services/order-management" },
  { name: "Back-Office Support", path: "/services/back-office-support" },
  { name: "Sourcing and Procurement", path: "/services/sourcing-procurement" },
  { name: "Talent Outsourcing", path: "/services/talent-outsourcing" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container-narrow mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="HK Global Infotech" className="h-12" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors hover:text-accent ${isActive("/") ? "text-accent" : "text-foreground"}`}>
            Home
          </Link>
          <Link to="/about" className={`text-sm font-medium transition-colors hover:text-accent ${isActive("/about") ? "text-accent" : "text-foreground"}`}>
            About
          </Link>
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent ${location.pathname.startsWith("/services") ? "text-accent" : "text-foreground"}`}>
              Services <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background border border-border rounded-lg shadow-xl p-2 min-w-[240px]">
                <Link to="/services" className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-secondary rounded-md transition-colors">
                  All Services
                </Link>
                <div className="h-px bg-border my-1" />
                {services.map((s) => (
                  <Link key={s.path} to={s.path} className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-accent rounded-md transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/industries" className={`text-sm font-medium transition-colors hover:text-accent ${isActive("/industries") ? "text-accent" : "text-foreground"}`}>
            Industries
          </Link>
          <Link to="/contact" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold bg-accent text-accent-foreground rounded-lg hover:bg-orange-light transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-narrow mx-auto px-4 py-4 space-y-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-foreground hover:text-accent">Home</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-foreground hover:text-accent">About</Link>
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full py-3 text-sm font-medium text-foreground hover:text-accent">
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                <Link to="/services" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-semibold text-primary">All Services</Link>
                {services.map((s) => (
                  <Link key={s.path} to={s.path} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-accent">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/industries" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-medium text-foreground hover:text-accent">Industries</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-semibold text-accent">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
