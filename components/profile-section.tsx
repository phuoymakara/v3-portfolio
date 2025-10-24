import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProfileSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <Avatar className="h-24 w-24 border-2 border-border">
          <AvatarImage src="https://i.pinimg.com/736x/18/e9/ac/18e9ac3999b64780b9b70218cad2ac9a.jpg" alt="Profile" />
          <AvatarFallback>MB</AvatarFallback>
        </Avatar>
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-balance text-4xl font-bold tracking-tight">Mark Bee</h1>
          <p className="mt-2 text-lg text-muted-foreground">Full Stack Developer</p>
        </div>

        <div className="space-y-3 text-foreground/90">
          <p className="flex items-start gap-2">
            <span className="text-lg">🎨</span>
            <span>Building beautiful web experiences</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-lg">💻</span>
            <span>Working on Next.js & React projects</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-lg">🚀</span>
            <span>Love creating open source tools</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="text-lg">🎮</span>
            <span>Gaming enthusiast & tech explorer</span>
          </p>
        </div>

        <div className="space-y-2 border-t border-border pt-4">
          <p className="text-sm text-muted-foreground">Member of @vercel @nextjs @react</p>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <Link href="mailto:phuoymakara@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors">
              phuoymakara@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button variant="default" size="sm" aria-label="github" asChild>
            <Link href="https://github.com/phuoymakara" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          <Button variant="outline" aria-label="mail" size="sm" asChild>
            <Link href="mailto:phuoymakara@gmail.com">Contact</Link>
          </Button>
        </div>
        <div className="flex gap-3 pt-2">
          <span>Inspired by </span>
          <Image
            src="./bento.png" 
            alt="Bento Me"
            className="w-6 h-6 rounded-lg"
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
  )
}
