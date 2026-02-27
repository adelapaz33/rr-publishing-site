import BrowseMusic from "../components/catalog/BrowseMusic";
import CatalogSearch from "../components/catalog/CatalogSearch";
import NewMusic from "../components/catalog/NewMusic";
import { useState } from "react";

function MusicCatalog({ }) {

    const [searchValue, setSearchValue] = useState("");
 
    const handleSearchChange = (value) => {
        setSearchValue(value);
      };

    return <section className="catalog bg-[#FFF8F0]">
    <h1 className="text-4xl font-bold mb-8 text-center">Music Catalog</h1>
    
    <CatalogSearch
    value={searchValue}
    onChange={handleSearchChange}
    onClear={() => setSearchValue("")}
    />
    <NewMusic/>
    <BrowseMusic/>
   
   

    </section>
}

export default MusicCatalog;