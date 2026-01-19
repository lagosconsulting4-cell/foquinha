'use client'

import { Sparkles, X } from "lucide-react"
import Image from "next/image"
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
        className="max-w-md rounded-2xl p-6"
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

        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <div className="relative size-16">
            <Image
              src="/foquinha-logo.png"
              alt="Foquinha"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <DialogHeader className="mb-6 text-center">
          <DialogTitle className="mb-2 text-2xl font-bold text-slate-900">
            Você ganhou uma condição especial
          </DialogTitle>
        </DialogHeader>

        {/* Body */}
        <div className="mb-6 space-y-5">
          {/* Destaque do desconto - MAIOR HIERARQUIA */}
          <div className="rounded-xl bg-gradient-to-br from-[#25D366] to-[#20bd5a] p-6 text-center shadow-md">
            <div className="mb-1">
              <span className="text-5xl font-bold text-white">20% OFF</span>
            </div>
            <p className="text-sm font-medium text-white/90">
              Desconto exclusivo
            </p>
          </div>

          {/* Copy do compromisso */}
          <p className="text-center text-sm text-slate-600 leading-relaxed px-2">
            Assine o <strong className="text-slate-900">plano anual</strong> e faça o compromisso com você mesmo de focar por um ano inteiro
          </p>

          {/* Valor - SEGUNDA HIERARQUIA */}
          <div className="rounded-xl bg-slate-50 p-5 text-center border border-[#25D366]/20">
            <div className="mb-1">
              <span className="text-xs text-slate-500 line-through">De R$ 97,00</span>
            </div>
            <div className="flex items-baseline justify-center gap-1.5">
              <span className="text-4xl font-bold text-slate-900">R$ 77,60</span>
              <span className="text-base text-slate-600">/ano</span>
            </div>
          </div>

          {/* Benefícios */}
          <div className="space-y-2 text-center text-xs text-slate-600">
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
          className="mb-3 w-full rounded-xl bg-[#25D366] px-6 py-3.5 text-center text-base font-semibold text-white shadow-md transition-all hover:scale-[1.01] hover:shadow-lg hover:bg-[#20bd5a]"
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
