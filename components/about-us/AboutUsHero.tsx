import Image from "next/image"


function AboutUsHero() {
  return (
  <section className="relative -mt-32">
        <div
          className="absolute top-0 left-0 w-full h-full xl:h-[580px] bg-[url(/assets/main-bg.png)] bg-no-repeat bg-top -z-10" style={{ backgroundSize: "100% 100%" }} ></div>
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-12 pt-[150px] md:pt-[130px] items-center">
            <div className="col-span-12 lg:col-span-6 mb-5 lg:mb-0">
              <h2 className="text-3xl md:text-[42px] leading-[48px] md:leading-[60px] font-extrabold mb-5">
            Your<span className="text-orange">Trusted Partner </span>{" "}
                in Equipment Sales
              </h2>
              <p className="text-para textbase leading-[24px] font-normal">
             RB Equipment Sales connects buyers and sellers with reliable industrial machinery, tractors, and tools through seamless buying, selling, and bidding experiences.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="flex justify-end">
                <Image
                  src="/assets/about-hero.png"
                  alt="Hero"
                  width={600}
                  height={389}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AboutUsHero
