import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white p-4 sm:p-8">
      
      <header className="max-w-4xl mx-auto py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-start space-y-6">
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Hello, I'm <span className="text-blue-500">Souvik Biswas</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300">
            Web Developer & Digital Strategist
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl leading-relaxed">
            I lead a dynamic company focused on building high-performance, tailored websites and digital solutions for clients who demand excellence.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#services" 
              className="px-8 py-3 text-lg font-semibold text-gray-900 bg-blue-500 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              Our Services
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 text-lg font-semibold text-white border-2 border-gray-700 rounded-lg transition-colors hover:bg-gray-800 hover:border-blue-500 focus:outline-none focus:ring-4 focus:ring-gray-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      <section id="services" className="max-w-4xl mx-auto py-12 md:py-20">
        <h3 className="text-3xl font-bold mb-12 text-center text-blue-500">
          What We Do
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gray-800 rounded-xl shadow-2xl transition-all hover:ring-2 hover:ring-blue-500">
            <div className="text-4xl mb-4 text-blue-400">⚡</div>
            <h4 className="text-xl font-semibold mb-2">Custom Development</h4>
            <p className="text-gray-400">Building bespoke, scalable web applications from scratch.</p>
          </div>
          
          <div className="p-6 bg-gray-800 rounded-xl shadow-2xl transition-all hover:ring-2 hover:ring-blue-500">
            <div className="text-4xl mb-4 text-blue-400">🌐</div>
            <h4 className="text-xl font-semibold mb-2">Modern Websites</h4>
            <p className="text-gray-400">Creating fast, responsive, and SEO-optimized client websites.</p>
          </div>
          
          <div className="p-6 bg-gray-800 rounded-xl shadow-2xl transition-all hover:ring-2 hover:ring-blue-500">
            <div className="text-4xl mb-4 text-blue-400">💡</div>
            <h4 className="text-xl font-semibold mb-2">Digital Consulting</h4>
            <p className="text-gray-400">Guiding clients through technology stack and growth strategy.</p>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Home