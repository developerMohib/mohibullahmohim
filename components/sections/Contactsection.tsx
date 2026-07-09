"use client";
import { FormEvent, useState } from "react";
import axios from "axios";
import axiosInstance from "../hooks/axiosInstance";
import HeadingText from "../common/HeadingText";

// Axios instance তৈরি করুন (optional but better)

export default function ContactSection() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };
        console.log('form data', formData)

        try {
            const res = await axiosInstance.post("/contact", formData);
            console.log(' res c', res)
            if (res.status === 200 || res.data.success === true) {
                setSuccessMessage(res.data.message);
                form.reset();
                setTimeout(() => {
                    setSuccessMessage("")
                }, 1500)
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.message || "Failed to send message");
            } else {
                setError("An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="md:pt-14 pt-10" id="contact">
            <HeadingText mainTitle={"Let's work "} highlightTitle={"together!"} mainDescription={"Turn ideas into robust applications."} highlightDescription={"Let's elevate digital landscapes together"} intro={"Hit up me"} />

            <div className="px-4 md:pt-18 pt-10">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Map & Contact Info */}
                    <div className="lg:w-1/2">
                        <div className="relative h-125 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
                            <iframe
                                title="map"
                                width="100%"
                                height="100%"
                                className="absolute inset-0"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28911.550461359584!2d91.38333297438518!3d25.069893628722102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750daf49ba21823%3A0x3180c8d4ddeb5b9b!2sSunamganj!5e0!3m2!1sen!2sbd!4v1724336359905!5m2!1sen!2sbd"
                                loading="lazy"
                                style={{
                                    filter: "grayscale(1) contrast(1.1) opacity(0.6)",
                                }}
                            />

                            <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                                            Address
                                        </h3>
                                        <p className="mt-2 text-slate-800">
                                            SP Bangla, Sunamganj, Bangladesh
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                                            Email
                                        </h3>

                                        <a
                                            href="mailto:mohibullahmohim2020@gmail.com"
                                            className="block mt-2 text-slate-800 hover:text-red-500 transition"
                                        >
                                            mohibullahmohim2020@gmail.com
                                        </a>

                                        <h3 className="mt-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                                            Phone
                                        </h3>

                                        <a
                                            href="tel:+8801706439736"
                                            className="block mt-2 text-slate-800 hover:text-red-500 transition"
                                        >
                                            +880 1706-439736
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-slate-800">
                            Get In Touch
                        </h2>

                        <p className="mt-3 text-slate-600">
                            Have a project in mind or want to discuss an idea?<br/>
                            Feel free to send me a message.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >
                            {error && (
                                <div className="p-3 rounded-lg bg-red-100 text-red-600">
                                    {error}
                                </div>
                            )}
                            {successMessage && (
                                <div className="p-3 rounded-lg bg-red-100 text-red-600">
                                    {successMessage}
                                </div>
                            )}

                            <input
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />

                            <textarea
                                name="message"
                                rows={6}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                                required
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full sm:w-auto px-8 py-3 bg-red-700 text-white rounded-lg hover:bg-red-500 transition duration-300 disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}