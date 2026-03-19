function SimpleParagraphComponent({ text, children, className }) {
    return (
        <p className={`text-center text-base w-[85vw] mx-auto mb-4 ${className || ''}`}>{text || children}</p>
    )
}

export default SimpleParagraphComponent;