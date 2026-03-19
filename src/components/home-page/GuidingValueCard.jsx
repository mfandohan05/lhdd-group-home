function GuidingValueCard({emoji, valueName, valueDescription}) {
    return (
        <div className="bg-primary rounded-xl shadow-xl mx-6 p-6 flex flex-col items-center text-center text-white">
            <div>{emoji}</div>
            <h4 className="font-bold text-lg">{valueName}</h4>
            <p className="text-sm">{valueDescription}</p>
        </div>
    )
}

export default GuidingValueCard;