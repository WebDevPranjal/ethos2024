"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export function FloatingNavComponent() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Tracks",
      link: "#tracks",
    },
    {
      name: "Timeline",
      link: "#timeline",
    },
    {
      name: "FAQ",
      link: "#faqs",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
