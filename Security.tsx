import { motion } from "framer-motion";
import { Shield, Lock, FileText, CheckCircle, AlertTriangle, Database, Globe, Users, Eye, Server, Key, FileCheck } from "lucide-react";
import { ROUTE_PATHS } from "@/lib/index";
import { Link } from "react-router-dom";

export default function Security() {
  const securityPractices = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All data is encrypted both in transit (TLS 1.3) and at rest (AES-256). API keys are encrypted immediately upon entry and never visible again — not even to Replyra staff.",
    },
    {
      icon: Key,
      title: "Zero-Knowledge Architecture",
      description: "Your review platform credentials are encrypted with keys only you control. We cannot access your connected accounts even if we wanted to.",
    },
    {
      icon: Database,
      title: "Data Residency Choice",
      description: "Pro plan customers can choose whether their data is stored on US or EU servers. This ensures compliance with GDPR, HIPAA, and other regional data protection regulations.",
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Hosted on AWS with SOC 2 Type II certified infrastructure. Automated backups every 6 hours with 30-day retention. Multi-region redundancy ensures 99.9% uptime.",
    },
    {
      icon: Eye,
      title: "Activity Audit Logs",
      description: "Every action in your account is logged with timestamp, IP address, and user identity. Growth and Pro plans include full audit log access for compliance and security reviews.",
    },
    {
      icon: Users,
      title: "Mandatory Two-Factor Authentication",
      description: "All accounts require 2FA. No exceptions. We support authenticator apps (TOTP) and hardware security keys (WebAuthn/FIDO2).",
    },
    {
      icon: Globe,
      title: "Regular Security Audits",
      description: "Independent third-party security audits every 6 months. Penetration testing quarterly. Vulnerability disclosure program with responsible disclosure policy.",
    },
    {
      icon: FileCheck,
      title: "Compliance Certifications",
      description: "GDPR compliant. HIPAA-ready mode available for medical practices (Pro plan). SOC 2 Type II certification in progress (expected Q2 2026).",
    },
  ];

  const guaranteePoints = [
    {
      title: "12-Month Refund Guarantee",
      description: "If Replyra causes a verified breach of your review data due to our security failure, we refund 12 months of subscription fees. No forms, no delays, no questions.",
    },
    {
      title: "Immediate Notification",
      description: "If we detect any unauthorized access attempt or security incident affecting your account, you'll be notified within 1 hour via email and SMS.",
    },
    {
      title: "Data Portability",
      description: "Export all your data at any time in standard formats (JSON, CSV). If you cancel, your data remains accessible for 30 days, then permanently deleted.",
    },
  ];

  const complianceFeatures = [
    {
      icon: Shield,
      title: "HIPAA-Ready Mode",
      description: "For medical and dental practices, Pro plan includes HIPAA-ready response mode. AI automatically flags reviews that may contain protected health information (PHI) and pauses before drafting any response. Business Associate Agreement (BAA) available upon request.",
    },
    {
      icon: FileText,
      title: "GDPR Compliance",
      description: "Full GDPR compliance for European customers. Data processing agreements available. Right to erasure, data portability, and access requests handled within 72 hours. EU data residency option ensures data never leaves European servers.",
    },
    {
      icon: AlertTriangle,
      title: "High-Liability Review Flagging",
      description: "Growth and Pro plans automatically flag reviews that mention legal threats, regulatory complaints, or potential liability issues. These reviews are never auto-responded to — they're held for human review first.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 animate-pulse" style={{ animationDuration: '8s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-secondary-foreground mb-6">
              Security isn't a legal footnote.
              <br />
              It's a product feature.
            </h1>
            <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              We're the only review management tool at this price point that publishes
              its security practices publicly and backs them with a real guarantee.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary-foreground/10 rounded-full">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">Independently Audited</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary-foreground/10 rounded-full">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary-foreground/10 rounded-full">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">HIPAA-Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Security Practices
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Plain English. No legal jargon. No hiding behind vague promises.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {securityPractices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {practice.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Security Guarantee
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We put our money where our mouth is.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {guaranteePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-card-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Industry-Specific Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for industries where one wrong word is expensive.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {complianceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="bg-card border border-border rounded-2xl p-8"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 animate-pulse" style={{ animationDuration: '8s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Questions about our security?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              We're happy to answer them. Email us at security@replyra.com or schedule
              a call with our security team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:security@replyra.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Email Security Team
              </a>
              <Link
                to={ROUTE_PATHS.HOME}
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary-foreground/10 text-secondary-foreground font-semibold rounded-xl hover:bg-secondary-foreground/20 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Transparency Commitment
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This page is updated whenever our security practices change. Last updated: February 28, 2026.
              </p>
              <p className="text-sm text-muted-foreground">
                If you discover a security vulnerability, please report it to security@replyra.com.
                We respond to all reports within 24 hours and maintain a responsible disclosure policy.
                Security researchers who report valid vulnerabilities are acknowledged (with permission)
                on our security hall of fame.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}