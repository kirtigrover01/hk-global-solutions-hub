import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, ClipboardList, BookOpen, CreditCard, BarChart3, Package, Headphones, ShoppingCart, Users } from "lucide-react";

const services = [
  { name: "Order-to-Cash", desc: "Our Order-to-Cash services streamline the entire financial process, from order processing to cash application and collections.", path: "/services/order-to-cash", icon: ClipboardList },
  { name: "Bookkeeping", desc: "Our Bookkeeping services ensure precise record-keeping, covering detailed transactions, reconciliations and up-to-date reporting.", path: "/services/bookkeeping", icon: BookOpen },
  { name: "AR/AP Services", desc: "Our AR/AP services enhance cash flow by efficiently managing customer invoicing and supplier/vendor payments.", path: "/services/ar-ap-services", icon: CreditCard },
  { name: "Inventory Valuation", desc: "We ensure accurate assessment of stock value using methods like FIFO, LIFO, or weighted average.", path: "/services/inventory-valuation", icon: BarChart3 },
  { name: "Order Management", desc: "Our Order Management services optimize order processing, from receipt to fulfillment, invoicing and delivery.", path: "/services/order-management", icon: Package },
  { name: "Back-Office Support", desc: "Our back-office support streamlines data entry and catalog management, supporting businesses in organizing information.", path: "/services/back-office-support", icon: Headphones },
  { name: "Sourcing and Procurement", desc: "Our Sourcing and Procurement services optimize vendor selection, purchasing and supplier management to drive cost efficiency.", path: "/services/sourcing-procurement", icon: ShoppingCart },
  { name: "Talent Outsourcing", desc: "Our Talent Outsourcing service provides skilled professionals across multiple domains, ensuring high-quality workforce.", path: "/services/talent-outsourcing", icon: Users },
];

const Services = () => {
  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container-narrow mx-auto text-center">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">Comprehensive Back-Office Services</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Explore our full range of outsourcing services designed to optimize your operations.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.path} to={s.path} className="group bg-card border border-border rounded-xl p-8 hover:border-accent/40 hover:shadow-lg transition-all flex flex-col">
                <s.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{s.name}</h3>
                <p className="text-muted-foreground text-sm flex-1">{s.desc}</p>
                <span className="inline-flex items-center mt-4 text-accent font-semibold text-sm">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
