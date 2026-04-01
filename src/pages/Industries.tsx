import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import retailImg from "@/assets/industries-retail.jpg";

const industries = [
  { title: "Accounting and Bookkeeping", desc: "Outsourcing accounting and bookkeeping allows retail businesses to focus on growth. We ensure accurate financial tracking, improved cash flow, and compliance." },
  { title: "Catalog Management", desc: "Efficient catalog management drives better customer experiences. We handle SKU creation, product descriptions, and updates for accurate catalogs." },
  { title: "Customer Support Handling", desc: "Peak seasons and fluctuating customer demands require adaptable and skilled customer support. Our Back-Office support services handle customer queries and complaints." },
  { title: "Sourcing and Procurement", desc: "Effective sourcing and procurement are critical to maintaining supply chain efficiency. We streamline vendor selection, contract negotiation, and procurement processes." },
  { title: "Data Security & Compliance", desc: "Managing sensitive data and adhering to regulations are critical challenges. We include data reporting, compliance management, and secure data handling." },
  { title: "Payroll & HR Support", desc: "Outsourcing payroll and HR functions streamlines employee management, ensures compliance with labor laws, and eliminates errors." },
];

const Industries = () => {
  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container-narrow mx-auto text-center">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">Industries</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">Succeed in Retail World With HK Global as Your Partner</h1>
          <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            Retail success starts with efficient back-office operations. Our customized services are designed to streamline your operations, reduce costs, and optimize efficiency.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={retailImg} alt="Retail operations" className="w-full object-cover" loading="lazy" width={1280} height={854} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Tailored Solutions for Every Need of Your Retail Business</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We understand the unique challenges retailers face. We handle the complexities of inventory management, order processing, and financial reporting, giving you the freedom to focus on growing your business and building customer loyalty.
              </p>
              <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-orange-light transition-colors">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.title} className="bg-card border border-border rounded-xl p-8">
                <h3 className="text-lg font-bold text-foreground mb-3">{ind.title}</h3>
                <p className="text-muted-foreground text-sm">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
