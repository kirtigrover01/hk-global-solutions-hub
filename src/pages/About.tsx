import Layout from "@/components/Layout";
import teamPhoto from "@/assets/team-photo.jpg";
import { Shield, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-narrow mx-auto text-center">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">Our Background</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">A trusted partner in Process Outsourcing Services</p>
        </div>
      </section>

      {/* Background */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At HK Global Infotech, we specialize in delivering smart, tailored solutions to turn operational challenges into real opportunities for growth. What sets us apart? We're led by a seasoned professional with over 18 years of experience partnering with top U.S. retail brands.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This deep industry knowledge drives our expertise in Finance and Accounting, Order Management, Back-Office Operations and Sourcing and Procurement. We act as a seamless extension of your team, simplifying processes and ensuring compliance, so you can focus on achieving your business goals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With us, you're not just managing operations—you're setting the foundation for sustainable success. Let's create growth together.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={teamPhoto} alt="HK Global Infotech team" className="w-full object-cover" loading="lazy" width={1280} height={854} />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-background rounded-xl p-10 border border-border">
            <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-2">Our Mission</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">Simplifying Operations, Amplifying Success</h3>
            <p className="text-muted-foreground leading-relaxed">
              At HK Global Infotech, our mission is to provide businesses with tailored solutions that enhance operational efficiency, deliver measurable results and foster long-term growth. By focusing on transparency, collaboration and adaptability, we aim to create lasting partnerships that thrive on shared success and innovation.
            </p>
          </div>
          <div className="bg-background rounded-xl p-10 border border-border">
            <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-2">Our Vision</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">Reshaping Back-Office Operations for Strategic Growth</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our vision is to be a trusted leader in business process solutions, recognized for turning back-office operations into strategic advantages. We aspire to create a future where every client confidently navigates change, leveraging our expertise to operate efficiently, grow sustainably and achieve their ambitious goals.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-14">We Stand for Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Accountability", desc: "Embrace accountability by owning our actions and outcomes, promptly addressing errors, and improving through continuous learning." },
              { icon: Award, title: "Professionalism", desc: "Maintaining high standards in work conduct and communication while ensuring the timely and consistent delivery of services." },
              { icon: Heart, title: "Trust and Integrity", desc: "Operating with honesty and transparency in all interactions while upholding confidentiality and protecting sensitive client information." },
            ].map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-8 border border-border">
                <v.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
