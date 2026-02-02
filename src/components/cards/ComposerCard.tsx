

function ComposerCard ({headShot, name}) {
    return(
        <div>
            <img src={headShot}/> 
            <h2>{name}</h2>
        </div>
    )
}

export default ComposerCard;