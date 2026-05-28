import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";

const schema = z.string().email().max(255);

export function Newsletter({ variant = "inline" }: { variant?: "inline" | "card" }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsed = schema.safeParse(email.trim());
    if (!parsed.success) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      setLoading(true);
      const { error } = await supabase.from("newsletter_subscribers").insert({ email: parsed.data });

      if (error && !error.message.includes("duplicate")) {
        toast.error("Couldn't subscribe right now. Please try again.");
        return;
      }
      toast.success("Subscribed — welcome aboard.");
      setEmail("");
      setDone(true);
      setTimeout(() => setDone(false), 6000);
    } catch (error) {
      console.error("Newsletter submission failed:", error);
      toast.error("Couldn't subscribe right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isCard = variant === "card";

  if (done) {
    return (
      <div
        className={
          isCard
            ? "glass-dark rounded-2xl p-6 sm:p-8 text-center animate-fade-up"
            : "flex items-center gap-3 rounded-full border border-gold/40 bg-white/5 px-5 py-3 text-sm text-white animate-fade-up"
        }
      >
        <span className={isCard ? "mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full gradient-gold text-navy-deep" : "inline-flex h-8 w-8 items-center justify-center rounded-full gradient-gold text-navy-deep"}>
          <CheckCircle2 className={isCard ? "h-6 w-6" : "h-4 w-4"} />
        </span>
        <div className={isCard ? "mt-4" : ""}>
          <p className={isCard ? "text-lg font-semibold text-white" : "font-semibold"}>You're subscribed.</p>
          {isCard && <p className="mt-1 text-sm text-white/70">Watch your inbox for our next trade brief.</p>}
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className={
        isCard
          ? "glass-dark rounded-2xl p-6 sm:p-8"
          : "flex flex-col sm:flex-row items-stretch gap-2"
      }
    >
      {isCard && (
        <>
          <h3 className="text-2xl font-semibold text-white">Stay in the loop</h3>
          <p className="mt-1.5 text-sm text-white/70">Trade updates, new product launches, and shipping insights — once a month.</p>
        </>
      )}
      <div className={isCard ? "mt-4 flex flex-col sm:flex-row items-stretch gap-2" : "contents"}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold transition-colors"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-full gradient-gold px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-gold hover:opacity-90 disabled:opacity-60 transition"
        >
          {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : <>Subscribe <Send className="h-4 w-4" /></>}
        </button>
      </div>
    </form>
  );
}