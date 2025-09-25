import React, { useState } from "react";

const facultyData = [
  { name: "Dr. Vindhya P Malagi", designation: "Professor & Head", qualification: "B.E, M. Tech, Ph.D" },
  { name: "Dr. Aruna M G", designation: "Professor", qualification: "B.E, M.Tech, Ph.D" },
  { name: "Dr. Reshma S", designation: "Associate Professor", qualification: "B.E, M.Tech, Ph.D" },
  { name: "Dr. Kusumika Krori Dutta", designation: "Associate Professor", qualification: "Ph.D" },
  { name: "Kavya D N", designation: "Assistant Professor", qualification: "B.E, M.Tech" },
  { name: "Ramya K", designation: "Assistant Professor", qualification: "B.E, M.Tech" },
  { name: "Ensteih Silvia", designation: "Assistant Professor", qualification: "B.E, M.Tech" },
  { name: "Deepshree Buchade", designation: "Assistant Professor", qualification: "B.E, M.Tech" },
  { name: "Anupama Vijaykumar", designation: "Assistant Professor", qualification: "M.Tech, (Ph.D)" },
  { name: "Apeksha K Gowda", designation: "Assistant Professor", qualification: "B.E., M.Tech" }
];

const designations = [
  "All",
  "Professor & Head",
  "Professor",
  "Associate Professor",
  "Assistant Professor"
];

function FacultyCard({ name, designation, qualification }) {
  return (
    <div className="bg-gradient-to-r from-yellow-300 via-pink-300 to-red-300 shadow-lg rounded-xl p-6 m-4 w-72 transform transition hover:scale-105">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-gray-700">{designation}</p>
      <p className="mt-2 text-sm text-gray-600">Qualification: {qualification}</p>
    </div>
  );
}

function FacultyList() {
  const [filter, setFilter] = useState("All");

  const filteredFaculty = facultyData.filter(f => {
    if (filter === "All") return true;
    return f.designation === filter;
  });

  return (
    <section id="faculty" className="pt-16 pb-16 px-4 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">Our Faculty</h2>
        <div className="mb-6">
          {designations.map(desig => (
            <button
              key={desig}
              onClick={() => setFilter(desig)}
              className={`mx-2 px-4 py-2 rounded-full transition ${
                filter === desig
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-800 border border-gray-300 hover:bg-indigo-200"
              }`}
            >
              {desig}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center">
          {filteredFaculty.map((fac, idx) => (
            <FacultyCard
              key={idx}
              name={fac.name}
              designation={fac.designation}
              qualification={fac.qualification}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FacultyList;