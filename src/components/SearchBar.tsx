function SearchBar ({value, onChange, placeholder, onClear}) {
    return<form>
        <input type="text" value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} className="bg-gray-50 border border-gray-300 rounded-lg w-150  p-2.5"></input>
    </form>
   
    
}

//controlled input where parent owns the value 

export default SearchBar