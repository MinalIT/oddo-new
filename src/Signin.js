import React, { useState, useEffect } from 'react';

import img from '../src/image/girl.png';

export default function Signin() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // Handle change in input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    setSubmittedData(formData);
  };

  // useEffect to log submitted data
  useEffect(() => {
    if (submittedData) {
      console.log('Form Data Submitted:', submittedData);
    }
  }, [submittedData]);

  return (
    <div className="p-4">
      <img src={img} alt="girl" align="right" height={100} width={1000} />
      <h1 className="text-2xl font-bold mb-4">Sign in to Around</h1>
      <p className="mb-4">
        Don't have an account yet?<br />
        <a href="/about" rel="noopener noreferrer" className="text-blue-500 underline">
          Click Here
        </a>{' '}
        for more information.
      </p><br/>

      <form align="center" onSubmit={handleSubmit} className="border-4 border-Black-500 w-80 justify-center" >
        <div className="mx-5"  >
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            textalign="right"
            className="mt-1 w-full p-2 border border-gray-300 rounded-md shadow-sm "
          />
        </div>
        <div className="mx-5"  >
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mx-5"  >
          <label htmlFor="age" className="block text-gray-700" >
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm " 
          />
        </div>
        <button
          type="submit"
          className="p-2 mx-2 my-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {/* Display submitted form data in a table */}
      {submittedData && (
        <div className="mt-8">
          <h2 className="text-xxl font-bold mb-4" align="left" >Form Data</h2>
          <table className="min-w-1/3 divide-y divide-gray-200 border border-gray-300" align='left'>
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                  Name
                </th>
                <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                  Email
                </th>
                <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                  Age
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-2 py-2 whitespace-nowrap border border-gray-300">
                  {submittedData.name}
                </td>
                <td className="px-2 py-2 whitespace-nowrap border border-gray-300">
                  {submittedData.email}
                </td>
                <td className="px-2 py-2 whitespace-nowrap border border-gray-300">
                  {submittedData.age}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
