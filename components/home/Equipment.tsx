'use client'

import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

function Equipment() {

  return (
    <section className="container-custom mx-auto my-20 lg:my-[110px]">
      <motion.div
       initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      className="text-center mb-10">
        <h2 className="text-3xl md:text-[38px] md:leading-[38px] mb-[15px] font-extrabold text-gray">
          Our Main <span className="text-orange">Equipment</span>
        </h2>
        <p className="text-base leading-[16px] text-text-gray">
          Browse through top categories to find what fits your business needs.
        </p>
      </motion.div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        <div className="bg-green p-[15px] rounded-xl">
          <div className="bg-white rounded-xl px-[38px] py-[24px] flex justify-center items-center">
            <Image
              src="/assets/e1.png"
              alt="equipment"
              width={264}
              height={173}
            />
          </div>
          <div className="pt-5">
            <h3 className="text-lg leading-[20px] mb-[15px] text-white text-center font-semibold">
              Wheel Loaders
            </h3>
            <p className="text-base leading-[16px] text-white text-center font-semibold pb-[5px]">
              Browse Inventory
            </p>
          </div>
        </div>
        <div className="bg-green p-[15px] rounded-xl">
          <div className="bg-white rounded-xl px-[38px] py-[24px] flex justify-center items-center">
            <Image
              src="/assets/e1.png"
              alt="equipment"
              width={264}
              height={173}
            />
          </div>
          <div className="pt-5">
            <h3 className="text-lg leading-[20px] mb-[15px] text-white text-center font-semibold">
              Wheel Loaders
            </h3>
            <p className="text-base leading-[16px] text-white text-center font-semibold pb-[5px]">
              Browse Inventory
            </p>
          </div>
        </div>
        <div className="bg-green p-[15px] rounded-xl">
          <div className="bg-white rounded-xl px-[38px] py-[24px] flex justify-center items-center">
            <Image
              src="/assets/e1.png"
              alt="equipment"
              width={264}
              height={173}
            />
          </div>
          <div className="pt-5">
            <h3 className="text-lg leading-[20px] mb-[15px] text-white text-center font-semibold">
              Wheel Loaders
            </h3>
            <p className="text-base leading-[16px] text-white text-center font-semibold pb-[5px]">
              Browse Inventory
            </p>
          </div>
        </div>
        <div className="bg-green p-[15px] rounded-xl">
          <div className="bg-white rounded-xl px-[38px] py-[24px] flex justify-center items-center">
            <Image
              src="/assets/e1.png"
              alt="equipment"
              width={264}
              height={173}
            />
          </div>
          <div className="pt-5">
            <h3 className="text-lg leading-[20px] mb-[15px] text-white text-center font-semibold">
              Wheel Loaders
            </h3>
            <p className="text-base leading-[16px] text-white text-center font-semibold pb-[5px]">
              Browse Inventory
            </p>
          </div>
        </div>
        <div className="bg-green p-[15px] rounded-xl">
          <div className="bg-white rounded-xl px-[38px] py-[24px] flex justify-center items-center">
            <Image
              src="/assets/e1.png"
              alt="equipment"
              width={264}
              height={173}
            />
          </div>
          <div className="pt-5">
            <h3 className="text-lg leading-[20px] mb-[15px] text-white text-center font-semibold">
              Wheel Loaders
            </h3>
            <p className="text-base leading-[16px] text-white text-center font-semibold pb-[5px]">
              Browse Inventory
            </p>
          </div>
        </div>
        <div className="bg-green p-[15px] rounded-xl">
          <div className="bg-white rounded-xl px-[38px] py-[24px] flex justify-center items-center">
            <Image
              src="/assets/e1.png"
              alt="equipment"
              width={264}
              height={173}
            />
          </div>
          <div className="pt-5">
            <h3 className="text-lg leading-[20px] mb-[15px] text-white text-center font-semibold">
              Wheel Loaders
            </h3>
            <p className="text-base leading-[16px] text-white text-center font-semibold pb-[5px]">
              Browse Inventory
            </p>
          </div>
        </div>
      </div> */}
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: i * 0.15, // ⭐ stagger delay
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05 }}
            className="bg-green p-[15px] rounded-xl cursor-pointer"
          >
            <div className="bg-white rounded-xl px-[38px] py-[24px] flex justify-center items-center">
              <Image src="/assets/e1.png" alt="equipment" width={264} height={173} />
            </div>

            <div className="pt-5">
              <h3 className="text-lg leading-[20px] mb-[15px] text-white text-center font-semibold">
                Wheel Loaders
              </h3>
              <p className="text-base leading-[16px] text-white text-center font-semibold pb-[5px]">
                Browse Inventory
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Equipment;
