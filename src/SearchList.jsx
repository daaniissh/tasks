import React, { Fragment } from 'react'

const SearchList = ({ data, clickHandler, ClassName }) => {

  const ClickFunc = (event) => {
    clickHandler(event.target.innerText)
  }
  return (
    <Fragment>
      <div className={ClassName}>
        <img src={data.image} alt="not " />
        <div className="content">
          <h6 onClick={ClickFunc} >{data.title}</h6>
          <p>&#x20B9;{data.price}</p>
        </div>

      </div>
    </Fragment>
  )
}

export default SearchList