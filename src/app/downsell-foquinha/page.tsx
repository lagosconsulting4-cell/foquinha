'use client'

import { useEffect } from 'react'
import Image from "next/image"
import { Check, Crown, Sparkles, Gift, Shield } from "lucide-react"
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
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header com Gift */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center justify-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-[#128C7E] to-[#0d6b5f] shadow-lg">
              <Gift className="size-10 text-white" />
            </div>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            🎁 Teste sem compromisso
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            3 dias grátis para você experimentar a Foquinha.<br />
            <strong>Zero risco.</strong> Se não gostar, cancela e pronto.
          </p>
        </div>

        {/* Badge: Como funciona o teste */}
        <div className="mb-16 rounded-3xl bg-white p-8 shadow-xl sm:p-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
              Como funciona o teste grátis?
            </h2>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#128C7E] font-bold text-white text-lg">
                  1
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Você escolhe o plano
                </h3>
                <p className="text-sm text-slate-600">
                  Mensal ou anual. Você decide.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#128C7E] font-bold text-white text-lg">
                  2
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Testa por 3 dias
                </h3>
                <p className="text-sm text-slate-600">
                  Sem cobrar nada. Experimenta de verdade.
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#128C7E] font-bold text-white text-lg">
                  3
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  Decide se fica
                </h3>
                <p className="text-sm text-slate-600">
                  Gostou? Continua. Não gostou? Cancela.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-[#128C7E]/10 p-6 text-center">
              <p className="text-base font-bold text-[#128C7E]">
                ✓ Não cobramos nada nos 3 primeiros dias<br />
                ✓ Cancele quando quiser, sem perguntas
              </p>
            </div>
          </div>
        </div>

        {/* Seção: O que você vai testar */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            O que você vai experimentar
          </h2>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://i.ibb.co/S4h0cKw7/hero-e-Voc-envia-um-Oi-no-Whats-App.webp"
                  alt="Conversa no WhatsApp"
                  width={200}
                  height={400}
                  className="h-auto w-full max-w-[180px] rounded-3xl object-contain shadow-2xl ring-4 ring-[#128C7E]/10"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Organização no zap
              </h3>
              <p className="text-sm text-slate-600">
                Manda tudo direto pro WhatsApp.<br />
                Ela organiza pra você.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://i.ibb.co/RpxYdP13/Lembretes-e-tarefas-di-rias.webp"
                  alt="Lembretes automáticos"
                  width={200}
                  height={400}
                  className="h-auto w-full max-w-[180px] rounded-3xl object-contain shadow-2xl ring-4 ring-[#128C7E]/10"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Lembretes inteligentes
              </h3>
              <p className="text-sm text-slate-600">
                Nunca mais esquecer consulta,<br />
                prazo ou compromisso.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src="https://i.ibb.co/ZRKFpdV9/Reorganiza-quando-preciso.webp"
                  alt="Reorganização automática"
                  width={200}
                  height={400}
                  className="h-auto w-full max-w-[180px] rounded-3xl object-contain shadow-2xl ring-4 ring-[#128C7E]/10"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Reorganiza sozinha
              </h3>
              <p className="text-sm text-slate-600">
                Atrasou? Ela redistribui<br />
                e te avisa o novo plano.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mb-16 rounded-3xl bg-gradient-to-br from-[#128C7E] to-[#0d6b5f] p-8 text-white shadow-2xl sm:p-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Escolha seu plano de teste
              </h2>
              <p className="text-lg text-white/90">
                3 dias grátis em qualquer opção
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Card Mensal */}
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-2 ring-white/20 transition-all hover:scale-105 hover:bg-white/20">
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
                    MENSAL
                  </span>
                </div>

                <div className="mb-6">
                  <div className="mb-2 flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-black">R$ 12,90</span>
                    <span className="text-lg opacity-80">/mês</span>
                  </div>
                  <p className="text-center text-sm text-white/80">
                    após 3 dias de teste grátis
                  </p>
                </div>

                <div className="mb-6 space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="size-5 flex-shrink-0" />
                    <span className="text-sm">Agenda no WhatsApp</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="size-5 flex-shrink-0" />
                    <span className="text-sm">Lembretes automáticos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="size-5 flex-shrink-0" />
                    <span className="text-sm">Reorganização inteligente</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="size-5 flex-shrink-0" />
                    <span className="text-sm">Suporte no zap</span>
                  </div>
                </div>

                <button
                  onClick={() => handleCTA('monthly')}
                  className="w-full rounded-xl bg-white px-6 py-4 text-center text-base font-bold text-[#128C7E] shadow-xl transition-all hover:scale-105"
                >
                  <Sparkles className="mr-2 inline size-5" />
                  Começar teste grátis
                </button>
              </div>

              {/* Card Anual - DESTAQUE */}
              <div className="rounded-2xl bg-white p-6 shadow-2xl ring-4 ring-white/50 transition-all hover:scale-105">
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-[#128C7E] px-3 py-1 text-xs font-bold text-white">
                    ANUAL - ECONOMIZE 25%
                  </span>
                </div>

                <div className="mb-6">
                  <div className="mb-2 flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-black text-[#128C7E]">R$ 97,00</span>
                    <span className="text-lg text-slate-600">/ano</span>
                  </div>
                  <p className="text-center text-sm font-bold text-[#128C7E]">
                    Só R$ 8,08/mês
                  </p>
                  <p className="mt-1 text-center text-sm text-slate-600">
                    após 3 dias de teste grátis
                  </p>
                </div>

                <div className="mb-6 space-y-2">
                  <div className="flex items-start gap-2">
                    <Check className="size-5 flex-shrink-0 text-[#128C7E]" strokeWidth={2.5} />
                    <span className="text-sm font-medium text-slate-900">Tudo do Mensal +</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-base">💚</span>
                    <span className="text-sm font-medium text-slate-900">Integração com BORA</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-base">🎯</span>
                    <span className="text-sm font-medium text-slate-900">Hábitos + Tarefas juntos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-base">🔥</span>
                    <span className="text-sm font-medium text-slate-900">Compromisso total</span>
                  </div>
                </div>

                <button
                  onClick={() => handleCTA('annual')}
                  className="w-full rounded-xl bg-[#128C7E] px-6 py-4 text-center text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#0d6b5f]"
                >
                  <Crown className="mr-2 inline size-5" />
                  Começar teste grátis
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-white/80">
                ✓ 3 dias grátis • ✓ Cancele quando quiser • ✓ Sem taxas ocultas
              </p>
            </div>
          </div>
        </div>

        {/* Garantia */}
        <div className="mb-16 text-center">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-6 inline-flex items-center justify-center">
              <div className="flex size-16 items-center justify-center rounded-full bg-[#128C7E]/10">
                <Shield className="size-8 text-[#128C7E]" />
              </div>
            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Garantia de 7 dias
            </h3>

            <p className="mb-6 text-base text-slate-700">
              Além dos 3 dias de teste, você tem <strong>mais 7 dias de garantia total</strong>.<br />
              Se não gostar, devolvemos 100% do valor. Sem perguntas, sem burocracia.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full bg-[#128C7E]/10 px-6 py-3">
              <Check className="size-5 text-[#128C7E]" />
              <span className="text-sm font-bold text-[#128C7E]">
                Total: 10 dias para decidir sem risco
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="https://i.ibb.co/fGVrxXpL/Habitz-2.png"
              alt="Foquinha IA"
              width={80}
              height={80}
              className="object-contain opacity-60"
            />
          </div>
          <p className="text-sm text-slate-500">
            Sua vida já acontece no WhatsApp.<br />
            Agora sua organização também.
          </p>
        </div>
      </main>
    </div>
  )
}
