import { Card } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"

export function BentoGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-[180px]">
      {/* Large featured image */}
      <Card className="md:col-span-2 lg:row-span-2 overflow-hidden group hover:shadow-lg transition-shadow py-0">
        <div className="relative h-full w-full bg-gradient-to-br from-primary/10 to-accent/10">
          <Image
            src="/coding-workspace-setup.jpg"
            alt="Featured project"
            className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </Card>

      {/* Avatar card */}
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow py-0">
        <div className="relative h-full w-full bg-gradient-to-br from-accent/20 to-primary/20">
          <Image
            src="/anime-character-avatar.png"
            alt="Avatar"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
      </Card>

      {/* Map card */}
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow py-0">
        <div className="relative h-full w-full">
          <Image
            src="/world-map-location.jpg"
            alt="Location"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <p className="text-white font-semibold">Phnom Penh</p>
          </div>
        </div>
      </Card>

      {/* Conference photo */}
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow py-0">
        <div className="relative h-full w-full bg-muted">
          <Image
            src="/tech-conference-presentation.png"
            alt="Conference"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
      </Card>

      {/* GitHub contributions */}
      <Card className="p-4 flex flex-col justify-between hover:shadow-lg transition-shadow py-0 bg-[url('/git-status.png')] bg-cover bg-no-repeat">
        {/* <div className="flex items-center gap-2 mb-3 text-white">
          <Github className="h-5 w-5" />
          <span className="font-semibold">GitHub</span>
        </div> */}
      </Card>

      {/* Project showcase */}
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow py-0">
        <div className="relative h-full w-full bg-gradient-to-br from-red-500/80 to-red-700/80 flex items-center justify-center">
          <div className="text-white text-center p-4">
            <div className="text-4xl mb-2">🎨</div>
            <p className="font-semibold">Design System</p>
          </div>
        </div>
      </Card>

      {/* News/Updates card */}
      <Card className="md:col-span-2 p-6 bg-card hover:shadow-lg transition-shadow py-0">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Latest Updates</h3>
            <span className="text-xs text-muted-foreground">Oct 2025</span>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>Launched new portfolio website</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>Speaking at React Conference 2025</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>Open sourced component library</span>
            </li>
          </ul>
        </div>
      </Card>

      {/* Tech stack card */}
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 hover:shadow-lg transition-shadow py-0">
        <div className="h-full flex flex-col justify-center items-center text-center gap-3">
          <div className="text-3xl">⚡</div>
          <div>
            <p className="font-semibold mb-1">Tech Stack</p>
            <p className="text-xs text-muted-foreground">React • Next.js • TypeScript</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
