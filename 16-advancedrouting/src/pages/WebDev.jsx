import React from 'react';

const WebDev = () => {
  return (
    <div className="p-8 text-white">
      <h2 className="text-4xl font-extrabold mb-8 text-indigo-400 border-b border-indigo-700 pb-3">
        Web Development Stream
      </h2>
      
      <p className="text-lg mb-10 text-gray-300">
        Web Development is the process of creating and maintaining websites and web applications. It encompasses everything from designing the user interface to handling the server-side logic and database operations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">Frontend Development</h3>
          <p className="text-gray-400 mb-4">
            Focuses on the client-side, or everything that users visually see and interact with in their browser.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>HTML, CSS, JavaScript</li>
            <li>Frameworks (React, Vue, Angular)</li>
            <li>Responsive Design</li>
            <li>User Experience (UX)</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-red-400">Backend Development</h3>
          <p className="text-gray-400 mb-4">
            Focuses on the server-side, database, and application logic that powers the website from behind the scenes.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Server-side Languages (Node.js, Python, Java)</li>
            <li>Databases (SQL, MongoDB)</li>
            <li>APIs (REST, GraphQL)</li>
            <li>Security and Authentication</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Full Stack Development</h3>
          <p className="text-gray-400 mb-4">
            Involves working on both the Frontend and Backend, mastering all layers of web application creation.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>End-to-end application development</li>
            <li>Database management</li>
            <li>Deployment and Hosting</li>
            <li>DevOps Fundamentals</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-10 p-6 bg-gray-700 rounded-lg">
        <h4 className="text-xl font-semibold text-white mb-2">Want to Learn More?</h4>
        <p className="text-gray-300">
          Explore our learning paths for specific technologies like React, Django, or microservices architecture to start your journey.
        </p>
      </div>
    </div>
  );
};

export default WebDev;