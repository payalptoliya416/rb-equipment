import Image from "next/image";

function ContactUs() {
  return (
    <>
      <section className="relative -mt-32">
        <div
          className="absolute top-0 left-0 w-full h-full xl:h-[500px] bg-[url(/assets/main-bg.png)] bg-no-repeat bg-top -z-10"
          style={{ backgroundSize: "100% 100%" }}
        ></div>
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-12 pt-[150px] xl:pt-[100px] items-center">
            <div className="col-span-12 lg:col-span-6 mb-5 lg:mb-0">
              <h2 className="text-3xl md:text-[42px] leading-[48px] md:leading-[60px] font-extrabold mb-5">
                <span className="text-orange">Get in Touch </span>with RB {" "}  Equipment Sales
              </h2>
              <p className="text-para textbase leading-[24px] font-normal">
               Buy or Bid on high-quality machinery, tractors, and tools from trusted sellers. Whether you’re expanding your fleet or upgrading your equipment, RB Equipment Sales has you covered.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="flex justify-end">
                <Image
                  src="/assets/contact.png"
                  alt="Hero"
                  width={600}
                  height={389}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
