import { SectionTracker } from "@/components/analytics/section-tracker"

const rows = [
    { emoji: "📲", label: "Abrir apps / anotar", without: "15 min", with: "0" },
    { emoji: "✍️", label: "Atualizar tarefas", without: "25 min", with: "0" },
    { emoji: "🤔", label: "Reorganizar ao atrasar", without: "30 min", with: "0" },
    { emoji: "🔍", label: "Lembrar onde anotou", without: "20 min", with: "0" },
] as const

export function ComparisonSection() {
    return (
        <SectionTracker sectionId="comparison">
            <section className="bg-white px-4 py-14 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                            Como a Foquinha te devolve 2h por dia?
                        </h2>
                    </div>

                    {/* Cabeçalho da tabela */}
                    <div className="mb-2 grid grid-cols-[1fr_5rem_5rem] gap-x-2 px-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-slate-400" />
                        <span className="text-center text-xs font-semibold uppercase tracking-widest text-red-400">
                            Antes
                        </span>
                        <span className="text-center text-xs font-semibold uppercase tracking-widest text-secondary">
                            Com Foquinha
                        </span>
                    </div>

                    {/* Linhas */}
                    <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden">
                        {rows.map((row, i) => (
                            <div key={i} className="grid grid-cols-[1fr_5rem_5rem] items-center gap-x-2 px-4 py-3.5">
                                <div className="flex items-center gap-2.5">
                                    <span className="text-lg">{row.emoji}</span>
                                    <span className="text-sm font-medium text-slate-700">{row.label}</span>
                                </div>
                                <span className="text-center text-sm font-bold text-red-500 tabular-nums">
                                    {row.without}
                                </span>
                                <span className="text-center text-sm font-bold text-secondary tabular-nums">
                                    {row.with === "0" ? "✓" : row.with}
                                </span>
                            </div>
                        ))}

                        {/* Total row */}
                        <div className="grid grid-cols-[1fr_5rem_5rem] items-center gap-x-2 bg-slate-100 px-4 py-4">
                            <span className="text-sm font-bold text-slate-700">Total</span>
                            <span className="text-center text-base font-black text-red-500 tabular-nums">90 min</span>
                            <span className="text-center text-base font-black text-secondary tabular-nums">10 seg</span>
                        </div>
                    </div>

                    {/* Resultado — compact pill */}
                    <div className="mt-4 text-center">
                        <div className="inline-flex flex-col items-center gap-0.5 rounded-full bg-secondary px-6 py-3">
                            <span className="text-[11px] font-medium text-black/60">Você economiza</span>
                            <span className="text-lg font-black text-slate-900">~2h por dia</span>
                        </div>
                        <p className="mt-2 text-xs text-slate-400">= 730h/ano = 30 dias inteiros de volta</p>
                    </div>
                </div>
            </section>
        </SectionTracker>
    )
}
