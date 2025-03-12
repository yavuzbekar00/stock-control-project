import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";

export const links = [
  {
    id: 1,
    title: "Dashboard",
    href: "/dashboard",
    icon: "material-symbols:dashboard-rounded",
  },
  {
    id: 2,
    title: "Stok Yönetimi",
    href: "/stock",
    icon: "material-symbols:stockpot-outline-rounded",
  },
  {
    id: 3,
    title: "Gelir Gider Takibi",
    href: "/finance",
    icon: "fa6-solid:money-bill-transfer",
  },
  {
    id: 4,
    title: "Raporlar",
    href: "/analytics",
    icon: "lsicon:report-filled",
  },
];
function SideBarLinks() {
  return (
    <div className="mt-20 flex flex-col gap-5">
      {links.map((link) => (
        <Link
          key={link.id}
          className="flex bg-slate-50 p-2 items-center justify-start gap-2 rounded-lg"
          href={link.href}
        >
          <Icon icon={link.icon} width="20px" height="20px" />
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default SideBarLinks;
