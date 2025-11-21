import Image from "next/image";

function ChooseUs() {
  return (
    <section className="bg-gray py-[60px]">
      <div className="container-custom mx-auto ">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-[38px] md:leading-[38px] font-extrabold text-white">
            Why <span className="text-orange">Choose Us</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center md:items-stretch">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div className="border border-text-gray rounded-lg p-5">
              <Image
                src="/assets/icon1.svg"
                alt="icon"
                width={40}
                height={40}
                className="mb-5"
              />
              <h3 className="text-light-gray text-lg leading-[20px] mb-[15px] font-semibold">
                Verified Equipment
              </h3>
              <p className=" text-base leading-[26px] font-normal text-light-gray">
                Every listing is inspected and verified to ensure quality,
                authenticity.
              </p>
            </div>
            <div className="border border-text-gray rounded-lg p-5">
              <Image
                src="/assets/icon2.svg"
                alt="icon"
                width={40}
                height={40}
                className="mb-5"
              />
              <h3 className="text-light-gray text-lg leading-[20px] mb-[15px] font-semibold">
                Verified Equipment
              </h3>
              <p className=" text-base leading-[26px] font-normal text-light-gray">
                Every listing is inspected and verified to ensure quality,
                authenticity.
              </p>
            </div>
            <div className="border border-text-gray rounded-lg p-5">
              <Image
                src="/assets/icon3.svg"
                alt="icon"
                width={40}
                height={40}
                className="mb-5"
              />
              <h3 className="text-light-gray text-lg leading-[20px] mb-[15px] font-semibold">
                Verified Equipment
              </h3>
              <p className=" text-base leading-[26px] font-normal text-light-gray">
                Every listing is inspected and verified to ensure quality,
                authenticity.
              </p>
            </div>
            <div className="border border-text-gray rounded-lg p-5">
              <Image
                src="/assets/icon4.svg"
                alt="icon"
                width={40}
                height={40}
                className="mb-5"
              />
              <h3 className="text-light-gray text-lg leading-[20px] mb-[15px] font-semibold">
                Verified Equipment
              </h3>
              <p className=" text-base leading-[26px] font-normal text-light-gray">
                Every listing is inspected and verified to ensure quality,
                authenticity.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/assets/chooseus.png"
              alt="chooseus"
              width={550}
              height={454}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
