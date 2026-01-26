'use client'

import { Check, Shield } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"
import { analytics } from "@/lib/analytics"

export function PricingSimple() {
  // Links de checkout
  const MONTHLY_LINK = "https://buy.stripe.com/5kQ5kDbHmg1Q0k8eG09oc0c"
  const ANNUAL_PIX_LINK = "https://payfast.greenn.com.br/154675/offer/SX0mTj"
  const ANNUAL_CARD_LINK = "https://payfast.greenn.com.br/154675/offer/lkH71W"

  const benefits = [
    { text: "Cobrança Ativa", annualOnly: true, bold: true },
    { text: "Agenda no WhatsApp" },
    { text: "Reorganização se atrasar" },
    { text: "Resumo semanal" },
    { text: "Suporte no zap" },
  ]

  return (
    <SectionTracker sectionId="pricing">
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Headline */}
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Sua agenda organizada no WhatsApp
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-700">
              Escolha o plano que cabe na sua rotina
            </p>
          </div>

          {/* Pricing Cards - 2 PLANOS */}
          <div id="pricing" className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card Anual - DESTAQUE */}
            <div className="relative flex flex-col rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 shadow-2xl ring-2 ring-secondary/30 transition-all hover:scale-105 hover:shadow-secondary/20">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-4 py-1 text-sm font-bold text-white">
                MAIS ESCOLHIDO
              </span>

              <div className="flex-grow">
                <div className="text-center">
                  <h3 className="mb-2 text-2xl font-bold text-slate-800">ACESSO ANUAL</h3>
                  <p className="mb-2 text-sm font-semibold text-slate-600">Custa menos que um café por mês</p>
                  <p className="mb-2 text-6xl font-bold text-secondary">
                    R$ 6,40 <span className="text-lg font-medium text-slate-500">/mês</span>
                  </p>
                  <p className="mb-6 text-sm font-medium text-slate-600">no valor único de R$ 77,00 (Pix)</p>
                </div>

                {/* Benefícios */}
                <div className="mb-8 space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="size-5 flex-shrink-0 text-secondary" strokeWidth={2.5} />
                      <span className={`text-sm ${benefit.bold ? 'font-bold text-slate-800' : 'text-slate-700'}`}>
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={ANNUAL_PIX_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.track('cta_click', { location: 'pricing_annual_pix', cta_text: 'Quero minha agenda no Zap' })}
                className="mb-3 block w-full rounded-xl bg-[#25D366] px-8 py-4 text-center text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#1DAA53]"
              >
                Quero minha agenda no Zap
              </a>
              <a
                href={ANNUAL_CARD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.track('cta_click', { location: 'pricing_annual_card', cta_text: 'Ou 12x de R$ 9,97 no cartão' })}
                className="block text-center text-sm font-medium text-slate-600 hover:underline"
              >
                Ou 12x de R$ 9,97 no cartão
              </a>
            </div>

            {/* Card Mensal */}
            <div className="flex flex-col rounded-3xl bg-white p-8 shadow-xl ring-2 ring-slate-200 transition-all hover:scale-105 hover:shadow-2xl">
              <div className="flex-grow">
                <div className="text-center">
                  <h3 className="mb-4 text-2xl font-bold text-slate-800">MENSAL</h3>
                  <p className="mb-6 text-4xl font-bold text-secondary">
                    R$ 19,90<span className="text-lg font-medium text-slate-500">/mês</span>
                  </p>
                </div>
              </div>
              <a
                href={MONTHLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.track('cta_click', { location: 'pricing_monthly', cta_text: 'Assinar Mensal' })}
                className="block w-full rounded-xl bg-slate-200 px-8 py-4 text-center text-base font-bold text-slate-800 shadow-lg transition-all hover:scale-105 hover:bg-slate-300"
              >
                Assinar Mensal
              </a>
            </div>
          </div>

          {/* Trust indicators + Garantia */}
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-6 py-3">
              <Check className="size-5 text-secondary" />
              <span className="text-sm font-medium text-slate-700">
                Cancele quando quiser
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-6 py-3">
              <Shield className="size-5 text-secondary" />
              <span className="text-sm font-bold text-secondary">
                Garantia de 7 dias
              </span>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}