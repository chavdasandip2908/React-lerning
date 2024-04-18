import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchParamas = () => {
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const [searchParama, setSearchParama] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParama({ age: age, city: city });
  }

  return (
    <div>
      <h3>your age is {searchParama.get("age")}</h3>
      <h3>from {searchParama.get("city")}</h3>

      <form onSubmit={handleSubmit}>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder='enter city age' />
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='enter your city' />

        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
export default SearchParamas