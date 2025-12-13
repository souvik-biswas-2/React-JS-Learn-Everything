import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-full py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400">
            Building the Future of Web Development
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            The story of Souvik Biswas: Driven by passion, defined by quality.
          </p>
        </header>

        <section className="mb-16 p-8 bg-gray-800 rounded-xl shadow-2xl border-l-4 border-blue-500">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Mission: Code That Delivers</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Founded by Souvik Biswas, our company operates out of Siliguri with a simple, yet powerful mission: to craft digital solutions that are not just visually appealing, but are engineered for performance, scalability, and long-term success. We believe that great development is a partnership, and we commit to full transparency and collaboration on every project.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We specialize in modern frontend architectures, robust backend development, and cloud-native solutions, ensuring our clients receive a product ready for the demands of the modern web.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
            Core Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 bg-gray-800 rounded-lg">
              <span className="text-4xl block mb-2">⚛️</span>
              <h4 className="text-lg font-semibold text-white">React & Next.js</h4>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <span className="text-4xl block mb-2">🌐</span>
              <h4 className="text-lg font-semibold text-white">APIs & Node.js</h4>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <span className="text-4xl block mb-2">🎨</span>
              <h4 className="text-lg font-semibold text-white">Tailwind CSS</h4>
            </div>
            <div className="p-4 bg-gray-800 rounded-lg">
              <span className="text-4xl block mb-2">☁️</span>
              <h4 className="text-lg font-semibold text-white">Cloud Deployment</h4>
            </div>
            
          </div>
        </section>

        <div className="text-center mt-16 p-8 bg-blue-500/10 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-blue-400">Ready to start your project?</h3>
          <p className="text-gray-300 mb-6">
            If our mission aligns with your vision, let's collaborate on your next digital success.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Us Today
          </a>
        </div>

      </div>
    </div>
  );
}

export default About;