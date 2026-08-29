import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { industries } from "@/lib/data";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() { return industries.map(i => ({ slug: i.slug })); }
export async function generateMetadata({ params }: { params: { slug: string } }) {
 const i = industries.find(x => x.slug === params.slug);
 return i ? { title: i.name, description: i.description } : {};
}
export default function IndustryDetail({ params }: { params: { slug: string } }) {
 const industry = industries.find(i => i.slug === params.slug);
 if (!industry) notFound();
 return <main>
  <PageHero eyebrow="Industry" title={industry.name} description={industry.description} />
  <section className="section-pad grid-tech">
   <div className="container-engineering">
    <div className="max-w-3xl">
      <div className="eyebrow">Relevant capabilities</div>
      <h2 className="mt-4 text-4xl font-extrabold text-[#081a31]">A risk-based engineering lens.</h2>
      <p className="mt-5 leading-8 text-slate-600">The appropriate service scope depends on the facility, process, hazards, project phase and applicable requirements. Rising Solution's portfolio can be combined to address those needs.</p>
    </div>
    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.slice(0,6).map(s => <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-xl border border-slate-200 bg-white p-6 hover:border-orange-200">
        <h3 className="font-extrabold text-[#081a31]">{s.title}</h3><p className="mt-2 text-sm text-slate-600">{s.description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-bold">View service <ArrowRight size={15}/></span>
      </Link>)}
    </div>
   </div>
  </section>
 </main>;
}
