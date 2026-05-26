import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Contact() {
  const contactMethods = [
    {
      id: "linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/yatin-berry",
      subtitle: "Connect & view professional network",
      href: "https://www.linkedin.com/in/yatin-berry-993578246/",
      icon: <Linkedin className="w-5 h-5 text-blue-400" />,
      color: "hover:border-blue-500/30 hover:bg-blue-500/5",
      badge: "Professional Network"
    },
    {
      id: "email",
      title: "Email",
      value: "yatinberry201@gmail.com",
      subtitle: "Send a direct email inquiry",
      href: "mailto:yatinberry201@gmail.com",
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      color: "hover:border-emerald-500/30 hover:bg-emerald-500/5",
      badge: "Direct Contact"
    },
    {
      id: "phone",
      title: "Phone",
      value: "+91-8375956537",
      subtitle: "Call or reach out directly",
      href: "tel:+918375956537",
      icon: <Phone className="w-5 h-5 text-purple-400" />,
      color: "hover:border-purple-500/30 hover:bg-purple-500/5",
      badge: "Direct Line"
    }
  ];

  return (
    <section id="contact" className="relative py-16 px-6 md:px-8 max-w-5xl mx-auto z-10">
      <SectionHeading
        badge="Contact"
        title="Get In Touch"
      />

      <div className="text-center max-w-xl mx-auto mb-10 space-y-3">
        {/* Subheading - text-base for high readability */}
        <p className="text-zinc-400 text-base font-light leading-relaxed">
          Feel free to connect with me through LinkedIn, email, or phone.
        </p>
      </div>

      {/* Recruiter-focused Contact Grid: 3 cards on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.id}
            href={method.href}
            target={method.id === "linkedin" ? "_blank" : undefined}
            rel={method.id === "linkedin" ? "noreferrer" : undefined}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -3 }}
            className={`group relative p-6 rounded-2xl border border-white/5 bg-zinc-950/40 transition-all duration-300 flex flex-col justify-between shadow-glass-sm cursor-pointer ${method.color}`}
          >
            <div className="space-y-4">
              {/* Card Header row */}
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all">
                  {method.icon}
                </div>
                <span className="text-[9px] font-mono font-semibold uppercase text-zinc-500 tracking-wider">
                  {method.badge}
                </span>
              </div>

              {/* Card Title & Value */}
              <div className="space-y-1">
                <h3 className="font-display font-bold text-base text-zinc-400 group-hover:text-white transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm font-semibold text-white font-mono break-all">
                  {method.value}
                </p>
              </div>

              {/* Action helper description */}
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                {method.subtitle}
              </p>
            </div>

            {/* Bottom action indicator */}
            <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-zinc-500 group-hover:text-white transition-colors text-[11px] font-mono">
              <span>{method.id === "linkedin" ? "Open Profile" : method.id === "email" ? "Open Mail Client" : "Start Call"}</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Elegant location metadata section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 pt-6 border-t border-white/5 flex justify-center items-center gap-2 text-xs font-mono text-zinc-500"
      >
        <MapPin className="w-4 h-4 text-rose-500/80" />
        <span>Location: Noida, India</span>
      </motion.div>
    </section>
  );
}
export default Contact;
