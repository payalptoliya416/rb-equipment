"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <>
      <section className="relative -mt-32">
        {/* Background */}
        <div
          className="absolute top-0 left-0 w-full h-full xl:h-[500px] bg-[url(/assets/main-bg.png)] bg-no-repeat bg-top -z-10"
          style={{ backgroundSize: "100% 100%" }}
        ></div>

        <div className="container-custom mx-auto">
          <div className="grid grid-cols-12 pt-[150px] xl:pt-[100px] items-center">

            {/* LEFT TEXT */}
            <motion.div
              className="col-span-12 lg:col-span-6 mb-5 lg:mb-0"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="text-3xl md:text-[42px] leading-[48px] md:leading-[60px] font-extrabold mb-5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <span className="text-orange">Get in Touch </span>
                with RB Equipment Sales
              </motion.h2>

              <motion.p
                className="text-para textbase leading-[24px] font-normal"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Buy or Bid on high-quality machinery, tractors, and tools from trusted
                sellers. Whether you’re expanding your fleet or upgrading your
                equipment, RB Equipment Sales has you covered.
              </motion.p>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="col-span-12 lg:col-span-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <Image
                    src="/assets/contact.png"
                    alt="Hero"
                    width={600}
                    height={389}
                  />
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
