import React, { useState } from 'react';

import Marquee from "react-fast-marquee";

function Form() {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('date', selectedDate);
    formData.append('name', name);
    formData.append('phoneNumber', phoneNumber);
    formData.append('description', description);
    if (selectedDocument) formData.append('document', selectedDocument);
    if (selectedScreenshot) formData.append('screenshot', selectedScreenshot);

    try {
      const response = await fetch('https://yourapi.com/orders', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result); // Handle the response data as needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDocumentChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedDocument(e.target.files[0]);
    } else {
      setSelectedDocument(null);
    }
  };

  const handleScreenshotChange = (e) => {
    if (e.target.files.length > 0) {
      setSelectedScreenshot(e.target.files[0]);
    } else {
      setSelectedScreenshot(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#3c3836] text-[#ebdbb2] items-center justify-center p-3">

<Marquee className="p-2">
  I can be a React component, multiple React components, or just some text.
</Marquee>

      <form onSubmit={handleSubmit} className="rounded-lg border border-[#665c54] bg-[#3c3836] text-[#ebdbb2] shadow-sm w-full max-w-md p-4 sm:p-6 space-y-4">
        <h3 className="font-semibold tracking-tight text-lg">Place order</h3>
        <p className="text-sm text-[#bdae93]">You can upload Assignment, Practical and more.</p>
        
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-[#665c54] bg-[#3c3836] px-3 py-2 text-sm text-[#ebdbb2] placeholder-[#bdae93] focus:outline-none focus:ring-2 focus:ring-[#b8bb26]"
          placeholder="Name"
          type="text"
        />

        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="w-full rounded-md border border-[#665c54] bg-[#3c3836] px-3 py-2 text-sm text-[#ebdbb2] placeholder-[#bdae93] focus:outline-none focus:ring-2 focus:ring-[#b8bb26]"
          placeholder="Phone Number"
          type="text"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-md border border-[#665c54] bg-[#3c3836] px-3 py-2 text-sm text-[#ebdbb2] placeholder-[#bdae93] focus:outline-none focus:ring-2 focus:ring-[#b8bb26] h-24"
          placeholder="Description"
        />
     <label htmlFor="screenshot" className="block text-sm font-medium leading-none text-[#ebdbb2] cursor-pointer">
            Payment Screenshot
          </label>
        <input
          placeholder="Date"
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full rounded-md border border-[#665c54] bg-[#3c3836] text-[#ebdbb2] p-2 focus:outline-none focus:ring-2 focus:ring-[#b8bb26] appearance-none"
        />

        <div className="space-y-2">
     
          <input
            id="document"
            type="file"
            onChange={handleDocumentChange}
            className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#665c54] file:text-[#ebdbb2] cursor-pointer"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="screenshot" className="block text-sm font-medium leading-none text-[#ebdbb2] cursor-pointer">
            Payment Screenshot
          </label>
          <input
            id="screenshot"
            type="file"
            onChange={handleScreenshotChange}
            className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#665c54] file:text-[#ebdbb2] cursor-pointer"
          />
        </div>

        <button type="submit" className="inline-flex items-center justify-center w-full text-sm font-medium text-[#3c3836] bg-[#b8bb26] rounded-md h-9 px-3 hover:bg-[#98971a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b8bb26] disabled:opacity-50">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
