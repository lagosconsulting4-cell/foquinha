"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Preciso baixar algum aplicativo?",
    answer:
      "Não! A Foquinha vive direto no seu WhatsApp. É só salvar o número e começar a mandar mensagens ou áudios.",
  },
  {
    question: "É difícil de mexer?",
    answer:
      "Se você sabe mandar um áudio no Zap, você sabe usar a Foquinha. Ela entende o jeito que você fala, mesmo que a mensagem seja bagunçada.",
  },
  {
    question: "Posso cancelar se não gostar?",
    answer:
      "Claro! Você tem 7 dias de garantia incondicional. Se não salvar pelo menos 2h do seu dia, nós devolvemos 100% do seu dinheiro, sem burocracia.",
  },
  {
    question: "A Foquinha entende áudios longos?",
    answer:
      "Sim. Você pode mandar um áudio longo de 2 minutos desabafando sobre tudo que tem pra fazer, e ela vai extrair perfeitamente suas tarefas e horários e organizar pra você.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            ❓ Perguntas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tudo o que você precisa saber antes de começar
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-slate-200 transition-all hover:border-secondary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-slate-50"
              >
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={cn(
                    "size-5 flex-shrink-0 text-secondary transition-transform duration-200",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid transition-all duration-200 ease-in-out",
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <CardContent className="px-6 pb-6 pt-0">
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {faq.answer}
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-muted-foreground">
            Ainda tem dúvidas?{" "}
            <a
              href="#hero"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              Entre em contato com a gente
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
