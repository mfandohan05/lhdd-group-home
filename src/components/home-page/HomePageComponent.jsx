import GuidingValuesComponent from "./GuidingValuesComponent";
import HeroComponent from "./HeroComponent";
import OurServicesComponent from "./OurServicesComponent";
import DividerImageComponent from "../global/DividerImageComponent";
import dividerImage from "@/assets/divider-image.jpg";
import HomePageCTAComponent from "./HomePageCTAComponent";


function HomePageComponent() {
    return (
        <>
            <HeroComponent />
            <OurServicesComponent />
            <GuidingValuesComponent />
            <DividerImageComponent imageSrc={dividerImage} altText="Disabled adult giving caregiver a hug." />
            <HomePageCTAComponent />
        </>
    )
}

export default HomePageComponent;