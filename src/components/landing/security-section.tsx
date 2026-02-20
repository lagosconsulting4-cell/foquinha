import Image from "next/image"
import { SectionTracker } from "@/components/analytics/section-tracker"

export function SecuritySection() {
  return (
    <SectionTracker sectionId="security">
      <section className="bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-white p-7 text-center shadow-sm">
            {/* Imagem de garantia */}
            <div className="mx-auto mb-4 w-24 h-24 flex items-center justify-center">
              <Image
                src="https://i.ibb.co/spv1hMmq/2-site-Foquinha.png"
                alt="Garantia de 7 dias"
                width={96}
                height={96}
                className="object-contain w-full h-full"
              />
            </div>

            <p className="text-xl font-bold text-secondary">Garantia de 7 Dias</p>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Teste sem risco. Se não ganhar pelo menos 1h por dia,{" "}
              <strong className="text-slate-800">devolvemos 100% do valor.</strong>
              <br />
              Sem perguntas.
            </p>

          </div>
        </div>
      </section>
    </SectionTracker>
  )
}
