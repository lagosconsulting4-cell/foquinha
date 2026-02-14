import { SectionTracker } from "@/components/analytics/section-tracker"

export function ComparisonSection() {
    return (
        <SectionTracker sectionId="comparison">
            <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                            Como a Foquinha te devolve 2h por dia?
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            A matemática é simples: menos tempo perdido = mais tempo seu.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Sem Foquinha - Tempo Perdido */}
                        <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                            <div className="mb-6 text-center">
                                <span className="rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-red-700">
                                    📱 Sem Foquinha
                                </span>

                                <h3 className="mt-6 text-xl font-bold text-slate-900">
                                    Tempo perdido todo dia:
                                </h3>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">📲</span>
                                        <div>
                                            <strong className="text-slate-900">Abrir 5 apps diferentes</strong>
                                            <p className="text-sm text-slate-600">Trello, Notion, Agenda, etc.</p>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold text-red-600">15 min</span>
                                </li>

                                <li className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">✍️</span>
                                        <div>
                                            <strong className="text-slate-900">Atualizar tarefas</strong>
                                            <p className="text-sm text-slate-600">Marcar, reorganizar, sincronizar</p>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold text-red-600">25 min</span>
                                </li>

                                <li className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">🤔</span>
                                        <div>
                                            <strong className="text-slate-900">Reorganizar ao atrasar</strong>
                                            <p className="text-sm text-slate-600">Fazer tudo de novo manualmente</p>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold text-red-600">30 min</span>
                                </li>

                                <li className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">🔍</span>
                                        <div>
                                            <strong className="text-slate-900">Lembrar onde anotou</strong>
                                            <p className="text-sm text-slate-600">Procurar em apps e cadernos</p>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold text-red-600">20 min</span>
                                </li>
                            </ul>

                            <div className="mt-6 rounded-xl bg-red-50 p-4 text-center ring-2 ring-red-200">
                                <p className="text-sm font-medium text-red-700">Total desperdiçado:</p>
                                <p className="text-3xl font-bold text-red-700">90 min/dia</p>
                            </div>
                        </div>

                        {/* Com Foquinha - Tempo Economizado */}
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-secondary/90 p-8 shadow-xl ring-2 ring-secondary/30">
                            <div className="mb-6 text-center">
                                <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white">
                                    ✨ Com Foquinha
                                </span>

                                <h3 className="mt-6 text-xl font-bold text-white">
                                    Tempo investido todo dia:
                                </h3>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-center justify-between rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">💬</span>
                                        <div>
                                            <strong className="text-white">Jogar tudo no WhatsApp</strong>
                                            <p className="text-sm text-white/80">Texto ou áudio, super rápido</p>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold text-white">10 seg</span>
                                </li>

                                <li className="flex items-center justify-between rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">🤖</span>
                                        <div>
                                            <strong className="text-white">IA organiza tudo</strong>
                                            <p className="text-sm text-white/80">Automático, zero esforço</p>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold text-white">0 min</span>
                                </li>

                                <li className="flex items-center justify-between rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">🔄</span>
                                        <div>
                                            <strong className="text-white">IA reorganiza sozinha</strong>
                                            <p className="text-sm text-white/80">Adaptação automática</p>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold text-white">0 min</span>
                                </li>

                                <li className="flex items-center justify-between rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">📍</span>
                                        <div>
                                            <strong className="text-white">Tudo num lugar só</strong>
                                            <p className="text-sm text-white/80">WhatsApp que você já usa</p>
                                        </div>
                                    </div>
                                    <span className="text-lg font-bold text-white">0 min</span>
                                </li>
                            </ul>

                            <div className="mt-6 rounded-xl bg-white/20 p-4 text-center ring-2 ring-white/40 backdrop-blur-sm">
                                <p className="text-sm font-medium text-white">Total investido:</p>
                                <p className="text-3xl font-bold text-white">10 seg/dia</p>
                            </div>

                            <div className="mt-6 rounded-xl bg-yellow-400 p-6 text-center shadow-lg">
                                <p className="mb-2 text-sm font-bold text-slate-900">💰 Você economiza:</p>
                                <p className="mb-1 text-4xl font-bold text-slate-900">~2h por dia</p>
                                <p className="text-sm font-medium text-slate-700">= 730h por ano = 30 dias inteiros!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SectionTracker>
    )
}
