import SectionHeaderComponent from "../global/SectionHeaderComponent";
const links = [
    {
        linkText: "NC Medicaid Services – Long-Term Care Resources",
        linkSrc: "https://www.example.com/link1"
    },
    {
        linkText: "Autism Society of North Carolina",
        linkSrc: "https://www.example.com/link2"
    },
    {
        linkText: "North Carolina Division of Health Service Regulation (DHSR)",
        linkSrc: "https://www.example.com/link3"
    },
    {
        linkText: "Medicaid Long-Term Care Services (NC)",
        linkSrc: "https://www.example.com/link4"
    }
]
function UsefulLinksSectionComponent() {
    return (
        <div className="my-8">
            <SectionHeaderComponent text="Useful Links" />
            <div className="flex flex-col items-center gap-10 bg-[#C8CDFF] rounded-xl p-12 w-[85vw] mx-auto lg:items-start max-w-[1440px]">
                {links.map((link, index) => (
                    <a key={index} href={link.linkSrc} className="text-primary font-base text-lg hover:underline">
                        {link.linkText}
                    </a>
                ))}
            </div>
        </div>

    )
}

export default UsefulLinksSectionComponent;