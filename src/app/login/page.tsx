"use client";
import React, { useState } from "react";
import users from "../../mocks/users.json";
import { useRouter } from "next/navigation";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userName, setUserName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    users.map((user) => {
      if (user.userName !== userName && user.password === password) {
        alert("Kullanıcı Adı Hatalı");
      } else if (user.userName === userName && user.password !== password) {
        alert("Şifre Hatalı");
      } else if (user.userName !== userName && user.password !== password) {
        alert("Kullanıcı Adı ve Şifre Hatalı");
      } else if (user.userName === userName && user.password === password) {
        router.push("/dashboard");
      }
    });
  };
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="sm:h-screen w-full sm:w-2/5 overflow-hidden">
        <img
          className="sm:h-full h-1/5 w-full object-cover"
          src="/images/office.jpg"
          alt="Office"
        />
      </div>
      <div className="flex flex-col gap-5 sm:w-3/5 w-full justify-center items-center sm:mt-0 mt-10">
        <div className="sm:w-3/5 w-full text-center">
          <div className="font-bold text-4xl">Hoş Geldiniz</div>
          <div className="text-xl">
            Giriş yapmak için lütfen bilgilerinizi girin
          </div>
        </div>
        <div className="sm:w-3/5 w-4/5 flex flex-col gap-4">
          <div className="flex flex-col">
            <span>Kullanıcı Adınız</span>
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              className="bg-slate-500 placeholder-gray-300 p-3 rounded-full text-white"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-col">
            <span>Şifreniz</span>
            <input
              type="password"
              placeholder="Şifre"
              className="bg-slate-500 placeholder-gray-300 p-3 rounded-full text-white"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-10 py-3 rounded-full"
          >
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
