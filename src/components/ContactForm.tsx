"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 500));

    setSubmitted(true);
    setLoading(false);

    // Reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="rounded-xl border border-[#3d4751] bg-[#1d232b]/70 p-8 backdrop-blur">
      <h3 className="mb-6 text-2xl font-bold text-[#F0E9E6]">Напишите мне</h3>

      {submitted && (
        <div className="mb-6 rounded-lg bg-green-900/20 border border-green-800/40 p-4 text-sm text-green-300">
          ✓ Спасибо! Сообщение отправлено. Я свяжусь с вами в скором времени.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#d1c8c2] mb-2">
            Имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg bg-[#232a35] border border-[#3d4751] px-4 py-2 text-[#F0E9E6] placeholder-[#8a8480] focus:border-[#8ecfdf] focus:outline-none focus:ring-1 focus:ring-[#8ecfdf] transition-colors"
            placeholder="Ваше имя"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#d1c8c2] mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg bg-[#232a35] border border-[#3d4751] px-4 py-2 text-[#F0E9E6] placeholder-[#8a8480] focus:border-[#8ecfdf] focus:outline-none focus:ring-1 focus:ring-[#8ecfdf] transition-colors"
            placeholder="вашпочта@example.com"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#d1c8c2] mb-2">
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-lg bg-[#232a35] border border-[#3d4751] px-4 py-2 text-[#F0E9E6] placeholder-[#8a8480] focus:border-[#8ecfdf] focus:outline-none focus:ring-1 focus:ring-[#8ecfdf] transition-colors resize-none"
            placeholder="Ваше сообщение..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-gradient-to-r from-[#8ecfdf] to-[#5f6d82] px-6 py-3 font-semibold text-[#191F25] hover:shadow-lg hover:shadow-blue-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {loading ? "Отправка..." : "Отправить сообщение"}
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-8 space-y-3 text-sm text-[#b9b2ab]">
        <p className="flex items-center gap-2">
          <span className="text-[#8ecfdf]">✉</span>
          <a href="mailto:ilya@example.com" className="hover:text-[#F0E9E6] transition-colors">
            ilya@example.com
          </a>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-[#8ecfdf]">📍</span>
          Украина
        </p>
        <p className="flex items-center gap-2">
          <span className="text-[#8ecfdf]">☎</span>
          <a href="tel:+380676955953" className="hover:text-[#F0E9E6] transition-colors">
            +380 67 695 59 53
          </a>
        </p>
      </div>
    </div>
  );
}
