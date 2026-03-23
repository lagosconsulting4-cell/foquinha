import { Shield, Lock, ShieldCheck, EyeOff } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"

export function SecuritySection() {
  return (
    <SectionTracker sectionId="security">
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-12 inline-flex items-center gap-2 rounded-full bg-slate-50 px-5 py-2">
            <Shield className="size-5 text-[#25d366]" />
            <span className="text-sm font-black tracking-widest text-slate-800 uppercase">Sua privacidade em primeiro lugar</span>
          </div>
          
          <h2 className="mb-6 text-3xl font-black tracking-tighter text-slate-900 md:text-6xl">Seus dados estão <br /> <span className="text-[#25d366]">100% seguros.</span></h2>
          <p className="mx-auto mb-16 max-w-2xl text-lg font-medium text-slate-500 md:text-xl">Utilizamos criptografia de ponta a ponta e os mais altos padrões de segurança. Seu foco é nossa única prioridade.</p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: <Lock className="size-6 text-[#25d366]" />, title: "Criptografia", desc: "Segurança total em todas as suas mensagens" },
              { icon: <ShieldCheck className="size-6 text-[#25d366]" />, title: "Privacidade", desc: "Seus dados são apenas seus e de mais ninguém" },
              { icon: <EyeOff className="size-6 text-[#25d366]" />, title: "Controle", desc: "Exclua suas conversas e dados quando quiser" }
            ].map((item, i) => (
              <div key={i} className="group relative flex flex-col items-center text-center rounded-[2.5rem] bg-white p-6 md:p-10 shadow-[0_20px_40px_-15px_rgba(26,35,30,0.05)] ring-1 ring-slate-100 transition-all hover:scale-[1.02] hover:shadow-[0_40px_80px_-20px_rgba(26,35,30,0.1)]">
                <div className="mb-8 flex size-12 items-center justify-center rounded-3xl bg-slate-50 transition-colors group-hover:bg-[#25d366]/10 md:size-16">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-black text-slate-900">{item.title}</h3>
                <p className="text-base font-medium text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
