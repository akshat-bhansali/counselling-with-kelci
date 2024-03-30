import React from "react";

const IndiGroup = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="flex gap-2 m-8 rounded-3xl font-serif w-[80%] bg-white p-12">
      <div className="flex gap-2">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold py-5 text-gray-900">
            Individual/Group Counseling
          </h1>
          <div className="text-start p-4 text-gray-700">
      <div className="text-base pb-2">
        <section>
          <ul className="list-disc px-8">
            <li className="text-base pb-2">Individual counseling for personalized help with various problems and emotions.</li>
            <li className="text-base pb-2">Community therapy, a form of group therapy, focuses on learning and support from others.</li>
            <li className="text-base pb-2">Both types improve mental health: personal development in individual counseling, community understanding in group therapy.</li>
            <li className="text-base pb-2">We prioritize privacy to create a safe, judgment-free space for sharing.</li>
            <li className="text-base pb-2">Encouraging seeking help externally for natural threats to privacy or safety.</li>
            <li className="text-base pb-2">Parents/students can fill forms online or in the school office for counseling appointments.</li>
            <li className="text-base pb-2">Direct communication with counselors via email or phone is available.</li>
            <li className="text-base pb-2">Suggested assistance for students in need, ensuring prompt support.</li>
            <li className="text-base pb-2">Efficient access to help fosters a caring and understanding school community.</li>
          </ul>
        </section>

      </div>
    </div>
        </div>
        <img src="./indi.jpeg" className="w-[20rem]" />
      </div>
    </div>
      <div id="classguid"></div>
    </div>
  );
};

export default IndiGroup;