// "use client";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useLocale } from "next-intl";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
//   const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

//   const localActive = useLocale();

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
//     if (isLoggedIn) {
//       router.push(`/${localActive}`);
//     }
//   }, [router]);

//   const handleLogin = () => {
//     if (email === adminEmail && password === adminPassword) {
//       localStorage.setItem("isLoggedIn", "true");
//       router.push(`/${localActive}`);
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 top-0 z-[999] flex flex-col items-center justify-center gap-5
//      overflow-hidden bg-black text-white"
//     >
//       <form
//         className="flex flex-col gap-5 overflow-hidden"
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <div className="flex flex-col gap-2.5">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="h-[40px] pl-[10px] text-black outline-none"
//           />
//         </div>
//         <div className="flex flex-col gap-2.5">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="h-[40px] pl-[10px] text-black outline-none"
//           />
//         </div>
//         <button className="rounded-lg bg-[#00C9A5] p-2.5" onClick={handleLogin}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
