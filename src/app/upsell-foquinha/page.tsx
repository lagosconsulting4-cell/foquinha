'use client'

import { useEffect, useState } from 'react'
import Image from "next/image"
import { Check, Crown, Sparkles, X, Zap, Target } from "lucide-react"
import { analytics } from '@/lib/analytics'

// Links de checkout Stripe SEM teste (direto)
const STRIPE_LINK_MONTHLY_NO_TRIAL = "https://buy.stripe.com/5kQ3cveTy5ncc2Q41m9oc0a"
const STRIPE_LINK_ANNUAL_NO_TRIAL = "https://buy.stripe.com/14A14n9ze16W6Iw7dy9oc0b"

export default function UpsellFoquinha() {
  const [showExitIntent, setShowExitIntent] = useState(false)

  useEffect(() => {
    // Track upsell page view
    if (analytics?.track) {
      analytics.track('upsell_page_viewed', {
        page: 'upsell_foquinha'
      })
    }

    // Back button redirect (history manipulation)
    // Add a fake history entry
    window.history.pushState(null, '', window.location.href)

    const handlePopState = () => {
      // User clicked back button
      if (!showExitIntent) {
        // Push state again to keep them on the page
        window.history.pushState(null, '', window.location.href)

        // Show exit intent modal
        setShowExitIntent(true)

        // Track back button trigger
        if (analytics?.track) {
          analytics.track('exit_intent_triggered', {
            location: 'upsell_foquinha',
            trigger: 'back_button'
          })
        }
      }
    }

    // Exit-intent detection (mouse leave)
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top (y < 10)
      if (e.clientY < 10 && !showExitIntent) {
        setShowExitIntent(true)

        // Track exit-intent trigger
        if (analytics?.track) {
          analytics.track('exit_intent_triggered', {
            location: 'upsell_foquinha',
            trigger: 'mouse_leave'
          })
        }
      }
    }

    // Add event listeners
    window.addEventListener('popstate', handlePopState)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [showExitIntent])

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

  const handleExitRedirect = () => {
    if (analytics?.track) {
      analytics.track('exit_intent_redirect', {
        from: 'upsell_foquinha',
        to: 'downsell_foquinha'
      })
    }
    window.location.href = '/downsell-foquinha'
  }

  const closeModal = () => {
    setShowExitIntent(false)

    if (analytics?.track) {
      analytics.track('exit_intent_dismissed', {
        location: 'upsell_foquinha'
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex items-center justify-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-[#A3E635] to-lime-400 shadow-lg">
              <svg className="size-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            🎉 Você acaba de dar o primeiro passo!
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            O acesso ao BORA chegará no seu e-mail em instantes.<br />
            Mas antes de ir, leia isso...
          </p>
        </div>

        {/* Hook Emocional */}
        <div className="mb-16 rounded-3xl bg-gradient-to-br from-slate-50 to-white p-8 shadow-xl sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center justify-center">
              <Zap className="size-12 text-[#128C7E]" />
            </div>

            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Você vai ter os hábitos certos.<br />
              Mas e o <span className="text-[#128C7E]">resto do caos?</span>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-700">
              O BORA vai organizar seus <strong>hábitos</strong>. Mas você ainda tem:
            </p>

            <div className="mx-auto mb-8 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4">
                <X className="size-5 flex-shrink-0 text-red-500" />
                <span className="text-sm text-slate-700">Consultas e compromissos esquecidos</span>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4">
                <X className="size-5 flex-shrink-0 text-red-500" />
                <span className="text-sm text-slate-700">Tarefas espalhadas em mil apps</span>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4">
                <X className="size-5 flex-shrink-0 text-red-500" />
                <span className="text-sm text-slate-700">Prazos que passam batido</span>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-red-50 p-4">
                <X className="size-5 flex-shrink-0 text-red-500" />
                <span className="text-sm text-slate-700">Lista mental que não para de crescer</span>
              </div>
            </div>

            <p className="text-lg font-semibold text-slate-900">
              Você merece uma vida <span className="text-[#128C7E]">100% organizada</span>.<br />
              Não só os hábitos.
            </p>
          </div>
        </div>

        {/* A Solução */}
        <div className="mb-16">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center justify-center">
              <Image
                src="https://i.ibb.co/Kzr3VMvx/foquiai-logo.png"
                alt="Foquinha IA"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Apresento a <span className="text-[#128C7E]">Foquinha</span>
            </h2>

            <p className="mx-auto max-w-2xl text-lg text-slate-700">
              Sua assistente pessoal que organiza <strong>compromissos, tarefas e prazos</strong><br />
              direto no WhatsApp — o app que você já abre 50x por dia.
            </p>
          </div>

          {/* Visual: Como funciona */}
          <div className="mx-auto mb-12 grid max-w-5xl gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <Image
                    src="https://i.ibb.co/S4h0cKw7/hero-e-Voc-envia-um-Oi-no-Whats-App.webp"
                    alt="Envie mensagens no WhatsApp"
                    width={240}
                    height={480}
                    className="h-auto w-full max-w-[200px] rounded-3xl object-contain shadow-2xl ring-4 ring-[#128C7E]/10"
                  />
                </div>
              </div>
              <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-full bg-[#128C7E] text-white font-bold">
                1
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Você manda tudo pro zap
              </h3>
              <p className="text-sm text-slate-600">
                &ldquo;Consulta amanhã 15h&rdquo;, &ldquo;Comprar presente pro João&rdquo;.<br />
                Fala do jeito que você fala.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <Image
                    src="https://i.ibb.co/9kdmVsMs/Plano-personalizado.webp"
                    alt="Agenda organizada"
                    width={240}
                    height={480}
                    className="h-auto w-full max-w-[200px] rounded-3xl object-contain shadow-2xl ring-4 ring-[#128C7E]/10"
                  />
                </div>
              </div>
              <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-full bg-[#128C7E] text-white font-bold">
                2
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Ela organiza sozinha
              </h3>
              <p className="text-sm text-slate-600">
                A Foquinha monta sua agenda e prioriza<br />
                o que é urgente. Zero esforço seu.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="relative">
                  <Image
                    src="https://i.ibb.co/RpxYdP13/Lembretes-e-tarefas-di-rias.webp"
                    alt="Lembretes automáticos"
                    width={240}
                    height={480}
                    className="h-auto w-full max-w-[200px] rounded-3xl object-contain shadow-2xl ring-4 ring-[#128C7E]/10"
                  />
                </div>
              </div>
              <div className="mx-auto mb-3 flex size-10 items-center justify-center rounded-full bg-[#128C7E] text-white font-bold">
                3
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">
                Você nunca mais esquece
              </h3>
              <p className="text-sm text-slate-600">
                Lembretes na hora certa, confirmações<br />
                e resumo do que rolou na semana.
              </p>
            </div>
          </div>
        </div>

        {/* Comparação: Antes vs Depois */}
        <div className="mb-16 rounded-3xl bg-white p-8 shadow-xl sm:p-12">
          <h3 className="mb-8 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
            A diferença é gritante
          </h3>

          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
            {/* Só BORA */}
            <div className="rounded-2xl border-2 border-slate-200 p-6">
              <div className="mb-4 text-center">
                <span className="inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                  Só com o BORA
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-[#A3E635]" />
                  <span className="text-sm text-slate-700">Hábitos organizados</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="size-5 flex-shrink-0 text-slate-400" />
                  <span className="text-sm text-slate-400">Compromissos e consultas ainda bagunçados</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="size-5 flex-shrink-0 text-slate-400" />
                  <span className="text-sm text-slate-400">Tarefas do dia a dia sem lembretes</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="size-5 flex-shrink-0 text-slate-400" />
                  <span className="text-sm text-slate-400">Prazos espalhados em vários lugares</span>
                </div>
              </div>
            </div>

            {/* BORA + Foquinha */}
            <div className="rounded-2xl border-2 border-[#128C7E] bg-gradient-to-br from-[#128C7E]/5 to-white p-6 shadow-lg">
              <div className="mb-4 text-center">
                <span className="inline-block rounded-full bg-[#128C7E] px-4 py-2 text-sm font-bold text-white">
                  BORA + Foquinha
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-[#128C7E]" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-slate-900">Hábitos organizados</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-[#128C7E]" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-slate-900">Compromissos confirmados no zap</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-[#128C7E]" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-slate-900">Tarefas com lembretes automáticos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-[#128C7E]" strokeWidth={2.5} />
                  <span className="text-sm font-medium text-slate-900">Tudo centralizado em um lugar só</span>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-[#128C7E]/10 p-3">
                <p className="text-center text-sm font-bold text-[#128C7E]">
                  = Vida 100% organizada
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Quem tem BORA + Foquinha
          </p>
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-4 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="size-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="mb-4 text-lg italic text-slate-700">
              &ldquo;Finalmente consigo me organizar sem ter que abrir 5 apps diferentes. Tudo no WhatsApp, simples assim.&rdquo;
            </p>
            <p className="text-sm font-semibold text-slate-900">— Marina, 24 anos</p>
          </div>
        </div>

        {/* CTA Principal com Urgência */}
        <div className="mb-16 rounded-3xl bg-gradient-to-br from-[#128C7E] to-[#0d6b5f] p-8 text-white shadow-2xl sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center justify-center">
              <Target className="size-12" />
            </div>

            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Complete agora com 20% OFF
            </h2>

            <p className="mb-8 text-lg text-white/90">
              Você já deu o primeiro passo com o BORA.<br />
              <strong>Adicione a Foquinha hoje</strong> e tenha 20% de desconto especial.
            </p>

            {/* Pricing Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Mensal */}
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
                </div>
                <button
                  onClick={() => handleCTA('monthly')}
                  className="w-full rounded-xl bg-white px-6 py-4 text-center text-base font-bold text-[#128C7E] shadow-xl transition-all hover:scale-105"
                >
                  <Sparkles className="mr-2 inline size-5" />
                  Adicionar Foquinha
                </button>
              </div>

              {/* Anual - DESTAQUE */}
              <div className="rounded-2xl bg-white p-6 shadow-2xl ring-4 ring-white/50 transition-all hover:scale-105">
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-[#128C7E] px-3 py-1 text-xs font-bold text-white">
                    ANUAL - MELHOR ESCOLHA
                  </span>
                </div>
                <div className="mb-4">
                  <div className="mb-2 flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-black text-[#128C7E]">R$ 97,00</span>
                    <span className="text-lg text-slate-600">/ano</span>
                  </div>
                  <p className="text-sm font-bold text-[#128C7E]">
                    Só R$ 8,08/mês • Economize 25%
                  </p>
                </div>
                <button
                  onClick={() => handleCTA('annual')}
                  className="w-full rounded-xl bg-[#128C7E] px-6 py-4 text-center text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#0d6b5f]"
                >
                  <Crown className="mr-2 inline size-5" />
                  Completar Transformação
                </button>
              </div>
            </div>

            <p className="mt-8 text-sm text-white/80">
              ✓ Garantia de 7 dias • ✓ Cancele quando quiser • ✓ Suporte direto no zap
            </p>
          </div>
        </div>

        {/* FAQ Rápido */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-slate-900">
            Perguntas rápidas
          </h3>
          <div className="mx-auto max-w-3xl space-y-4">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h4 className="mb-2 font-bold text-slate-900">
                Por que não posso só usar o BORA?
              </h4>
              <p className="text-sm text-slate-600">
                O BORA cuida dos seus hábitos. A Foquinha cuida do resto: compromissos, tarefas, prazos. São complementares. Juntos, você tem organização completa.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h4 className="mb-2 font-bold text-slate-900">
                Funciona mesmo no WhatsApp?
              </h4>
              <p className="text-sm text-slate-600">
                Sim! Você conversa com a Foquinha como se fosse um contato normal. Manda mensagem, ela responde e organiza tudo. Simples assim.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h4 className="mb-2 font-bold text-slate-900">
                E se eu não gostar?
              </h4>
              <p className="text-sm text-slate-600">
                7 dias de garantia total. Se não funcionar pra você, devolvemos cada centavo. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Final */}
        <div className="text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="https://i.ibb.co/Kzr3VMvx/foquiai-logo.png"
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

      {/* Exit-Intent Modal - Redirect to Downsell */}
      {showExitIntent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              aria-label="Fechar"
            >
              <X className="size-6" />
            </button>

            {/* Modal content */}
            <div className="text-center">
              <div className="mb-6 inline-flex items-center justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#128C7E] to-[#0d6b5f]">
                  <Sparkles className="size-8 text-white" />
                </div>
              </div>

              <h2 className="mb-4 text-2xl font-bold text-slate-900">
                ⏱️ Espera um pouco!
              </h2>

              <p className="mb-6 text-base text-slate-700">
                Que tal <strong>testar a Foquinha por 3 dias</strong><br />
                antes de decidir?
              </p>

              <div className="mb-6 rounded-xl bg-[#128C7E]/10 p-4">
                <p className="text-sm font-bold text-[#128C7E]">
                  🎁 3 dias grátis sem compromisso
                </p>
              </div>

              <button
                onClick={handleExitRedirect}
                className="w-full rounded-xl bg-[#128C7E] px-6 py-4 text-center text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#0d6b5f]"
              >
                Ver opção com teste grátis
              </button>

              <p className="mt-4 text-xs text-slate-500">
                Cancele quando quiser • Sem taxas ocultas
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
