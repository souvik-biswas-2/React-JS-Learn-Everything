import React from 'react';

const Devops = () => {
  return (
    <div className="p-8 text-white">
      <h2 className="text-4xl font-extrabold mb-8 text-cyan-400 border-b border-cyan-700 pb-3">
        DevOps Stream
      </h2>
      
      <p className="text-lg mb-10 text-gray-300">
        DevOps (Development and Operations) is a set of practices that combines software development and IT operations. Its main goal is to shorten the systems development life cycle and provide continuous delivery with high software quality.
      </p>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-pink-400">Continuous Integration/Delivery (CI/CD)</h3>
          <p className="text-gray-400 mb-4">
            The backbone of DevOps, focusing on automating the building, testing, and deployment of applications.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Jenkins, GitLab CI, GitHub Actions</li>
            <li>Automated Testing (Unit, Integration)</li>
            <li>Artifact Management</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-orange-400">Infrastructure as Code (IaC)</h3>
          <p className="text-gray-400 mb-4">
            Managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Terraform, CloudFormation</li>
            <li>Ansible, Chef, Puppet</li>
            <li>Version Control for Infrastructure</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Containers & Orchestration</h3>
          <p className="text-gray-400 mb-4">
            Packaging applications into isolated environments (containers) and managing them at scale across various hosts.
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
            <li>Docker for containerization</li>
            <li>Kubernetes for orchestration (K8s)</li>
            <li>Microservices Architecture</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-10 p-6 bg-gray-700 rounded-lg">
        <h4 className="text-xl font-semibold text-white mb-2">The Culture</h4>
        <p className="text-gray-300">
          DevOps is not just tools; it’s a culture of collaboration, transparency, and automation between development, QA, and operations teams to deliver value faster and more reliably.
        </p>
      </div>
    </div>
  );
};

export default Devops;