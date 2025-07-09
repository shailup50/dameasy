'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    message: '',
  });

  const [successMsg, setSuccessMsg] = useState('');
  const [submitting, setSubmitting] = useState(false); // Track submit state

  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => setSuccessMsg(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let val = value;

    if (name === 'mobile') {
      val = val.replace(/[^0-9]/g, '').slice(0, 10); // Allow only digits, max 10
    }

    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { firstName, mobile, email, message } = formData;

  if (!firstName || !mobile || !email || !message) {
    alert('Please fill all required fields.');
    return;
  }

  if (mobile.length !== 10) {
    alert('Mobile number must be exactly 10 digits.');
    return;
  }

  const emailPattern = /\S+@\S+\.\S+/;
  if (!emailPattern.test(email)) {
    alert('Invalid email format.');
    return;
  }

  setSubmitting(true); // Disable the button

  try {
    const res = await axios.post('/testmail', formData);

    if (res.data.success) {
      setSuccessMsg('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        message: '',
      });
    } else {
      alert(res.data.message || 'Something went wrong');
    }
  } catch (error) {
    console.error(error);
    alert('Something went wrong');
  } finally {
    setSubmitting(false); // Re-enable the button
  }
};


  return (
    <section className="bg-black text-white py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-10 justify-between">
        {/* Left Text Block */}
        <div className="md:w-[55%] w-full">
          <h2 className="text-4xl md:text-5xl font-medium apply-font leading-tight text-[#C3272B] mb-4">
            LET’S CREATE THE FUTURE OF FOOD TOGETHER
          </h2>
          <p className="text-xl md:text-2xl text-white">
            Whether you’re just starting out or scaling up, we can be your trusted partner.
          </p>
        </div>

        {/* Form Block */}
        <div className="w-full md:w-[40%]">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white"
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number*"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white"
                required
              />
            </div>

            <textarea
              rows="4"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 text-[#5B5B5B] my-4 font-medium outline-none bg-white"
              required
            ></textarea>

            <button
              type="submit"
              disabled={submitting}
              className={`bg-[#F5A623] hover:bg-[#e0961e] text-lg text-black font-medium px-10 py-3 rounded transition-all ${
                submitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>

            {successMsg && (
              <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow text-sm">
                <strong>Success!</strong> {successMsg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
