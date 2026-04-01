import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, DollarSign, TrendingUp, Users, CheckCircle, ClipboardList, Headphones } from "lucide-react";
import heroBg from "@/assets/hero-business.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

const services = [
  { name: "Order-to-Cash", desc: "Streamline the entire financial process, from order processing to cash application and collections.", path: "/services/order-to-cash", icon: ClipboardList },
  { name: "Bookkeeping", desc: "Precise record-keeping, covering detailed transactions, reconciliations and up-to-date reporting.", path: "/services/bookkeeping", icon: DollarSign },
  { name: "AR/AP Services", desc: "Enhance cash flow by efficiently managing customer invoicing and supplier/vendor payments.", path: "/services/ar-ap-services", icon: TrendingUp },
  { name: "Back-Office Support", desc: "Streamline data entry and catalog management, supporting businesses in organizing information.", path: "/services/back-office-support", icon: Headphones },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
        </div>
        <div className="relative container-narrow mx-auto px-4 py-24 md:py-36">
          <div className="max-w-2xl">
            <p className="text-accent font-semibold mb-4 text-sm tracking-wider uppercase">Partner for Operation and Back Office Support</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Driving Business Growth with Back-Office Outsourcing
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 leading-relaxed">
              Welcome to HK Global Infotech, where we provide tailored outsourced services, leveraging the expertise of our skilled team and a global operating model to optimize operations for businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-orange-light transition-colors text-lg">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-bold rounded-lg hover:bg-primary-foreground/10 transition-colors text-lg">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background border-b border-border">
        <div className="container-narrow mx-auto px-4 py-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { num: "18+", label: "Years of Experience" },
              { num: "65+", label: "Specialised Services" },
              { num: "15+", label: "Tools Operating Capability" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl font-extrabold text-accent">{s.num}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One Call Away */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">One Call Away, For Any Kind of Support</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: "F&A Expert Professionals Onboard" },
              { icon: Users, title: "Retail Specialist Back Office Solutions" },
              { icon: ClipboardList, title: "Compliance Assured Outsourcing Services" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-background p-6 rounded-xl border border-border">
                <item.icon className="w-8 h-8 text-accent shrink-0" />
                <p className="font-semibold text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">About HK Global</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">A Trusted Partner in Process Outsourcing Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                HK Global Infotech offers tailored solutions to transform operational challenges into growth opportunities. With 18 years of expertise in finance, order management, back-office operations, and procurement, we simplify processes, ensure compliance, and act as an extension of your team.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our mission is to foster long-term growth through transparency, collaboration, and innovation.
              </p>
              <Link to="/about" className="inline-flex items-center text-accent font-semibold hover:underline">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={teamPhoto} alt="HK Global Infotech team" className="w-full h-full object-cover" loading="lazy" width={1280} height={854} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Benefits of Outsourcing to Us</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-14 text-lg">
            Running back-office operations can be tricky. HK Global's outsourcing services help you tackle these efficiently.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: DollarSign, title: "Cost-Efficiency", desc: "Save on operational costs by leveraging the expertise and resources of HK Global." },
              { icon: TrendingUp, title: "Growth-Centric", desc: "Optimise bottom line and concentrate on strategic growth and customer engagement." },
              { icon: Users, title: "Flexible to Scale", desc: "Easily adapt to seasonal or market changes with flexible staffing and operational support." },
            ].map((b) => (
              <div key={b.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10">
                <b.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary-foreground mb-3">{b.title}</h3>
                <p className="text-primary-foreground/70">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Comprehensive Back-Office Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link key={s.path} to={s.path} className="group bg-card border border-border rounded-xl p-8 hover:border-accent/40 hover:shadow-lg transition-all">
                <s.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{s.name}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
                <span className="inline-flex items-center mt-4 text-accent font-semibold text-sm">
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-orange-light transition-colors">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process / Ready to Collaborate */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Collaborate?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-14 text-lg">
            Regardless of your business model, we bring extensive experience and a wide range of services to seamlessly support your back-office operations. Here's how the process works:
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discuss", desc: "Discuss your requirements with our Expert" },
              { step: "02", title: "Plan", desc: "Build a plan with clear goals and expectations" },
              { step: "03", title: "Transfer", desc: "Transfer the necessary knowledge and process to HK Global" },
              { step: "04", title: "Execute", desc: "Stay updated with regular reports, as we manage everything" },
            ].map((p) => (
              <div key={p.step} className="bg-background rounded-xl p-6 border border-border text-left">
                <p className="text-4xl font-extrabold text-accent/20 mb-2">{p.step}</p>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
