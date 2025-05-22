"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export default function ContactForm() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-blue-100 px-4">
      <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
        {/* Background Image ONLY on the form */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/marv.jpg')`,
            zIndex: 0,
          }}
        ></div>

        {/* Form container with solid readable text and visible placeholder */}
        <div className="relative z-10 w-full bg-white/85 p-8">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-800 hover:text-red-600 transition"
            aria-label="Close form"
          >
            <X size={24} />
          </button>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hire Me</h2>
          <p className="text-sm text-gray-800 mb-6">
            Kindly fill in the details below. I&apos;ll get back to you within 24 hours.
          </p>

          <form
            action="https://formsubmit.co/adeniyimarv@gmail.com"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Recruiter Message!" />
            <input type="hidden" name="_template" value="table" />

            {[
              {
                label: "Full Name",
                name: "recruiter_name",
                type: "text",
                placeholder: "Samuel Coker",
              },
              {
                label: "Email Address",
                name: "recruiter_email",
                type: "email",
                placeholder: "e.g. sarah@example.com",
              },
              {
                label: "Role You're Offering",
                name: "role",
                type: "text",
                placeholder: "e.g. Frontend Developer",
              },
              {
                label: "Budget ($USD)",
                name: "budget",
                type: "number",
                placeholder: "e.g. 1000",
              },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-800 mb-1">{field.label}</label>
                <input
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-700 bg-blue-50  focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">Duration</label>
              <select
                name="duration"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 bg-blue-50 focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">-- Select Duration --</option>
                <option value="1-2 weeks">1 to 2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="Long-term">Long-term / Full-time</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 mb-1">Additional Details</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me more about the project..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder-gray-700 bg-blue-50 focus:outline-none focus:ring focus:ring-blue-200"
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
      </div>
    </div>
  );
}
