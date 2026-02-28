import BrowseMusic from "../components/catalog/BrowseMusic";
import CatalogSearch from "../components/catalog/CatalogSearch";
import NewMusic from "../components/catalog/NewMusic";
import { useState } from "react";
import MusicCard from "../components/cards/MusicCard";
import scores from "../data/scores.json";


function MusicCatalog({ }) {

    const [searchValue, setSearchValue] = useState("");
 
    const handleSearchChange = (value) => {
        setSearchValue(value);
      };

 const query = searchValue.trim().toLocaleLowerCase();

 const filteredScores = scores.filter((score) => {
    // show everything if there is no search text 
    if (!query) return true; 

    const title = score.title?.toLowerCase() ?? "";
    const composer = score.composer?.toLowerCase() ?? "";
    const arranged = score.arranged?.toLowerCase() ?? "";

    return(
        title.includes(query) ||
        composer.includes(query) ||
        arranged.includes(query) 
    );
 });

    return <section className="catalog bg-[#FFF8F0]">
    <h1 className="text-4xl font-bold mb-8 text-center">Music Catalog</h1>
    
    <CatalogSearch
    value={searchValue}
    onChange={handleSearchChange}
    onClear={() => setSearchValue("")}
    />
      <p>
        Showing {filteredScores.length} of {scores.length}
      </p>

      {filteredScores.map((score) => (
        <MusicCard key={score.id} {...score} />
      ))}
    <NewMusic/>
    <BrowseMusic/>
   
   

    </section>
}

export default MusicCatalog;