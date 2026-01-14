'use client'

import { useEffect } from 'react'
import Image from "next/image"
import { Check, Crown, Sparkles } from "lucide-react"
import { analytics } from '@/lib/analytics'

// Links de checkout Stripe SEM teste (direto)
const STRIPE_LINK_MONTHLY_NO_TRIAL = "https://buy.stripe.com/5kQ3cveTy5ncc2Q41m9oc0a"
const STRIPE_LINK_ANNUAL_NO_TRIAL = "https://buy.stripe.com/14A14n9ze16W6Iw7dy9oc0b"

export default function UpsellFoquinha() {
  useEffect(() => {
    // Track upsell page view
    if (analytics?.track) {
      analytics.track('upsell_page_viewed', {
        page: 'upsell_foquinha'
      })
    }
  }, [])

  const handleCTA = (plan: 'monthly' | 'annual') => {
    const link = plan === 'monthly' ? STRIPE_LINK_MONTHLY_NO_TRIAL : STRIPE_LINK_ANNUAL_NO_TRIAL

    // Track CTA click
    if (analytics?.track) {
      analytics.track('upsell_cta_click', {
        plan,
        location: 'upsell_foquinha'
      })
    }

    window.location.href = link
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center justify-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-[#A3E635]">
              <svg className="size-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            ✅ Parabéns pela compra do BORA!
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Em instantes você receberá o acesso no seu e-mail de compra.
          </p>
        </div>

        {/* Divider */}
        <div className="mb-16 border-t border-slate-200" />

        {/* Upsell Section */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center justify-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#128C7E] to-[#0d6b5f]">
              <Sparkles className="size-8 text-white" />
            </div>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            🚀 Agora complete sua transformação
          </h2>

          <p className="mx-auto mb-6 max-w-2xl text-lg text-slate-700">
            Você tem os hábitos certos no BORA.<br />
            Agora organize <strong>TUDO</strong> no WhatsApp com a Foquinha.
          </p>

          <div className="mx-auto mb-12 max-w-xl rounded-2xl bg-gradient-to-r from-[#A3E635]/10 to-[#128C7E]/10 p-6">
            <p className="text-lg font-bold text-slate-900">
              🎯 Hábitos do BORA + Tarefas da Foquinha
            </p>
            <p className="mt-2 text-base text-slate-700">
              = Vida organizada por completo
            </p>
          </div>
        </div>

        {/* Como a Foquinha funciona - Visual */}
        <div className="mb-16">
          <h3 className="mb-12 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            Como a Foquinha vai organizar sua vida
          </h3>

          <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-3">
            {/* Card 1 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="https://i.ibb.co/S4h0cKw7/hero-e-Voc-envia-um-Oi-no-Whats-App.webp"
                  alt="Envie um Oi no WhatsApp"
                  width={200}
                  height={400}
                  className="h-auto w-full max-w-[200px] rounded-2xl object-contain drop-shadow-lg"
                />
              </div>
              <h4 className="mb-2 text-lg font-bold text-slate-900">
                1. Manda um Oi
              </h4>
              <p className="text-sm text-slate-600">
                Sem cadastro complicado. É só conversar no WhatsApp.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="https://i.ibb.co/9kdmVsMs/Plano-personalizado.webp"
                  alt="Agenda organizada"
                  width={200}
                  height={400}
                  className="h-auto w-full max-w-[200px] rounded-2xl object-contain drop-shadow-lg"
                />
              </div>
              <h4 className="mb-2 text-lg font-bold text-slate-900">
                2. Ela organiza tudo
              </h4>
              <p className="text-sm text-slate-600">
                Tarefas, compromissos e prazos em uma agenda simples.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src="https://i.ibb.co/RpxYdP13/Lembretes-e-tarefas-di-rias.webp"
                  alt="Lembretes automáticos"
                  width={200}
                  height={400}
                  className="h-auto w-full max-w-[200px] rounded-2xl object-contain drop-shadow-lg"
                />
              </div>
              <h4 className="mb-2 text-lg font-bold text-slate-900">
                3. Você recebe lembretes
              </h4>
              <p className="text-sm text-slate-600">
                Na hora certa, direto no zap. Sem esquecer nada.
              </p>
            </div>
          </div>

          {/* Logo da Foquinha */}
          <div className="mt-12 flex justify-center">
            <Image
              src="https://i.ibb.co/Kzr3VMvx/foquiai-logo.png"
              alt="Foquinha IA"
              width={80}
              height={80}
              className="object-contain opacity-80"
            />
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
              Adicionar Foquinha
            </button>
          </div>

          {/* Card Anual - DESTAQUE */}
          <div className="relative rounded-3xl bg-gradient-to-br from-[#128C7E]/10 to-[#128C7E]/5 p-8 shadow-2xl ring-2 ring-[#128C7E]/30 transition-all hover:scale-105 hover:shadow-[#128C7E]/20">
            <div className="mb-4">
              <span className="inline-block rounded-full bg-[#128C7E] px-4 py-1 text-xs font-bold text-white">
                ANUAL - COMBO COMPLETO
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
              Completar combo
            </button>
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
  )
}
