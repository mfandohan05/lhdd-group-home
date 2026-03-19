function DividerImageComponent({ imageSrc, altText }) {
    return (
        <div className="w-full h-full my-8">
            <img src={imageSrc} alt={altText} className="w-full h-full object-cover" />
        </div>
    )
}

export default DividerImageComponent;