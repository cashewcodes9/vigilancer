"use client";
import Image from 'next/image';
import { useState } from 'react';
import hero from '../../public/hero.png'
import project1 from '../../public/project-1.png';
import project2 from '../../public/project-2.png';
import project3 from '../../public/project-3.png';
import project4 from '../../public/project-4.png';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacyPolicy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://cegom-api.vercel.app/api/example-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.remove(privacyPolicy)),
      });
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '', privacyPolicy: false });
      } else {
        alert('An error occurred. Please try again.');
      }
    } catch (error) {
      alert(' Please try again.');
    }
  };

  const scrollToForm = () => {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">
              Build Your Brand<br />
              With #1 Hiring Expert 
              <h2 className="text-4xl font-bold underline text-blue-600 mb-0">
              Freelancer </h2> World
            </h2>
            
            <p className="text-gray-600 mb-6">
              Work with the best freelance talent from around the world on our secure flexible
              and cost-effective platform hiring expert freelancer world and you can contact
              us if you don't understand about this application for your asking in here
            </p>
            <button
              onClick={scrollToForm}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </button>
          </div>
          <div className="md:w-1/2 relative">
  <div className="aspect-[4/3] w-full">
      <div className="absolute inset-0 rounded-full scale-75 translate-x-1/4 translate-y-1/4"></div>
    </div>
    <div className="absolute inset-0 -left-6 -right-6 -top-6">
      <Image
        src={hero}
        alt="Freelancer"
        layout="fill"
        objectFit="contain"
        className="scale-110"
      />
    </div>
</div>
        </section>

        {/* Our Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl text-gray-600 font-bold text-center mb-2">Our Projects</h2>
          <p className="text-gray-600 text-center mb-8">
            We have been providing great flooring for service<br />
            problem solutions and finished the task
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div key={project1} className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src={project1}
                  alt={`Project 1`}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
            </div>
            <div key={project2} className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src={project2}
                  alt={`Project 2`}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
            </div>
            <div key={project3} className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src={project3}
                  alt={`Project 3`}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
            </div>
            <div key={project4} className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src={project4}
                  alt={`Project 4`}
                  width={600}
                  height={400}
                  className="h-auto"
                />
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Contact us</h2>
          <p className="text-gray-600 text-center mb-8">Do you have any questions?</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <textarea
              name="message"
              placeholder="Please ask your questions here"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md h-32"
              required
            ></textarea>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="privacyPolicy"
                id="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleInputChange}
                className="mr-2"
                required
              />
              <label htmlFor="privacyPolicy" className="text-sm text-gray-600">
                I have read and accept the privacy policy
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-blue-600 text-white text-center py-4 mt-16">
        <p>Coding Challenge Example Webpage</p>
      </footer>
    </div>
  );
}