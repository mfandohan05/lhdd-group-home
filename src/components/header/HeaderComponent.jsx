import navbarLogo from '@/assets/navbar-logo.png';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SheetClose } from "@/components/ui/sheet"
import { X } from "lucide-react"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom";

function HeaderComponent() {
    return (
        <header className="flex justify-between items-center bg-primary px-4">
            <Link to="/">
                <div className='flex items-center'>
                    <img src={navbarLogo} alt="LHDD Logo" className='w-[80px]' />
                    <div className='text-white text-lg font-semibold'>Livi Group Home for Developmental</div>
                </div>
                
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <button className="p-2">
                        <Menu className="text-white w-9 h-9" />
                    </button>
                </SheetTrigger>

                <SheetContent side="right" className="bg-primary text-white border-none" showCloseButton={false}>
                    <nav className="flex flex-col items-end space-y-6 mt-20 mr-4 text-lg">
                        <SheetClose asChild>
                            <Link to="/">Home</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link to="/about">About Us</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link to="/contact">Contact Us</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link to="/services">Services We Offer</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link to="/referrals">Referrals</Link>
                        </SheetClose>
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