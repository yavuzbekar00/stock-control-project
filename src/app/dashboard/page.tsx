import DashboardCard from "@/components/DashboardCard";
import SideBar from "@/components/SideBar";
import React from "react";

function page() {
  return (
    <div className="flex">
      <SideBar />
      <div className="ml-64 p-10 flex flex-col gap-5">
        <div>
          <div className="font-bold text-3xl">
            {/* {Object.keys(users).find((key) => key.userName === "admin")} */}
            Hoş Geldiniz
          </div>
          <div>User Name</div>
        </div>
        <div className="flex gap-5">
          <DashboardCard
            title="Toplam Stok Miktarı"
            subTitle="Toplam Stok"
            value={120}
            color="red"
          />
          <DashboardCard
            title="Toplam Gelir Miktarı"
            subTitle="Toplam Gelir"
            value={120}
            color="lime"
          />
          <DashboardCard
            title="Toplam Gider Miktarı"
            subTitle="Toplam Gider"
            value={1222}
            color="orange"
          />
          <DashboardCard
            title="Kar/Zarar Durumu"
            subTitle="Kar"
            value={20}
            color="sky"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
