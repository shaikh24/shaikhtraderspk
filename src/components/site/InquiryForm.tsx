import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

// Kuch basic standard countries ka local backup array taake crash na ho
const BACKUP_COUNTRIES = [
  { code: "PK", name: "Pakistan", dial: "+92", flag: "🇵🇰" },
  { code: "US", name: "United States", dial: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
  { code: "AE", name: "United Arab Emirates", dial: "+971", flag: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia", dial: "+966", flag: "🇸🇦" },
  { code: "CA", name: "Canada", dial: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", dial: "+61", flag: "🇦🇺" },
  { code: "DE", name: "Germany", dial: "+49", flag: "🇩🇪" },
];

const schema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(120),
  company_name: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email").max(255),
  dial: z.string().max(8),
  phone: z.string().trim().max(32).optional().or(z.literal("")),
  country: z.string().min(1, "Select a country").max(80),
  product_category: z.string().max(120).optional().or(z.literal("")),
  product_requirement: z.string().trim().max(500).optional().or(z.literal("")),
  quantity: z.string().trim().max(80).optional().or(z.literal("")),
  shipping_preference: z.string().max(80).optional().or(z.literal("")),
  budget_range: z.string().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const CATEGORIES = [
  "Textile & Fabrics",
  "Sportswear & Gym Wear",
  "Home Textile",
  "Surgical Instruments",
  "Leather Products",
  "Himalayan Pink Salt",
  "Rice & Spices",
  "Other",
];
const SHIPPING = ["Sea Freight (FCL)", "Sea Freight (LCL)", "Air Freight", "Express Courier", "Not sure"];
const BUDGETS = ["< $5k", "$5k – $25k", "$25k – $100k", "$100k – $500k", "$500k+"];

export function InquiryForm({ source = "website" }: { source?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [dial, setDial] = useState("+92");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const currentForm = e.currentTarget;
    const fd = new FormData(currentForm);
    
    // File remove kar rahe hain raw data se taake JSON insertion crash na ho
    fd.delete("file"); 
    
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    raw.dial = dial;

    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your inputs.");
      return;
    }

    const d = parsed.data;
    setSubmitting(true);

    try {
      const { error } = await supabase.from("inquiries").insert({
        full_name: d.full_name,
        company_name: d.company_name || null,
        email: d.email,
        phone: d.phone ? `${d.dial} ${d.phone}` : null,
        country: d.country,
        product_category: d.product_category || null,
        product_requirement: d.product_requirement || null,
        quantity: d.quantity || null,
        shipping_preference: d.shipping_preference || null,
        budget_range: d.budget_range || null,
        message: d.message || null,
        source,
      });

      if (error) {
        console.error("Database error:", error);
        toast.error("Couldn't submit. Please check database connectivity.");
      } else {
        toast.success("Inquiry received — our team will respond within 24 hours.");
        currentForm.reset();
      }
    } catch (err) {
      console.error("Caught Form Crash:", err);
      toast.error("Form transmission error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20 disabled:opacity-50";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <Field label="Full Name *"><input name="full_name" required disabled={submitting} className={inputCls} placeholder="John Doe" /></Field>
      <Field label="Company Name"><input name="company_name" disabled={submitting} className={inputCls} placeholder="Acme Imports Ltd." /></Field>
      <Field label="Email Address *"><input type="email" name="email" required disabled={submitting} className={inputCls} placeholder="you@company.com" /></Field>
      
      <Field label="Phone">
        <div className="flex gap-2">
          <select value={dial} disabled={submitting} onChange={(e) => setDial(e.target.value)} className={inputCls + " w-32"}>
            {BACKUP_COUNTRIES.map((c) => (
              <option key={c.code} value={c.dial}>{c.flag} {c.dial}</option>
            ))}
          </select>
          <input name="phone" disabled={submitting} className={inputCls} placeholder="300 0000000" />
        </div>
      </Field>

      <Field label="Country *">
        <select name="country" required disabled={submitting} defaultValue="" className={inputCls}>
          <option value="" disabled>Select your country</option>
          {BACKUP_COUNTRIES.map((c) => (
            <option key={c.code} value={c.name}>{c.flag} {c.name}</option>
          ))}
        </select>
      </Field>

      <Field label="Product Category">
        <select name="product_category" disabled={submitting} defaultValue="" className={inputCls}>
          <option value="">Select a category</option>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
      </Field>
      
      <Field label="Product Requirement" className="sm:col-span-2">
        <input name="product_requirement" disabled={submitting} className={inputCls} placeholder="e.g. 100% cotton t-shirts, 180 GSM" />
      </Field>
      
      <Field label="Quantity"><input name="quantity" disabled={submitting} className={inputCls} placeholder="e.g. 10,000 pcs" /></Field>
      
      <Field label="Shipping Preference">
        <select name="shipping_preference" disabled={submitting} defaultValue="" className={inputCls}>
          <option value="">Select option</option>
          {SHIPPING.map((s) => <option key={s}>{s}</option>)}
        </select>
      </Field>
      
      <Field label="Budget Range">
        <select name="budget_range" disabled={submitting} defaultValue="" className={inputCls}>
          <option value="">Select budget</option>
          {BUDGETS.map((b) => <option key={b}>{b}</option>)}
        </select>
      </Field>
      
      <Field label="Message" className="sm:col-span-2">
        <textarea name="message" disabled={submitting} rows={5} className={inputCls} placeholder="Tell us about your project, target timelines, and any specifications…" />
      </Field>
      
      <div className="sm:col-span-2 mt-2 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-xs text-muted-foreground">Your information is encrypted and never shared with third parties.</p>
        <Button type="submit" disabled={submitting} size="lg" className="rounded-full gradient-gold text-navy-deep hover:opacity-90 shadow-gold border-0">
          {submitting ? "Sending…" : "Send Inquiry"}
        </Button>
      </div>
    </form>
  );
}

function Field({ label, children, className }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
      {children}
    </label>
  );
          }
                                       
