"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function ContactForm() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/"); // redirect to homepage
  };

  return (
    <div className="relative max-w-2xl mx-auto mt-10 p-8 bg-white shadow-2xl rounded-2xl border border-gray-200">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition"
        aria-label="Close form"
      >
        <X size={24} />
      </button>

      <h2 className="text-3xl font-bold text-gray-800 mb-4">Hire Me</h2>
      <p className="text-sm text-gray-600 mb-6">
        Kindly fill in the details below. I’ll get back to you within 24 hours.
      </p>

      <form
        action="https://formsubmit.co/adeniyimarv@gmail.com"
        method="POST"
        className="space-y-5"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Recruiter Message!" />
        <input type="hidden" name="_template" value="table" />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="recruiter_name"
            placeholder="e.g. Sarah Johnson"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            name="recruiter_email"
            placeholder="e.g. sarah@example.com"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Role You&apos;re Offering</label>
          <input
            type="text"
            name="role"
            placeholder="e.g. Frontend Developer"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
          <select
            name="duration"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">-- Select Duration --</option>
            <option value="1-2 weeks">1–2 weeks</option>
            <option value="1 month">1 month</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
            <option value="Long-term">Long-term / Full-time</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Budget ($USD)</label>
          <input
            type="number"
            name="budget"
            placeholder="e.g. 1000"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell me more about the project..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring focus:ring-blue-200"
          ></textarea>
        </div>

        <div className="flex justify-between items-center pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl"
          >
            Submit
          </button>

          <a
            href="https://wa.me/2348107387326"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 font-medium hover:underline"
          >
            💬 WhatsApp Me Directly
          </a>
        </div>
      </form>
    </div>
  );
}
