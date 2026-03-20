import { Button } from '../ui/button';

function PrimaryButtonComponent({ text, onClick, className, type }) {
    return (
        <Button variant="default" size="lg" className={`block mx-auto mt-4 bg-secondary px-5 ${className || ''}`} onClick={onClick} type={type}>
            {text}
        </Button>
    )
}

export default PrimaryButtonComponent;