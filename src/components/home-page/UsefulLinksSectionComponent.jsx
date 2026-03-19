import SectionHeaderComponent from "../global/SectionHeaderComponent";
const links = [
    {
        linkText: "Placeholder Text 1",
        linkSrc: "https://www.example.com/link1"
    },
    {
        linkText: "Placeholder Text 2",
        linkSrc: "https://www.example.com/link2"
    },
    {
        linkText: "Placeholder Text 3",
        linkSrc: "https://www.example.com/link3"
    },
    {
        linkText: "Placeholder Text 4",
        linkSrc: "https://www.example.com/link4"
    }
]
function UsefulLinksSectionComponent() {
    return (
        <div className="my-8">
            <SectionHeaderComponent text="Useful Links" />
            <div className="flex flex-col items-center gap-10 bg-[#C8CDFF] rounded-xl p-12 w-[85vw] mx-auto">
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