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
              Você não esquece porque é desorganizado.
              <br />
              Você esquece porque sua vida acontece no WhatsApp.
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-700">
              Todo dia é corrido.
              <br />
              As coisas mudam.
              <br />
              Compromissos aparecem.
              <br />
              E tentar se organizar em vários apps só aumenta a confusão.
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-slate-900">
              A Foquinha é uma assistente que organiza sua agenda no WhatsApp, o lugar que você já abre o tempo todo, sem baixar app, sem lembrar de abrir nada.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-secondary">
              👉 Organização que chega até você, não o contrário.
            </p>
          </div>

          {/* Imagem WhatsApp - GRANDE */}
          <div className="mb-12">
            <div className="relative mx-auto max-w-sm">
              <Image
                src="https://i.ibb.co/S4h0cKw7/hero-e-Voc-envia-um-Oi-no-Whats-App.webp"
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
              label="Quero organizar minha vida no WhatsApp"
              trackingLocation="hero"
              className="w-full rounded-xl bg-[#128C7E] px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#0d6b5f] sm:w-auto"
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
