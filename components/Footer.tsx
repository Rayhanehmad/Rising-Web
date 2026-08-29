import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#061426] text-white">
      <div className="container-engineering grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="text-xl font-extrabold"><span className="text-orange-400">Rising</span> Solution</div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Process safety, risk engineering, fire protection, ISO consultancy and engineering assurance.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Services</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <Link className="block hover:text-white" href="/services/process-safety">Process Safety</Link>
            <Link className="block hover:text-white" href="/services/risk-engineering">Risk Engineering</Link>
            <Link className="block hover:text-white" href="/services/functional-safety">Functional Safety</Link>
            <Link className="block hover:text-white" href="/services/fire-protection">Fire Protection</Link>
            <Link className="block hover:text-white" href="/services/iso-qhse">ISO & QHSE</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Company</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <Link className="block hover:text-white" href="/about">About</Link>
            <Link className="block hover:text-white" href="/why-us">Why Us</Link>
            <Link className="block hover:text-white" href="/industries">Industries</Link>
            <Link className="block hover:text-white" href="/resources">Resources</Link>
            <Link className="block hover:text-white" href="/faq">FAQ</Link>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-4 space-y-4 text-sm text-slate-400">
            <a className="flex gap-3 hover:text-white" href="mailto:info@risingsolution.in"><Mail size={18} /> info@risingsolution.in</a>
            <div className="flex gap-3"><MapPin size={18} /> Contact details to be confirmed</div>
            <div className="flex gap-3"><Phone size={18} /> Phone details to be confirmed</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-engineering flex flex-col justify-between gap-3 py-5 text-xs text-slate-500 sm:flex-row">
          <span>© {new Date().getFullYear()} Rising Solution. All rights reserved.</span>
          <div className="flex gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
        </div>
      </div>
    </footer>
  );
}
