import { Button } from '../ui/button';

function PrimaryButtonComponent({ text, onClick, className, type }) {
    return (
        <Button
            variant="default"
            size="lg"
            className={`
                block mx-auto mt-4 px-5 bg-secondary text-white
                transition-all duration-200 ease-in-out

                hover:bg-secondary/90 hover:scale-[1.02]
                active:scale-[0.98] active:bg-secondary/80

                focus:outline-none focus:ring-2 focus:ring-secondary/50

                ${className || ''}
            `}
            onClick={onClick}
            type={type}
        >
            {text}
        </Button>
    );
}

export default PrimaryButtonComponent;