import logoWithText from "@/assets/white-transparent-logo-with-text.png";
import { Link } from "react-router-dom";
function FooterComponent() {
    return (
        <footer className="bg-primary p-8">
            <div>
                <div className="text-white text-xl font-semibold">Need some help?</div>
                <ul className="text-white mt-6 font-base text-base flex flex-col gap-5">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/services">Services We Offer</Link></li>
                    <li><Link to="/referrals">Referrals</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-white text-xl font-semibold mt-6">Get in touch</div>
                <a href="mailto:office.LHDD@livigrouphome.com" className="text-white text-sm hover:text-blue-300">
                    ✉️ office.LHDD@livigrouphome.com
                </a>
                <a href="tel:980-222-4535" className="text-white text-sm hover:text-blue-300">
                    📞 (980) 222-4535
                </a>
            </div>
            <div className="flex justify-center mt-6">
                <img src={logoWithText} alt="LHDD Logo" className="h-full" />
            </div>
        </footer>
    )
}

export default FooterComponent;