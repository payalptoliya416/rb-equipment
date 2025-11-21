import Image from "next/image";

function CoreServices() {
  return (
    <section className="container-custom mx-auto my-20 lg:my-[110px]">
      <div className="text-center">
        <h2 className="text-3xl md:text-[38px] md:leading-[38px] mb-10 lg:mb-20 font-extrabold text-gray">
          Core <span className="text-orange">Services</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]  items-stretch">
          <div className="h-full flex justify-center items-center flex-col border border-light-gray rounded-xl p-[25px]  text-center">
            <div className="w-20 h-20 rounded-[10px] flex justify-center items-center mb-[30px] bg-green">
              <Image src="/assets/e1.svg" alt="icon" width={40} height={40} />
            </div>
            <h3 className="text-gray mb-[10px] text-lg leading-[20px] font-semibold">
              Equipment Sales
            </h3>
            <p className="text-text-gray text-base font-normal">
              Each listing includes specs, verified images, and fair pricing for
              confident purchases.
            </p>
          </div>
          <div className="h-full flex justify-center items-center flex-col border border-light-gray rounded-xl p-[25px]  text-center">
            <div className="w-20 h-20 rounded-[10px] flex justify-center items-center mb-[30px] bg-green">
              <Image src="/assets/e6.svg" alt="icon" width={40} height={40} />
            </div>
            <h3 className="text-gray mb-[10px] text-lg leading-[20px] font-semibold">
             Equipment Auctions
            </h3>
            <p className="text-text-gray text-base font-normal">
             Our system is transparent, real-time, and ensures fair competition so you always get the best value.
            </p>
          </div>
          <div className="h-full flex justify-center items-center flex-col border border-light-gray rounded-xl p-[25px]  text-center">
            <div className="w-20 h-20 rounded-[10px] flex justify-center items-center mb-[30px] bg-green">
              <Image src="/assets/e2.svg" alt="icon" width={40} height={40} />
            </div>
            <h3 className="text-gray mb-[10px] text-lg leading-[20px] font-semibold">
            Equipment Sourcing
            </h3>
            <p className="text-text-gray text-base font-normal">
              Our team finds the perfect machinery or tool for your needs through a trusted global seller network.
            </p>
          </div>
          <div className="h-full flex justify-center items-center flex-col border border-light-gray rounded-xl p-[25px]  text-center">
            <div className="w-20 h-20 rounded-[10px] flex justify-center items-center mb-[30px] bg-green">
              <Image src="/assets/e3.svg" alt="icon" width={40} height={40} />
            </div>
            <h3 className="text-gray mb-[10px] text-lg leading-[20px] font-semibold">
              Equipment Inspection
            </h3>
            <p className="text-text-gray text-base font-normal">
             We inspect every machine to ensure authenticity, accuracy, and reliable performance.
            </p>
          </div>
          <div className="h-full flex justify-center items-center flex-col border border-light-gray rounded-xl p-[25px]  text-center">
            <div className="w-20 h-20 rounded-[10px] flex justify-center items-center mb-[30px] bg-green">
              <Image src="/assets/e4.svg" alt="icon" width={40} height={40} />
            </div>
            <h3 className="text-gray mb-[10px] text-lg leading-[20px] font-semibold">
             Logistics & Tracking
            </h3>
            <p className="text-text-gray text-base font-normal">
            We provide safe machinery transport with real-time tracking for complete delivery assurance.
            </p>
          </div>
          <div className="h-full flex justify-center items-center flex-col border border-light-gray rounded-xl p-[25px]  text-center">
            <div className="w-20 h-20 rounded-[10px] flex justify-center items-center mb-[30px] bg-green">
              <Image src="/assets/e5.svg" alt="icon" width={40} height={40} />
            </div>
            <h3 className="text-gray mb-[10px] text-lg leading-[20px] font-semibold">
              Customer Support
            </h3>
            <p className="text-text-gray text-base font-normal">
             Buy from a wide selection of used and new industrial machines, tractors, and tools.
            </p>
          </div>
      </div>
    </section>
  );
}

export default CoreServices;
