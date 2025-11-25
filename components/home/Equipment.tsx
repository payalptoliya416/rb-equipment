'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};
const equipmentData = [
  {
    id: 1,
    title: "Wheel Loaders",
    subtitle: "Browse Inventory",
    image: "/assets/e1.png",
    link: "/inventory?cat=wheel-loaders"
  },
  {
    id: 2,
    title: "Wheel Excavators",
    subtitle: "Browse Inventory",
    image: "/assets/e1.png",
    link: "/inventory?cat=wheel-excavators"
  },
  {
    id: 3,
    title: "Track Excavators",
    subtitle: "Browse Inventory",
    image: "/assets/e1.png",
    link: "/inventory?cat=track-excavators"
  },
  {
    id: 4,
    title: "Telehandlers",
    subtitle: "Browse Inventory",
    image: "/assets/e1.png",
    link: "/inventory?cat=telehandlers"
  },
  {
    id: 5,
    title: "Skid Steer Loaders",
    subtitle: "Browse Inventory",
    image: "/assets/e1.png",
    link: "/inventory?cat=skid-steer-loaders"
  },
  {
    id: 6,
    title: "Rollers",
    subtitle: "Browse Inventory",
    image: "/assets/e1.png",
    link: "/inventory?cat=rollers"
  }
];

function Equipment() {

  return (
    <section className="container-custom mx-auto my-20 lg:my-[110px]">
      <motion.div
       initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      className="text-center mb-10">
        <h2 className="text-3xl md:text-[38px] md:leading-[38px] mb-[15px] font-bold text-gray mont-text">
          Our Main <span className="text-orange">Equipment</span>
        </h2>
        <p className="text-base leading-[16px] text-text-gray">
          Browse through top categories to find what fits your business needs.
        </p>
      </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
  {equipmentData.map((item, i) => (
    <motion.div
      key={item.id}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: i * 0.15,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05 }}
      className="bg-green p-[15px] rounded-xl cursor-pointer"
    >
      <Link href={item.link}>
        <div className="bg-white rounded-xl px-[38px] py-[24px] flex justify-center items-center">
          <Image
            src={item.image}
            alt={item.title}
            width={264}
            height={173}
          />
        </div>

        <div className="pt-5">
          <h3 className="text-xl leading-[20px] mb-[15px] text-white text-center font-semibold mont-text">
            {item.title}
          </h3>
          <p className="text-base leading-[16px] text-white text-center font-semibold pb-[5px]">
            {item.subtitle}
          </p>
        </div>
      </Link>
    </motion.div>
  ))}
</div>

    </section>
  );
}

export default Equipment;
