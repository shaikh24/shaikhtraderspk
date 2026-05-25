import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { z } from "zod";

const schema = z.string().email().max(255);

export function Newsletter({ variant = "inline" }: { variant?: "inline" | "card" }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

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
    } catch (error) {
      console.error("Newsletter submission failed:", error);
      toast.error("Couldn't subscribe right now. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isCard = variant === "card";

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
          {loading ? "Sending…" : <>Subscribe <Send className="h-4 w-4" /></>}
        </button>
      </div>
    </form>
  );
}