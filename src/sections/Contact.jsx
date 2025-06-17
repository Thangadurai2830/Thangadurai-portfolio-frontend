import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionTitle from "../components/SectionTitle";
import SocialLinks from "../components/SocialLinks";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.from(contactRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="contact" className="tg-contact-section py-20 bg-white">
      <div className="tg-contact-container container mx-auto px-6">
        <SectionTitle title="Contact" subtitle="Get in touch with me" />

        <div
          ref={contactRef}
          className="tg-contact-card max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md"
        >
          <form
            action="https://formspree.io/f/your-id" // Replace with actual ID
            method="POST"
            className="tg-contact-form grid grid-cols-1 gap-6"
          >
            {/* Name */}
            <div className="tg-form-group">
              <label
                htmlFor="contact-name"
                className="tg-form-label block text-gray-700 font-medium mb-2"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Thangadurai"
                className="tg-form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Email */}
            <div className="tg-form-group">
              <label
                htmlFor="contact-email"
                className="tg-form-label block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="tg-form-input w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Message */}
            <div className="tg-form-group">
              <label
                htmlFor="contact-message"
                className="tg-form-label block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                autoComplete="off"
                rows="5"
                placeholder="Write your message here..."
                className="tg-form-textarea w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="tg-submit-btn bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="tg-social-wrapper mt-10">
            <p className="tg-social-text text-center text-gray-600 mb-4">
              Or connect with me on:
            </p>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
