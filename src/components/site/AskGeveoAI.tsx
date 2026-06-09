import { useState } from "react";
import { Sparkles, ArrowUp, Loader2 } from "lucide-react";

const EXAMPLES = [
  "What AI solutions do you offer?",
  "Do you build Web3 applications?",
  "What technologies do you use?",
  "How can Geveo help my business?",
];

export function AskGeveoAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function ask(q: string) {
    const trimmed = q.trim();
    if (!trimmed || loading) return;
    setLoading(true);
    setError(null);
    setAnswer(null);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      setAnswer(data.answer);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative">
      {/* glow */}
      <div
        aria-hidden
        className="absolute -inset-px rounded-2xl opacity-60 blur-xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(83,173,111,0.35), rgba(56,140,220,0.25) 50%, rgba(220,180,80,0.18))",
        }}
      />
      <div className="relative rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(15,40,80,0.18)] p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary to-[#3b82c6] text-white shadow-md">
            <Sparkles className="h-4 w-4" />
          </span>
          <div className="flex-1">
            <div className="text-sm font-semibold text-foreground flex items-center gap-2">
              Ask Geveo AI
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" /> Online
              </span>
            </div>
            <div className="text-[11px] text-muted-foreground">
              AI assistant · trained on Geveo services
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(question);
          }}
          className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-white/80 px-3 py-2 focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/15 transition"
        >
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about our services, technologies, projects, or expertise..."
            maxLength={500}
            className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground/80 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-green disabled:opacity-50 transition hover:opacity-95"
            aria-label="Ask"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowUp className="h-4 w-4" />}
          </button>
        </form>

        {!answer && !error && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {EXAMPLES.map((q) => (
              <button
                key={q}
                onClick={() => {
                  setQuestion(q);
                  ask(q);
                }}
                className="rounded-full border border-border bg-white/70 px-2.5 py-1 text-[11px] text-muted-foreground hover:border-primary/50 hover:text-foreground hover:bg-primary/5 transition"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {(answer || error || loading) && (
          <div className="mt-3 rounded-xl border border-border bg-gradient-to-br from-primary/5 to-white px-3 py-2.5 text-sm text-foreground/90 min-h-[60px]">
            {loading && (
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-3.5 w-3.5 animate-spin" /> Thinking…
              </span>
            )}
            {error && <span className="text-destructive text-xs">{error}</span>}
            {answer && <p className="whitespace-pre-wrap leading-relaxed">{answer}</p>}
            {(answer || error) && (
              <button
                onClick={() => {
                  setAnswer(null);
                  setError(null);
                  setQuestion("");
                }}
                className="mt-2 text-[11px] text-primary hover:underline"
              >
                Ask another question
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
