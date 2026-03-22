import logoWithText from "@/assets/white-transparent-logo-with-text.png";
import { Link } from "react-router-dom";
function FooterComponent() {
    return (
        <footer className="bg-primary p-8">
            <div className="lg:grid grid-cols-3 max-w-[1440px] mx-auto">
                <div className="">
                    <div className="text-white text-xl font-semibold">Need some help?</div>
                    <ul className="text-white mt-6 font-base text-base flex flex-col gap-5">
                        <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                        <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-blue-300">Contact Us</Link></li>
                        <li><Link to="/services" className="hover:text-blue-300">Services We Offer</Link></li>
                        <li><Link to="/referrals" className="hover:text-blue-300">Referrals</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-white text-xl font-semibold mt-6 lg:mt-0">Get in touch</div>
                    <a href="mailto:office.LHDD@livigrouphome.com" className="text-white text-sm hover:text-blue-300 md:text-base">
                        ✉️ office.LHDD@livigrouphome.com
                    </a>
                    <a href="tel:980-222-4535" className="text-white text-sm hover:text-blue-300 md:text-base">
                        📞 (980) 222-4535
                    </a>
                </div>
                <div className="flex justify-center mt-6 lg:mt-0 lg:self-center">
                    <img src={logoWithText} alt="LHDD Logo" className="h-full md:h-[200px]" />
                </div>
            </div>

        </footer>
    )
}

export default FooterComponent;