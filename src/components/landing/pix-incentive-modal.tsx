'use client'

import { Sparkles, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { analytics } from "@/lib/analytics"

interface PixIncentiveModalProps {
  open: boolean
  onClose: () => void
  onPixClick: () => void
  onContinueOriginal: () => void
  clickedPlan?: 'monthly' | 'annual'
  location?: string
}

export function PixIncentiveModal({
  open,
  onClose,
  onPixClick,
  onContinueOriginal,
  clickedPlan = 'monthly',
  location = 'landing'
}: PixIncentiveModalProps) {
  const handleClose = () => {
    // Track modal dismissal
    if (analytics?.track) {
      analytics.track('pix_modal_dismissed', {
        clicked_plan: clickedPlan,
        location
      })
    }

    onClose()
    // Continue to original checkout after a brief delay
    setTimeout(() => {
      onContinueOriginal()
    }, 100)
  }

  const handlePixClick = () => {
    // Track Pix conversion
    if (analytics?.track) {
      analytics.track('pix_modal_cta_clicked', {
        clicked_plan: clickedPlan,
        location
      })
    }

    onPixClick()
  }

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && handleClose()}>
      <DialogContent
        className="max-w-md rounded-3xl p-8"
        showCloseButton={false}
      >
        {/* Custom close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          aria-label="Fechar"
        >
          <X className="size-6" />
        </button>

        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#128C7E] to-[#0d6b5f]">
            <Sparkles className="size-8 text-white" />
          </div>
        </div>

        {/* Title */}
        <DialogHeader className="mb-6 text-center">
          <DialogTitle className="mb-3 text-2xl font-bold text-slate-900">
            ⏱️ Espera! Temos uma oferta especial
          </DialogTitle>
          <DialogDescription className="text-base text-slate-700">
            <strong className="text-slate-900">20% de desconto exclusivo</strong> para quem paga no Pix
          </DialogDescription>
        </DialogHeader>

        {/* Body */}
        <div className="mb-6 space-y-4">
          <p className="text-center text-base text-slate-700">
            Assine o <strong className="text-[#128C7E]">plano anual</strong> e faça o compromisso com você mesmo de focar por um ano inteiro.
          </p>

          <div className="rounded-2xl bg-gradient-to-br from-[#128C7E]/10 to-[#128C7E]/5 p-6 text-center">
            <div className="mb-2">
              <span className="text-sm text-slate-600">De R$ 97,00 por</span>
            </div>
            <div className="mb-3 flex items-baseline justify-center gap-2">
              <span className="text-4xl font-black text-[#128C7E]">R$ 77,60</span>
              <span className="text-lg text-slate-600">/ano</span>
            </div>
            <p className="text-sm font-bold text-[#128C7E]">
              ou 12x de R$ 7,98 • 20% OFF
            </p>
          </div>

          <div className="space-y-2 text-center text-sm text-slate-600">
            <p>✓ Um ano inteiro de foco e organização</p>
            <p>✓ Pagamento único via Pix</p>
            <p>✓ Garantia de 7 dias</p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handlePixClick}
          className="mb-3 w-full rounded-xl bg-[#128C7E] px-6 py-4 text-center text-base font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-[#0d6b5f]"
        >
          <Sparkles className="mr-2 inline size-5" />
          Assinar anual no Pix
        </button>

        {/* Secondary action */}
        <button
          onClick={handleClose}
          className="w-full text-center text-sm text-slate-500 transition-colors hover:text-slate-700"
        >
          Não, quero continuar com o plano que escolhi
        </button>
      </DialogContent>
    </Dialog>
  )
}
