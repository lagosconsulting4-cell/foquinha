import Image from "next/image"
import { CtaButton } from "@/components/landing/cta-button"
import { SectionTracker } from "@/components/analytics/section-tracker"

interface FinalSectionProps {
  ctaHref: string
}

export function FinalSection({ ctaHref }: FinalSectionProps) {
  return (
    <SectionTracker sectionId="final">
      <section className="bg-gradient-to-b from-white to-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Sua vida já acontece no WhatsApp.
            <br />
            Agora sua organização também.
          </h2>

          <div className="mb-8 flex justify-center">
            <Image
              src="https://i.ibb.co/fGVrxXpL/Habitz-2.png"
              alt="Foquinha IA"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          <p className="mx-auto mb-4 max-w-2xl text-lg text-slate-700">
            A Foquinha não vai mudar quem você é.
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-lg font-semibold text-slate-900">
            Ela só vai te ajudar a parar de se perder no meio do dia.
          </p>

          <div className="mb-6 flex justify-center">
            <CtaButton
              href={ctaHref}
              label="Quero organizar minha vida no WhatsApp"
              trackingLocation="final"
              className="w-full rounded-xl bg-[#128C7E] px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#0d6b5f] sm:w-auto"
            />
          </div>

          <div className="space-y-2">
            <p className="text-base font-semibold text-slate-700">
              Assistente pessoal 24/7 direto no zap
            </p>
            <p className="text-sm font-bold text-secondary">
              7 dias de garantia total
            </p>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
