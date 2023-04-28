import React, { Fragment } from 'react'

const SearchList = ({ data, clickHandler, text }) => {

  const ClickFunc = (event) => {
    clickHandler(event.target.innerText)
  }
  return (
    <Fragment>
      <div className="list-sub-parent">
        <img src={data.image} alt="not " />
        <div className="content">
          <h6 onClick={ClickFunc} >{data.name}</h6>
          <p>&#x20B9;{data.price}</p>
        </div>

      </div>
    </Fragment>
  )
}

export default SearchList