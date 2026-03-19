import SectionHeaderComponent from "../global/SectionHeaderComponent";
import PrimaryButtonComponent from "../global/PrimaryButtonComponent";
function HomePageCTAComponent() {
    return (
        <div className="w-[85vw] flex flex-col justify-center mx-auto gap-8">
            <div>
                <SectionHeaderComponent text="Who LHDD Serves" />
                <ul className="list-disc m-6">
                    <li>Adults (18+)</li>
                    <li>Individuals with developmental disabilities</li>
                    <li>Those who benefit from supervised residential support</li>
                </ul>
                <PrimaryButtonComponent text="Start a Referral" />
            </div>
            <div>
                <SectionHeaderComponent text="Looking for care for a loved one?" />
                <p className="font-semibold text-center text-base">Contact our team to learn more about our services and how we support our residents.</p>
                <PrimaryButtonComponent text="Contact Us" />
            </div>
        </div>
    )
}

export default HomePageCTAComponent;

