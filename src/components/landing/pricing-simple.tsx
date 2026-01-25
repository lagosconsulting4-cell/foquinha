'use client'

import { useState } from "react"
import { Check, Shield } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"
import { PixIncentiveModal } from "@/components/landing/pix-incentive-modal"
import { analytics } from "@/lib/analytics"

// Links de checkout Stripe e PayFast
const STRIPE_LINK_MONTHLY = "https://buy.stripe.com/5kQ5kDbHmg1Q0k8eG09oc0c"
const STRIPE_LINK_ANNUAL = "https://payfast.greenn.com.br/154675/offer/lkH71W"
const PIX_LINK_ANNUAL = "https://payfast.greenn.com.br/154675/offer/SX0mTj"

export function PricingSimple() {
  const [showPixModal, setShowPixModal] = useState(false)
  const [clickedPlan, setClickedPlan] = useState<'monthly' | 'annual'>('monthly')
  const [originalLink, setOriginalLink] = useState('')

  const handlePlanClick = (plan: 'monthly' | 'annual') => {
    const link = plan === 'monthly' ? STRIPE_LINK_MONTHLY : STRIPE_LINK_ANNUAL

    setClickedPlan(plan)
    setOriginalLink(link)
    setShowPixModal(true)

    // Track modal opened
    if (analytics?.track) {
      analytics.track('pix_modal_opened', {
        clicked_plan: plan,
        location: 'pricing'
      })
    }
  }

  const handlePixClick = () => {
    window.location.href = PIX_LINK_ANNUAL
  }

  const handleContinueOriginal = () => {
    if (originalLink) {
      window.location.href = originalLink
    }
  }

  const handleCloseModal = () => {
    setShowPixModal(false)
  }

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
            <div className="relative rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 p-8 shadow-2xl ring-2 ring-secondary/30 transition-all hover:scale-105 hover:shadow-secondary/20">
              {/* Badge destaque */}
              <div className="mb-4">
                <span className="inline-block rounded-full bg-secondary px-4 py-1 text-xs font-bold text-white">
                  ANUAL - MELHOR ESCOLHA
                </span>
              </div>

              {/* Preço */}
              <div className="mb-6">
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-secondary">R$ 97,00</span>
                  <span className="text-lg text-slate-600">/ano</span>
                </div>
                <p className="text-sm font-bold text-secondary">
                  ou 12x de R$ 9,97
                </p>
              </div>

              {/* Benefícios */}
              <div className="mb-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-secondary" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-slate-700">Tudo do plano mensal +</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base">💚</span>
                  <span className="text-sm font-medium text-slate-700">Integração com hábitos do BORA</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base">🎯</span>
                  <span className="text-sm font-medium text-slate-700">Hábitos + tarefas no mesmo lugar</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base">🔥</span>
                  <span className="text-sm font-medium text-slate-700">Mais constância, menos cobrança</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base">💰</span>
                  <span className="text-sm font-medium text-slate-700">Economize 25% no ano</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => handlePlanClick('annual')}
                className="w-full rounded-xl bg-secondary px-8 py-4 text-center text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-secondary/90"
              >
                Assinar Agora
              </button>
            </div>

            {/* Card Mensal */}
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-2 ring-slate-200 transition-all hover:scale-105 hover:shadow-2xl">
              {/* Badge */}
              <div className="mb-4">
                <span className="inline-block rounded-full bg-slate-100 px-4 py-1 text-xs font-bold text-slate-700">
                  MENSAL
                </span>
              </div>

              {/* Preço */}
              <div className="mb-6">
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-secondary">R$ 19,90</span>
                  <span className="text-lg text-slate-600">/mês</span>
                </div>
              </div>

              {/* Benefícios */}
              <div className="mb-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm text-slate-700">Agenda no WhatsApp</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm text-slate-700">Lembretes automáticos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm text-slate-700">Reorganização se atrasar</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm text-slate-700">Resumo semanal</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm text-slate-700">Suporte no zap</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => handlePlanClick('monthly')}
                className="w-full rounded-xl bg-[#128C7E] px-8 py-4 text-center text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#0d6b5f]"
              >
                Assinar Agora
              </button>
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

      {/* Modal de Incentivo Pix */}
      <PixIncentiveModal
        open={showPixModal}
        onClose={handleCloseModal}
        onPixClick={handlePixClick}
        onContinueOriginal={handleContinueOriginal}
        clickedPlan={clickedPlan}
        location="pricing"
      />
    </SectionTracker>
  )
}
