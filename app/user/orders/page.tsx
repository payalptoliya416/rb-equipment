"use client";

import DataTable, { Column } from "@/components/tables/DataTable";
import Image from "next/image";
import { HiOutlineEye } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import { CiFilter } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

type Order = {
  id: string;
  image: string;
  product: string;
  price: string;
  date: string;
  status: "Delivered" | "Cancelled" | "Pending";
};

const orders: Order[] = [
  {
    id: "1",
    image: "/assets/table-img.png",
    product: "CAT 320D Excavator",
    price: "$45,000",
    date: "May, 10 2025",
    status: "Delivered",
  },
  {
    id: "2",
    image: "/assets/table-img.png",
    product: "Komatsu D65PX Bulldozer",
    price: "$60,000",
    date: "May, 10 2025",
    status: "Delivered",
  },
  {
    id: "3",
    image: "/assets/table-img.png",
    product: "CAT 320D Excavator",
    price: "$45,000",
    date: "May, 10 2025",
    status: "Cancelled",
  },
  {
    id: "4",
    image: "/assets/table-img.png",
    product: "Komatsu D65PX Bulldozer",
    price: "$60,000",
    date: "May, 10 2025",
    status: "Delivered",
  },
  {
    id: "5",
    image: "/assets/table-img.png",
    product: "CAT 320D Excavator",
    price: "$45,000",
    date: "May, 10 2025",
    status: "Cancelled",
  },
  {
    id: "6",
    image: "/assets/table-img.png",
    product: "Komatsu D65PX Bulldozer",
    price: "$60,000",
    date: "May, 10 2025",
    status: "Pending",
  },
  {
    id: "7",
    image: "/assets/table-img.png",
    product: "CAT 320D Excavator",
    price: "$45,000",
    date: "May, 10 2025",
    status: "Delivered",
  },
  {
    id: "8",
    image: "/assets/table-img.png",
    product: "Komatsu D65PX Bulldozer",
    price: "$60,000",
    date: "May, 10 2025",
    status: "Pending",
  },
  {
    id: "9",
    image: "/assets/table-img.png",
    product: "CAT 320D Excavator",
    price: "$45,000",
    date: "May, 10 2025",
    status: "Delivered",
  },
  {
    id: "10",
    image: "/assets/table-img.png",
    product: "Komatsu D65PX Bulldozer",
    price: "$60,000",
    date: "May, 10 2025",
    status: "Delivered",
  },
];


export default function MyBuyOrders() {
    const [search, setSearch] = useState("");
  // TABLE COLUMNS
  const columns: Column<Order>[] = [
    {
      key: "image",
      header: "Image",
      render: (row) => (
        <Image
          src={row.image}
          alt="Product"
          width={50}
          height={50}
          className="rounded-md"
        />
      ),
      className: "w-[80px]",
    },

    {
      key: "product",
      header: "Product",
      accessor: (r) => r.product,
      sortable: true,
    },

    {
      key: "price",
      header: "Price",
      accessor: (r) => r.price,
      sortable: true,
    },

    {
      key: "date",
      header: "Purchase Date",
      render: (row) => (
        <span className="text-sm leading-[14px] bg-[#E9E9E9] text-[#4D4D4D] px-[10px] py-1 rounded-sm">
          {row.date}
        </span>
      ),
      sortable: false,
    },

    {
      key: "status",
      header: "Delivery Status",
      render: (row) => {
        const badge = {
          Delivered: "bg-[#35BB63] text-white",
          Cancelled: "bg-[#DD3623] text-white",
          Pending: "bg-[#FFCA42] text-[#212121]",
        };

        return (
          <span
            className={`px-[11px] py-2 w-[85px] rounded-md text-sm leading-[14px] block text-center  ${badge[row.status]}`}
          >
            {row.status}
          </span>
        );
      },
    },

    {
      key: "actions",
      header: "Actions",
      render: () => (
        <div className="flex items-center gap-4">
          <HiOutlineEye size={18} className="text-[#3A8DFF] cursor-pointer" />
          <GrLocation size={18} className="text-[#FF6F60] cursor-pointer" />
        </div>
      ),
    },
  ];

  const downloadInvoice = () => {
  // CSV Header
  const headers = ["ID", "Product", "Price", "Date", "Status"];

  // Convert table data to CSV rows
  const rows = orders.map((o) => [
    o.id,
    o.product,
    o.price,
    o.date,
    o.status,
  ]);

  // Convert to CSV string
  let csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows].map((e) => e.join(",")).join("\n");

  // Download file
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "invoice.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section className="py-11 sm:py-[60px]">
      <div className="container-custom mx-auto">

        {/* TITLE */}
        <h1 className="text-[#373737] text-[26px] font-bold mb-6">
          My Buy Now Orders
        </h1>

        {/* SEARCH + BUTTONS */}
        <div className="flex justify-between mb-5 flex-wrap gap-5">
          {/* Search Bar */}
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

          <div className="flex items-center gap-4 flex-wrap">
            <button className="h-[42px] border border-[#E9E9E9] px-5 rounded-lg flex items-center gap-2 cursor-pointer">
                     <CiFilter size={20} /> Filter
            </button>

            <button className="h-[42px] gradient-btn text-white px-5 rounded-lg cursor-pointer"   onClick={downloadInvoice}>
              Download Invoice
            </button>

            <button className="h-[42px] gradient-btn text-white px-5 rounded-lg cursor-pointer">
              Track Delivery
            </button>
          </div>
        </div>

        {/* TABLE */}
        <DataTable columns={columns} data={orders} searchKey="product" searchValue={search}  />
      </div>
    </section>
  );
}
