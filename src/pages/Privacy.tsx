import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Lock, Mail } from "lucide-react";

const Privacy = () => {
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
                            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                            <p className="text-lg text-muted-foreground">
                                We respect your privacy. Here's a straightforward explanation of what we collect and how we use it.
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
                                Trezeal Technologies is an early-stage startup based in Pune, Maharashtra, India. We are not a large corporation — we are a small team building real solutions. This policy explains honestly how we handle any information you share with us through this website.
                            </p>
                        </motion.div>

                        {[
                            {
                                icon: Eye,
                                title: "What Information We Collect",
                                body: "The only personal information we collect is what you voluntarily give us — such as your name, email address, or any message you send through our contact form. We do not run any invasive tracking, third-party ad networks, or data brokers on this site. We may use basic analytics (like page visit counts) to understand how people use our site, but this is anonymous and non-identifiable.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "How We Use Your Information",
                                body: "We use the information you share purely to respond to your message or enquiry. We will not send you unsolicited marketing emails. We will not share your information with any third party. Simple as that.",
                            },
                            {
                                icon: Lock,
                                title: "Data Storage & Security",
                                body: "We are a startup and do not operate our own servers for storing contact data. Enquiries you submit may land in our email inbox. We take reasonable precautions to keep that secure, but we want to be transparent that we are not a certified enterprise-grade data processor. If you share sensitive information, please consider that context.",
                            },
                            {
                                icon: Mail,
                                title: "Your Rights & Contact",
                                body: "You can ask us at any time to delete any information you've shared with us and we will do so promptly. If you have any questions or concerns about this policy, please email us at trezeal@gmail.com and we'll get back to as soon as possible.",
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
                                <strong className="text-foreground">Note:</strong> Trezeal Technologies is currently an early-stage startup and is not a formally registered private limited company. This privacy policy is provided in good faith to be transparent about our data practices. We are committed to handling your information responsibly as we grow.
                            </p>
                        </motion.div>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;
