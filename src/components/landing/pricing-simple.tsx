import Image from "next/image"
import { Check, Shield } from "lucide-react"
import { CtaButton } from "@/components/landing/cta-button"
import { SectionTracker } from "@/components/analytics/section-tracker"

interface PricingSimpleProps {
  ctaHref?: string
}

// Links de checkout Stripe COM teste de 3 dias
const STRIPE_LINK_MONTHLY = "https://buy.stripe.com/28E9ATeTy2b00k8gO89oc08"
const STRIPE_LINK_ANNUAL = "https://buy.stripe.com/14AbJ1dPuaHw2sg9lG9oc09"

export function PricingSimple({ ctaHref }: PricingSimpleProps) {
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
          <div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
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
                  <span className="text-5xl font-bold text-secondary">R$ 12,90</span>
                  <span className="text-lg text-slate-600">/mês</span>
                </div>
                <p className="text-sm text-slate-600">
                  3 dias para testar
                </p>
              </div>

              {/* Benefícios */}
              <div className="mb-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm text-slate-700">Agenda única no WhatsApp</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm text-slate-700">Lembretes diários automáticos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm text-slate-700">Reorganização se atrasar</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm text-slate-700">Resumo semanal completo</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-secondary" />
                  <span className="text-sm text-slate-700">Suporte direto no zap</span>
                </div>
              </div>

              {/* CTA */}
              <CtaButton
                href={STRIPE_LINK_MONTHLY}
                label="Começar teste"
                trackingLocation="pricing_monthly"
                className="w-full rounded-xl bg-[#128C7E] px-8 py-4 text-center text-base font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#0d6b5f]"
              />
            </div>

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
                  Só R$ 8,08/mês
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  3 dias para testar
                </p>
              </div>

              {/* Badge economia */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2">
                <span className="text-sm font-bold text-secondary">
                  💰 Economize 25% no ano
                </span>
              </div>

              {/* Benefícios */}
              <div className="mb-8 space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="size-5 flex-shrink-0 text-secondary" strokeWidth={2.5} />
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

              {/* CTA */}
              <CtaButton
                href={STRIPE_LINK_ANNUAL}
                label="Começar teste"
                trackingLocation="pricing_annual"
                className="w-full rounded-xl bg-secondary px-8 py-4 text-center text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-secondary/90"
              />
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mb-12 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-secondary/10 px-6 py-3">
              <Check className="size-5 text-secondary" />
              <span className="text-sm font-medium text-slate-700">
                3 dias para testar • Cancele quando quiser
              </span>
            </div>
          </div>

          {/* Garantia */}
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-slate-900">
              Teste por 3 dias, sem risco.
            </h3>
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-secondary/10 px-6 py-3">
              <Shield className="size-5 text-secondary" />
              <span className="text-sm font-bold text-secondary">
                GARANTIA DE 7 DIAS
              </span>
            </div>
            <p className="mt-4 text-base text-slate-700">
              Se a Foquinha não facilitar sua vida, devolvemos seu dinheiro. Sem perguntas.
            </p>
          </div>

          {/* Footer Section */}
          <div className="mb-12 text-center">
            <h3 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl">
              Sua vida já acontece no WhatsApp.
              <br />
              Agora sua organização também.
            </h3>

            <div className="mb-8 flex justify-center">
              <Image
                src="https://i.ibb.co/Kzr3VMvx/foquiai-logo.png"
                alt="Foquinha IA"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <p className="mb-4 text-base text-slate-700">
              Ative a Foquinha e receba seus compromissos e tarefas no lugar que você já abre todos os dias.
            </p>
            <p className="mb-8 text-base font-semibold text-slate-700">
              Assistente pessoal 24/7 direto no zap.
            </p>

            <div className="mb-6">
              <p className="text-sm font-bold text-secondary">7 dias de garantia!</p>
            </div>

            <CtaButton
              href={STRIPE_LINK_ANNUAL}
              label="Quero organizar no WhatsApp"
              trackingLocation="pricing_final"
              className="mx-auto w-full rounded-xl bg-[#128C7E] px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#0d6b5f] sm:w-auto"
            />
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
