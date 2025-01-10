"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const localActive = useLocale();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      router.push(`/${localActive}`);
    }
  }, [router]);

  const handleLogin = () => {
    if (email === "quitty@admin.com" && password === "Quittyadmin0") {
      localStorage.setItem("isLoggedIn", "true");
      router.push(`/${localActive}`);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="bg-black overflow-hidden lg:pt-[30%] md:pt-[30%] pt-[60%] flex w-[100%] h-[120%] z-[999] fixed top-[-128px] flex-col justify-start items-center gap-5 text-white">
      <form
        className="flex flex-col gap-5 overflow-hidden"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-2.5">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[40px] text-black pl-[10px] outline-none"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-[40px] text-black pl-[10px] outline-none"
          />
        </div>
        <button className="bg-[#00C9A5] p-2.5 rounded-lg" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
