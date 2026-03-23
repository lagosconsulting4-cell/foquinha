'use client'

import { Check, Shield } from "lucide-react"
import { useEffect, useState } from "react"
import { SectionTracker } from "@/components/analytics/section-tracker"
import { analytics } from "@/lib/analytics"

export function PricingSimple() {
  const baseUrlMonthly = "https://buy.stripe.com/5kQ5kDbHmg1Q0k8eG09oc0c"
  const baseUrlAnnual = "https://pay.hub.la/dEW3ma2bPzJ0dRWv17Xo"

  const [monthlyLink, setMonthlyLink] = useState(baseUrlMonthly)
  const [annualLink, setAnnualLink] = useState(baseUrlAnnual)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = window.location.search
      if (searchParams) {
        setMonthlyLink(`${baseUrlMonthly}${searchParams}`)
        setAnnualLink(`${baseUrlAnnual}${searchParams}`)
      }
    }
  }, [])

  const benefits = [
    { text: "2h por dia de volta", bold: true },
    { text: "Acesso ilimitado" },
    { text: "Lembretes direto no WhatsApp" },
    { text: "Reorganização automática do dia" },
    { text: "Relatórios personalizados" },
    { text: "Suporte direto no zap" },
  ]

  return (
    <SectionTracker sectionId="pricing">
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Headline */}
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-4xl font-bold tracking-tighter text-slate-900 sm:text-5xl lg:text-6xl">
              Ganhe 2 horas extras todo dia
            </h2>
            <p className="mx-auto max-w-2xl text-xl font-medium text-slate-600">
              Escolha seu plano e comece hoje
            </p>
          </div>

          {/* Pricing Cards - 2 PLANOS */}
          <div id="pricing" className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card Anual - DESTAQUE */}
            <div className="relative flex flex-col rounded-[2.5rem] bg-white p-10 shadow-[0_40px_80px_-15px_rgba(26,35,30,0.1)] ring-2 ring-[#25d366] transition-all hover:-translate-y-2">
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-6 py-2 text-sm font-black tracking-wide text-white">
                MAIS POPULAR - 55% OFF
              </span>

              <div className="flex-grow">
                <div className="text-center">
                  <h3 className="mb-6 text-2xl font-black text-slate-900">ACESSO ANUAL</h3>

                  {/* Tempo economizado destacado */}
                  <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-slate-50 px-6 py-3">
                    <p className="text-sm font-bold text-slate-900">⏰ 730h extras no ano por apenas R$0,28/dia</p>
                  </div>

                  <p className="mb-2 text-base text-slate-400 line-through decoration-[#ef4444]">De R$ 19,90/mês</p>
                  <p className="mb-12 text-[5rem] font-black tracking-tighter text-slate-900 leading-none">
                    R$6,81<span className="text-xl font-bold text-slate-500">/mês</span>
                  </p>
                </div>

                {/* Benefícios */}
                <div className="mb-12 space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#25d366]/10">
                        <Check className="size-4 text-[#25d366]" strokeWidth={4} />
                      </div>
                      <span className={`text-base ${benefit.bold ? 'font-bold text-slate-900' : 'font-medium text-slate-600'}`}>
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={annualLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.track('cta_click', { location: 'pricing_annual_card', cta_text: 'Garantir Desconto Anual' })}
                className="block w-full rounded-2xl bg-[#25d366] px-8 py-6 text-center text-xl font-black text-white shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] transition-all hover:bg-[#1DAA53] hover:-translate-y-1"
              >
                Garantir Desconto Anual
              </a>
            </div>
            
            {/* Card Mensal */}
            <div className="flex flex-col rounded-[2.5rem] bg-slate-50 p-10 shadow-none ring-1 ring-slate-200 transition-all hover:-translate-y-2">
              <div className="flex-grow">
                <div className="text-center">
                  <h3 className="mb-6 text-2xl font-black text-slate-900">PLANO MENSAL</h3>
                  
                  {/* Badge */}
                  <div className="mb-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3">
                    <p className="text-sm font-bold text-slate-900">🎯 Para quem quer testar a Foquinha</p>
                  </div>

                  <p className="mb-12 text-[5rem] font-black tracking-tighter text-slate-900 leading-none">
                    R$19,90<span className="text-xl font-bold text-slate-500">/mês</span>
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={monthlyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analytics.track('cta_click', { location: 'pricing_monthly', cta_text: 'Assinar Mensal' })}
                  className="mt-6 block w-full rounded-2xl bg-white/40 px-8 py-5 text-center text-lg font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all ring-1 ring-slate-200"
                >
                  Assinar Mensal
                </a>
              </div>
            </div>
          </div>

          {/* Trust indicators + Garantia */}
          <div className="mt-12 text-center flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 ring-1 ring-slate-200 shadow-[0_10px_20px_-10px_rgba(26,35,30,0.05)]">
              <Check className="size-6 text-[#25d366]" strokeWidth={3} />
              <span className="text-base font-bold text-slate-900">
                Cancele quando quiser
              </span>
            </div>

            <div className="inline-flex items-center gap-3 rounded-full bg-[#f1f5f9] px-8 py-4 ring-1 ring-slate-200">
              <Shield className="size-6 text-slate-900" strokeWidth={3} />
              <span className="text-base font-bold text-slate-900">
                Risco Zero: 7 Dias de Garantia
              </span>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}