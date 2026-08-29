import PageHero from "@/components/PageHero";
import { Target, ShieldCheck, FileCheck2 } from "lucide-react";

export const metadata = { title: "About Rising Solution", description: "About Rising Solution engineering consultancy." };

export default function AboutPage() {
 return <main>
  <PageHero eyebrow="About Rising Solution" title="Technical thinking. Practical risk control." description="A consultancy positioned around process safety, risk management, fire protection, ISO & QHSE and engineering assurance." />
  <section className="section-pad">
   <div className="container-engineering grid gap-12 lg:grid-cols-2">
    <div><div className="eyebrow">Who we are</div><h2 className="mt-4 text-4xl font-extrabold text-[#081a31]">A structured approach to industrial risk.</h2></div>
    <div className="space-y-5 leading-8 text-slate-600"><p>Rising Solution's service portfolio is designed around identifying hazards, assessing risk, strengthening safeguards and supporting compliance.</p><p>The website is intentionally structured around engineering disciplines rather than generic corporate claims, allowing technical decision-makers to find the service and context relevant to their requirement.</p></div>
   </div>
  </section>
  <section className="section-pad bg-slate-50">
   <div className="container-engineering grid gap-5 md:grid-cols-3">
    {[["Risk-based thinking","Focus recommendations around credible hazards, consequences and safeguards.",Target],["Engineering discipline","Use structured studies, reviews and documentation appropriate to scope.",ShieldCheck],["Practical assurance","Connect findings with implementation, compliance and continuous improvement.",FileCheck2]].map(([t,d,I]) => {const C=I as typeof Target; return <div key={t as string} className="rounded-xl border border-slate-200 bg-white p-7"><C className="text-orange-500"/><h3 className="mt-5 text-xl font-extrabold text-[#081a31]">{t as string}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{d as string}</p></div>})}
   </div>
  </section>
 </main>;
}
