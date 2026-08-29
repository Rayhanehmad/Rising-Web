import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="overflow-hidden bg-[#081a31] py-20 text-white sm:py-28">
      <div className="container-engineering relative">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="relative max-w-4xl">
          <div className="eyebrow text-orange-400">{eyebrow}</div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3.5 font-bold hover:bg-orange-600">Discuss a requirement <ArrowRight size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
