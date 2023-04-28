import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchList from './SearchList'
import './SearchAPI.css'
const SearchAPI = () => {
  const [data,setData] = useState([])
    const [text, setText] = useState('')
  const [items, setItems] = useState(data)
  const [filteredData, setFilteredData] = useState(data)
  useEffect(() => {
     (async()=>{
      const res = await axios.get('https://fakestoreapi.com/products')
      setData(res?.data)
     })() 
  }, [])


  const handleSearch = (event) => {
    setText(event.target.value)
    let filteredDatas = data.filter((items)=>{
      return items.title.toLowerCase().includes(text.toLowerCase())
    })
   
    setFilteredData(filteredDatas)
    // console.log('🚀 ~ App.js ~ Data', item);
  }
  const clickHandler = (ClickValue) => {
    setText(ClickValue)
  }
  return (
    <div className='parent'>
      <p className='dim'>Search and active autocomplete comp </p>
      <div className="input-container">
        
        <input onChange={handleSearch} value={text} type="text" placeholder='Search(API-Comp)' />
        {text.length > 0 && <span onClick={() => setText('')} class="material-symbols-outlined close-icon">
          close
        </span>}
      </div>
      <div className="list-parent">
        {filteredData?.map((data) => (
          <SearchList clickHandler={clickHandler} ClassName="list-sub-parent-two" data={data} />
        ))}
      </div>

    </div>
  )
}

export default SearchAPI