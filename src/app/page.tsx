'use client'

import { useEffect } from 'react'
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { PromiseSection } from "@/components/landing/promise-section"
import { ComparisonSection } from "@/components/landing/comparison-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { SecuritySection } from "@/components/landing/security-section"
import { PricingSimple } from "@/components/landing/pricing-simple"
import { StickyCtaBar } from "@/components/landing/sticky-cta-bar"
import { SiteFooter } from "@/components/landing/site-footer"
import { analytics } from '@/lib/analytics'

export default function Home() {
  const pricingAnchor = "#pricing"

  useEffect(() => {
    // Track landing page view on mount
    analytics.trackLandingPageView()
  }, [])

  return (
    <div className="bg-white text-foreground">
      <main className="flex flex-col gap-0">
        <HeroSection ctaHref={pricingAnchor} />
        <ProblemSection />
        <ComparisonSection />
        <BenefitsSection />
        <PromiseSection />
        <TestimonialsSection />
        <SecuritySection />
        <PricingSimple />
      </main>
      <SiteFooter />
      <StickyCtaBar ctaHref={pricingAnchor} />
    </div>
  )
}
