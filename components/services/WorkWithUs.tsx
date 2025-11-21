import Image from "next/image"

function WorkWithUs() {
      const items = [
    {
      title: "Transparent Transactions",
      desc: "Clear listings and honest communication.",
    },
    {
      title: "Competitive Pricing",
      desc: "Fair market rates through direct sales or auctions.",
    },
    {
      title: "Global Network",
      desc: "Buyers and sellers from multiple regions.",
    },
    {
      title: "End-to-End Support",
      desc: "From inspection to delivery, we handle everything.",
    },
    {
      title: "Proven Experience",
      desc: "Years of industry knowledge and satisfied clients.",
    },
  ];

  return (
     <section className="container-custom mx-auto lg:mb-[110px] my-20 lg:mt-[142px]">
        <div className="grid grid-cols-12 lg:gap-[30px] items-center mt-10">
         <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
                               <Image
                                 src="/assets/workwithus.png"
                                 alt="about"
                                 width={575}
                                 height={445}
                                 style={{ width: "100%" }}
                               />
         </div>
         <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 mb-5 lg:mb-0">
             <div>
                <h2 className="text-[38px] font-extrabold text-gray mb-[20px]">
                    Why <span className="text-orange">Work With </span> Us
                </h2>
                <div className="space-y-[15px]">
                    {items.map((item, i) => (
                    <div
                        key={i}
                        className="
                        bg-[linear-gradient(90deg,#00796B14,#00796B00)]
                        p-5 rounded-xl flex gap-3 items-start">
                        <div> <span className="text-green text-2xl"><Image src='/assets/check.svg' alt="check" width={24} height={21} /></span> </div>

                        <div>
                        <h3 className="text-lg leading-[20px] font-semibold text-gray mb-[14px]">
                            {item.title}
                        </h3>
                        <p className="text-text-gray text-base leading-[16px]">{item.desc}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
         </div>
        </div>
    </section>
  )
}

export default WorkWithUs
