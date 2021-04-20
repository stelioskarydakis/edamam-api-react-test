import { useEffect, useState } from 'react'
import './App.css'
import Recipe from './Recipe'

function App() {
  const APP_ID = process.env.REACT_APP_ID
  const APP_KEY = process.env.REACT_APP_KEY
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('pizza')
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(() => {
    getRecipes()
    //eslint-disable-next-line
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(exampleReq)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className='App' onSubmit={handleSubmit}>
      <h1>Recipe Edamam Api app</h1>
      <form className='search-form'>
        <input
          type='text'
          className='search-bar'
          placeholder='Search recipe...'
          value={search}
          onChange={handleSearch}
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.recipe.label} {...recipe} />
        })}
      </div>
    </div>
  )
}

export default App
