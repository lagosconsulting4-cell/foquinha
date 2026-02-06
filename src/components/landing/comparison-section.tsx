import { Check, X } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"

export function ComparisonSection() {
    return (
        <SectionTracker sectionId="comparison">
            <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                            Por que a Foquinha funciona quando o resto falha?
                        </h2>
                        <p className="mt-4 text-lg text-slate-600">
                            A diferença entre ter uma ferramenta e ter uma assistente.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* O Jeito Antigo */}
                        <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                            <div className="mb-6 text-center">
                                <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-600">
                                    Outros Métodos
                                </span>

                                {/* Visuals - Old Way */}
                                <div className="mt-6 flex justify-center -space-x-4 grayscale opacity-70">
                                    <div className="relative size-16 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-100 z-10 transition-transform hover:scale-110 hover:z-30 hover:grayscale-0">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg"
                                            alt="Google Calendar"
                                            className="size-full object-contain"
                                        />
                                    </div>
                                    <div className="relative size-16 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-100 z-20 transition-transform hover:scale-110 hover:z-30 hover:grayscale-0">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                                            alt="Notion"
                                            className="size-full object-contain"
                                        />
                                    </div>
                                    <div className="relative size-16 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-100 z-0 transition-transform hover:scale-110 hover:z-30 hover:grayscale-0">
                                        <div className="flex size-full items-center justify-center rounded-lg bg-slate-100 text-xs font-bold text-slate-400">
                                            APPS
                                        </div>
                                    </div>
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-slate-900">
                                    Agendas e Apps Comuns
                                </h3>
                            </div>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-3 opacity-75">
                                    <X className="mt-0.5 size-5 flex-shrink-0 text-red-400" />
                                    <div>
                                        <strong className="text-slate-900">Dependem da sua memória</strong>
                                        <p className="text-sm text-slate-600">Se você esquece de olhar, nada acontece.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 opacity-75">
                                    <X className="mt-0.5 size-5 flex-shrink-0 text-red-400" />
                                    <div>
                                        <strong className="text-slate-900">Apps complicados</strong>
                                        <p className="text-sm text-slate-600">Cheios de botões e abas que você não usa.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 opacity-75">
                                    <X className="mt-0.5 size-5 flex-shrink-0 text-red-400" />
                                    <div>
                                        <strong className="text-slate-900">Tem que parar pra anotar</strong>
                                        <p className="text-sm text-slate-600">Exige esforço e interrompe seu dia.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 opacity-75">
                                    <X className="mt-0.5 size-5 flex-shrink-0 text-red-400" />
                                    <div>
                                        <strong className="text-slate-900">Se esqueceu, já era</strong>
                                        <p className="text-sm text-slate-600">As tarefas acumulam e geram culpa.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* O Jeito Foquinha */}
                        <div className="relative overflow-hidden rounded-3xl bg-secondary p-8 shadow-xl ring-1 ring-secondary/20">
                            <div className="mb-6 text-center">
                                <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold text-white">
                                    Com a Foquinha
                                </span>

                                {/* Visuals - Foquinha Way */}
                                <div className="mt-6 flex justify-center">
                                    <div className="relative size-20 rounded-2xl bg-white p-3 shadow-lg transition-transform hover:scale-110">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src="/foquinha-logo.png"
                                            alt="Foquinha IA"
                                            className="size-full object-contain"
                                        />
                                        <div className="absolute -bottom-2 -right-2 rounded-full bg-green-500 p-1.5 shadow-md ring-2 ring-white">
                                            <Check className="size-4 text-white" strokeWidth={3} />
                                        </div>
                                    </div>
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-white">
                                    Sua Assistente Ativa
                                </h3>
                            </div>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-3">
                                    <div className="rounded-full bg-white/20 p-0.5">
                                        <Check className="size-4 text-white" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <strong className="text-white">Te envia lembretes na hora certa</strong>
                                        <p className="text-sm text-white/90">Ela proativamente te ajuda a lembrar.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="rounded-full bg-white/20 p-0.5">
                                        <Check className="size-4 text-white" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <strong className="text-white">Tudo no WhatsApp</strong>
                                        <p className="text-sm text-white/90">No app que você já abre toda hora.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="rounded-full bg-white/20 p-0.5">
                                        <Check className="size-4 text-white" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <strong className="text-white">É só mandar pra Foquinha</strong>
                                        <p className="text-sm text-white/90">Texto ou áudio, como falar com um amigo.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="rounded-full bg-white/20 p-0.5">
                                        <Check className="size-4 text-white" strokeWidth={3} />
                                    </div>
                                    <div>
                                        <strong className="text-white">Ela te ajuda a retomar</strong>
                                        <p className="text-sm text-white/90">Reorganiza sua agenda se algo sair do plano.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </SectionTracker>
    )
}
