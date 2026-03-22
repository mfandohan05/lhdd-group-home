import navbarLogo from '@/assets/navbar-logo.png';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SheetClose } from "@/components/ui/sheet"
import { X } from "lucide-react"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom";

function HeaderComponent() {
    return (
        <header className="grid grid-cols-[0.8fr_0.2fr] justify-between items-center bg-primary px-4 lg:flex flex-row">
            <Link to="/">
                <div className='flex items-center'>
                    <img src={navbarLogo} alt="LHDD Logo" className='w-[80px]' />
                    <div className='hidden md:block text-white text-lg font-semibold'>
                        Livi Group Home for Developmental Disability
                        <div className='text-sm font-normal'>Caring With Purpose. Advocating With Passion.</div>
                    </div>
                </div>
                
            </Link>
            <Sheet>
                <SheetTrigger asChild className="justify-self-end lg:hidden">
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
            <div>
                <nav className="hidden lg:flex text-white text-base space-x-4">
                    <Link to="/" className="hover:text-blue-300">Home</Link>
                    <Link to="/about" className="hover:text-blue-300">About Us</Link>
                    <Link to="/contact" className="hover:text-blue-300">Contact Us</Link>
                    <Link to="/services" className="hover:text-blue-300">Services We Offer</Link>
                    <Link to="/referrals" className="hover:text-blue-300">Referrals</Link>
                </nav>
            </div>
        </header>
    );
}

export default HeaderComponent;