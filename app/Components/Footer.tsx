import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-lg">
      {/* Marquee section */}
      <div className="overflow-hidden border-t border-gray-700">
        <div className="whitespace-nowrap animate-marquee py-2 text-center text-sm text-gray-300">
         <p> Thanks for checking up on me 😊</p>
         <p>Awaiting your feedback!</p>
        </div>
      </div>

      {/* Footer main content */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-400 mt-4 gap-2">
        <p className="text-xs">&copy; {new Date().getFullYear()} Adeniyi Emmanuel Marvellous. All rights reserved.</p>

        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/adeniyi-emmanuel-marvellous"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Marvkhid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </Link>
          <Link
            href="mailto:adeniyimarv@gmail.com"
            className="hover:text-white transition-colors duration-200"
          >
            Mail me
          </Link>
        </div>
      </div>
    </footer>
  );
}
