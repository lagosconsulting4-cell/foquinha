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
        <div className="mb-8 flex justify-center">
          <div className="flex size-20 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg">
            <Sparkles className="size-10 text-white" />
          </div>
        </div>

        {/* Title */}
        <DialogHeader className="mb-8 text-center">
          <DialogTitle className="mb-3 text-3xl font-bold text-slate-900">
            Você ganhou uma condição especial
          </DialogTitle>
        </DialogHeader>

        {/* Body */}
        <div className="mb-8 space-y-6">
          {/* Destaque do desconto - MAIOR HIERARQUIA */}
          <div className="rounded-2xl bg-gradient-to-br from-[#25D366] to-[#20bd5a] p-8 text-center shadow-xl">
            <div className="mb-2">
              <span className="text-6xl font-black text-white">20% OFF</span>
            </div>
            <p className="text-lg font-semibold text-white/90">
              Desconto exclusivo
            </p>
          </div>

          {/* Copy do compromisso */}
          <p className="text-center text-base text-slate-700 leading-relaxed">
            Assine o <strong className="text-slate-900">plano anual</strong> e faça o compromisso com você mesmo de focar por um ano inteiro
          </p>

          {/* Valor - SEGUNDA HIERARQUIA */}
          <div className="rounded-2xl bg-slate-50 p-6 text-center border-2 border-[#25D366]/20">
            <div className="mb-2">
              <span className="text-sm text-slate-500 line-through">De R$ 97,00</span>
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-black text-slate-900">R$ 77,60</span>
              <span className="text-lg text-slate-600">/ano</span>
            </div>
          </div>

          {/* Benefícios */}
          <div className="space-y-3 text-center text-sm text-slate-700">
            <p className="flex items-center justify-center gap-2">
              <span className="text-[#25D366]">✓</span>
              <span>Um ano inteiro de foco e organização</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-[#25D366]">✓</span>
              <span>Pagamento único via Pix</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-[#25D366]">✓</span>
              <span>Garantia de 7 dias</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handlePixClick}
          className="mb-4 w-full rounded-xl bg-[#25D366] px-6 py-4 text-center text-lg font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:bg-[#20bd5a]"
        >
          <Sparkles className="mr-2 inline size-5" />
          Ativar desconto agora
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
