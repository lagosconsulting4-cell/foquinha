'use client'

import { useEffect } from 'react'
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { GuiltBreakSection } from "@/components/landing/guilt-break-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { PromiseSection } from "@/components/landing/promise-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { SecuritySection } from "@/components/landing/security-section"
import { PricingSimple } from "@/components/landing/pricing-simple"
import { FinalSection } from "@/components/landing/final-section"
import { StickyCtaBar } from "@/components/landing/sticky-cta-bar"
import { SiteFooter } from "@/components/landing/site-footer"
import { analytics } from '@/lib/analytics'

const checkoutBaseUrl =
  process.env.NEXT_PUBLIC_KIWIFY_CHECKOUT_URL ?? "https://pay.kirvano.com/84f6a23b-ab61-4e1f-b9c5-9bec18bee665"

const getCheckoutUrl = (campaign: string) => {
  try {
    const url = new URL(checkoutBaseUrl)
    url.searchParams.set("utm_source", "landing")
    url.searchParams.set("utm_medium", "cta")
    url.searchParams.set("utm_campaign", campaign)
    return url.toString()
  } catch {
    return checkoutBaseUrl
  }
}

export default function Home() {
  const checkoutHero = getCheckoutUrl("hero")
  const checkoutFinal = getCheckoutUrl("final")
  const checkoutStickyBar = getCheckoutUrl("sticky_bar")

  useEffect(() => {
    // Track landing page view on mount
    analytics.trackLandingPageView()
  }, [])

  return (
    <div className="bg-white text-foreground">
      <main className="flex flex-col gap-0">
        <HeroSection ctaHref={checkoutHero} />
        <ProblemSection />
        <GuiltBreakSection />
        <SolutionSection />
        <BenefitsSection />
        <PromiseSection />
        <TestimonialsSection />
        <SecuritySection />
        <PricingSimple />
        <FinalSection ctaHref={checkoutFinal} />
      </main>
      <SiteFooter />
      <StickyCtaBar ctaHref={checkoutStickyBar} />
    </div>
  )
}
