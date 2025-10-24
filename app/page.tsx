import dynamic from "next/dynamic"

const ProfileSection = dynamic(() => import('@/components/profile-section').then(mod => mod.ProfileSection));
const BentoGrid = dynamic(() => import('@/components/bento-grid').then(mod => mod.BentoGrid));
const SocialLinks = dynamic(() => import('@/components/social-links').then(mod => mod.SocialLinks));

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-[428px] px-4 py-8 md:py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[400px_1fr] lg:gap-12">
          <ProfileSection />
          <BentoGrid />
        </div>
        <SocialLinks />
      </div>
    </main>
  )
}
