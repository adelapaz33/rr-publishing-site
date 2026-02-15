function FeaturedScoresCard({title, composer, arranger, cover}) {
    return(
        <div className="shadow rounded-xl max-w-[300px] overflow-hidden">
            <img className="h-75 w-full object-cover" src={cover} alt={title} />
            <div className="p-4 text-left bg-white"> 
            {/* link to purchase of song  */}
<h3 className="text-lg" >{title}</h3> 
{/* link to composer page  */}
<p className="text-gray-600 text-md">{composer || arranger}</p> 
</div>
        </div>
    )
}

export default FeaturedScoresCard;