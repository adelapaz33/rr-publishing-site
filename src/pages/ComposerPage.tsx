import ExtendableSection from "../components/ExtendableSection";

type Work = {
  id: string;
  title: string;
  composer?: string;
  arranged?: string;
  voicing?: string;
  duration?: number;
  accompanimentType?: string;
  language?: string;
  price?: string;
  featured?: boolean;
  cover?: string;
};

type ComposerPageProps = {
  headShot: string;
  name: string;
  composerBio: string;
  works: Work[];
};

function ComposerPage({ headShot, name, composerBio, works }: ComposerPageProps) {
  return (
    <div>
      <img src={headShot} alt={`${name} headshot`} loading="lazy" />
      <h2>{name}</h2>
      <p>{composerBio}</p>

      <ExtendableSection title="Works by this composer" defaultOpen={true}>
        {works.length === 0 ? (
          <p>No works are currently available.</p>
        ) : (
          <ul>
            {works.map((work) => (
              <li key={work.id}>{work.title}</li>
            ))}
          </ul>
        )}
      </ExtendableSection>
    </div>
  );
}

export default ComposerPage;
