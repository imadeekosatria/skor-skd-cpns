import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
  
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"


const TopNav = ()=>{
    return (
        <>
           <div className="flex w-full flex-col">
                <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                    <Sheet>
                        
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                                <Menu className="h-5 w-5"/>
                                <span className="sr-only">Toggle navigation</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <nav className="grid mt-4 gap-6 text-lg font-medium">
                                <Link href="#" className="text-muted-foreground hover:text-foreground">Beranda</Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h1 className="text-lg">SKD Sekolah Kedinasan</h1>
                </header>
           </div>
        </>
    )
}

export {TopNav}