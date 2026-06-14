"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            setLoading(false);
            setSuccess(true);

            setForm({
                name: "",
                email: "",
                message: "",
            });

            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setLoading(false);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <>
            {/* Loading Overlay */}
            {loading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/20 backdrop-blur-md">
                    <div className="h-20 w-20 animate-spin rounded-full border-4 border-white border-t-transparent"></div>

                    <p className="mt-5 text-lg font-semibold text-white">
                        Sending Message...
                    </p>
                </div>
            )}

            {/* Success Overlay */}
            {success && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-md">
                    <img
                        src="/success.gif"
                        alt="Success"
                        className="w-72 sm:w-96"
                    />
                </div>
            )}

            {/* Main Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

                    {/* Left GIF */}
                    <div className="flex justify-center">
                        <img
                            src="/contact.gif"
                            alt="Contact Animation"
                            className="w-full max-w-[280px] sm:max-w-sm md:max-w-md"
                        />
                    </div>

                    {/* Right Form */}
                    <div className="w-full">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left">
                            Let's Connect
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-gray-300 p-4 bg-transparent outline-none focus:border-black transition"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-gray-300 p-4 bg-transparent outline-none focus:border-black transition"
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows={6}
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full rounded-xl border border-gray-300 p-4 bg-transparent resize-none outline-none focus:border-black transition"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full sm:w-auto px-8 py-3 rounded-xl border border-black font-medium hover:bg-black hover:text-white transition duration-300 disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}