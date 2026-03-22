import DividerImageComponent from "../global/DividerImageComponent";
import SectionHeaderComponent from "../global/SectionHeaderComponent";
import SimpleParagraphComponent from "../global/SimpleParagraphComponent";
import servicesImage1 from "@/assets/service-card-2.png";
import servicesImage2 from "@/assets/service-card-3.webp";
import servicesImage3 from "@/assets/about-us-image-2.webp";
function ServicesPageComponent() {
    return (
        <div className="max-w-[1440px] mx-auto w-full overflow-x-hidden">
            <SectionHeaderComponent text="Services We Offer" className="mb-6" />
            <div className="mx-6 md:grid grid-cols-2 mb-6">
                <div className="md:p-6">
                    <SectionHeaderComponent text="🏠 Residential Support & Supervision" className="text-left text-xl" />
                    <SimpleParagraphComponent className="text-left text-lg mb-4 ">
                        <ul className="list-disc list-inside">
                            <li>24-hour staff support</li>
                            <li>assistance with daily routines</li>
                            <li>safety monitoring</li>
                        </ul>
                    </SimpleParagraphComponent>
                    <SectionHeaderComponent text="🧠 Rehabilitation & Skill Development" className="text-left text-xl" />
                    <SimpleParagraphComponent className="text-left text-lg mb-4 ">
                        <ul className="list-disc list-inside">
                            <li>life skills training</li>
                            <li>communication + social skills</li>
                            <li>building independence</li>
                        </ul>
                    </SimpleParagraphComponent>
                </div>
                <div>
                    <DividerImageComponent imageSrc={servicesImage1} altText="Two adults working on a birdhouse." className="my-6" />
                </div>
            </div>
            <div className="mx-6 md:hidden">
                <div>
                    <SectionHeaderComponent text="🏥 Health & Wellness Support" className="text-left text-xl" />
                    <SimpleParagraphComponent className="text-left text-lg mb-4 ">
                        <ul className="list-disc list-inside">
                            <li>coordination with doctors</li>
                            <li>medication support</li>
                            <li>appointments + health tracking</li>
                        </ul>
                    </SimpleParagraphComponent>
                    <SectionHeaderComponent text="💬 Behavioral & Emotional Support" className="text-left text-xl" />
                    <SimpleParagraphComponent className="text-left text-lg mb-4 ">
                        <ul className="list-disc list-inside">
                            <li>behavior support plans</li>
                            <li>coping strategies</li>
                            <li>coordination with professionals</li>
                        </ul>
                    </SimpleParagraphComponent>
                </div>
                <div>
                    <DividerImageComponent imageSrc={servicesImage2} altText="A disabled adult being checked up on by a doctor/nurse." className="my-6" />
                </div>
            </div>
            <div className="hidden mx-6 md:grid grid-cols-2 mb-6">
                <div>
                    <DividerImageComponent imageSrc={servicesImage2} altText="A disabled adult being checked up on by a doctor/nurse." className="my-6" />
                </div>
                <div className="md:p-6">
                    <SectionHeaderComponent text="🏥 Health & Wellness Support" className="text-left text-xl" />
                    <SimpleParagraphComponent className="text-left text-lg mb-4">
                        <ul className="list-disc list-inside">
                            <li>coordination with doctors</li>
                            <li>medication support</li>
                            <li>appointments + health tracking</li>
                        </ul>
                    </SimpleParagraphComponent>
                    <SectionHeaderComponent text="💬 Behavioral & Emotional Support" className="text-left text-xl" />
                    <SimpleParagraphComponent className="text-left text-lg mb-4 ">
                        <ul className="list-disc list-inside">
                            <li>behavior support plans</li>
                            <li>coping strategies</li>
                            <li>coordination with professionals</li>
                        </ul>
                    </SimpleParagraphComponent>
                </div>
            </div>
            <div className="mx-6 md:grid grid-cols-2">
                <div className="md:p-6">
                    <SectionHeaderComponent text="🌍 Community Integration" className="text-left text-xl" />
                    <SimpleParagraphComponent className="text-left text-lg mb-4 ">
                        <ul className="list-disc list-inside">
                            <li>recreational activities</li>
                            <li>social engagement</li>
                            <li>community participation</li>
                        </ul>
                    </SimpleParagraphComponent>
                    <SectionHeaderComponent text="⚖️ Rights & Advocacy" className="text-left text-xl" />
                    <SimpleParagraphComponent className="text-left text-lg mb-4 ">
                        <ul className="list-disc list-inside">
                            <li>protecting client rights</li>
                            <li>promoting independence</li>
                            <li>access to advocacy resources</li>
                        </ul>
                    </SimpleParagraphComponent>
                </div>
                <div>
                    <DividerImageComponent imageSrc={servicesImage3} altText="Two adults sitting on a couch." className="my-6" />
                </div>

            </div>
        </div>
    )

}

export default ServicesPageComponent;