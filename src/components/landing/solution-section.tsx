"use client"

import React from "react"
import { Check } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { SectionTracker } from "@/components/analytics/section-tracker"

const exampleMessages = [
  "Lembrete de consulta médica amanhã às 10h.",
  "Não esquecer de comprar ração para o dog!",
  "Amanhã é o aniversário da mamãe!",
  "Reunião de equipe adiada para as 15h.",
]

export function SolutionSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  )

  return (
    <SectionTracker sectionId="solution">
      <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="mb-8 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              A vida já acontece no WhatsApp.
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-slate-700">
              É lá que chegam:
            </p>

            <div className="mx-auto mb-8 max-w-md">
              <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {exampleMessages.map((message, index) => (
                    <CarouselItem key={index}>
                      <div className="flex justify-center p-1">
                        <div className="rounded-lg bg-[#DCF8C6] p-3 text-left shadow">
                          <p className="text-base text-slate-800">{message}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <p className="mx-auto mb-12 max-w-2xl text-lg font-semibold leading-relaxed text-slate-900">
              Então faz sentido que sua organização esteja lá também.
            </p>

            <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
              <p className="mb-6 text-xl font-bold text-slate-900">
                A Foquinha é uma assistente no WhatsApp que:
              </p>

              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <Check className="size-6 flex-shrink-0 text-secondary" />
                  <span className="text-base text-slate-700">
                    lembra o que você precisa fazer
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-6 flex-shrink-0 text-secondary" />
                  <span className="text-base text-slate-700">
                    organiza seus compromissos
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-6 flex-shrink-0 text-secondary" />
                  <span className="text-base text-slate-700">
                    ajusta tudo quando algo muda
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="size-6 flex-shrink-0 text-secondary" />
                  <span className="text-base text-slate-700">
                    te ajuda a não se perder no dia a dia
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-2 border-t border-slate-200 pt-6">
                <p className="text-lg font-semibold text-slate-900">
                  Sem app novo.
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  Sem setup complicado.
                </p>
                <p className="text-lg font-semibold text-slate-900">
                  Sem virar outra pessoa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
