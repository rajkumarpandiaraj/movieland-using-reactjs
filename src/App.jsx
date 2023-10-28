import { useState, useEffect } from 'react';
import './App.css'
import SearchInput from "./components/SearchInput";
import SearchList from "./components/SearchList";
import axios from "axios";
function App() {
  const [searchInput, setSearchInput] = useState('spiderman')
  const [searchList, setSearchList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  

  const changeInputHandler = (text) => {
    setSearchInput(text)
  }

  const submitHandler = () => {
    if(searchInput){
      fetchData()
    }
  }

  const fetchData = () => {
    console.log('fetching', searchInput);
    axios.get(`http://www.omdbapi.com/?apikey=d7d19214&s=${searchInput}&plot=full`)
    .then(data => {
      console.log(data)
      setSearchList(data.data.Search)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <h1>MovieLand</h1>
      <SearchInput searchInput={searchInput} onChange={changeInputHandler} submitHandler = {submitHandler}/>
      <SearchList searchList={searchList}/>
    </>
  )
}

export default App
