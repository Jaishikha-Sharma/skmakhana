import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f6f9f1] pt-28 sm:pt-32 pb-16 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3f5f23]">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-2 sm:mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Have any questions or need support? We're here to help you.
            Reach out to us using the details below.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

          {/* Info Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg p-5 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-[#3f5f23] mb-5">
              Contact Information
            </h3>

            <ul className="space-y-4 sm:space-y-5 text-gray-600 text-sm sm:text-base">
              <li className="flex items-start gap-3 sm:gap-4">
                <MapPin size={18} className="text-[#85aa52] mt-1 shrink-0" />
                <span>Sonipat, Haryana, India</span>
              </li>

              <li className="flex items-center gap-3 sm:gap-4">
                <Phone size={18} className="text-[#85aa52] shrink-0" />
                <span>+91 7027651908</span>
              </li>

              <li className="flex items-center gap-3 sm:gap-4">
                <Mail size={18} className="text-[#85aa52] shrink-0" />
                <span>support@skmakhana.com</span>
              </li>
            </ul>
          </div>

          {/* Map Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg overflow-hidden">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=sonipat,haryana&output=embed"
              className="w-full h-64 sm:h-80 border-0"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
