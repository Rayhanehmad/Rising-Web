"use client";
import { useState } from "react";

export default function ContactForm() {
 const [state,setState]=useState<"idle"|"sending"|"success"|"error">("idle");
 const [error,setError]=useState("");
 async function submit(e:React.FormEvent<HTMLFormElement>) {
  e.preventDefault(); setState("sending"); setError("");
  const form=e.currentTarget;
  const data=Object.fromEntries(new FormData(form).entries());
  try {
   const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
   const json=await res.json();
   if(!res.ok) throw new Error(json.error || "Unable to send");
   form.reset(); setState("success");
  } catch(err) { setState("error"); setError(err instanceof Error?err.message:"Something went wrong"); }
 }
 return <form onSubmit={submit} className="space-y-5">
  <div className="grid gap-5 sm:grid-cols-2">
   <Field name="name" label="Name" required />
   <Field name="email" label="Work Email" type="email" required />
   <Field name="phone" label="Phone" required />
   <Field name="company" label="Company" required />
  </div>
  <div><label className="mb-2 block text-sm font-bold">Service required</label><select name="service" required className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 outline-none focus:border-orange-500"><option value="">Select a service</option><option>Process Safety</option><option>Risk Engineering</option><option>Functional Safety</option><option>Fire Protection</option><option>ISO & QHSE</option><option>Engineering Assurance</option></select></div>
  <div><label className="mb-2 block text-sm font-bold">Project / requirement</label><textarea name="message" rows={6} required minLength={10} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-orange-500" placeholder="Briefly describe your facility, project or safety requirement." /></div>
  {state==="success" && <div className="rounded-md border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-800">Thank you. Your enquiry has been received.</div>}
  {state==="error" && <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800">{error}</div>}
  <button disabled={state==="sending"} className="rounded-md bg-orange-500 px-7 py-3.5 font-extrabold text-white hover:bg-orange-600 disabled:opacity-60">{state==="sending"?"Sending…":"Submit Consultation Request"}</button>
 </form>;
}
function Field({name,label,type="text",required=false}:{name:string;label:string;type?:string;required?:boolean}) {
 return <div><label className="mb-2 block text-sm font-bold">{label}</label><input name={name} type={type} required={required} className="w-full rounded-md border border-slate-300 px-4 py-3 outline-none focus:border-orange-500" /></div>
}
