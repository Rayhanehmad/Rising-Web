 "use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const links = [
  { label: "Services", href: "/services", children: [
    ["Process Safety", "/services/process-safety"],
    ["Risk Engineering", "/services/risk-engineering"],
    ["Functional Safety", "/services/functional-safety"],
    ["Fire Protection", "/services/fire-protection"],
    ["ISO & QHSE", "/services/iso-qhse"],
    ["Engineering Assurance", "/services/engineering-assurance"]
  ]},
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container-engineering flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#081a31] text-sm font-black text-orange-400">RS</div>
          <div className="leading-none">
            <div className="text-xl font-extrabold tracking-tight text-[#081a31]"><span className="text-orange-500">Rising</span> Solution</div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[.14em] text-slate-500">Engineering Consultancy</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => link.children ? (
            <div key={link.label} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <Link href={link.href} className="inline-flex items-center gap-1 text-sm font-bold text-slate-700 hover:text-orange-600">
                {link.label}<ChevronDown size={15} />
              </Link>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  {link.children.map(([label, href]) => <Link key={label} href={href} className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600">{label}</Link>)}
                </div>
              )}
            </div>
          ) : (
            <Link key={link.label} href={link.href} className="text-sm font-bold text-slate-700 hover:text-orange-600">{link.label}</Link>
          ))}
          <Link href="/contact" className="rounded-md bg-orange-500 px-5 py-3 text-sm font-extrabold text-white hover:bg-orange-600">Request Consultation</Link>
        </nav>

        <button aria-label="Open menu" onClick={() => setOpen(!open)} className="rounded-md border border-slate-200 p-2 lg:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-engineering py-4">
            {links.map((link) => <div key={link.label}>
              <Link onClick={() => setOpen(false)} href={link.href} className="block border-b border-slate-100 py-3 font-bold text-slate-700">{link.label}</Link>
              {link.children?.map(([label, href]) => <Link onClick={() => setOpen(false)} key={label} href={href} className="block py-2 pl-4 text-sm text-slate-500">{label}</Link>)}
            </div>)}
            <Link onClick={() => setOpen(false)} href="/contact" className="mt-4 block rounded-md bg-orange-500 px-5 py-3 text-center font-bold text-white">Request Consultation</Link>
          </div>
        </div>
      )}
    </header>
  );
}
