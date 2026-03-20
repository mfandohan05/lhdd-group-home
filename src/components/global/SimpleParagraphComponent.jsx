function SimpleParagraphComponent({ text, children, className }) {
    return (
        <div className={`text-center text-base w-[85vw] mx-auto mb-4 ${className || ''}`}>{text || children}</div>
    )
}

export default SimpleParagraphComponent;