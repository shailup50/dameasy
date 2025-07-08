export default function ContactForm() {
    return (
      <section className="bg-black text-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-10 justify-between">
          {/* Left Text Block */}
          <div className="md:w-[55%] w-full">
            <h2 className="text-4xl md:text-5xl font-medium apply-font leading-tight text-[#C3272B] mb-4">
              LET’S CREATE THE FUTURE OF FOOD TOGETHER
            </h2>
            <p className="text-xl md:text-2xl text-white">
              Whether you’re just starting out or scaling
              up, we can be your trusted partner.
            </p>
          </div>

          {/* Form Block */}
          <div className="w-full md:w-[40%]">
          <form >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white "
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white "
              />
              <input
                type="text"
                placeholder="Mobile Number*"
                className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white "
                required
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full p-3 text-[#5B5B5B] font-medium outline-none bg-white "
                required
              />
            </div>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-3 text-[#5B5B5B] my-4 font-medium outline-none bg-white "
            ></textarea>

            <button
              type="submit"
              className="bg-[#F5A623] hover:bg-[#e0961e] text-lg text-black font-medium px-10 py-3 rounded transition-all"
            >
              Submit
            </button>
          </form>
          </div>
        </div>
      </section>
    );
  }
