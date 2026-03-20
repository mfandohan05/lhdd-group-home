import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

function SimpleDialogComponent({ open, onOpenChange, title, description }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <p>{description}</p>
            </DialogContent>
        </Dialog>
    )
}

export default SimpleDialogComponent;