import Image from "next/image"
import { CtaButton } from "@/components/landing/cta-button"
import { SectionTracker } from "@/components/analytics/section-tracker"

interface HeroSectionProps {
  ctaHref: string
}

export function HeroSection({ ctaHref }: HeroSectionProps) {
  return (
    <SectionTracker sectionId="hero">
      <section
        id="hero"
        className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="https://i.ibb.co/fGVrxXpL/Habitz-2.png"
              alt="Foquinha IA"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center rounded-full bg-secondary/10 px-5 py-2">
              <span className="text-sm font-semibold text-secondary">
                Assistente de organização no WhatsApp
              </span>
            </div>
          </div>

          {/* Headline Principal */}
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Sua Agenda Inteligente no WhatsApp
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-700">
              Pare de esquecer compromissos. Tenha uma agenda que te cobra e organiza suas tarefas onde você já está.
            </p>
          </div>

          {/* Imagem WhatsApp - GRANDE */}
          <div className="mb-12">
            <div className="relative mx-auto max-w-sm">
              <Image
                src="https://i.ibb.co/whfjxxX8/Telas-Foquinha-1200-x-750-px-6.png"
                alt="Interface da Foquinha IA no WhatsApp"
                width={600}
                height={1200}
                className="w-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <p className="mt-6 text-center text-base font-semibold text-slate-700">
              Agenda e lembretes no lugar que você já usa todo dia.
            </p>
          </div>

          {/* CTA Principal */}
          <div className="mb-6 flex justify-center">
            <CtaButton
              href={ctaHref}
              label="Quero minha agenda no Zap"
              trackingLocation="hero"
              className="w-full rounded-xl bg-[#25D366] px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#1DAA53] sm:w-auto"
            />
          </div>

          {/* Garantia */}
          <div className="text-center">
            <p className="text-sm font-semibold text-slate-700">
              7 dias de garantia total • Cancele quando quiser
            </p>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
