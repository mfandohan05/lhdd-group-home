import SectionHeaderComponent from "../global/SectionHeaderComponent";
import SimpleParagraphComponent from "../global/SimpleParagraphComponent";
import { FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState, useEffect } from "react";
import PrimaryButtonComponent from "../global/PrimaryButtonComponent";
import SimpleDialogComponent from "../global/SimpleDialogComponent";

function ReferralsPageComponent() {
    const [open, setOpen] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const res = await fetch("https://formspree.io/f/mqeyjobr", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (res.ok) {
            setOpen(true);
            e.target.reset();
        }
        else {
            alert("There was an error sending your message. Please try again later.");
        }
    }
    useEffect(() => {
        document.title = "Referrals | LHDD"
    }, []);
    return (
        <div className="max-w-[1024px] mx-auto">
            <div>
                <SectionHeaderComponent text="Start a Referral" className="mb-6" />
                <SimpleParagraphComponent className="text-left" text="We work with families, guardians, and professionals across North Carolina to provide safe, supportive residential care." />
                <SimpleParagraphComponent className='text-left'>
                    Our team will guide you through every step of the way.
                </SimpleParagraphComponent>
            </div>
            <div>
                <SectionHeaderComponent text="Who Can Submit A Referral?" className="mb-6 mt-8" />
                <SimpleParagraphComponent>
                    <ul className="list-disc list-inside text-left">
                        <li>Families and guardians</li>
                        <li>Case managers</li>
                        <li>Social workers</li>
                        <li>Healthcare providers</li>
                    </ul>
                </SimpleParagraphComponent>
            </div>
            <div>
                <SectionHeaderComponent text="Who We Serve (Eligibility)" className="mb-6 mt-8 mx-6" />
                <SimpleParagraphComponent className='text-left px-6 md:text-center w-auto'>
                    LHDD serves adults (18+) with developmental disabilities who benefit from a structured, supportive residential environment with supervision and personalized care.
                </SimpleParagraphComponent>
            </div>
            <div>
                <SectionHeaderComponent>
                    Referral Process
                </SectionHeaderComponent>
                <SimpleParagraphComponent className="text-left">
                    <div><span className="font-semibold">Step 1: </span> Submit a referral form.</div>
                    <div><span className="font-semibold">Step 2: </span> Our team reviews your responses.</div>
                    <div><span className="font-semibold">Step 3: </span> We contact you for follow-up.</div>
                    <div><span className="font-semibold">Step 4: </span> Admission planning (if appropriate).</div>
                </SimpleParagraphComponent>
            </div>
            <div>
                <form className="flex flex-col mx-6 mb-6" onSubmit={handleSubmit}>
                    <FieldGroup>
                        <FieldSet className="gap-2">
                            <SectionHeaderComponent text="Your Information" className="text-left text-lg" />
                            <FieldLabel htmlFor="referrerName">Full Name</FieldLabel>
                            <Input required id="referrerName" name="referrerName" type="text" placeholder="Your Name" className="w-full border border-secondary rounded-md p-2 mb-2" />
                            <FieldLabel htmlFor="referrerEmail">Email</FieldLabel>
                            <Input required id="referrerEmail" name="referrerEmail" type="email" placeholder="Your Email" className="w-full border border-secondary rounded-md p-2 mb-2" />
                            <FieldLabel htmlFor="referrerPhone">Phone Number</FieldLabel>
                            <Input required id="referrerPhone" name="referrerPhone" type="tel" placeholder="Your Phone Number" className="w-full border border-secondary rounded-md p-2 mb-2" />
                            <FieldLabel htmlFor="relationship">Relationship to Individual</FieldLabel>
                            <Input required id="relationship" name="relationship" type="text" placeholder="Parent, Guardian, Case Manager, etc." className="w-full border border-secondary rounded-md p-2 mb-4" />
                        </FieldSet>
                        <FieldSet className="gap-2">
                            <SectionHeaderComponent text="Individual Information" className="text-left text-lg" />
                            <FieldLabel htmlFor="age">Age</FieldLabel>
                            <Input required id="age" name="age" type="number" placeholder="Age" className="w-full border border-secondary rounded-md p-2 mb-2" />
                            <FieldLabel htmlFor="location">Location</FieldLabel>
                            <Input required id="location" name="location" type="text" placeholder="City, State" className="w-full border border-secondary rounded-md p-2 mb-4" />
                        </FieldSet>
                        <FieldSet className="gap-2">
                            <SectionHeaderComponent text="Care Needs" className="text-left text-lg" />
                            <FieldLabel htmlFor="needs">Brief Description of Needs</FieldLabel>
                            <Textarea required id="needs" name="needs" placeholder="Describe the individual’s needs, level of support required, etc." className="w-full border border-secondary rounded-md p-2 mb-2 min-h-[120px]" />
                            <FieldLabel htmlFor="livingSituation">Current Living Situation</FieldLabel>
                            <Input id="livingSituation" name="livingSituation" type="text" placeholder="Home, hospital, facility, etc." className="w-full border border-secondary rounded-md p-2 mb-4" />
                        </FieldSet>
                        <FieldSet className="gap-2">
                            <SectionHeaderComponent text="Timeline" className="text-left text-lg" />
                            <FieldLabel htmlFor="timeline">When are services needed?</FieldLabel>
                            <Input id="timeline" name="timeline" type="text" placeholder="ASAP, within 30 days, flexible, etc." className="w-full border border-secondary rounded-md p-2 mb-4" />
                        </FieldSet>
                        <FieldSet className="gap-2">
                            <SectionHeaderComponent text="Additional Information" className="text-left text-lg" />
                            <FieldLabel htmlFor="additionalInfo">Anything else we should know?</FieldLabel>
                            <Textarea id="additionalInfo" name="additionalInfo" placeholder="Optional additional details" className="w-full border border-secondary rounded-md p-2 mb-4 min-h-[120px]" />
                        </FieldSet>
                    </FieldGroup>
                    <PrimaryButtonComponent type="submit" text="Submit Referral" className="w-full" />
                </form>
                <SimpleDialogComponent open={open} onOpenChange={setOpen} title="Referral Submitted" description="Thank you for submitting a referral! Our team will review the information and get back to you soon!" />
            </div>
        </div>
    )
}

export default ReferralsPageComponent;