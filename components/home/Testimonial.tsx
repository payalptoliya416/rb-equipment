import Image from "next/image";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  return (
    <section className="bg-[#E9E9E940] py-[60px]">
      <div className="container-custom mx-auto ">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-[38px] md:leading-[38px] mb-[15px] font-extrabold text-gray">
            What <span className="text-orange">Our Clients</span> Say
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          <div className="bg-white border border-light-gray rounded-xl p-[30px]">
            <div className="flex justify-between items-center mb-5 flex-col sm:flex-row gap-3 sm:gap-1">
              <div className="flex items-center gap-[15px]">
                <Image
                  src="/assets/client1.png"
                  alt=""
                  width={75}
                  height={75}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-gray text-lg leading-[20px] mb-[10px] font-semibold">
                    Robert Fox
                  </h3>
                  <p className="text-text-gray text-base leading-[16px] font-normal">
                    Industrial Supplier
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
              </div>
            </div>
            <p className="text-base leading-[26px] text-text-gray font-normal">
              “Selling my machinery through RB Equipment Sales was seamless.
              Their team handled everything professionally, and I received great
              value within days. Highly recommended!”
            </p>
          </div>
          <div className="bg-white border border-light-gray rounded-xl p-[30px]">
            <div className="flex justify-between items-center mb-5 flex-col sm:flex-row gap-3 sm:gap-1">
              <div className="flex items-center gap-[15px]">
                <Image
                  src="/assets/client2.png"
                  alt=""
                  width={75}
                  height={75}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-gray text-lg leading-[20px] mb-[10px] font-semibold">
                    Kathryn Murphy
                  </h3>
                  <p className="text-text-gray text-base leading-[16px] font-normal">
                    Equipment Dealer
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
              </div>
            </div>
            <p className="text-base leading-[26px] text-text-gray font-normal">
              “Fantastic experience from start to finish! The website is easy to
              use, and the support team helped me find the perfect excavator
              within my budget.”
            </p>
          </div>
          <div className="bg-white border border-light-gray rounded-xl p-[30px]">
            <div className="flex justify-between items-center mb-5 flex-col sm:flex-row gap-3 sm:gap-1">
              <div className="flex items-center gap-[15px]">
                <Image
                  src="/assets/client3.png"
                  alt=""
                  width={75}
                  height={75}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-gray text-lg leading-[20px] mb-[10px] font-semibold">
                    Jerome Bell
                  </h3>
                  <p className="text-text-gray text-base leading-[16px] font-normal">
                    Owner
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
              </div>
            </div>
            <p className="text-base leading-[26px] text-text-gray font-normal">
              “I participated in my first online auction with RB Equipment
              Sales, and it was incredibly smooth, transparent, and secure.
              Highly trustworthy and efficient service!”
            </p>
          </div>
          <div className="bg-white border border-light-gray rounded-xl p-[30px]">
            <div className="flex justify-between items-center mb-5 flex-col sm:flex-row gap-3 sm:gap-1">
              <div className="flex items-center gap-[15px]">
                <Image
                  src="/assets/client4.png"
                  alt=""
                  width={75}
                  height={75}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-gray text-lg leading-[20px] mb-[10px] font-semibold">
                    Jenny Wilson
                  </h3>
                  <p className="text-text-gray text-base leading-[16px] font-normal">
                    Construction Manager
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
                <FaStar size={22} className="text-[#FFC917]" />
              </div>
            </div>
            <p className="text-base leading-[26px] text-text-gray font-normal">
              “RB Equipment Sales made the entire buying process easy. Excellent
              communication, transparent bidding, and fast delivery. I’ll
              definitely return for my next equipment purchase!”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
