import Button from "../Button";

function MusicCard({
  title,
  composer,
  arranged,
  voicing,
  cover,
  duration,
  accompanimentType,
}) {
  // format seconds → minutes
  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    return `${mins} min`;
  };

  return (
    <div className="musicCard flex gap-4 bg-white p-6 rounded-lg shadow-sm">
      {/* cover */}
      <img
        src={cover}
        alt={`${title} cover`}
        className="w-28 h-auto rounded"
      />

      {/* text */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>

          {/* composer vs arranger */}
          {composer && <p className="text-sm">Composed by {composer}</p>}
          {!composer && arranged && (
            <p className="text-sm">Arranged by {arranged}</p>
          )}

          <p className="text-sm mt-1">
            {voicing} • {formatDuration(duration)} • {accompanimentType}
          </p>
        </div>

        {/* button */}
        <div className="mt-3">
          <Button href={`/score/${title}`} intent="outline" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MusicCard;