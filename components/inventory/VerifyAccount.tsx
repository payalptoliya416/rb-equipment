'use client';

import { useState, FormEvent, ChangeEvent, JSX } from "react";
import Image from "next/image";

function VerifyAccount(): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please upload a file first!");
      return;
    }

    console.log("Uploaded File:", selectedFile);
    alert("File submitted successfully!");
  };

  return (
    <div className="my-[110px] flex justify-center px-4">
      <div className="border border-light-gray rounded-[15px] p-[30px] max-w-[650px] w-full">

        {/* Title */}
        <h3 className="text-3xl sm:text-[38px] sm:leading-[38px] mb-[15px] text-center font-semibold text-gray-text">
          Verify your <span className="text-orange">account</span>
        </h3>

        <p className="text-center text-text-gray text-base mb-[30px]">
          For security reasons we need all of our customers to be verified before
          they can complete a purchase.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <p className="text-[#333333] text-lg leading-[18px] font-medium mb-[12px]">Driving License</p>

          <label
            htmlFor="fileUpload"
            className="
              w-full border border-dashed border-[#4D4D4D] rounded-xl
              py-[20px] px-4 flex flex-col justify-center items-center cursor-pointer
              hover:bg-gray-50 transition bg-[#E9E9E933]">
            <Image
              src="/assets/upload.svg"
              alt="upload"
              width={54}
              height={62}
              className="mb-[15px]"
            />

                <p className="text-[#333333] font-medium mb-[25px] text-lg leading-[18px]">
              Upload a File
            </p>

            <div className="text-base text-[#7A7A7A] py-[10px] leading-[16px] px-[20px] rounded-md border border-[#7A7A7A]">
              {selectedFile ? selectedFile.name : "Choose File"}
            </div>

            {/* Hidden Input */}
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              onChange={handleFileUpload}
              accept="image/*, .pdf"
            />
          </label>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="
                bg-green text-white px-[22px] py-[14px] rounded-lg 
                hover:opacity-90 transition leading-[16px] text-base cursor-pointer" >
              Submit
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default VerifyAccount;
