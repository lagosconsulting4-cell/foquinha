import Image from "next/image"
import { CtaButton } from "@/components/landing/cta-button"
import { SectionTracker } from "@/components/analytics/section-tracker"

interface FinalSectionProps {
  ctaHref: string
}

export function FinalSection({ ctaHref }: FinalSectionProps) {
  return (
    <SectionTracker sectionId="final">
      <section className="bg-gradient-to-b from-white to-slate-50 px-4 py-8 sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-xl font-black tracking-tighter text-slate-900 md:text-6xl md:mb-6">
            Sua vida já acontece no WhatsApp.
            <br />
            Agora sua organização também.
          </h2>

          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="Foquinha IA"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          <p className="mx-auto mb-4 max-w-2xl text-lg text-slate-600">
            A Foquinha não vai mudar quem você é.
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg font-semibold text-slate-900">
            Ela só vai te ajudar a parar de se perder no meio do dia.
          </p>

          <div className="mb-6 flex justify-center">
            <CtaButton
              href={ctaHref}
              label="Quero minha agenda no Zap"
              trackingLocation="final"
              className="w-full rounded-xl bg-[#25d366] px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#1DAA53] sm:w-auto"
            />
          </div>

          <div className="space-y-2">
            <p className="text-base font-semibold text-slate-600">
              Assistente pessoal 24/7 direto no zap
            </p>
            <p className="text-sm font-bold text-[#25d366]">
              7 dias de garantia total
            </p>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
