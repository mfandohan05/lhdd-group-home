function DividerImageComponent({ imageSrc, altText, className }) {
    return (
        <div className="w-full h-full my-8 md:my-0">
            <img src={imageSrc} alt={altText} className={`w-full h-full object-cover md:max-h-[500px] ${className || ''}`} />
        </div>
    )
}

export default DividerImageComponent;