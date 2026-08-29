import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = { title: "Contact", description: "Contact Rising Solution for engineering consultancy requirements." };

export default function ContactPage() {
 return <main>
  <PageHero eyebrow="Contact" title="Discuss your engineering challenge." description="Tell us about your facility, project or safety requirement and identify the appropriate engineering service." />
  <section className="section-pad">
   <div className="container-engineering grid gap-10 lg:grid-cols-[1.5fr_.7fr]">
    <div className="rounded-2xl border border-slate-200 p-7 shadow-engineering sm:p-10"><div className="eyebrow">Consultation request</div><h2 className="mt-4 text-3xl font-extrabold text-[#081a31]">Send an enquiry</h2><p className="mt-3 mb-8 text-slate-600">Provide enough context for the team to understand the nature of the requirement.</p><ContactForm/></div>
    <div className="rounded-2xl bg-[#081a31] p-8 text-white">
      <h2 className="text-2xl font-extrabold">Get in touch</h2>
      <div className="mt-8 space-y-7 text-sm text-slate-300">
       <a className="flex gap-4" href="mailto:info@risingsolution.in"><Mail className="shrink-0 text-orange-400"/><span><b className="block text-white">Email</b>info@risingsolution.in</span></a>
       <div className="flex gap-4"><MapPin className="shrink-0 text-orange-400"/><span><b className="block text-white">Address</b>Contact details to be confirmed</span></div>
       <div className="flex gap-4"><Phone className="shrink-0 text-orange-400"/><span><b className="block text-white">Phone</b>Contact details to be confirmed</span></div>
      </div>
    </div>
   </div>
  </section>
 </main>;
}
