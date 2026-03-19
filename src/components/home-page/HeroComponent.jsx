import heroImage from '@/assets/hero-image.jpg';
import PrimaryButtonComponent from '../global/PrimaryButtonComponent';
function HeroComponent() {
    return (
        <div className="grid grid-cols-1 grid-rows-1 items-center h-[40vh]">
            <img src={heroImage} alt="LHDD Hero Image" className="w-full h-full brightness-50 row-start-1 col-start-1 object-cover" />
            <div className='row-start-1 col-start-1 z-50 text-white px-4'>
                <h1 className='font-bold text-lg text-center'>Compassionate Residential Care for Adults with Developmental Disabilities</h1>
                <p className='text-center text-sm mt-2'>Providing a safe, structured, and supportive environment where individuals can grow, connect, and live with dignity.</p>
                <PrimaryButtonComponent text="Contact Us" />
            </div>
            
        </div>
    )
}

export default HeroComponent;