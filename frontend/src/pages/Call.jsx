import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const employees = [
  {
    id: 1,
    name: "vigneshwaran",
    age: 21,
    gender: "Male",
    phNo: "9150813942",
  },
  {
    id: 2,
    name: "satvik",
    age: 21,
    gender: "male",
    phNo: "8525090976",
  },
  {
    id: 3,
    name: "jayadeep",
    age: 21,
    gender: "Male",
    phNo: "7667252510",
  },
  {
    id: 4,
    name: "balaji",
    age: 25,
    gender: "male",
    phNo: "9342874173",
  },
  {
    id: 5,
    name: "ashok",
    age: 29,
    gender: "Male",
    phNo: "9824543245",
  },
  {
    id: 6,
    name: "Sophia",
    age: 24,
    gender: "Female",
    phNo: "9532484521",
  },
];

const Call = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 flex flex-col items-center pt-20 px-4 pb-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 drop-shadow-md">Call an Employee</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="bg-white border border-gray-200 rounded-2xl p-6 w-80 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">👤 {employee.name}</h2>
            <p className="text-gray-600">🎂 Age: {employee.age}</p>
            <p className="text-gray-600">⚧ Gender: {employee.gender}</p>
            <p className="text-gray-600">📞 Ph No: {employee.phNo}</p>
            <a
              href={`tel:${employee.phNo}`}
              className="mt-4 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition duration-200"
            >
              <FaPhoneAlt />
              Call
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Call;
