function WhyChooseCard({title, description, imageSrc}) {
    return(
        <div className="p-6 rounded-xl shadow flex flex-col gap-4 justify-start max-w-[240px]">
            <img src={imageSrc} alt={title} className="h-14 w-14 object-cover rounded"/>
            <h2 className="text-xl">{title}</h2>
            <p className="text-base">{description}</p>
        </div>
    )
}

export default WhyChooseCard;