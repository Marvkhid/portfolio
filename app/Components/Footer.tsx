import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" pb-8 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white text-lg">
      {/* Marquee section */}
        {/* Summary */}
        <div className="pt-8 max-w-3xl mx-auto text-center px-2 sm:px-4">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-4 animate-fade-in-up">
            Building Beyond Code
          </h3>
          <p className="text-white text-sm sm:text-base leading-relaxed animate-fade-in delay-200">
            I thrive in fast-paced environments and adapt quickly to new technologies, tools, and team structures. 
            Whether building user interfaces, integrating APIs, or optimizing performance, I bring a problem-solving
             mindset and a commitment to clean, scalable code—always ready to contribute value across any role or stack.
          </p>
        </div>
      <div className="overflow-hidden">
        <div className="whitespace-nowrap animate-marquee py-2 text-center text-sm text-gray-300">
         <p className="text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse"> Thanks for checking up on me</p>
         <p className="text-lg sm font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">Awaiting your feedback!</p>
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
