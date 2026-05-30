import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, CheckCircle2, Send, Package } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { CATEGORIES } from "@/lib/categories";

const schema = z.object({
  full_name: z.string().trim().min(2).max(120),
  company_name: z.string().trim().min(2).max(160),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(5).max(40),
  country: z.string().trim().min(2).max(80),
  product_category: z.string().trim().min(2).max(80),
  product_specs: z.string().trim().min(10).max(1500),
  request_type: z.enum(["single", "multiple"]),
  courier_provider: z.string().trim().min(2).max(40),
  courier_account: z.string().trim().min(3).max(60),
  shipping_address: z.string().trim().min(10).max(500),
  notes: z.string().trim().max(1000).optional(),
});

export function SampleRequestDialog({
  children,
  defaultCategory,
}: {
  children?: ReactNode;
  defaultCategory?: string;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(payload);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please complete all required fields.");
      return;
    }
    try {
      setLoading(true);
      const { error } = await supabase.from("sample_requests").insert(parsed.data);
      if (error) {
        console.error("Sample request failed:", error);
        toast.error("Couldn't submit your request. Please try again.");
        return;
      }
      toast.success("Sample request received — our team will be in touch within 24 hours.");
      setDone(true);
    } catch (err) {
      console.error("Sample request failed:", err);
      toast.error("Couldn't submit your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const trigger = children ?? (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-navy-deep shadow-gold hover:opacity-90 transition"
    >
      <Package className="h-4 w-4" /> Request a Free Sample
    </button>
  );

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        setOpen(v);
        if (!v) setTimeout(() => setDone(false), 200);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto">
        {done ? (
          <div className="py-10 text-center animate-fade-up">
            <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full gradient-gold text-navy-deep shadow-gold">
              <CheckCircle2 className="h-7 w-7" />
            </span>
            <h3 className="mt-4 text-2xl font-semibold">Request received</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Thank you. Our export team will email you within 24 hours with sample availability,
              courier instructions and any applicable charges per our Trade Policies.
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <DialogHeader>
              <DialogTitle className="text-2xl">Request a Free Sample</DialogTitle>
              <DialogDescription>
                Verified B2B buyers receive <strong>one (1) sample free of cost</strong>. The buyer
                covers all international courier charges via their own DHL/FedEx/UPS account.
                Multi-item kits are quoted separately and refundable on first FCL order.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Full name *" name="full_name" />
              <Field label="Company name *" name="company_name" />
              <Field label="Business email *" name="email" type="email" />
              <Field label="Phone (with country code) *" name="phone" placeholder="+1 555 123 4567" />
              <Field label="Country *" name="country" />
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground/80">Product category *</label>
                <select
                  name="product_category"
                  defaultValue={defaultCategory ?? ""}
                  required
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                >
                  <option value="" disabled>Select a category</option>
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground/80">Item / specifications *</label>
                <textarea
                  name="product_specs"
                  required
                  rows={3}
                  placeholder="e.g. 220 GSM combed cotton jersey, navy blue, 1 meter swatch"
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground/80">Sample type *</label>
                <select
                  name="request_type"
                  defaultValue="single"
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                >
                  <option value="single">Single free sample</option>
                  <option value="multiple">Multiple items / full kit (chargeable)</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground/80">Courier provider *</label>
                <select
                  name="courier_provider"
                  defaultValue=""
                  required
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                >
                  <option value="" disabled>Select courier</option>
                  <option>DHL</option>
                  <option>FedEx</option>
                  <option>UPS</option>
                  <option>TNT</option>
                  <option>Aramex</option>
                </select>
              </div>
              <Field label="Your courier account # *" name="courier_account" placeholder="e.g. DHL 123456789" className="sm:col-span-2" />
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground/80">Shipping address *</label>
                <textarea
                  name="shipping_address"
                  required
                  rows={2}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-1.5">
                <label className="text-xs font-medium text-foreground/80">Notes (optional)</label>
                <textarea
                  name="notes"
                  rows={2}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                />
              </div>
            </div>

            <DialogFooter className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full gradient-gold px-6 py-2.5 text-sm font-semibold text-navy-deep shadow-gold hover:opacity-90 disabled:opacity-60 transition"
              >
                {loading ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
                ) : (
                  <>Submit Sample Request <Send className="h-4 w-4" /></>
                )}
              </button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-xs font-medium text-foreground/80">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="rounded-md border border-border bg-background px-3 py-2 text-sm"
      />
    </div>
  );
}