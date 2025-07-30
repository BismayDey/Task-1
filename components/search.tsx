import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"

export function Search() {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search campaigns, metrics..."
        className="pl-8 w-[300px] hover:border-primary/50 focus:border-primary transition-colors"
      />
    </div>
  )
}
