// 'use client'

// import { useState } from "react";

// function SearchBar({properties}) {
  
//   const [search,setSearch] =  useState('');
//   const [house,setHouse] = useState(properties);

//   //  const handleWrite = (event) =>{
//   //    setSearch(search)
//   //  }
  
//    function handleClick(value) {
//     setSearch(value)
//     setHouse(properties.filter((property) => property.name.toLowercase().includes(value) == search))
//   }

//   // console.log(property)

//   return (
//     <div className='search-bar'>
//         <input 
//         placeholder="Search Location"
//         name='search'
//         value={search}
//          onChange={e => setSearch(e.target.value)}
        
//         />
//         <button onClick={handleClick}>Search</button>
        
//     </div>
//   )
// }

// export default SearchBar
