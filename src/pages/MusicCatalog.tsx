import BrowseMusic from "../components/catalog/BrowseMusic";
import CatalogSearch from "../components/catalog/CatalogSearch";
import FilterPanel from "../components/catalog/FilterPanel";
import NewMusic from "../components/catalog/NewMusic";

function MusicCatalog({ }) {
    return <section className="catalog bg-[#FFF8F0]">
    <h1 className="text-4xl font-bold mb-8 text-center">Music Catalog</h1>
    
    <CatalogSearch/>
    <NewMusic/>
    <BrowseMusic/>
    <FilterPanel/>
   

    </section>
}

export default MusicCatalog;