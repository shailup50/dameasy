import Image from "next/image";
import product1 from "../../asserts/images/home/blog.webp"


const blogData = [
  {
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed",
    image: product1,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed",
    image: product1,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed",
    image: product1,
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed",
    image: product1,
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#f4f4f4] py-14 md:py-20 px-4">
      <h2 className="text-5xl md:text-6xl font-bold text-center text-black mb-16 mb:24">BLOGS</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogData.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden bg-[[#C3272B]] shadow-md transition-all duration-300 border-2 border-white h-fit ${
              (index === 1 || index === 3) ? "lg:mt-20" : ""
            }`}
          >
            <div className="relative w-full h-52 bg-[#C3272B]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover border-b-2 rounded-xl border-white"
              />
            </div>
            <div className="bg-[#C3272B] p-5 text-white text-center">
              <p className="text-base font-normal mb-6 leading-snug">{item.title}</p>
              <button className="bg-black rounded text-white px-4 py-2 text-xs uppercase font-btn">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
