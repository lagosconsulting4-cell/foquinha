import { Inter, Nunito, Poppins, Plus_Jakarta_Sans } from "next/font/google"

const inter = Inter({ subsets: ["latin"], display: "swap" })
const nunito = Nunito({ subsets: ["latin"], display: "swap" })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "900"], display: "swap" })
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap" })

const fonts = [
    { label: "Inter", font: inter },
    { label: "Nunito", font: nunito },
    { label: "Poppins", font: poppins },
    { label: "Plus Jakarta Sans", font: jakarta },
]

function FontSample({ label, font }: { label: string; font: { className: string } }) {
    return (
        <div className={`${font.className} border-b border-slate-200 px-6 py-10`}>
            <p className="mb-4 text-xs font-mono text-slate-400 uppercase tracking-widest">{label}</p>
            <h2 className="mb-2 text-3xl font-bold text-slate-900">
                Recupere 2h do seu dia — direto no WhatsApp
            </h2>
            <p className="mb-5 text-base text-slate-600">
                A Foquinha organiza sua rotina, manda lembretes e reorganiza tudo quando o dia muda.
                Sem app novo. Sem setup. Só manda um &quot;oi&quot;.
            </p>
            <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-[#25D366] px-5 py-2 text-sm font-bold text-white shadow">
                    🚀 Quero começar agora
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700">
                    Garantia de 7 dias
                </span>
            </div>
            <p className="mt-4 text-sm text-slate-500 italic">
                &quot;cara eu tava procrastinando faz MESES e com as 2h que a foquinha me devolveu consegui finalmente fazer o curso kkkkk&quot;
                <span className="ml-2 not-italic font-semibold text-slate-700">— Lucas M.</span>
            </p>
        </div>
    )
}

export default function FontPreviewPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="sticky top-0 z-10 bg-slate-900 px-6 py-3 text-center">
                <p className="text-sm font-semibold text-white">
                    Prévia de fontes — <span className="text-[#25D366]">Foquinha</span>
                </p>
            </div>
            {fonts.map((f) => (
                <FontSample key={f.label} label={f.label} font={f.font} />
            ))}
        </main>
    )
}
