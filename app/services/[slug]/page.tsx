import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/data";

export function generateStaticParams() { return services.map(s => ({ slug: s.slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  return service ? { title: service.title, description: service.description } : {};
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) notFound();
  return <main>
    <PageHero eyebrow={service.category} title={service.title} description={service.description} />
    <section className="section-pad">
      <div className="container-engineering grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="eyebrow">Service overview</div>
          <h2 className="mt-5 text-4xl font-extrabold text-[#081a31]">From hazard understanding to practical risk control.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{service.overview}</p>
          <div className="mt-8 rounded-xl border-l-4 border-orange-500 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
            Scope, methodology and deliverables should be confirmed against the facility, project phase, applicable requirements and client objectives.
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-engineering">
          <p className="text-xs font-extrabold uppercase tracking-[.14em] text-orange-600">Typical scope</p>
          <div className="mt-5 space-y-4">{service.deliverables.map(x => <div key={x} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-orange-500" size={18}/><span className="text-sm font-semibold text-slate-700">{x}</span></div>)}</div>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#081a31] px-5 py-3 font-bold text-white hover:bg-orange-600">Request a consultation <ArrowRight size={17}/></Link>
        </div>
      </div>
    </section>
  </main>;
}
