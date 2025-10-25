import dynamic from "next/dynamic"

const ProfileSection = dynamic(() => import('@/components/profile-section').then(mod => mod.ProfileSection));
const BentoGrid = dynamic(() => import('@/components/bento-grid').then(mod => mod.BentoGrid));
const SocialLinks = dynamic(() => import('@/components/social-links').then(mod => mod.SocialLinks));

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container w-10/12 mx-auto px-4 py-8 sm:w-[428px] md:w-[728px] lg:w-10/12 xl:w-10/12 2xl:w-full  md:py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[400px_1fr] lg:gap-12">
          <ProfileSection />
          <BentoGrid />
        </div>
        <SocialLinks />
      </div>
    </main>
  )
}
