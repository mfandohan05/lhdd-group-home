import DividerImageComponent from "../global/DividerImageComponent";
import SectionHeaderComponent from "../global/SectionHeaderComponent";
import SimpleParagraphComponent from "../global/SimpleParagraphComponent";
import aboutUsImage1 from "@/assets/about-us-image-1.jpg";
import aboutUsImage2 from "@/assets/about-us-image-2.webp";
import aboutUsImage3 from "@/assets/about-us-image-3.jpg";

const imageData = [
    {
        imageSrc: aboutUsImage1,
        altText: "People putting their hands in the middle."
    },
    {
        imageSrc: aboutUsImage2,
        altText: "Two adults sitting next to each other."
    },
    {
        imageSrc: aboutUsImage3,
        altText: "A picture of a group home."
    }
]
function AboutUsPageComponent() {
    return (
        <div className="flex flex-col items-center md:max-w-[1440px] md:mx-auto">
            <div className="md:grid grid-cols-2 md:my-8">
                <div className="md:self-center p-6">
                    <SectionHeaderComponent text="Our Mission" className="mb-6" />
                    <SimpleParagraphComponent className="md:max-w-full" text="At LHDD, our mission is to provide compassionate, person-centered residential care for individuals who need a safe, supporting, and loving environment." />
                    <SimpleParagraphComponent className="md:max-w-full" text="We are committed to providing high-quality care that promotes the well-being and dignity of each individual we serve." />
                </div>
                <div>
                    <DividerImageComponent imageSrc={imageData[0].imageSrc} altText={imageData[0].altText} />
                </div>
            </div>
            <div className="md:hidden">
                <div className="self-center p-6">
                    <SectionHeaderComponent text="Our Story" className="mb-6" />
                    <SimpleParagraphComponent className="md:max-w-full" text="LHDD was founded with a simple but powerful belief: every individual deserves to live in a safe, supportive environment where they are treated with dignity, respect, and compassion." />
                    <SimpleParagraphComponent className="md:max-w-full" text="Recognizing the need for high-quality residential care for adults with developmental disabilities, LHDD was created to provide a structured home where individuals can receive personalized support while building independence and confidence in their daily lives." />
                </div>
                <div>
                    <DividerImageComponent imageSrc={imageData[1].imageSrc} altText={imageData[1].altText} />
                </div>
            </div>
            <div className="hidden md:grid grid-cols-2 md:mb-8">
                <div>
                    <DividerImageComponent imageSrc={imageData[1].imageSrc} altText={imageData[1].altText} />
                </div>
                <div className="self-center p-6">
                    <SectionHeaderComponent text="Our Story" className="mb-6" />
                    <SimpleParagraphComponent className="md:max-w-full" text="LHDD was founded with a simple but powerful belief: every individual deserves to live in a safe, supportive environment where they are treated with dignity, respect, and compassion." />
                    <SimpleParagraphComponent className="md:max-w-full" text="Recognizing the need for high-quality residential care for adults with developmental disabilities, LHDD was created to provide a structured home where individuals can receive personalized support while building independence and confidence in their daily lives." />
                </div>
            </div>
            <div className="mb-8 md:grid grid-cols-2">
                <div className="self-center p-6">
                    <SectionHeaderComponent text="Who We Serve" className="mb-6" />
                    <SimpleParagraphComponent className="md:max-w-full" text="LHDD provides residential support services for adults with developmental disabilities who benefit from a safe, structured, and supportive living environment. Our services are designed for individuals who may require assistance with daily living skills, supervision, and personalized support to help them maintain stability, independence, and overall well-being." />
                    <SimpleParagraphComponent className="md:max-w-full" text="We work closely with families, guardians, and referral partners to ensure that each resident receives care tailored to their unique needs and goals. By creating a supportive home environment and fostering meaningful community engagement, LHDD helps individuals build confidence, develop life skills, and experience an improved quality of life." />
                    <SimpleParagraphComponent className="md:max-w-full">
                        LHDD proudly accepts referrals for individuals located anywhere within <span className="font-bold">North Carolina.</span>
                    </SimpleParagraphComponent>
                </div>
                <div>
                    <DividerImageComponent imageSrc={imageData[2].imageSrc} altText={imageData[2].altText} />
                </div>


            </div>
        </div>
    )
}

export default AboutUsPageComponent;