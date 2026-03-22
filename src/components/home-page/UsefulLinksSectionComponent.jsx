import SectionHeaderComponent from "../global/SectionHeaderComponent";
const links = [
    {
        linkText: "Partners Health Management",
        linkSrc: "https://www.partnersbhm.org"
    },
    {
        linkText: "Alliance Health",
        linkSrc: "https://www.alliancehealthplan.org/"
    },
    {
        linkText: "Trillium Health Resources",
        linkSrc: "https://www.trilliumhealthresources.org"
    },
    {
        linkText: "Vaya",
        linkSrc: "https://www.vayahealth.com"
    },
    {
        linkText: "NC Division of Health Service Regulation",
        linkSrc: "https://info.ncdhhs.gov/dhsr/"
    }
]
function UsefulLinksSectionComponent() {
    return (
        <div className="my-8">
            <SectionHeaderComponent text="Useful Links" />
            <div className="flex flex-col items-center gap-10 bg-[#C8CDFF] rounded-xl p-12 w-[85vw] mx-auto md:items-start lg:items-start max-w-[1440px]">
                {links.map((link, index) => (
                    <a key={index} href={link.linkSrc} className="text-center text-primary font-base text-lg hover:underline md:text-left">
                        {link.linkText}
                    </a>
                ))}
            </div>
        </div>

    )
}

export default UsefulLinksSectionComponent;