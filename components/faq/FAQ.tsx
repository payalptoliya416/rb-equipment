import Image from "next/image";

function FaqHero() {
  return (
    <section className="relative -mt-32">
      <div
        className="absolute top-0 left-0 w-full h-full xl:h-[580px] bg-[url(/assets/main-bg.png)] bg-no-repeat bg-top -z-10"
        style={{ backgroundSize: "100% 100%" }}
      ></div>
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-12 pt-[150px] xl:pt-[100px] items-center">
          <div className="col-span-12 lg:col-span-6 mb-5 lg:mb-0">
            <h2 className="text-3xl md:text-[42px] leading-[48px] md:leading-[60px] font-extrabold mb-5">
              Track<span className="text-orange"> Your Order</span>{" "}
            </h2>
            <p className="text-para textbase leading-[24px] font-normal">
              Easily check the status of your equipment order or shipment. Enter
              your tracking number below to see real-time updates on your
              delivery.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex justify-end">
              <Image
                src="/assets/faq.png"
                alt="Hero"
                width={600}
                height={389}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqHero;
