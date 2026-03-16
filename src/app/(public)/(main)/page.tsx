import { BestSellerSection } from "@/src/features/landing/components/best-seller-section";
import { CTASubscriptionSection } from "@/src/features/landing/components/cta-sub-section";
import { HeroSection } from "@/src/features/landing/components/hero-section";
import { SubscriptionSection } from "@/src/features/landing/components/subscription-section";
import { ValuesSection } from "@/src/features/landing/components/values-section";

export default function MainPage() {
  return (
    <main>
      <HeroSection />
      <ValuesSection />
      <SubscriptionSection />
      <BestSellerSection />
      <CTASubscriptionSection />
    </main>
  )
}
