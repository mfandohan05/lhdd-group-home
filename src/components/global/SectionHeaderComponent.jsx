function SectionHeaderComponent({ text, className }) {
    return (
        <h2 className={`text-2xl font-bold my-4 text-center text-primary ${className || ''}`}>{text}</h2>
    )
}

export default SectionHeaderComponent;