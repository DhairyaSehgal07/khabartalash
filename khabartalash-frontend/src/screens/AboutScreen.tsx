import React from "react";

const AboutUs = () => {
  const services = [
    "भारतमा आफन्ती नभएर या औषधि उपचार गर्न नपाएर मृत्युसँग लडिरहेका हरेक नेपालीहरूलाई कुनै सामाजिक संस्थाको माध्यमबाट औषधि उपचार गराई भारतको पन्जाब हरियाना युपीको बाटो हुँदै नेपालको कृष्णनगर बोर्डरसम्म विगत लामो समयदेखि यो सेवा प्रदान गर्दै आएका छौं।",
    "भारतको विभिन्न राज्यबाट नेपाल जानको लागि र नेपालको विभिन्न जिल्लाबाट भारत आउनको लागि तपाईँको व्यवस्थित सिट र आरामदायी यात्राको लागि हामीलाई सम्पर्क गर्नुहोस्।।",
    "नेपालदेखि भारतलाई आफ्नो कर्मक्षेत्र बनाएर आइसके पछि केही त रकम जोड्नु नै भाको होला। अब सहजै छिटो र छरितो आफ्नो नागरिकता वा बैंक को खातामा दुई मिनेटमै पैसा नेपाल पठाउनको लागि हामीलाई सम्झनुहोस।।।",
  ];
  return (
    <div className="bg-gray-100 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Welcome Section */}
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            Welcome to KhabarTalash
          </h1>
          <p className="text-lg text-gray-600">
            Your trusted source for news, stories, and insights. At
            KhabarTalash, we are dedicated to bringing you the latest and most
            accurate information.
          </p>
          <ul className="mt-4 text-left">
            {services.map((service, index) => (
              <li className="p-2" key={index}>
                <span className="font-bold">{index + 1}.</span> {service}
              </li>
            ))}
          </ul>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold text-gray-800">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            Our mission is to deliver unbiased, comprehensive, and timely news
            to our audience. We strive to empower individuals with knowledge and
            foster informed communities through honest journalism.
          </p>
        </section>

        {/* Meet the Team Section with Larger Card */}
        <section className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold text-gray-800">
            Meet the Team
          </h2>
          <div className="flex justify-center">
            <div className="max-w-md rounded-lg border bg-white p-8 text-center shadow-lg">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="mx-auto mb-4 h-40 w-40 rounded-full"
              />
              <h3 className="text-2xl font-bold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">Editor-in-Chief</p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="px-4 py-8">
          <h2 className="mb-6 text-3xl font-semibold text-gray-800">
            Contact Us
          </h2>

          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              Have questions or feedback? You can reach out to us through the
              following:
            </p>

            {/* Email Section */}
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">Email:</span>
              <a
                href="mailto:contact@khabartalash.com"
                className="text-blue-500 hover:underline"
              >
                khabartalash15@gmail.com
              </a>
            </div>

            {/* Nepal Contact Section */}
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">नेपाल सम्पर्क-:</span>
              <a
                href="tel:+9779769823841"
                className="text-blue-500 hover:underline"
              >
                +977 9769823841
              </a>
            </div>

            {/* India Contact Section */}
            <div className="flex items-center space-x-2">
              <span className="font-medium text-gray-700">भारत सम्पर्क-:</span>
              <a
                href="tel:+919872981511"
                className="text-blue-500 hover:underline"
              >
                +91 9872981511
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
