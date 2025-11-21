import Image from "next/image";

function Location() {
  return (
    <>
      <section className="my-20 lg:my-[110px]">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]  items-stretch">
            <div className="h-full flex justify-center items-center flex-col border border-light-gray rounded-xl p-[30px]  text-center">
              <div className="w-[70px] h-[70px] rounded-[10px] flex justify-center items-center mb-[20px] bg-green">
                <Image src="/assets/l1.svg" alt="icon" width={36} height={36} />
              </div>
              <h3 className="text-gray mb-[10px] text-lg leading-[20px] font-semibold">
                Office Address
              </h3>
              <p className="text-text-gray text-base font-normal">
                RB Equipment Sales 123 Industrial Road, Montgomery Village, USA
              </p>
            </div>
            <div className="h-full flex justify-center items-center flex-col border border-light-gray rounded-xl p-[30px]  text-center">
              <div className="w-[70px] h-[70px] rounded-[10px] flex justify-center items-center mb-[20px] bg-green">
                <Image src="/assets/l2.svg" alt="icon" width={36} height={36} />
              </div>
              <h3 className="text-gray mb-[10px] text-lg leading-[20px] font-semibold">
               Phone Number
              </h3>
              <p className="text-text-gray text-base font-normal">
               +1 (123) 456 - 7890
              </p>
            </div>
            <div className="h-full flex justify-center items-center flex-col border border-light-gray rounded-xl p-[30px]  text-center">
              <div className="w-[70px] h-[70px] rounded-[10px] flex justify-center items-center mb-[20px] bg-green">
                <Image src="/assets/l3.svg" alt="icon" width={36} height={36} />
              </div>
              <h3 className="text-gray mb-[10px] text-lg leading-[20px] font-semibold">
                Email Address
              </h3>
              <p className="text-text-gray text-base font-normal">
                info@rbequipment-sales.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Location;
