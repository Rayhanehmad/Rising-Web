import PageHero from "@/components/PageHero";

export const metadata = { title: "FAQ", description: "Frequently asked questions about process safety and engineering consultancy services." };

const faqs=[
["What is a HAZOP study?","HAZOP is a structured study technique used to identify deviations from intended process design or operation and evaluate their causes, consequences and safeguards."],
["What is QRA?","Quantitative Risk Assessment uses defined methods to estimate risk from credible scenarios and support risk-informed decisions."],
["What is LOPA?","Layer of Protection Analysis is a semi-quantitative method used to examine initiating events, independent protection layers and risk reduction."],
["What is SIL assessment?","A SIL assessment determines the required safety integrity level for a safety instrumented function based on the risk scenario and applicable methodology."],
["What does fire protection engineering cover?","Depending on scope, it may include fire protection reviews, fire-water considerations, fire and gas mapping, detection and emergency planning."],
["Can services be combined?","Yes. The appropriate combination depends on the facility, project phase, hazards and client objectives."],
["What information is needed to start a study?","The required information varies, but may include process descriptions, drawings, operating data, equipment information, procedures and previous study records."],
["Do you provide ISO consultancy?","The service portfolio includes ISO and QHSE consultancy support. The exact standard and scope should be confirmed for the organization."],
["Can an existing facility be assessed?","Risk and safety reviews can be structured for existing facilities where the required technical information and scope are available."],
["How do I request a consultation?","Use the contact page and provide your company, service requirement and a short description of the facility or project."]
];

export default function FAQPage(){return <main><PageHero eyebrow="FAQ" title="Questions about our engineering services." description="Clear answers to common process safety, risk engineering and consultancy questions."/><section className="section-pad"><div className="container-engineering max-w-4xl">{faqs.map(([q,a])=><details key={q} className="border-b border-slate-200 py-6"><summary className="cursor-pointer list-none pr-8 text-lg font-extrabold text-[#081a31]">{q}</summary><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">{a}</p></details>)}</div></section></main>}
