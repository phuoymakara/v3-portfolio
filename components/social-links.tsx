import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Twitter, Github, Linkedin, Mail } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h2 className="text-2xl font-bold mb-6">Connect</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Twitter className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">Twitter</p>
              <p className="text-sm text-muted-foreground">@yourhandle</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-4" asChild>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Follow
            </a>
          </Button>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Github className="h-6 w-6 text-accent" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">GitHub</p>
              <p className="text-sm text-muted-foreground">@phuoymakara</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-4" asChild>
            <a href="https://github.com/phuoymakara" target="_blank" rel="noopener noreferrer">
              Follow
            </a>
          </Button>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Linkedin className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">LinkedIn</p>
              <p className="text-sm text-muted-foreground">Your Name</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-4" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              Connect
            </a>
          </Button>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <div className="flex-1">
              <p className="font-semibold">Email</p>
              <p className="text-sm text-muted-foreground">phuoymakara@gmail.com</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-4" asChild>
            <a href="mailto:phuoymakara@gmail.com">Send Email</a>
          </Button>
        </Card>
      </div>
    </div>
  )
}
