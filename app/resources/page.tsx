import PageHero from "@/components/PageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = { title: "Resources", description: "Process safety and engineering resources from Rising Solution." };

export default function ResourcesPage() {
 const items=[["Process Safety","Understanding hazard identification, safeguards and risk reduction."],["Risk Engineering","Practical context for QRA, consequence assessment and facility risk."],["ISO & QHSE","Management-system, audit and compliance topics."],["Industrial Safety","Engineering and operational considerations for safer facilities."]];
 return <main><PageHero eyebrow="Resources" title="Technical insights and practical guidance." description="A foundation for future articles, guides, FAQs and technical explainers."/><section className="section-pad"><div className="container-engineering grid gap-5 md:grid-cols-2">{items.map(([t,d])=><article key={t} className="rounded-xl border border-slate-200 p-7"><p className="text-xs font-extrabold uppercase tracking-[.14em] text-orange-600">Coming soon</p><h2 className="mt-3 text-2xl font-extrabold text-[#081a31]">{t}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{d}</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Discuss a topic <ArrowRight size={16}/></Link></article>)}</div></section></main>;
}
