import Image from "next/image";
import Banner from "./component/Banner";
import logo from "./../asserts/images/logo.png"
import banner from "../asserts/images/banner.webp"
import Marquee from "./component/Marquee";
import WeAre from "./component/WeAre";
import aboutimg from "../asserts/images/home/img1.webp"
import img1 from "../asserts/images/home/image1.webp"
import img2 from "../asserts/images/home/image2.webp"
import img3 from "../asserts/images/home/image3.webp"
import step from "../asserts/images/home/step.svg"
import ProductSlider from "./component/ProductSlider";
import BlogSection from "./component/BlogSection";
// import ContactForm from "./component/ContactForm";
// import LocationSection from "./component/LocationSection";









export default function Home() {
  const title =  `Contract Manufacturing <br/> Made Easy`

  const items = [
    "Custom CRAFTED",
    "SCALE READY",
    "QUALITY DRIVEN",
    "Custom CRAFTED",
    "Custom CRAFTED",
    "SCALE READY",
    "QUALITY DRIVEN",
    "Custom CRAFTED",
    "Custom CRAFTED",
    "SCALE READY",
    "QUALITY DRIVEN",
    "Custom CRAFTED",
  ];

  const about = {
    title: "We’re Dameasy",
    subtitle: "Your behind-the-scenes powerhouse for F&B innovation",
    description: `We team up with bold D2C brands and legacy players alike to bring fresh
    ideas to life, faster. Whether you're scaling a bestseller or crafting your next big launch, we handle the heavy lifting from smart manufacturing to game-changing packaging; so you can stay focused on growth.`,
    img: aboutimg
  }

  const deliverData = [
    {
      title: "Innovative R&D",
      description: "Transform bold ideas into breakthrough products with our expert formulation and food science teams.",
      image: img1,
    },
    {
      title: "Smart Packaging",
      description: "Elegant, functional, shelf ready packaging that elevates your brand and enhances customer experience.",
      image: img2,
    },
    {
      title: "Scalable Production",
      description: "State of the art facilities, engineered for reliability, scalability and speed; without compromise.",
      image: img3,
    },
  ];



  return (
    <>
      <Banner banner={banner} logo={logo} title={title} />
      <Marquee texts={items} speed={25} />
      <main className="bg-[#f5f5f5]">


        <WeAre title={about.title} subtitle={about.subtitle} description={about.description} img={about.img} />

        <section className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <h2 className="text-5xl md:text-[80px] font-semibold mb-0 md:mb-4 text-[#C3272B]">3 WAYS</h2>
          <h3 className="text-5xl md:text-[80px] font-semibold mb-8 md:mb-10 text-black">HOW WE DELIVER</h3>

          <div className="md:space-y-0 space-y-8">
            {deliverData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col bg-[#C3272B] rounded ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                  } items-center gap-0 md:gap-0`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full"
                  />
                </div>

                <div className="w-full md:w-1/2  text-white rounded-md p-6 md:p-8 relative overflow-hidden">
                  <div className="flex items-start gap-3">

                    <div className="pl-6 border-l-2 border-white circle_after">
                      <h2 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h2>
                      <p className="text-base font-medium md:text-lg">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="max-w-7xl mx-auto px-4 py-12">

          <h2 className="text-5xl md:text-[80px] font-semibold mb-0 md:mb-4 text-[#C3272B]">WHERE IDEAS</h2>
          <h3 className="text-5xl md:text-[80px] font-semibold mb-8 md:mb-10 text-black">MEET EXECUTION</h3>

          <Image src={step} alt="icons" className="py-0 md:py-16 w-full md:h-auto" />

          <p className="text-center text-4xl md:text-5xl mt-12 mb-8 md:mb-10 font-medium text-[#C3272B]">
            Your Idea, Our Drive, Straight to Shelf!
          </p>
        </section>
        <ProductSlider />
        <BlogSection/>

      </main>

    </>
  );
}
