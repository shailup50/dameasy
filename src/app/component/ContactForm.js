export default function ContactForm() {
    return (
      <section className="bg-black text-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 ">
          {/* Left Text Block */}
          <div className="md:w-[80%]">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#C3272B] mb-4">
              LET’S CREATE THE FUTURE OF FOOD TOGETHER
            </h2>
            <p className="text-xl md:text-2xl text-white">
              Whether you’re just starting out or scaling
              up, we can be your trusted partner.
            </p>
          </div>

          {/* Form Block */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white rounded"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white rounded"
              />
              <input
                type="text"
                placeholder="Mobile Number*"
                className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white rounded"
                required
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white rounded"
                required
              />
            </div>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white rounded"
            ></textarea>

            <button
              type="submit"
              className="bg-[#F5A623] hover:bg-[#e0961e] text-lg text-black font-medium px-10 py-3 rounded transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
