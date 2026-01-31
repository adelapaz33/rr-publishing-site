function WhyChooseCard({title, description, imageSrc}) {
    return(
        <div className="p-6 rounded-xl shadow flex flex-col gap-4 justify-start max-w-[240px] bg-[#FDFCF9]">
            <img src={imageSrc} alt={title} className="h-14 w-14 object-cover rounded"/>
            <h2 className="text-xl text-[#1E3A8A]">{title}</h2>
            <p className="text-base text-[#374151]">{description}</p>
        </div>
    )
}

export default WhyChooseCard;