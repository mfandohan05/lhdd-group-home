import serviceCard1 from "@/assets/service-card-1.jpg";
import serviceCard2 from "@/assets/service-card-2.png";
import serviceCard3 from "@/assets/service-card-3.webp";
import serviceCard4 from "@/assets/service-card-4.webp";
const cards = [
    {
        cardTitle: "24/7 Residential Support",
        cardDescription: "24/7 supervised living in a safe and structured environment.",
        cardImage: serviceCard1,
        cardAltText: "A group of developmentally disabled people with caretakers looking at the viewer and smiling."
    },
    {
        cardTitle: "Skill Development",
        cardDescription: "Helping residents build daily living and independence skills.",
        cardImage: serviceCard2,
        cardAltText: "Two adults building a birdhouse together."
    },
    {
        cardTitle: "Health & Wellness",
        cardDescription: "Coordination with medical professionals and care plans.",
        cardImage: serviceCard3,
        cardAltText: "A healthcare professional checking on a resident."
    },
    {
        cardTitle: "Community Integration",
        cardDescription: "Encouraging residents to participate in community activities.",
        cardImage: serviceCard4,
        cardAltText: "A group of people participating in yoga."
    },
];
function OurServicesComponent() {
    return (
        <div>
            <h2 className="text-2xl font-bold my-4 text-center text-primary">Our Services</h2>
            <div>
                {cards.map((card, index) => (
                    <div key={index} className="flex flex-col items-center text-center py-4 gap-2 mx-8 border-b-1 border-secondary mb-6">
                        <img src={card.cardImage} alt={card.cardAltText} className="w-full h-60 object-cover mb-4" />
                        <h3 className="text-xl font-semibold text-primary">{card.cardTitle}</h3>
                        <p className="text-black text-base">{card.cardDescription}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurServicesComponent;