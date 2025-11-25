import Image from "next/image";
function Partner() {
  return (
    <section className="my-20 lg:my-[110px] px-5 ">
      <div className="container-custom mx-auto bg-green rounded-[20px] py-10 px-16">
        <h3 className="text-white text-center text-[38px] leading-[38px] mb-[35px] font-bold mont-text">
          Partners & Brands
        </h3>
        <div
          className="grid 
                    grid-cols-2  
                    sm:grid-cols-3 
                    lg:grid-cols-5 
                    gap-8 
                    md:gap-10 
                    xl:gap-12 
                    place-items-center"
        >
          {["logo1", "logo2", "logo3", "logo4", "logo5"].map((item, index) => (
            <Image
              key={index}
              src={`/assets/${item}.png`}
              alt="brand"
              width={0}
              height={0}
              unoptimized
              className="h-auto w-auto max-w-[140px] md:max-w-[180px] xl:max-w-none"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partner;
