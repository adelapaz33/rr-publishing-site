
import ExtendableSection from "../components/ExtendableSection";
// need to import composer data from composer.json 

function ComposerPage ({headShot, name, composerBio, works}) {
    return(
        <div>
            <img src={headShot} alt={`${name} headshot`} loading='lazy' /> 
            <h2>{name}</h2>
            <p>{composerBio}</p>
            <ExtendableSection title="Works by this composer">
            <ul>
          {works.map((work) => (
            <li key={work.id}>{work.title}</li>
          ))}
        </ul>
            </ExtendableSection>
        </div>
    )
}

export default ComposerPage;