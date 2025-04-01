"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div>
      <nav className="flex space-x-4 p-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-md ${
                isActive ? "font-bold underline text-blue-600" : "text-gray-700"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="flex justify-center items-center h-screen">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
