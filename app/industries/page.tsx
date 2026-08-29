import Link from "next/link";
import PageHero from "@/components/PageHero";
import { industries } from "@/lib/data";
import { Factory, ArrowRight } from "lucide-react";

export const metadata = { title: "Industries", description: "Industrial sectors served by Rising Solution." };

export default function IndustriesPage() {
 return <main>
  <PageHero eyebrow="Industries We Serve" title="Risk engineering for industrial environments." description="Capabilities can be applied across higher-risk process, energy, manufacturing and infrastructure environments." />
  <section className="section-pad">
   <div className="container-engineering grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    {industries.map(i => <Link key={i.slug} href={`/industries/${i.slug}`} className="group rounded-xl border border-slate-200 p-7 hover:border-orange-200 hover:shadow-engineering">
      <Factory className="text-orange-500" size={30}/>
      <h2 className="mt-6 text-xl font-extrabold text-[#081a31] group-hover:text-orange-600">{i.name}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{i.description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold">Explore <ArrowRight size={16}/></span>
    </Link>)}
   </div>
  </section>
 </main>;
}
