import navbarLogo from '@/assets/navbar-logo.png';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SheetClose } from "@/components/ui/sheet"
import { X } from "lucide-react"
import { Menu } from "lucide-react"


function HeaderComponent() {
    return (
        <header className="flex justify-between items-center bg-primary px-4">
            <img src={navbarLogo} alt="LHDD Logo" className='w-[80px]' />
            <Sheet>
                <SheetTrigger asChild>
                    <button className="p-2">
                        <Menu className="text-white w-9 h-9" />
                    </button>
                </SheetTrigger>

                <SheetContent side="right" className="bg-primary text-white border-none" showCloseButton={false}>
                    <nav className="flex flex-col items-end space-y-6 mt-20 mr-4 text-lg">
                        <a href="/">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/contact">Contact Us</a>
                        <a href="/services">Services We Offer</a>
                        <a href="/referrals">Referrals</a>
                    </nav>
                    <SheetClose asChild>
                        <button className="absolute top-4 right-4">
                            <X className="w-8 h-8" />
                        </button>
                    </SheetClose>
                </SheetContent>

            </Sheet>
        </header>
    );
}

export default HeaderComponent;