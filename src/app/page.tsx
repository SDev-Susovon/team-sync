"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>TeamSync | Employee Management</title>
        <meta name="description" content="Modern employee management solution" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <nav className="flex justify-between items-center p-6">
          <div className="flex items-center space-x-2 animate-fade-in-left">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold text-blue-800">TeamSync</span>
          </div>
          <div className="animate-fade-in-right">
            <UserButton afterSignOutUrl="/" />
          </div>
        </nav>

        <main className="flex flex-col items-center justify-center px-4 py-12">
          <div className="text-center mb-12 animate-fade-in-down">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Modern <span className="text-blue-600">Employee</span> Management
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamline your workforce management with powerful tools for HR,
              team leaders, and employees in one unified platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            <div className="group animate-fade-in transition-all duration-300 delay-100">
              <Link
                href="/dashboard"
                className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Dashboard</h3>
                <p className="text-gray-600">
                  Access all employee data, analytics and management tools in one place.
                </p>
                <div className="mt-4 text-blue-600 font-medium flex items-center justify-center">
                  Go to Dashboard
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            </div>

            <div className="group animate-fade-in transition-all duration-300 delay-200">
              <div className="block p-8 bg-white rounded-xl shadow-lg border-2 border-blue-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Team Directory</h3>
                <p className="text-gray-600">
                  Search your entire organization with detailed employee profiles.
                </p>
                <div className="mt-4 text-indigo-600 font-medium flex items-center justify-center">
                  Coming Soon
                </div>
              </div>
            </div>

            <div className="group animate-fade-in transition-all duration-300 delay-300">
              <div className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Time Tracking</h3>
                <p className="text-gray-600">
                  Monitor attendance, time-off requests and working hours with precision.
                </p>
                <div className="mt-4 text-purple-600 font-medium flex items-center justify-center">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose TeamSync?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
              {[
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  description: "Built with Next.js for optimal performance"
                },
                {
                  icon: "🔒",
                  title: "Secure",
                  description: "Enterprise-grade security with Clerk authentication"
                },
                {
                  icon: "📊",
                  title: "Powerful Analytics",
                  description: "Make data-driven decisions with real-time insights"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/50 backdrop-blur-sm p-6 rounded-lg border border-gray-200 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <style jsx global>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out 0.2s forwards;
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
}