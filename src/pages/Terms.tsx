import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { FileText, Scale, AlertTriangle, Mail } from "lucide-react";

const Terms = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero */}
                <section className="pt-32 pb-16 relative">
                    <div className="absolute inset-0 bg-dots opacity-30" />
                    <div className="container-max px-4 md:px-8 relative z-10">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
                            <span className="text-primary text-sm font-medium mb-2 block">Legal</span>
                            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                            <p className="text-lg text-muted-foreground">
                                By using this website, you agree to a few basic ground rules. We've kept them simple and fair.
                            </p>
                            <p className="text-sm text-muted-foreground mt-3">Last updated: <strong>March 2024</strong></p>
                        </motion.div>
                    </div>
                </section>

                <section className="pb-20">
                    <div className="container-max px-4 md:px-8 space-y-10 max-w-3xl">

                        {/* Intro */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="rounded-2xl border border-border bg-secondary/30 p-6">
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                Trezeal Technologies is an early-stage startup, not a registered private limited company. These terms are written honestly and in plain language to set clear expectations for anyone who visits our website or works with us.
                            </p>
                        </motion.div>

                        {[
                            {
                                icon: FileText,
                                title: "Using This Website",
                                body: "This website is provided for informational purposes — to showcase who we are and what we're building. You're welcome to browse, share, and reach out. Please don't misuse the site, attempt to hack or disrupt it, or use it for any unlawful purpose.",
                            },
                            {
                                icon: Scale,
                                title: "Our Services",
                                body: "If you engage Trezeal for any work (development, consulting, etc.), the specific terms of that engagement — deliverables, timelines, and payment — will be agreed separately between us before work starts. Nothing on this website constitutes a formal services contract on its own.",
                            },
                            {
                                icon: AlertTriangle,
                                title: "No Warranties",
                                body: "This website and any information on it are provided as-is. We are a startup doing our best, but we cannot guarantee that everything here is always up to date or error-free. We are not liable for any decisions you make based on information found on this site.",
                            },
                            {
                                icon: Scale,
                                title: "Intellectual Property",
                                body: "The content on this website — including our name, logo, designs, and written content — belongs to Trezeal Technologies. Please don't copy or republish it without permission. If you want to share something, just ask — we're usually fine with it.",
                            },
                            {
                                icon: Mail,
                                title: "Questions & Changes",
                                body: "We may update these terms occasionally. The latest version will always be on this page. If you have any questions, just email us at trezeal@gmail.com — we're a small team and will respond personally.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="font-display text-lg font-bold">{item.title}</h2>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed pl-12">{item.body}</p>
                            </motion.div>
                        ))}

                        {/* Disclaimer */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="rounded-2xl border border-primary/30 bg-primary/5 p-6">
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                <strong className="text-foreground">Startup Disclosure:</strong> Trezeal Technologies is currently an idea-stage startup operating out of Pune, Maharashtra, India. We are not yet a formally incorporated entity. These terms are provided in good faith. Any formal project engagements will be governed by a written agreement signed by both parties.
                            </p>
                        </motion.div>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
