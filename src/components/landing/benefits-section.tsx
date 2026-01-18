"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionTracker } from "@/components/analytics/section-tracker"

const benefits = [
  {
    step: "1️⃣",
    title: "Você manda um \"Oi\" no WhatsApp",
    description: "Começa na hora. Sem criar conta, sem baixar aplicativo.",
    image: "https://i.ibb.co/S4h0cKw7/hero-e-Voc-envia-um-Oi-no-Whats-App.webp",
  },
  {
    step: "2️⃣",
    title: "Conta o que precisa lembrar",
    description: "Consultas, tarefas, provas, reuniões, coisas da casa — ela organiza tudo.",
    image: "https://i.ibb.co/ccvrJvbP/foquinha-entende-voce.webp",
  },
  {
    step: "3️⃣",
    title: "Recebe sua agenda direto no zap",
    description: "Uma lista simples com horários, prioridades e o que não pode esquecer.",
    image: "https://i.ibb.co/9kdmVsMs/Plano-personalizado.webp",
  },
  {
    step: "4️⃣",
    title: "Lembretes que chegam na hora certa",
    description: "Mensagens curtas avisam o que fazer e perguntam se deu certo.",
    image: "https://i.ibb.co/RpxYdP13/Lembretes-e-tarefas-di-rias.webp",
  },
  {
    step: "5️⃣",
    title: "Mudou o dia? Ela reorganiza",
    description: "Atrasou? Apareceu algo urgente? Ela redistribui e te avisa.",
    image: "https://i.ibb.co/ZRKFpdV9/Reorganiza-quando-preciso.webp",
  },
  {
    step: "6️⃣",
    title: "Resumo semanal",
    description: "Pra você ver o que fez, o que ficou e não se perder de novo.",
    image: "https://i.ibb.co/RTrL3N3m/Relatorio.webp",
  },
] as const

export function BenefitsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  const current = benefits[currentIndex]

  return (
    <SectionTracker sectionId="benefits">
      <section className="bg-white px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Título */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Funciona assim:
            </h2>
          </div>

          {/* Carrossel */}
          <div className="relative">
            {/* Imagem */}
            <div className="mb-8">
              <div className="relative mx-auto max-w-[280px] sm:max-w-sm">
                <Image
                  src={current.image}
                  alt={current.title}
                  width={600}
                  height={1200}
                  className="w-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="mb-8 text-center">
              <div className="mb-3 text-3xl">{current.step}</div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
                {current.title}
              </h3>
              <p className="text-base text-slate-600">{current.description}</p>
            </div>

            {/* Controles */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prev}
                className="flex size-12 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-all hover:bg-secondary hover:text-white"
                aria-label="Anterior"
              >
                <ChevronLeft className="size-6" />
              </button>

              {/* Indicadores */}
              <div className="flex gap-2">
                {benefits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`size-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-secondary" : "bg-slate-300"
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex size-12 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-all hover:bg-secondary hover:text-white"
                aria-label="Próximo"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </SectionTracker>
  )
}
