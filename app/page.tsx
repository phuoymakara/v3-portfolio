import { ProfileSection } from "@/components/profile-section"
import { BentoGrid } from "@/components/bento-grid"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[400px_1fr] lg:gap-12">
          <ProfileSection />
          <BentoGrid />
        </div>
        <SocialLinks />
      </div>
    </main>
  )
}
