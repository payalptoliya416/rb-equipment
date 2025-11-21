
import Image from "next/image";

function Hero() {
  return (
    <section className="relative -mt-32">
            <div
              className="absolute top-0 left-0 w-full h-full lg:h-[700px] bg-[url(/assets/main-bg.png)] bg-no-repeat bg-top -z-10"
              style={{ backgroundSize: "100% 100%" }}
            ></div>
            <div className="container-custom mx-auto">
              <div className="grid grid-cols-12 pt-[180px]">
                <div className="col-span-12 lg:col-span-5">
                  <h4 className="text-gray text-lg xl:text-xl font-bold mb-4 xl:mb-6  relative after:absolute after:top-3 after:left-0 after:bg-gray after:w-[15px] after:h-[2px] pl-5 after:rounded-full">
                     Welcome to RB EQUIPMENT SALES
                  </h4>
                  <h2 className="text-2xl sm:text-4xl xl:text-[50px] font-extrabold text-gray  sm:leading-[52px] xl:leading-[68px] mb-5">
                    Reliable <span className="text-orange">Industrial</span> &{" "}
                    <span className="text-orange">Farm Equipment</span> Sales &
                    Auctions
                  </h2>
                  <p className="text-para text-base font-normal mb-8 leading-[26px]">
                    Buy or Bid on high-quality machinery, tractors, and tools from
                    trusted sellers. Whether you’re expanding your fleet or
                    upgrading your equipment, RB Equipment Sales has you covered.
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="py-3 px-6 text-white bg-green rounded-lg">
                      Buy Now
                    </button>
                    <button className="py-3 px-6 text-green rounded-lg border border-green">
                      Bid Now
                    </button>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-7">
                  <Image
                    src="/assets/zasi.png"
                    alt="Hero"
                    width={600}
                    height={400}
                    className="w-full h-auto mt-16"
                  />
                </div>
              </div>
            </div>
    </section>
  )
}

export default Hero
