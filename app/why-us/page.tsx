import PageHero from "@/components/PageHero";
import { SearchCheck, Scale, Wrench, ShieldCheck, Workflow } from "lucide-react";

export const metadata = { title: "Why Rising Solution", description: "Rising Solution approach to engineering risk and safety." };

export default function WhyUsPage() {
 const items = [
  ["Risk-based approach","Prioritize hazards, scenarios and safeguards instead of relying on generic checklists.",SearchCheck],
  ["Evidence-led decisions","Structure assessments so technical observations can support clear engineering decisions.",Scale],
  ["Practical recommendations","Recommendations should be understandable, actionable and connected to the identified risk.",Wrench],
  ["Cross-disciplinary view","Process safety, risk, fire protection, QHSE and assurance can be considered together.",Workflow],
  ["Safety & compliance","Support organizations in strengthening controls and management-system practices.",ShieldCheck]
 ];
 return <main>
  <PageHero eyebrow="Why Rising Solution" title="A disciplined approach to risk." description="The value proposition is built around technical clarity, practical recommendations and structured engineering assurance." />
  <section className="section-pad">
   <div className="container-engineering grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    {items.map(([t,d,I])=>{const C=I as typeof SearchCheck; return <div key={t as string} className="rounded-xl border border-slate-200 p-7 hover:border-orange-200 hover:shadow-engineering"><C className="text-orange-500" size={28}/><h2 className="mt-6 text-xl font-extrabold text-[#081a31]">{t as string}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{d as string}</p></div>})}
   </div>
  </section>
  <section className="bg-[#081a31] py-20 text-white"><div className="container-engineering"><div className="eyebrow text-orange-400">Methodology</div><div className="mt-8 grid gap-3 md:grid-cols-5">{["Identify","Assess","Control","Verify","Improve"].map((x,i)=><div key={x} className="border border-white/10 bg-white/[.04] p-6"><div className="text-sm font-black text-orange-400">0{i+1}</div><div className="mt-3 text-lg font-extrabold">{x}</div></div>)}</div></div></section>
 </main>;
}
