import SearchBar from "../SearchBar";

function CatalogSearch ({value, onChange, onClear}) {
    return(
        <>
        <h2>Shop for Music</h2>
        <SearchBar value={value} onChange={onChange} onClear={onClear} placeholder="Search by title, composer, or arranger"/>
        </>
    )
}
export default CatalogSearch;