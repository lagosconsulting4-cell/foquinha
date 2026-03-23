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
        className="relative z-30 overflow-visible bg-white px-4 py-8 sm:px-6 md:py-16 lg:px-8"
      >
        <div className="mx-auto max-w-5xl relative z-10">
          {/* Logo */}
          <div className="mb-6 flex justify-center md:mb-10">
            <Image
              src="/logo.png"
              alt="Foquinha IA"
              width={70}
              height={70}
              className="object-contain md:w-[90px] md:h-[90px]"
            />
          </div>

          <div className="flex flex-col items-center text-center">
            <h1 className="mb-4 text-2xl font-black tracking-tighter text-slate-900 md:text-5xl lg:text-6xl leading-[1.05] md:mb-6">
              Ganhe 2h extras por dia <br className="hidden md:block" />
              <span className="text-[#25d366]">organizando tudo no WhatsApp.</span>
            </h1>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 font-medium font-sans md:text-lg">
              Mande uma mensagem e a Foquinha organiza sua agenda em segundos. <br className="hidden md:block" />
              Sem apps complexos. Tudo no lugar que você já usa.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-4xl md:mt-12">
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

          <div className="mt-8 flex flex-col items-center justify-center md:mt-12">
            <CtaButton
              href={ctaHref}
              label="Quero ganhar 2h por dia"
              trackingLocation="hero"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#25d366] px-8 py-4 text-lg font-bold text-white shadow-[0_20px_40px_-10px_rgba(37,211,102,0.4)] transition-all hover:scale-105 hover:bg-[#1DAA53] hover:-translate-y-1 sm:w-auto md:px-12 md:py-6 md:text-xl"
            />
          </div>

          {/* Garantia removida conforme copy */}
        </div>
      </section>
    </SectionTracker>
  )
}
