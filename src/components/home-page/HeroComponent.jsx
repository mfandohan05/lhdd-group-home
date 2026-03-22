import heroImage from '@/assets/hero-image.jpg';
import PrimaryButtonComponent from '../global/PrimaryButtonComponent';
import { Link } from 'react-router-dom';
function HeroComponent() {
    return (
        <div className="grid grid-cols-1 grid-rows-1 items-center h-[40vh] md:grid-cols-[0.65fr_0.35fr] h-[50vh]">
            <img src={heroImage} alt="LHDD Hero Image" className="w-full h-full brightness-50 row-start-1 col-start-1 object-cover md: col-span-full" />
            <div className='row-start-1 col-start-1 z-50 text-white px-4 md:ml-6'>
                <h1 className='font-bold text-lg text-center md:text-left md:text-2xl'>Compassionate Residential Care for Adults with Developmental Disabilities</h1>
                <p className='text-center text-sm mt-2 md:text-lg md:text-left'>Providing a safe, structured, and supportive environment where individuals can grow, connect, and live with dignity.</p>
                <Link to="/contact">
                    <PrimaryButtonComponent text="Contact Us" className="md:mx-0 mt-5"/>
                </Link>
            </div>
            <div>
                
            </div>
            
        </div>
    )
}

export default HeroComponent;