import SectionHeaderComponent from "../global/SectionHeaderComponent";
import SimpleParagraphComponent from "../global/SimpleParagraphComponent";
import { FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import PrimaryButtonComponent from "../global/PrimaryButtonComponent";
import SimpleDialogComponent from "../global/SimpleDialogComponent";

function ContactUsPageComponent() {
    const [open, setOpen] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const res = await fetch("https://formspree.io/f/mdawbjrb", {
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
    return (
        <div className="mx-8 flex flex-col justify-center gap-8 md:grid grid-rows-[0.2fr_auto_auto] grid-cols-[1fr]">
            <div>
                <SectionHeaderComponent text="Contact Us" className="text-left md:text-center" />
                <SimpleParagraphComponent className="text-left text-xl md:text-center">
                    We’re here to answer your questions and help you get started.
                </SimpleParagraphComponent>
                <div className="flex flex-col md:flex flex-col gap-2 md:items-center">
                    <a href="mailto:office.LHDD@livigrouphome.com" className="text-sm">✉️ office.LHDD@livigrouphome.com</a>
                    <a href="tel:(980) 222-4535" className="text-sm">📞 (980) 222-4535</a>
                </div>

            </div>
            <div className="w-full md:max-w-[500px] md:mx-auto">
                <form className="w-full" onSubmit={handleSubmit}>
                    <FieldGroup>
                        <FieldSet className="gap-2">
                            <FieldLabel htmlFor="name">Name</FieldLabel>
                            <Input required id="name" name="name" type="text" placeholder="Your Name" className="w-full border-1 border-secondary rounded-md p-2 mb-2" />
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input required id="email" name="email" type="email" placeholder="Your Email" className="w-full border-1 border-secondary rounded-md p-2 mb-2" />
                            <FieldLabel htmlFor="phone">Phone Number (Optional)</FieldLabel>
                            <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" className="w-full border-1 border-secondary rounded-md p-2 mb-2" />
                            <FieldLabel htmlFor="message">Message</FieldLabel>
                            <Textarea required id="message" name="message" placeholder="Your Message" className="w-full border-1 border-secondary rounded-md p-2 mb-2" rows={4} />
                        </FieldSet>
                    </FieldGroup>
                    <PrimaryButtonComponent type="submit" text="Send Message" className="w-full" />
                </form>
                <SimpleDialogComponent open={open} onOpenChange={setOpen} title="Message Sent" description="Thank you for reaching out to us! We will get back to you as soon as possible." />
            </div>
            <div className="md:flex flex-col [768px]:max-w-[500px] items-center md:mx-auto">
                <SectionHeaderComponent text="Prefer to speak with someone directly?" className="text-left md:text-center" />
                <PrimaryButtonComponent text="Call Us Now" className="mx-0 mb-8" />
            </div>
        </div>
    )
}

export default ContactUsPageComponent;