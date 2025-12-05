"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type MenuItem = {
  name: string;
  href: string;
  icon: string; 
};

export default function UserDashboardNav() {
  const pathname = usePathname();

  const menu: MenuItem[] = [
    { name: "Dashboard", href: "/user", icon: "/assets/nav1.svg" },
    { name: "My Bids", href: "/user/bids", icon: "/assets/nav2.svg" },
    { name: "My Buy Now Orders", href: "/user/orders", icon: "/assets/nav3.svg" },
    { name: "Delivery Tracking", href: "/user/tracking", icon: "/assets/nav4.svg" },
    { name: "Payment History", href: "/user/payments", icon: "/assets/nav5.svg" },
    { name: "Settings", href: "/user/settings", icon: "/assets/nav6.svg" },
  ];

  return (
    <nav className="bg-green w-full py-3">
      <div className="container-custom mx-auto">
        <div className="flex items-center gap-1 xl:gap-5 xl:px-6 justify-start lg:justify-center overflow-x-auto flex-nowrap scrollbar-hide">
          {menu.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center gap-2 text-white px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap webkit-box
                  ${active ? "bg-white/20" : "hover:bg-white/10"}
                `}
              >
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={16}
                  height={16}
                  className="object-contain"
                />

                <span className="text-[15px] font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
