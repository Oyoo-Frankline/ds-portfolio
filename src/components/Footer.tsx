import { useState } from "react";
import { ArrowUp, Linkedin, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppWidget = ({ phone }: { phone: string }) => {
  const [open, setOpen] = useState(false);
  const defaultMessage =
    "Hi Frankline, I'm interested in your data science services. Could we discuss a project?";
  const waWithText = `https://wa.me/${phone}?text=${encodeURIComponent(
    defaultMessage
  )}`;
  const waPlain = `https://wa.me/${phone}`;

  return (
    <div className="flex flex-col items-end">
      {open && (
        <div className="mb-2 w-64 p-3 bg-card/90 text-sm rounded-md shadow-lg">
          <p className="font-medium mb-2">Quick message</p>
          <button
            onClick={() => window.open(waWithText, "_blank")}
            className="w-full text-left px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
          >
            Send default message
          </button>
          <a
            href={waPlain}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-center text-sm px-3 py-2 rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20"
          >
            Open WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((s) => !s)}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg flex items-center justify-center text-white"
        title="WhatsApp"
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="currentColor"
        >
          <path d="M20.52 3.48A11.92 11.92 0 0012 .03C5.47.03.53 4.98.53 11.52c0 2.01.53 3.98 1.54 5.7L.15 23.85l7.06-1.86a11.5 11.5 0 005.78 1.49h.01c6.53 0 11.47-4.95 11.47-11.48 0-3.06-1.19-5.93-3.19-8.02zM12 21.35h-.01a9.14 9.14 0 01-4.7-1.29l-.34-.2-4.19 1.1 1.12-4.08-.22-.36A9.04 9.04 0 012.95 11.5c0-5 4.07-9.06 9.07-9.06 2.42 0 4.7.94 6.41 2.65a8.99 8.99 0 012.67 6.41c0 5-4.07 9.07-9.06 9.07z" />
          <path d="M17.36 14.41c-.29-.15-1.71-.84-1.98-.93-.27-.09-.47-.14-.67.15-.2.29-.77.93-.95 1.12-.17.19-.35.21-.64.07-.29-.14-1.22-.45-2.33-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.3-.02-.46.12-.61.12-.11.27-.3.41-.45.14-.15.19-.26.29-.43.09-.17.05-.33-.02-.47-.07-.14-.67-1.6-.92-2.19-.24-.57-.48-.49-.66-.5l-.56-.01c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.44 1.03 2.83 1.17 3.03.14.2 2.02 3.14 4.9 4.4 2.87 1.27 3.1.95 3.66.89.57-.06 1.71-.69 1.95-1.36.24-.67.24-1.26.17-1.38-.06-.12-.24-.2-.53-.35z" />
        </svg>
      </button>
    </div>
  );
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gradient-light">
              Frankline
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Data Analyst and Scientist passionate about transforming complex
              data into actionable insights through analytics and visualization.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <a
                href="mailto:oyoofrankline@gmail.com"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={18} />
                oyoofrankline30@gmail.com
              </a>
              <p>+254 757 323 317</p>
              <p>Nairobi, Kenya</p>
              <p className="text-sm mt-4">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Frankline. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="bg-primary-foreground/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Twitter size={20} />
            </a>
          </div>

          <Button
            onClick={scrollToTop}
            size="sm"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Back to Top <ArrowUp size={16} className="ml-2" />
          </Button>
        </div>
      </div>
      {/* WhatsApp floating widget container (widget renders itself) */}
      <div className="fixed bottom-6 right-6 z-50">
        <WhatsAppWidget phone="254757323317" />
      </div>
    </footer>
  );
};

export default Footer;
