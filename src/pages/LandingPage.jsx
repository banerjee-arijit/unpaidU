import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-black">unpaid-U</div>
            </div>

            <Link to={"/auth"}>
              <Button className="bg-black text-white hover:bg-gray-800 transition-colors px-6 py-2">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      </header>
      <section className="bg-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Say No to{" "}
            <span className="relative text-red-600">
              Paid
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-300 transform -rotate-1"></div>
            </span>{" "}
            Courses
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Access high-quality education without breaking the bank. Create,
            share, and enroll in courses that are completely free.
            <span>Knowledge should be accessible to everyone, everywhere.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={"/auth"}>
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 transition-colors px-8 py-4 text-lg"
              >
                Start Learning
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white transition-colors px-8 py-4 text-lg"
            >
              Behind the Vision
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                100+
              </div>
              <div className="text-gray-600">Free Courses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                10K+
              </div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black mb-2">
                50+
              </div>
              <div className="text-gray-600">Instructors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
