import { Clock, MessageCircle } from "lucide-react"

export function AvailabilityBadge() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          {/* Badge 1 - 100% WhatsApp */}
          <div className="flex items-center gap-3 rounded-2xl bg-[#25D366]/10 px-6 py-4 shadow-md ring-2 ring-[#25D366]/20 transition-all hover:scale-105 hover:shadow-lg">
            <MessageCircle className="size-8 text-[#25D366]" strokeWidth={2.5} />
            <div className="text-left">
              <p className="text-sm font-medium text-slate-600">100% via</p>
              <p className="text-xl font-bold text-slate-900">WhatsApp</p>
            </div>
          </div>

          {/* Badge 2 - Disponível 24h */}
          <div className="flex items-center gap-3 rounded-2xl bg-secondary/10 px-6 py-4 shadow-md ring-2 ring-secondary/20 transition-all hover:scale-105 hover:shadow-lg">
            <Clock className="size-8 text-secondary" strokeWidth={2.5} />
            <div className="text-left">
              <p className="text-sm font-medium text-slate-600">Disponível</p>
              <p className="text-xl font-bold text-slate-900">24 horas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
