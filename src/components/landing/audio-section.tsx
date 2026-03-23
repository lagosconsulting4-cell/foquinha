import Image from "next/image"
import { SectionTracker } from "@/components/analytics/section-tracker"
import { CheckCircle2 } from "lucide-react"

export function AudioSection() {
  return (
    <SectionTracker sectionId="audio-feature">
      <section className="bg-[#F0F9F1] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Prefere falar? Manda um áudio.
            </h2>
            <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
              A Foquinha transcreve, entende e agenda.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 max-w-3xl mx-auto">
            {/* Mockup do Áudio */}
            <div className="flex-1 w-full flex justify-center">
              <div className="relative w-full max-w-[320px] rounded-3xl overflow-hidden shadow-xl border-4 border-white/40 ring-1 ring-slate-100">
                <Image
                  src="/audio_feature.jpg"
                  alt="Simulação de uso de áudio na Foquinha via WhatsApp"
                  width={320}
                  height={693}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Benefícios */}
            <div className="flex-1 space-y-5 w-full">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-6 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="text-base font-bold text-slate-900">Compromissos e consultas</h3>
                  <p className="mt-0.5 text-sm text-slate-600 leading-relaxed">Fale o dia e horário, ela te manda um lembrete direto no whatsapp.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-6 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="text-base font-bold text-slate-900">Tarefas e recados</h3>
                  <p className="mt-0.5 text-sm text-slate-600 leading-relaxed">Liste mentalmente o que precisa fazer hoje.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="size-6 flex-shrink-0 text-secondary" />
                <div>
                  <h3 className="text-base font-bold text-slate-900">Lembretes com horário</h3>
                  <p className="mt-0.5 text-sm text-slate-600 leading-relaxed">&quot;Me avisa pra tirar a carne do freezer daqui 2 horas&quot;.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
