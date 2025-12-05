"use client";

import DataTable, { Column } from "@/components/tables/DataTable";
import Image from "next/image";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { HiOutlineEye } from "react-icons/hi2";

type Bid = {
  id: string;
  image: string;
  machinery: string;
  currentBid: string;
  lastBid: string;
  timeLeft: string;
  status: "Active" | "Paid" | "Expired";
};

const sampleData: Bid[] = [
  {
    id: "1",
    image: "/assets/table-img.png",
    machinery: "CAT 320D Excavator",
    currentBid: "$45,000",
    lastBid: "$25,000",
    timeLeft: "2h 13m",
    status: "Active",
  },
  {
    id: "2",
    image: "/assets/table-img.png",
    machinery: "Komatsu D65PX Bulldozer",
    currentBid: "$60,000",
    lastBid: "$35,000",
    timeLeft: "2h 13m",
    status: "Active",
  },
  {
    id: "3",
    image: "/assets/table-img.png",
    machinery: "CAT 320D Excavator",
    currentBid: "$45,000",
    lastBid: "$25,000",
    timeLeft: "2h 13m",
    status: "Active",
  },
  {
    id: "4",
    image: "/assets/table-img.png",
    machinery: "Komatsu D65PX Bulldozer",
    currentBid: "$60,000",
    lastBid: "$35,000",
    timeLeft: "2h 13m",
    status: "Active",
  },
  {
    id: "5",
    image: "/assets/table-img.png",
    machinery: "CAT 320D Excavator",
    currentBid: "$45,000",
    lastBid: "$25,000",
    timeLeft: "2h 13m",
    status: "Active",
  },
  {
    id: "6",
    image: "/assets/table-img.png",
    machinery: "Komatsu D65PX Bulldozer",
    currentBid: "$60,000",
    lastBid: "$35,000",
    timeLeft: "2h 13m",
    status: "Paid",
  },
  {
    id: "7",
    image: "/assets/table-img.png",
    machinery: "CAT 320D Excavator",
    currentBid: "$45,000",
    lastBid: "$25,000",
    timeLeft: "2h 13m",
    status: "Active",
  },
  {
    id: "8",
    image: "/assets/table-img.png",
    machinery: "Komatsu D65PX Bulldozer",
    currentBid: "$60,000",
    lastBid: "$35,000",
    timeLeft: "2h 13m",
    status: "Paid",
  },
  {
    id: "9",
    image: "/assets/table-img.png",
    machinery: "CAT 320D Excavator",
    currentBid: "$45,000",
    lastBid: "$25,000",
    timeLeft: "2h 13m",
    status: "Active",
  },
  {
    id: "10",
    image: "/assets/table-img.png",
    machinery: "Komatsu D65PX Bulldozer",
    currentBid: "$60,000",
    lastBid: "$35,000",
    timeLeft: "2h 13m",
    status: "Active",
  }
];


export default function Bids() {
     const [search, setSearch] = useState("");
  const columns: Column<Bid>[] = [
    {
      key: "image",
      header: "Image",
      render: (row) => (
        <Image
          src={row.image}
          alt={row.machinery}
          width={40}
          height={40}
          className="rounded-md object-cover"
        />
      ),
      className: "w-[80px]",
    },

    {
      key: "machinery",
      header: "Machinery",
      accessor: (r) => r.machinery,
      sortable: true,
    },

    { key: "currentBid", header: "Current Bid", sortable: true },
    { key: "lastBid", header: "My Last Bid", sortable: true },
    { key: "timeLeft", header: "Time Left", sortable: true },

    {
      key: "status",
      header: "Bid Status",
      render: (row) => {
        const statusStyles: any = {
          Active: "bg-[#35BB63] text-white",
          Paid: "bg-[#FFCA42] text-white",
          Expired: "bg-[#FFE5E5] text-white",
        };

        return (
          <span
            className={`px-[22px] py-2 w-[85px] rounded-md text-sm leading-[14px] block ${statusStyles[row.status]}`}>
            {row.status}
          </span>
        );
      },
    },

    {
      key: "actions",
      header: "Actions",
      render: () => (
        <button className="text-[#3A8DFF] cursor-pointer">
          <HiOutlineEye size={20} className="text-[#3C97FF]" />
        </button>
      ),
    },
  ];

  return (
     <section className="py-11 sm:py-[60px]">
      <div className="container-custom mx-auto">
        <h1 className="text-[#373737] text-[26px] font-bold mb-[35px]">
          My Bids
        </h1>

        {/* Search + Buttons */}
        <div className="flex justify-between mb-5 items-center flex-wrap gap-5">
          {/* Search */}
          <div className="relative w-72">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A7A7A]" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full h-12 pl-12 pr-4 rounded-lg border border-[#E9E9E9]"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-5">
            <button className="h-[42px] border border-[#E9E9E9] px-5 rounded-lg flex items-center gap-2">
              <CiFilter size={20} /> Filter
            </button>

            <button className="h-[42px] gradient-btn text-white px-5 rounded-lg">
              Increase Bid
            </button>
          </div>
        </div>

        {/* TABLE */}
        <DataTable
          columns={columns}
          data={sampleData}
          searchKey="machinery"
          searchValue={search} 
        />
      </div>
    </section>
  );
}
