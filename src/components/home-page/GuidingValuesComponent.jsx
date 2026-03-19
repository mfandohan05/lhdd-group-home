import GuidingValueCard from "./GuidingValueCard";
import SectionHeaderComponent from "../global/SectionHeaderComponent";

const guidingValues = [
    {
        emoji: "❤️",
        valueName: "Love",
        valueDescription: "We lead with love in every act of care—showing compassion, patience, and understanding."
    },
    {
        emoji: "☑️",
        valueName: "Honesty",
        valueDescription: "We act with truth, transparency, and integrity, doing what is right even when no one is watching."
    },
    {
        emoji: "🤝",
        valueName: "Dignity",
        valueDescription: "We honor each person’s worth and individuality, ensuring respect, comfort, and a voice in their care."
    },
    {
        emoji: "🕓",
        valueName: "Dependability",
        valueDescription: "We show up with heart, consistency, and commitment—our clients and partners can rely on us at every step."
    }
]

function GuidingValuesComponent() {

    return (
        <div>
            <SectionHeaderComponent text="LHDD's Guiding Values" />
            <h3 className="font-medium text-center p-4">Our guiding values at Livi Group Home for Developmental Disability (LHDD) are:</h3>
            <div className="flex flex-col gap-6">
                {guidingValues.map((value, index) => (
                    <GuidingValueCard
                        key={index}
                        emoji={value.emoji}
                        valueName={value.valueName}
                        valueDescription={value.valueDescription}
                    />
                ))}
            </div>
        </div>
    )
}

export default GuidingValuesComponent;