import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import serviceFinance from "@/assets/service-finance.jpg";
import serviceInventory from "@/assets/service-inventory.jpg";
import serviceTalent from "@/assets/service-talent.jpg";
import serviceSourcing from "@/assets/service-sourcing.jpg";

const serviceImages: Record<string, string> = {
  "order-to-cash": serviceFinance,
  "bookkeeping": serviceFinance,
  "ar-ap-services": serviceFinance,
  "inventory-valuation": serviceInventory,
  "order-management": serviceInventory,
  "back-office-support": serviceTalent,
  "sourcing-procurement": serviceSourcing,
  "talent-outsourcing": serviceTalent,
};

interface ServiceData {
  title: string;
  subtitle: string;
  description: string;
  services: { title: string; desc: string }[];
  advantages: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const serviceData: Record<string, ServiceData> = {
  "order-to-cash": {
    title: "Order-to-Cash",
    subtitle: "Driving Efficiency Across Every Stage of Your Revenue Cycle",
    description: "Our Order-to-Cash (O2C) service is designed to streamline the entire transaction process, from order processing to payment collection, ensuring faster payments and improved cash flow. We automate invoicing, reduce errors, speed up billing cycles, and optimize collections. With HK Global, you benefit from reduced revenue leakage, improved financial stability and stronger customer relationships.",
    services: [
      { title: "Order Management", desc: "Seamlessly handle customer orders from initiation to delivery with error-free processing and accurate tracking." },
      { title: "Credit Management", desc: "Mitigate financial risks with comprehensive credit evaluation, appropriate limits and enforced credit policies." },
      { title: "Customer Master Data Management", desc: "Maintain accurate and up-to-date customer records ensuring data consistency across systems." },
      { title: "Invoice Management", desc: "Optimize billing cycles with timely, accurate invoicing eliminating errors and ensuring compliance." },
      { title: "Collection Management", desc: "Maximize cash flow with proactive collections, payment follow-ups and overdue invoice resolutions." },
      { title: "AR Management", desc: "Track, reconcile and manage outstanding invoices, reducing delays and improving financial predictability." },
      { title: "AP Management", desc: "Ensure smooth vendor payments and optimize cash flow with prompt processing." },
      { title: "Dispute Resolutions", desc: "Resolve payment disputes efficiently with structured processes that minimize delays." },
      { title: "Cash Applications", desc: "Ensure precise allocation of payments with quick reconciliation reducing errors." },
      { title: "Reporting & Data Management", desc: "Leverage actionable insights with detailed reporting and robust data management." },
    ],
    advantages: [
      { title: "Resource Flexibility", desc: "Scale operations efficiently, adapting to changing demands or market shifts." },
      { title: "Access to Expertise", desc: "Expert management and seamless operations across all business aspects." },
      { title: "Advanced Technology", desc: "Cutting-edge solutions with continuously upgraded tools." },
      { title: "Optimized Operations", desc: "Enhanced operational efficiency for tracking progress and meeting objectives." },
      { title: "Adherence to Regulations", desc: "Strong focus on compliance with industry standards and requirements." },
      { title: "Enhanced Customer Relationships", desc: "Convert prospects into clients quickly, driving satisfaction and retention." },
    ],
    faqs: [
      { q: "What are the benefits of implementing an O2C solution?", a: "Implementing an O2C solution significantly improves cash flow, reduces operational costs and enhances customer satisfaction." },
      { q: "How long does it take to implement an O2C solution?", a: "The implementation timeline varies depending on specific needs. Our team works closely with you for a smooth transition." },
      { q: "What level of support does HK Global Infotech provide?", a: "We provide ongoing support and maintenance with a dedicated support team available for any questions or issues." },
      { q: "How does HK Global Infotech ensure data security?", a: "We adhere to strict security protocols and industry best practices to protect sensitive customer data." },
    ],
  },
  "bookkeeping": {
    title: "Bookkeeping",
    subtitle: "Accurate Bookkeeping Services for Absolute Financial Clarity",
    description: "Bookkeeping is vital for effective financial management. At HK Global Infotech, we provide tailored bookkeeping services with real-time tracking, error-free financial recording, and seamless account management. By outsourcing to us, businesses gain precise financial oversight without maintaining in-house resources.",
    services: [
      { title: "Transaction Recording", desc: "Meticulous documentation of every financial movement creating an accurate ledger." },
      { title: "Bank Reconciliation", desc: "Match financial records with bank statements to detect discrepancies." },
      { title: "Expense Management", desc: "Track and categorize expenses to monitor spending patterns and control costs." },
      { title: "AP & AR Management", desc: "Timely payments to suppliers and efficient collection from clients." },
      { title: "Payroll Processing", desc: "Accurate and on-time payroll with proper tax deductions and compliance." },
      { title: "Financial Reporting", desc: "Clear, actionable financial reports including income statements and balance sheets." },
    ],
    advantages: [
      { title: "Cost-Effectiveness", desc: "Reduce overhead costs and free up valuable time for core activities." },
      { title: "Improved Accuracy", desc: "Minimize errors with expert knowledge and rigorous quality control." },
      { title: "Increased Efficiency", desc: "Streamlined processes for faster and more reliable financial management." },
      { title: "Expert Knowledge", desc: "Access to seasoned professionals with deep financial expertise." },
    ],
    faqs: [
      { q: "What are the benefits of outsourcing bookkeeping?", a: "Cost-effectiveness, improved accuracy, increased efficiency and access to expert knowledge." },
      { q: "How often will I receive financial reports?", a: "Frequency is flexible - monthly, quarterly, annual, or per your preferred schedule." },
      { q: "Can you integrate with my existing accounting software?", a: "Yes, we integrate with most popular packages like QuickBooks and Sage." },
    ],
  },
  "ar-ap-services": {
    title: "AR/AP Services",
    subtitle: "Seamless Management of Your Accounts Receivables and Payables",
    description: "Efficient cash flow management is critical to sustainability and growth. At HK Global Infotech, our AP and AR Management Services streamline your financial processes, ensure timely payments, optimize collections, and provide greater visibility into cash flow trends.",
    services: [
      { title: "Accounts Payable Management", desc: "Timely, accurate, and compliant vendor payments with automated tools to reduce errors." },
      { title: "Accounts Receivable Management", desc: "Accelerated receivables cycle with streamlined invoicing and tracking." },
    ],
    advantages: [
      { title: "Resource Flexibility", desc: "Scale operations efficiently to adapt to changing demands." },
      { title: "Access to Expertise", desc: "Expert management across all aspects of your business." },
      { title: "Advanced Technology", desc: "Cutting-edge solutions tailored to your needs." },
    ],
    faqs: [
      { q: "How can outsourcing AR improve cash flow?", a: "Ensures timely invoicing, proactive collections, and effective management of overdue accounts." },
      { q: "What benefits does outsourcing AP offer?", a: "Improves payment accuracy, streamlines invoice processing, and ensures timely vendor payments." },
      { q: "Can services be scaled according to my needs?", a: "Yes, our services are highly scalable, designed to grow with your business." },
    ],
  },
  "inventory-valuation": {
    title: "Inventory Valuation",
    subtitle: "Precise Inventory Valuation to Optimize Costs and Maximize Returns",
    description: "At HK Global Infotech, we offer comprehensive Inventory Valuation services to help businesses maintain accurate stock levels, optimize inventory management, and enhance financial reporting. Our expert team uses advanced tools and industry best practices for precise inventory tracking.",
    services: [
      { title: "Inventory Planning & Forecasting", desc: "Precise demand forecasting and trend-based planning for optimal inventory levels." },
      { title: "Stock Monitoring & Control", desc: "Real-time inventory tracking with regular audits and reconciliation." },
      { title: "Warehouse Management", desc: "Streamlined storage and retrieval with barcode and RFID integration." },
      { title: "Order Fulfillment & Returns", desc: "Timely order fulfillment and efficient reverse logistics." },
      { title: "Reporting & Analytics", desc: "Detailed reports to identify slow-moving or obsolete inventory." },
    ],
    advantages: [
      { title: "Accuracy", desc: "Automated systems and regular audits for precise records." },
      { title: "Integration", desc: "Seamless integration with your existing inventory or ERP systems." },
      { title: "Industry Coverage", desc: "Services for retail, manufacturing, eCommerce, and distribution." },
    ],
    faqs: [
      { q: "Why is inventory valuation important?", a: "It affects financial statements and profitability by accurately reflecting stock value and cost of goods sold." },
      { q: "How does HK Global ensure inventory accuracy?", a: "We use automated systems, regular audits, and real-time tracking." },
      { q: "Can you integrate with our existing systems?", a: "Yes, we seamlessly integrate with your existing inventory or ERP systems." },
    ],
  },
  "order-management": {
    title: "Order Management",
    subtitle: "Optimize Order Processing for Faster, Error-Free Deliveries",
    description: "At HK Global Infotech, we specialize in comprehensive Order Management Services that optimize every step of your order processing cycle. From receiving and verifying customer orders to ensuring timely fulfillment and managing returns, we cover it all.",
    services: [
      { title: "Order Receipt & Verification", desc: "Accurately capture, verify, and process all incoming orders." },
      { title: "Inventory Management & Fulfillment", desc: "Real-time inventory tracking with efficient picking, packing, and shipment." },
      { title: "Customer Communication", desc: "Handle all customer inquiries related to order status and shipment tracking." },
      { title: "Returns & Exchanges", desc: "Efficient management of product returns and exchanges." },
    ],
    advantages: [
      { title: "Accuracy", desc: "Error-free order handling and seamless customer experiences." },
      { title: "Efficiency", desc: "Streamlined processes for order picking, packing, and shipping." },
      { title: "Customer Satisfaction", desc: "Responsive support keeping customers informed and satisfied." },
    ],
    faqs: [
      { q: "How does HK Global ensure order accuracy?", a: "We meticulously capture, verify, and process all incoming orders checking for availability, quantities, and pricing." },
      { q: "How do you handle returns and exchanges?", a: "We manage returns with minimal disruption, focusing on optimizing recovery and reducing losses." },
    ],
  },
  "back-office-support": {
    title: "Back-Office Support",
    subtitle: "Streamlined Back-Office Solutions for Unmatched Operational Excellence",
    description: "Managing back-office functions like data entry, processing, and record management can drain resources. By outsourcing to HK Global Infotech, you can free up valuable internal resources, reduce operational costs, improve data accuracy, and gain a competitive edge.",
    services: [
      { title: "Data Entry", desc: "Accurate and timely entry of data from invoices, receipts, purchase orders, and customer information." },
      { title: "Data Conversion", desc: "Converting data from paper, PDF, images into digital formats like spreadsheets and databases." },
      { title: "Data Processing", desc: "Cleaning, validating, and organizing data to ensure accuracy and consistency." },
      { title: "Record Management", desc: "Securely storing and managing important documents including contracts and invoices." },
      { title: "Online Catalog Services", desc: "Creating, maintaining, and updating online product catalogs with accurate information." },
    ],
    advantages: [
      { title: "Cost Reduction", desc: "Significantly reduce operational costs and improve efficiency." },
      { title: "Data Accuracy", desc: "Rigorous quality control with multiple levels of data verification." },
      { title: "System Integration", desc: "Seamless integration with your existing ERP, CRM, and inventory systems." },
    ],
    faqs: [
      { q: "What are the benefits of outsourcing back-office support?", a: "Reduced costs, improved efficiency, enhanced data accuracy, and access to specialized expertise." },
      { q: "How do you ensure data security?", a: "Strict confidentiality agreements and secure data transfer and storage methods." },
    ],
  },
  "sourcing-procurement": {
    title: "Sourcing and Procurement",
    subtitle: "Strategic Sourcing and Procurement to Unlock Business Potential",
    description: "In today's fast-paced global market, success hinges on smart sourcing and procurement. At HK Global, we excel in sourcing premium products for the retail industry, from Apparel to Leather Garments and Footwear to Fashion Jewelry. Our seasoned specialists deliver exceptional products at competitive prices.",
    services: [
      { title: "Supplier Identification & Evaluation", desc: "Meticulously identify and evaluate potential suppliers based on quality, reliability, and ethical practices." },
      { title: "Market Research & Analysis", desc: "In-depth market research to identify competitive suppliers and alternative strategies." },
      { title: "Product Development & Sampling", desc: "Collaborate with suppliers to develop and evaluate product samples." },
      { title: "Negotiation & Contract Management", desc: "Negotiate favorable contracts ensuring competitive pricing and optimal terms." },
      { title: "Order Management & Fulfillment", desc: "Efficiently place purchase orders, track shipments, and resolve issues." },
      { title: "Quality Assurance & Control", desc: "Rigorous quality control including lab testing and on-site inspections." },
      { title: "Logistics & Dispatch", desc: "Manage the entire logistics process for timely and cost-effective delivery." },
    ],
    advantages: [
      { title: "Quality Focus", desc: "Strong supplier network ensures access to high-quality products." },
      { title: "Cost Optimization", desc: "Market expertise and negotiation skills for competitive pricing." },
      { title: "Expertise & Experience", desc: "In-depth knowledge of global market and industry best practices." },
      { title: "Sustainability & Ethics", desc: "Ethical and sustainable sourcing practices with responsible suppliers." },
      { title: "Transparency & Trust", desc: "Complete transparency throughout the sourcing process." },
    ],
    faqs: [
      { q: "How can HK Global help reduce procurement costs?", a: "By identifying competitive suppliers, optimizing supply chains, and implementing cost-saving strategies." },
      { q: "How do you ensure quality of sourced products?", a: "Through rigorous supplier vetting, on-site inspections, sample approvals, and third-party testing." },
    ],
  },
  "talent-outsourcing": {
    title: "Talent Outsourcing",
    subtitle: "On-Demand Talent Solutions to Propel Your Business Forward",
    description: "Talent outsourcing provides access to a pool of skilled professionals on a flexible basis, allowing businesses to scale their workforce up or down as needed without the overhead of full-time employment.",
    services: [
      { title: "Payroll Specialist", desc: "Processing payroll, managing taxes, and ensuring compliance." },
      { title: "Accounting Specialist", desc: "Handling AP, AR, financial reporting, and other accounting functions." },
      { title: "Routing Specialist", desc: "Optimizing logistics and transportation routes for efficiency." },
      { title: "Sourcing Specialist", desc: "Identifying suppliers, negotiating contracts, managing procurement." },
      { title: "Admin & Virtual Assistant", desc: "Scheduling, email management, and operational support." },
      { title: "Cybersecurity & IT Specialist", desc: "Identifying and mitigating vulnerabilities in IT systems." },
      { title: "CAD Designer", desc: "Professional CAD design for product, architectural, and engineering needs." },
      { title: "Customer Care Representatives", desc: "Excellent service through phone, email, and chat channels." },
      { title: "UX/UI Designer", desc: "User-friendly interfaces for websites and mobile applications." },
      { title: "Web Developer", desc: "Developing and maintaining websites and web applications." },
    ],
    advantages: [
      { title: "Skilled Professionals", desc: "Experienced talent tailored to your needs for specialized roles." },
      { title: "Cost Efficiency", desc: "Reduce recruitment, training, and operational costs." },
      { title: "Scalability", desc: "Easily scale your workforce based on project demands." },
      { title: "Streamlined Processes", desc: "End-to-end hiring with pre-vetted professionals ready to contribute." },
      { title: "Compliance & Risk Management", desc: "Handle regulatory compliance, labor laws, and risk mitigation." },
      { title: "Dedicated Support", desc: "Ongoing support with performance tracking and issue resolution." },
    ],
    faqs: [
      { q: "What is talent outsourcing?", a: "Hiring professionals through a third-party provider to handle specific tasks or projects." },
      { q: "How do you ensure quality?", a: "Rigorous screening including skill assessments, background checks, and interviews." },
      { q: "Can I scale my outsourced team?", a: "Absolutely! Our services are highly flexible, allowing you to scale up or down." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = serviceData[slug || ""];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-3xl font-bold text-foreground">Service not found</h1>
          <Link to="/services" className="text-accent mt-4 inline-block">View all services</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary section-padding">
        <div className="container-narrow mx-auto text-center">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">{data.title}</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6 max-w-4xl mx-auto">{data.subtitle}</h1>
        </div>
      </section>

      {/* Description */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed">{data.description}</p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.services.map((s) => (
              <div key={s.title} className="bg-background rounded-xl p-6 border border-border flex gap-4">
                <CheckCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-primary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-10">Advantages of Working with HK Global</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.advantages.map((a) => (
              <div key={a.title} className="bg-primary-foreground/10 rounded-xl p-6 border border-primary-foreground/10">
                <h3 className="font-bold text-primary-foreground mb-2">{a.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left font-semibold text-foreground hover:bg-secondary/50 transition-colors">
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Book a consultation call with us to discuss your requirements and explore how we can help.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-orange-light transition-colors text-lg">
            Request a Consultation <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
