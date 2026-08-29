import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/data";

export const metadata = { title: "Services", description: "Process safety, risk engineering, functional safety, fire protection, ISO and engineering assurance services." };

export default function ServicesPage() {
  return <main>
    <PageHero eyebrow="Our Services" title="Engineering services organized around risk." description="A structured portfolio for process safety, risk assessment, functional safety, fire protection, ISO & QHSE and engineering assurance." />
    <section className="section-pad grid-tech">
      <div className="container-engineering grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(s => <Link href={`/services/${s.slug}`} key={s.slug} className="group rounded-xl border border-slate-200 bg-white p-7 shadow-sm hover:-translate-y-1 hover:border-orange-200 hover:shadow-engineering">
          <ShieldCheck className="text-orange-500" size={30}/>
          <p className="mt-6 text-xs font-extrabold tracking-[.14em] text-orange-600">{s.category}</p>
          <h2 className="mt-2 text-2xl font-extrabold text-[#081a31] group-hover:text-orange-600">{s.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">{s.description}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Explore <ArrowRight size={16}/></span>
        </Link>)}
      </div>
    </section>
  </main>;
}
