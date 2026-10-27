import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaArrowRight } from "react-icons/fa";
export default function Contact() {
    const [status, setStatus] = useState("");
    const [sending, setSending] = useState(false);
    async function submit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const {
            VITE_EMAILJS_SERVICE_ID: service,
            VITE_EMAILJS_TEMPLATE_ID: template,
            VITE_EMAILJS_PUBLIC_KEY: key,
        } = import.meta.env;
        if (!service || !template || !key) {
            const values = new FormData(form);
            window.location.href = `mailto:udbhavmsr@gmail.com?subject=${encodeURIComponent(values.get("subject"))}&body=${encodeURIComponent(`${values.get("message")}\n\nFrom: ${values.get("name")} (${values.get("email")})`)}`;
            setStatus(
                "Your email app will open with your message. You can also email me directly at udbhavmsr@gmail.com.",
            );
            return;
        }
        setSending(true);
        try {
            await emailjs.sendForm(service, template, form, key);
            setStatus("Message sent. Thank you for reaching out!");
            form.reset();
        } catch {
            setStatus(
                "Your message could not be sent. Please email udbhavmsr@gmail.com directly.",
            );
        } finally {
            setSending(false);
        }
    }
    return (
        <section className="contact-section" id="contact">
            <div className="section wrap">
                <p className="eyebrow">06 / What’s next?</p>
                <div className="contact-layout">
                    <div>
                        <h2>
                            Good things
                            <br />
                            start with
                            <br />
                            <em>a conversation.</em>
                        </h2>
                        <p>
                            I'm actively looking for Full Stack Developer
                            Internship opportunities and exciting projects. Feel
                            free to reach out if you'd like to collaborate or
                            discuss opportunities.
                        </p>
                        <a
                            className="email-link"
                            href="mailto:udbhavmsr@gmail.com"
                        >
                            udbhavmsr@gmail.com ↗
                        </a>
                        <p className="small-label">Uttar Pradesh, India</p>
                        <div className="contact-socials">
                            <a
                                href="https://github.com/Udbhav1105"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub ↗
                            </a>
                            <a
                                href="https://www.linkedin.com/in/udbhav-mishra-7a567a286/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn ↗
                            </a>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={submit}>
                        <div className="form-pair">
                            <label>
                                Your name
                                <input
                                    name="name"
                                    autoComplete="name"
                                    placeholder="What should I call you?"
                                    required
                                />
                            </label>
                            <label>
                                Email address
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    required
                                />
                            </label>
                        </div>
                        <label>
                            Subject
                            <input
                                name="subject"
                                placeholder="A project, an opportunity, a hello…"
                                required
                            />
                        </label>
                        <label>
                            Your message
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Tell me what you have in mind."
                                required
                            />
                        </label>
                        <button className="button lime" disabled={sending}>
                            {sending ? "Sending…" : "Send message"}
                            <FaArrowRight />
                        </button>
                        <p className="form-status" role="status">
                            {status}
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
