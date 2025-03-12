import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";
import SideBarLinks from "./SideBarLinks";

function SideBar() {
  return (
    <div className="fixed h-screen flex flex-col justify-between p-5 bg-slate-200 min-w-64">
      <div>
        <div className="flex items-center justify-start gap-2">
          <Icon
            icon="material-symbols:stockpot-outline-sharp"
            width="30px"
            height="30px"
          />
          <span className="font-bold text-xl">Stok Kontrol</span>
        </div>
        <SideBarLinks />
      </div>
      <div>
        <Link
          className="flex bg-slate-50 p-2 items-center justify-start gap-2 rounded-lg"
          href="/login"
        >
          <Icon icon="material-symbols:logout" width="20px" height="20px" />
          Çıkış Yap
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
