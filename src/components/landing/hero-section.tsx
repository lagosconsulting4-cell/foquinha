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
        <div className="mx-auto max-w-5xl relative z-10">
          {/* Logo */}
          <div className="mb-10 flex justify-center">
            <Image
              src="/logo.png"
              alt="Foquinha IA"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="mb-6 text-4xl font-black tracking-tighter text-slate-900 md:text-5xl lg:text-6xl leading-[1.05]">
              Ganhe 2h extras por dia <br className="hidden md:block" />
              <span className="text-[#25d366]">organizando tudo no WhatsApp.</span>
            </h1>

            <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-600 font-medium font-sans">
              Mande uma mensagem e a Foquinha organiza sua agenda em segundos. <br className="hidden md:block" />
              Sem apps complexos. Tudo no lugar que você já usa.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="overflow-hidden rounded-[2.5rem]">
              <Image
                src="/hero_mockup_new.png"
                alt="Interface da Foquinha IA no WhatsApp"
                width={1200}
                height={800}
                className="w-full object-cover"
                priority
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center">
            <CtaButton
              href={ctaHref}
              label="Quero ganhar 2h por dia"
              trackingLocation="hero"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#25d366] px-12 py-6 text-xl font-bold text-white shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] transition-all hover:scale-105 hover:bg-[#1DAA53] hover:-translate-y-1 sm:w-auto"
            />
          </div>

          {/* Garantia removida conforme copy */}
        </div>
      </section>
    </SectionTracker>
  )
}
