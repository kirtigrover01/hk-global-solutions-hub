import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceOptions = [
  "Order-to-Cash", "Bookkeeping", "AR/AP Services", "Inventory Valuation",
  "Order Management", "Back-Office Support", "Sourcing and Procurement", "Talent Outsourcing",
];

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation Request - ${formData.service || "General"}`);
    const body = encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:info@hkglobalinfotech.com?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      <section className="bg-primary section-padding">
        <div className="container-narrow mx-auto text-center">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-6">Get in Touch</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Get in touch with us for any inquiries, support, or to discuss how we can assist your business.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Make a Call</p>
                    <p className="text-muted-foreground text-sm">+91 120 4258158</p>
                    <p className="text-muted-foreground text-sm">+91-8595510366</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Send an Email</p>
                    <p className="text-muted-foreground text-sm">info@hkglobalinfotech.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Branch Office</p>
                    <p className="text-muted-foreground text-sm">Office No. 206, Tower B, IThum Towers, Sector 62, Noida (201012), UP, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Registered Office</p>
                    <p className="text-muted-foreground text-sm">FF 20, Reliable City Centre, Sector 6, Vasundhara, Ghaziabad (201012), UP, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Request a Consultation</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">First Name *</label>
                    <input type="text" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Last Name *</label>
                    <input type="text" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Doe" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Business Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Select a Service</label>
                  <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent">
                    <option value="">Choose a service...</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message (Optional)</label>
                  <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none" placeholder="Tell us about your needs..." />
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-orange-light transition-colors text-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
