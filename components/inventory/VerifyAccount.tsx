'use client';

import { useState, FormEvent, ChangeEvent, JSX, DragEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

function VerifyAccount(): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  
  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) setSelectedFile(file);
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      toast.error("Please upload a file first!");
      return;
    }

    console.log("Uploaded File:", selectedFile);
    toast.success("File submitted successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    className="my-[110px] flex justify-center px-4">
      <motion.div
       initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      className="border border-light-gray rounded-[15px] p-[30px] max-w-[650px] w-full">

        {/* Title */}
        <motion.h3
         initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        className="text-3xl sm:text-[38px] sm:leading-[38px] mb-[15px] text-center font-semibold text-gray-text mont-text">
          Verify your <span className="text-orange">account</span>
        </motion.h3>

        <motion.p 
        initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        className="text-center text-text-gray text-base mb-[30px]">
          For security reasons we need all of our customers to be verified before
          they can complete a purchase.
        </motion.p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <p className="text-[#333333] text-lg leading-[18px] font-medium mb-[12px] mont-text">Driving License</p>

           <motion.label
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            htmlFor="fileUpload"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`
              w-full border rounded-xl py-[20px] px-4 flex flex-col justify-center 
              items-center cursor-pointer transition 
              bg-[#E9E9E933]
              border-dashed 
              ${isDragging ? "border-green bg-green/10" : "border-[#4D4D4D]"}
            `}
          >
            <Image
              src="/assets/upload.svg"
              alt="upload"
              width={54}
              height={62}
              className="mb-[15px]"
            />

            <p className="text-[#333333] font-medium mb-[25px] text-lg leading-[18px] mont-text">
              {isDragging ? "Drop file here..." : "Upload a File"}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFile ? selectedFile.name : "no-file"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-base text-[#7A7A7A] py-[10px] leading-[16px] px-[20px] rounded-md border border-[#7A7A7A] mont-text font-semibold"
              >
                {selectedFile ? selectedFile.name : "Choose File"}
              </motion.div>
            </AnimatePresence>

            {/* Hidden Input */}
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={handleFileUpload}
              accept="image/*, .pdf"
            />
          </motion.label>

          <div className="flex justify-center">
            <motion.button
              type="submit"
               whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="
                bg-green text-white px-[22px] py-[14px] rounded-lg 
                hover:opacity-90 transition leading-[16px] text-base cursor-pointer mont-text font-semibold" >
              Submit
            </motion.button>
          </div>
        </form>

      </motion.div>
    </motion.div>
  );
}

export default VerifyAccount;
