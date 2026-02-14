import Image from "next/image"
import { SectionTracker } from "@/components/analytics/section-tracker"

const benefits = [
  {
    step: "1️⃣",
    title: "Você manda um \"Oi\" no WhatsApp",
    description: "Começa na hora. Sem criar conta, sem baixar aplicativo.",
    image: "https://i.ibb.co/whfjxxX8/Telas-Foquinha-1200-x-750-px-6.png",
  },
  {
    step: "2️⃣",
    title: "Conta o que precisa lembrar",
    description: "Consultas, tarefas, provas, reuniões, coisas da casa — ela organiza tudo.",
    image: "https://i.ibb.co/v4X7wb9X/Telas-Foquinha-1200-x-750-px-7.png",
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
    image: "https://i.ibb.co/8nFZHgf8/Telas-Foquinha-1200-x-750-px-8.png",
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
  return (
    <SectionTracker sectionId="benefits">
      <section className="bg-white px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Título */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Funciona assim:
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Tudo que você precisa, sem complicação
            </p>
          </div>

          {/* Grid de Benefícios - 2x3 no desktop, stack no mobile */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Imagem Grande */}
                <div className="mb-6">
                  <div className="relative mx-auto max-w-[280px] sm:max-w-sm">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      width={600}
                      height={1200}
                      className="w-full object-contain drop-shadow-2xl"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                </div>

                {/* Texto */}
                <div>
                  <div className="mb-3 text-3xl">{benefit.step}</div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-slate-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
