"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-[#f89f34]">
      {/* <div className="sticky top-0 z-50 bg-white/80 backdrop-blur rounded-t-[10px]"> */}
      <div className="sticky top-0 z-50 bg-white backdrop-blur rounded-t-[10px]">
        <div className="container mx-auto px-4 h-auto  flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src={"/logo.svg"} fill />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/">Home</Link>
            <div className="relative">
              <button
                onClick={() => setOpen((o) => !o)}
                className="hover:text-orange-600"
              >
                Services ▾
              </button>
              {open && (
                <div className="absolute mt-2 w-56 rounded-xl border bg-white p-2 shadow">
                  <NavItem href="#journey" label="Puja Booking / Participate" />
                  <NavItem href="#tools" label="Spiritual Guidance" />
                  <NavItem href="#library" label="Library" />
                  <NavItem href="#pandit" label="Book Pandit Ji" />
                </div>
              )}
            </div>
            <Link href="/bookings">My Bookings</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
          <div className="flex items-center gap-3">
            <input
              placeholder="Search"
              className="hidden md:block h-9 w-56 rounded-full border px-4 text-sm outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="h-9 w-9 grid place-items-center rounded-full border hover:bg-orange-50">
              🛒
            </button>
            <button className="h-9 w-9 grid place-items-center rounded-full border hover:bg-orange-50">
              👤
            </button>
            <button className="md:hidden h-9 w-9 grid place-items-center rounded-full border">
              ☰
            </button>
          </div>
        </div>
      </div>
     </header>
  );
}

function NavItem({ href, label }) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-2 text-sm hover:bg-orange-50 hover:text-orange-700"
    >
      {label}
    </Link>
  );
}
