import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { ROUTE_PATHS, SECURITY_BADGES } from "@/lib/index";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", to: ROUTE_PATHS.SECURITY },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-background/60 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to={ROUTE_PATHS.HOME} className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Replyra
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) =>
                item.to ? (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors hover:text-primary ${
                        isActive ? "text-primary" : "text-foreground"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            <div className="hidden md:block">
              <a
                href="https://stripe.com/starter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Start Free Trial
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) =>
                item.to ? (
                  <NavLink
                    key={item.label}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors hover:text-primary ${
                        isActive ? "text-primary" : "text-foreground"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                )
              )}
              <a
                href="https://stripe.com/starter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-lg hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 shadow-md"
              >
                Start Free Trial
              </a>
            </nav>
          </div>
        )}
      </header>

      <main style={{ paddingTop: `${headerHeight}px` }} className="flex-1">
        {children}
      </main>

      <footer className="bg-[#111827] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-2">Replyra</div>
              <p className="text-white/70 text-sm">Reputation on autopilot.</p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
              <a href="#how-it-works" className="text-sm text-white/70 hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors">
                Pricing
              </a>
              <Link to={ROUTE_PATHS.SECURITY} className="text-sm text-white/70 hover:text-white transition-colors">
                Security
              </Link>
              <a href="/privacy" className="text-sm text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-white/70 hover:text-white transition-colors">
                Terms
              </a>
              <a href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                Contact
              </a>
            </div>

            <div className="md:text-right">
              <p className="text-sm text-white/70">© 2026 Replyra. All rights reserved.</p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {SECURITY_BADGES.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-white/70">
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
