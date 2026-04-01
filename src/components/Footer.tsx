import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <>
      {/* CTA Banner */}
      <section className="bg-primary section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Partner for Excellence</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Take the first step towards achieving your business goals by contacting us today. Schedule a consultation to discuss your objectives and explore how our services can propel your growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-orange-light transition-colors">
              Request a Consultation
            </Link>
            <Link to="/services" className="inline-flex items-center px-8 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-navy-dark text-primary-foreground/80">
        <div className="container-narrow mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <img src={logo} alt="HK Global Infotech" className="h-12 mb-4 brightness-0 invert" />
              <p className="text-sm leading-relaxed">
                HK Global Infotech, led by industry experts, has been delivering business outsourcing and back-office operations services for over a decade.
              </p>
            </div>
            <div>
              <h4 className="text-primary-foreground font-semibold mb-4">Services We Offer</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { name: "Order-to-Cash", path: "/services/order-to-cash" },
                  { name: "Bookkeeping", path: "/services/bookkeeping" },
                  { name: "AR/AP Services", path: "/services/ar-ap-services" },
                  { name: "Inventory Valuation", path: "/services/inventory-valuation" },
                  { name: "Order Management", path: "/services/order-management" },
                  { name: "Back-Office Support", path: "/services/back-office-support" },
                  { name: "Sourcing & Procurement", path: "/services/sourcing-procurement" },
                  { name: "Talent Outsourcing", path: "/services/talent-outsourcing" },
                ].map((s) => (
                  <li key={s.path}><Link to={s.path} className="hover:text-accent transition-colors">{s.name}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-primary-foreground font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
                <li><Link to="/industries" className="hover:text-accent transition-colors">Industries</Link></li>
                <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-primary-foreground font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <div>
                    <p>+91 120 4258158</p>
                    <p>+91-8595510366</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <span>info@hkglobalinfotech.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                  <span>Office No. 206, Tower B, IThum Towers, Sector 62, Noida (201012), UP, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="container-narrow mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
            <p>© {new Date().getFullYear()} HK Global Infotech. All Rights Reserved.</p>
            <div className="flex gap-6 mt-2 md:mt-0">
              <Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
              <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-use" className="hover:text-accent transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
