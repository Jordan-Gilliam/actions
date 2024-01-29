import { Button } from "@energizeai/ui/button"
import { ThemedImage } from "@energizeai/ui/themed-image"
import { cn } from "@energizeai/ui/utils"
import { GithubIcon, SearchIcon, TwitterIcon } from "lucide-react"

export default async function TopNav() {
  return (
    <div className="sticky h-fit top-0 bg-background/80 backdrop-blur z-10">
      <div className="flex flex-row gap-2 mx-auto px-4 max-w-screen-xl items-center w-full py-4">
        <div className="flex-1">
          <h1 className="text-2xl font-medium flex gap-2.5 items-center justify-start text-left">
            <span>
              <ThemedImage
                srcLight={"/logos/energize-black-square.png"}
                srcDark={"/logos/energize-white-square.png"}
                ImageComponent={
                  <img
                    alt="Energize logo"
                    src={""}
                    className={cn("text-background h-8 w-8 rounded-sm")}
                  />
                }
              />
            </span>
            Energize AI
          </h1>
        </div>
        <Button variant={"outline"} className="text-muted-foreground px-3">
          <SearchIcon className="h-4 w-4" />
          <span className="flex-1 min-w-[300px] text-left">Search ADE...</span>
          <kbd className="font-semibold tracking-widest bg-muted border text-muted-foreground px-2 text-sm rounded-sm py-0.5">
            ⌘K
          </kbd>
        </Button>
        <div className="flex flex-1 justify-end gap-2 items-center">
          <Button size={"icon"} variant={"outline"}>
            <GithubIcon className="h-4 w-4" />
          </Button>
          <Button size={"icon"} variant={"outline"}>
            <TwitterIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
