import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-full py-12 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400">
            A Passion for Digital Excellence
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            My company and I specialize in turning complex challenges into seamless, high-performing web solutions.
          </p>
        </header>

        <section className="mb-16 p-8 bg-gray-800 rounded-xl shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="w-48 h-48 mx-auto bg-gray-700 rounded-full flex items-center justify-center border-4 border-blue-500">
                <span className="text-3xl font-bold text-gray-400">SB</span>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Meet Souvik Biswas</h2>
              <p className="text-gray-400 leading-relaxed">
                I'm Souvik Biswas, and my journey began with a fascination for clean code and user experience. As a dedicated web developer, I transitioned into leading a company with one core mission: delivering superior web presence that drives client growth. I handle both the technical architecture and the business strategy behind every project.
              </p>
              <p className="text-gray-400 leading-relaxed mt-3">
                My personal focus areas are modern JavaScript frameworks, robust backend integrations, and ensuring every site we build is highly accessible and performant.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
            Our Development Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="p-6 bg-gray-800 rounded-xl transition-all hover:bg-gray-700">
              <span className="text-4xl block mb-3">🛠️</span>
              <h4 className="text-xl font-semibold mb-2">Quality Code</h4>
              <p className="text-gray-400">We prioritize maintainable, documented, and future-proof code standards.</p>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-xl transition-all hover:bg-gray-700">
              <span className="text-4xl block mb-3">🚀</span>
              <h4 className="text-xl font-semibold mb-2">Performance Focus</h4>
              <p className="text-gray-400">Every website is optimized for speed, SEO, and lightning-fast loading times.</p>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-xl transition-all hover:bg-gray-700">
              <span className="text-4xl block mb-3">🤝</span>
              <h4 className="text-xl font-semibold mb-2">Client Partnership</h4>
              <p className="text-gray-400">We embed ourselves in your team, ensuring a truly collaborative development process.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default About;