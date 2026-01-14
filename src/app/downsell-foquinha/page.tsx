'use client'

import { useEffect } from 'react'
import Image from "next/image"
import { Check, Crown, Sparkles } from "lucide-react"
import { analytics } from '@/lib/analytics'

// Links de checkout Stripe COM teste de 3 dias (mesmos da landing)
const STRIPE_LINK_MONTHLY = "https://buy.stripe.com/28E9ATeTy2b00k8gO89oc08"
const STRIPE_LINK_ANNUAL = "https://buy.stripe.com/14AbJ1dPuaHw2sg9lG9oc09"

export default function DownsellFoquinha() {
  useEffect(() => {
    // Track downsell page view
    if (analytics?.track) {
      analytics.track('downsell_page_viewed', {
        page: 'downsell_foquinha'
      })
    }
  }, [])

  const handleCTA = (plan: 'monthly' | 'annual') => {
    const link = plan === 'monthly' ? STRIPE_LINK_MONTHLY : STRIPE_LINK_ANNUAL

    // Track CTA click
    if (analytics?.track) {
      analytics.track('downsell_cta_click', {
        plan,
        location: 'downsell_foquinha'
      })
    }

    window.location.href = link
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Main Section */}
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center justify-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#128C7E] to-[#0d6b5f]">
                <Sparkles className="size-8 text-white" />
              </div>
            </div>

            <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Teste a Foquinha por 3 dias
            </h1>

            <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-700">
              Sua vida já acontece no WhatsApp.<br />
              Experimente organizar tudo por lá.
            </p>

            <div className="mx-auto mb-12 max-w-xl rounded-2xl bg-gradient-to-r from-[#128C7E]/10 to-[#128C7E]/5 p-6">
              <p className="text-lg font-bold text-slate-900">
                🎯 Teste sem compromisso
              </p>
              <p className="mt-2 text-base text-slate-700">
                3 dias para sentir a diferença
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mx-auto mb-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* Card Mensal */}
            <div className="rounded-3xl bg-white p-8 shadow-xl ring-2 ring-slate-200 transition-all hover:scale-105 hover:shadow-2xl">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-slate-100 px-4 py-1 text-xs font-bold text-slate-700">
                  MENSAL
                </span>
              </div>

              <div className="mb-6">
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-[#128C7E]">R$ 12,90</span>
                  <span className="text-lg text-slate-600">/mês</span>
                </div>
                <p className="text-sm text-slate-600">
                  3 dias para testar
                </p>
              </div>

              <div className="mb-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-[#128C7E]" />
                  <span className="text-sm text-slate-700">Agenda única no WhatsApp</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-[#128C7E]" />
                  <span className="text-sm text-slate-700">Lembretes diários automáticos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-[#128C7E]" />
                  <span className="text-sm text-slate-700">Reorganização se atrasar</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-[#128C7E]" />
                  <span className="text-sm text-slate-700">Resumo semanal completo</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-[#128C7E]" />
                  <span className="text-sm text-slate-700">Suporte direto no zap</span>
                </div>
              </div>

              <button
                onClick={() => handleCTA('monthly')}
                className="w-full rounded-xl bg-[#128C7E] px-8 py-4 text-center text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#0d6b5f]"
              >
                <Sparkles className="mr-2 inline size-5" />
                Testar 3 dias grátis
              </button>
            </div>

            {/* Card Anual - DESTAQUE */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#128C7E]/10 to-[#128C7E]/5 p-8 shadow-2xl ring-2 ring-[#128C7E]/30 transition-all hover:scale-105 hover:shadow-[#128C7E]/20">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-[#128C7E] px-4 py-1 text-xs font-bold text-white">
                  ANUAL - TRANSFORMAÇÃO COMPLETA
                </span>
              </div>

              <div className="mb-6">
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-[#128C7E]">R$ 97,00</span>
                  <span className="text-lg text-slate-600">/ano</span>
                </div>
                <p className="text-sm font-bold text-[#128C7E]">
                  Só R$ 8,08/mês
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  3 dias para testar
                </p>
              </div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#128C7E]/20 px-4 py-2">
                <span className="text-sm font-bold text-[#128C7E]">
                  💰 Economize 25% no ano
                </span>
              </div>

              <div className="mb-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-[#128C7E]" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-slate-700">Tudo do plano Mensal +</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base">💚</span>
                  <span className="text-sm font-medium text-slate-700">Integração com seus hábitos do BORA</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base">🎯</span>
                  <span className="text-sm font-medium text-slate-700">Hábitos + Tarefas em um só lugar</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base">🔥</span>
                  <span className="text-sm font-medium text-slate-700">Compromisso com você mesmo</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base">✨</span>
                  <span className="text-sm font-medium text-slate-700">Transformação completa</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-base">🚀</span>
                  <span className="text-sm font-medium text-slate-700">Rotina que realmente funciona</span>
                </div>
              </div>

              <button
                onClick={() => handleCTA('annual')}
                className="w-full rounded-xl bg-[#128C7E] px-8 py-4 text-center text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#0d6b5f]"
              >
                <Crown className="mr-2 inline size-5" />
                Testar 3 dias grátis
              </button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mb-12 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#128C7E]/10 px-6 py-3">
              <Check className="size-5 text-[#128C7E]" />
              <span className="text-sm font-medium text-slate-700">
                3 dias para sentir a diferença • Cancele quando quiser
              </span>
            </div>
          </div>

          {/* Footer with logo */}
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="https://i.ibb.co/Kzr3VMvx/foquiai-logo.png"
                alt="Foquinha IA"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-slate-600">
              Sua vida já acontece no WhatsApp.<br />
              Agora sua organização também.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
