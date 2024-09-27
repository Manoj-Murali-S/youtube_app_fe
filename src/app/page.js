"use client"
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    file: null
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === 'file') {
      // Handle file input for video files
      const file = files[0];
      setForm((prevForm) => ({
        ...prevForm,
        file: file
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value
      }));
    }
  };

console.log(form)

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <div>
        <div>
          <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <textarea
            id="message"
            name="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">
            Upload video
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
            accept="video/*" // Accept only video files
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
