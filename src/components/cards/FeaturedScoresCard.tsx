function FeaturedScoresCard({title, composer, arranger, cover}) {
    return(
        <div className="shadow">
            <img src={cover} alt={title} />
<h3>{title}</h3>
<p>{composer || arranger}</p>
        </div>
    )
}

export default FeaturedScoresCard;