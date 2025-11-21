
function CTA() {
  return (
    <section
        className="bg-[url(/assets/ready-bg.png)] bg-no-repeat w-full h-full mt-20 lg:mt-[110px] py-[60px]"
        style={{ backgroundSize: "100% 100%" }}
      >
        <div className="grid grid-cols-12 container-custom mx-auto">
          <div className="col-span-12 sm:col-span-10 md:col-span-7 xl:col-span-5 2xl:col-span-4">
            <h3 className="text-white text-3xl md:text-[38px] md:leading-[55px] font-extrabold mb-[15px]">
              Ready to Buy or Sell Equipment Today?
            </h3>
            <p className=" text-white text-base leading-[26px] mb-[30px] pr-10">
              Join thousands of satisfied customers who trust RB Equipment Sales
              for industrial and agricultural machinery.
            </p>
            <button className="text-green bg-white  py-[14px] px-[22px]  rounded-xl text-base leading-[16px] font-bold">
              Start Now
            </button>
          </div>
        </div>
      </section>
  )
}

export default CTA
