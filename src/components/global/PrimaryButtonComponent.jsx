import { Button } from '../ui/button';

function PrimaryButtonComponent({ text, onClick }) {
    return (
        <Button variant="default" size="lg" className='block mx-auto mt-4 bg-secondary px-5' onClick={onClick}>
            {text}
        </Button>
    )
}

export default PrimaryButtonComponent;