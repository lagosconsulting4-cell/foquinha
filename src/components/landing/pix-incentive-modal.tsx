'use client'

import { X } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
        className="max-w-sm rounded-2xl p-5"
        showCloseButton={false}
      >
        {/* Custom close button */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          aria-label="Fechar"
        >
          <X className="size-5" />
        </button>

        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <div className="relative size-12">
            <Image
              src="/foquinha-logo.png"
              alt="Foquinha"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <DialogHeader className="mb-4 text-center">
          <DialogTitle className="text-xl font-bold text-slate-900">
            Você ganhou uma condição especial
          </DialogTitle>
        </DialogHeader>

        {/* Body */}
        <div className="mb-5 space-y-4">
          {/* Destaque do desconto - MAIOR HIERARQUIA */}
          <div className="text-center">
            <div className="mb-1">
              <span className="text-6xl font-black text-[#25D366]">20%</span>
            </div>
            <p className="text-sm font-semibold text-slate-700">
              de desconto exclusivo
            </p>
          </div>

          {/* Copy do compromisso */}
          <p className="text-center text-xs text-slate-600 leading-relaxed">
            Assine o <strong className="text-slate-900">plano anual</strong> e faça o compromisso com você mesmo de focar por um ano inteiro
          </p>

          {/* Valor - SEGUNDA HIERARQUIA */}
          <div className="text-center">
            <div className="mb-1">
              <span className="text-xs text-slate-500 line-through">De R$ 97,00</span>
            </div>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-3xl font-bold text-slate-900">R$ 77,60</span>
              <span className="text-sm text-slate-600">/ano</span>
            </div>
          </div>

          {/* Benefícios */}
          <div className="space-y-1.5 text-center text-xs text-slate-600">
            <p className="flex items-center justify-center gap-1.5">
              <span className="text-[#25D366]">✓</span>
              <span>Um ano inteiro de foco e organização</span>
            </p>
            <p className="flex items-center justify-center gap-1.5">
              <span className="text-[#25D366]">✓</span>
              <span>Pagamento único via Pix</span>
            </p>
            <p className="flex items-center justify-center gap-1.5">
              <span className="text-[#25D366]">✓</span>
              <span>Garantia de 7 dias</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handlePixClick}
          className="mb-2 w-full rounded-xl bg-[#25D366] px-5 py-3 text-center text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.01] hover:shadow-lg hover:bg-[#20bd5a]"
        >
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
