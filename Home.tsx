import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Check, X, ChevronDown, Star, Shield, Lock, Zap, Target, Palette, TrendingUp, Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IMAGES } from "@/assets/images";
import {
  COMPETITOR_DATA,
  PRICING_PLANS,
  FEATURES,
  TESTIMONIALS,
  FAQS,
  INDUSTRIES,
  RISK_CLASSIFICATIONS,
  SECURITY_BADGES,
  TRUST_SIGNALS,
  formatPrice,
  scrollToSection,
} from "@/lib/index";

function WordByWordReveal({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: i * 0.08 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function StaggeredCards({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: i * 0.12, type: "spring", stiffness: 300, damping: 35 }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </div>
  );
}

function PulseAnimation({ color }: { color: string }) {
  return (
    <motion.div
      className={`w-4 h-4 rounded-full ${color}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(135deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 85%, black) 50%, color-mix(in srgb, var(--primary) 70%, black) 100%)`,
              animation: "aurora 15s ease-in-out infinite",
            }}
          />
          <style>{`
            @keyframes aurora {
              0%, 100% { filter: hue-rotate(0deg); }
              50% { filter: hue-rotate(30deg); }
            }
          `}</style>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <WordByWordReveal text="Your Next Customer Is Reading Your Worst Review Right Now." />
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-secondary-foreground/90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Replyra monitors every review across every platform, drafts the perfect AI-powered response in seconds, and quietly builds your reputation on autopilot — while you get on with running your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              onClick={() => window.open("https://stripe.com/starter", "_blank")}
            >
              Start Free — 7 Days, No Card Needed
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-secondary-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {TRUST_SIGNALS.map((signal, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>{signal}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-secondary-foreground/60" />
        </motion.div>
      </section>

      <section id="comparison" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The leading tools charge $299–$599/month. We don't.</h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto bg-card rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-muted">
                  <th className="p-4 text-left font-semibold"></th>
                  <th className="p-4 text-center font-bold text-primary bg-primary/10">Replyra</th>
                  <th className="p-4 text-center font-semibold">Birdeye</th>
                  <th className="p-4 text-center font-semibold">Podium</th>
                  <th className="p-4 text-center font-semibold">Reputation.com</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITOR_DATA.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="border-t border-border"
                  >
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center bg-primary/5 border-l-4 border-primary">
                      {typeof row.replyra === "boolean" ? (
                        row.replyra ? (
                          <Check className="w-5 h-5 text-primary mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-primary">{row.replyra}</span>
                      )}
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      {typeof row.birdeye === "boolean" ? (
                        row.birdeye ? (
                          <Check className="w-5 h-5 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 mx-auto" />
                        )
                      ) : (
                        row.birdeye
                      )}
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      {typeof row.podium === "boolean" ? (
                        row.podium ? (
                          <Check className="w-5 h-5 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 mx-auto" />
                        )
                      ) : (
                        row.podium
                      )}
                    </td>
                    <td className="p-4 text-center text-muted-foreground">
                      {typeof row.reputation === "boolean" ? (
                        row.reputation ? (
                          <Check className="w-5 h-5 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 mx-auto" />
                        )
                      ) : (
                        row.reputation
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6 italic">
            Competitor prices sourced from public listings as of 2026.
          </p>
        </div>
      </section>

      <section id="pain" className="py-24 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            One bad review shouldn't ruin a good business.
          </motion.h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-destructive text-destructive-foreground p-6 rounded-xl shadow-lg max-w-xs"
              >
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(1)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                  {[...Array(4)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-muted stroke-muted" />
                  ))}
                </div>
                <p className="text-sm font-medium">"Worst experience ever. Never coming back."</p>
                <p className="text-xs mt-2 opacity-80">Posted {i} hour{i > 1 ? "s" : ""} ago</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Connect",
                description: "Link your Google Business Profile and other review platforms in 5 minutes. No technical setup required.",
                icon: <Lock className="w-12 h-12" />,
              },
              {
                step: "2",
                title: "Detect",
                description: "Replyra monitors for new reviews 24/7 and classifies each one using our risk assessment AI.",
                icon: <Zap className="w-12 h-12" />,
              },
              {
                step: "3",
                title: "Respond",
                description: "AI drafts the perfect response in your brand voice. You approve or let it auto-send. Done.",
                icon: <Target className="w-12 h-12" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center"
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  {item.icon}
                </div>
                <div className="text-5xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="risk-classifier" className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The only tool that tells you when NOT to respond.</h2>
            <p className="text-xl text-secondary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Every other tool drafts a reply and sends it. Replyra reads the situation first — because sometimes responding publicly is exactly what the reviewer wants, and giving them that stage makes things worse.
            </p>
          </motion.div>

          <StaggeredCards className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {RISK_CLASSIFICATIONS.map((risk) => (
              <Card key={risk.id} className="bg-card/50 backdrop-blur border-2 hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <PulseAnimation
                      color={
                        risk.color === "green"
                          ? "bg-green-500"
                          : risk.color === "amber"
                          ? "bg-amber-500"
                          : "bg-red-500"
                      }
                    />
                    <CardTitle className="text-xl">{risk.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{risk.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredCards>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-secondary-foreground/10 border-2 border-secondary-foreground/20 rounded-xl p-8"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl">🏥</div>
              <div>
                <h3 className="text-xl font-bold mb-2">For medical, legal & financial businesses:</h3>
                <p className="text-secondary-foreground/90 leading-relaxed">
                  Replyra automatically flags reviews that may have liability implications, and pauses before any response is drafted — giving your team time to review first. This is included in all Pro plans.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Built for the way you actually work
          </motion.h2>

          <StaggeredCards className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {FEATURES.map((feature) => (
              <Card key={feature.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredCards>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent pricing. No surprises.</h2>
            <p className="text-xl text-muted-foreground">The leading tools charge $300–$600/month. We think that's absurd.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={plan.highlighted ? "md:scale-105" : ""}
              >
                <Card className={`h-full flex flex-col ${plan.highlighted ? "border-primary border-2 shadow-xl" : ""}`}>
                  <CardHeader>
                    {plan.badge && (
                      <Badge className="mb-2 w-fit bg-primary text-primary-foreground">{plan.badge}</Badge>
                    )}
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-4xl font-bold mt-4">
                      {formatPrice(plan.price)}
                      <span className="text-lg font-normal text-muted-foreground">/{plan.period}</span>
                    </div>
                    <CardDescription className="mt-2">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                      {plan.excludedFeatures?.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-muted-foreground">
                          <X className="w-5 h-5 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.highlighted ? "bg-primary text-primary-foreground" : ""}`}
                      variant={plan.highlighted ? "default" : "outline"}
                      onClick={() => window.open(plan.ctaLink, plan.ctaLink.startsWith("http") ? "_blank" : "_self")}
                    >
                      {plan.ctaText}
                    </Button>
                    {plan.id !== "concierge" && (
                      <p className="text-xs text-center text-muted-foreground mt-3">7-day free trial, no card needed</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-lg mb-4">
              🏢 More than 3 locations?{" "}
              <a href="/contact" className="text-primary hover:underline font-semibold">
                Contact us about Enterprise →
              </a>
            </p>
            <p className="text-muted-foreground">All plans include a 7-day free trial. No credit card required. Cancel anytime.</p>
          </motion.div>
        </div>
      </section>

      <section id="security" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Security isn't a legal footnote. It's a product feature.</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're the only review management tool at this price point that publishes its security practices publicly and backs them with a real guarantee.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                icon: <Lock className="w-12 h-12" />,
                title: "Encrypted end-to-end",
                description: "All data encrypted in storage and in transit. API keys are never visible after entry — not even to Replyra staff.",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Security Guarantee",
                description: "If Replyra causes a verified breach of your review data, we refund 12 months of your fees. No forms. No delay.",
              },
              {
                icon: <Check className="w-12 h-12" />,
                title: "Full transparency",
                description: "Our complete security practices are published on our Security page in plain English. No legal jargon.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="/security" className="text-primary hover:underline text-lg font-semibold">
              Read our full security page →
            </a>
          </motion.div>
        </div>
      </section>

      <section id="industries" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Built for the industries where reputation matters most.
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {INDUSTRIES.map((industry, i) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="text-5xl mb-3">{industry.icon}</div>
                    <CardTitle className="text-xl">{industry.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What our customers say
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <CardDescription className="text-base leading-relaxed italic">"{testimonial.content}"</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {FAQS.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="bg-background rounded-lg px-6 border">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section id="final-cta" className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `linear-gradient(135deg, var(--primary) 0%, color-mix(in srgb, var(--primary) 85%, black) 50%, color-mix(in srgb, var(--primary) 70%, black) 100%)`,
              animation: "aurora 15s ease-in-out infinite",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <WordByWordReveal text="Your next 1-star review is coming. Be ready for it." />
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-secondary-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Join the businesses that stopped dreading Google Maps and started owning it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              onClick={() => window.open("https://stripe.com/starter", "_blank")}
            >
              Start Your Free Trial →
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-secondary-foreground/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              "🔒 Independently security-audited",
              "✓ 7-day free trial, no card needed",
              "✓ Cancel anytime, no contracts",
            ].map((signal, i) => (
              <div key={i}>{signal}</div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
