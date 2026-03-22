import GuidingValuesComponent from "./GuidingValuesComponent";
import HeroComponent from "./HeroComponent";
import OurServicesComponent from "./OurServicesComponent";
import DividerImageComponent from "../global/DividerImageComponent";
import dividerImage from "@/assets/divider-image.jpg";
import HomePageCTAComponent from "./HomePageCTAComponent";
import UsefulLinksSectionComponent from "./UsefulLinksSectionComponent";


function HomePageComponent() {
    return (
        <div className="lg:max-w-[1440px] mx-auto">
            <HeroComponent />
            <OurServicesComponent />
            <GuidingValuesComponent />
            <DividerImageComponent imageSrc={dividerImage} altText="Disabled adult giving caregiver a hug." />
            <HomePageCTAComponent />
            <UsefulLinksSectionComponent />
        </div>
    )
}

export default HomePageComponent;