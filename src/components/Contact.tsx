import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!form.current) return;

    const name = form.current?.querySelector<HTMLInputElement>('input[name="name"]')?.value;
    const email = form.current?.querySelector<HTMLInputElement>('input[name="email"]')?.value;
    const message = form.current?.querySelector<HTMLTextAreaElement>('textarea[name="message"]')?.value;

    if (!name || !email || !message) {
      setStatus("Please fill in all fields with valid data.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message || !emailRegex.test(email)) {
      setStatus("Please fill in all fields with a valid email.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 pt-40 pb-[8rem] bg-[#fdf8f3] text-center dark:bg-gray-900"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Contact Me
        </h2>

        <a
          href="mailto:vtantravahi@gmail.com"
          className="text-2xl text-blue-600 hover:underline block mb-1"
        >
          vtantravahi@gmail.com
        </a>
        <p className="text-gray-600 text-sm mb-10 dark:text-gray-400">
          Feel free to contact me with any inquiries or questions!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full border-b border-blue-500 bg-transparent focus:outline-none focus:border-blue-700 py-2 text-gray-800 dark:text-white placeholder:text-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full border-b border-blue-500 bg-transparent focus:outline-none focus:border-blue-700 py-2 text-gray-800 dark:text-white placeholder:text-gray-500"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
            className="w-full border-b border-blue-500 bg-transparent focus:outline-none focus:border-blue-700 py-2 text-gray-800 dark:text-white placeholder:text-gray-500"
          ></textarea>

          <button
            type="submit"
            className="mt-4 border border-blue-500 text-blue-500 px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all"
          >
            Submit
          </button>

          {status && (
            <p className="text-sm mt-4 text-gray-700 dark:text-gray-300">
              {status}
            </p>
          )}
        </form>

        <div className="mt-12 flex justify-center gap-8 text-gray-500 dark:text-gray-400">
          <a
            href="https://linkedin.com/in/venkateshtantravahi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/venkateshtantravahi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-black dark:hover:text-white"
          >
            <Github />
          </a>
          <a
            href="mailto:vtantravahi@gmail.com"
            aria-label="Email"
            className="hover:text-red-500"
          >
            <Mail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
