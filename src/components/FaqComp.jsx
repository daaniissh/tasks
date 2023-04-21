import React, { useState } from 'react'
import mainImg from '../assets/image.png'
import Arrow from '../assets/arrow.svg'
const FaqComp = () => {
  const [isOpen, setOpen] = useState(false)
  const [tab, setTab] = useState(0)
  const [faq, setFaq] = useState([{
    id: 1,
    title: "How does react work?",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
  {
    id: 2,
    title: "How does react work?",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
  {
    id: 3,
    title: "How does react work?",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
  ])
  const openHandler = (obj)=>{
    setTab(obj)
    tab === obj ? setOpen(!isOpen) : setOpen(true)
  }
  return (
    <div>
      <img className=' w-full h-[197px] object-cover' src={mainImg} alt="" />
      <h1 className=' w-[100%] h-[45px] font-normal text-[40px] flex justify-center' >FAQ</h1>


      {faq.map((obj) => (
        <div className=' flex justify-center  mt-[20px]'>
          <div className="flex flex-col">
            <div onClick={()=>openHandler(obj.id)} className='ease-in duration-300 shadow-lg bg-white w-[615px] h-[60px] border border-b-2 flex justify-between' >
              <p className='mt-[20px] ml-[26px]' >{obj.title}</p>
              <p className='mt-[19.22px] mr-[21.59px] cursor-pointer' onClick={() => openHandler(obj.id)} ><svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                  <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                </svg></p>
            </div>
            {tab === obj.id && isOpen && <div className='ease-in-out duration-300  h-[80px] bg-white ' >
              <p className='mt-[21px] ml-[26px]'>{obj.content}</p>
            </div>}
          </div>
        </div>
      ))}

    </div>

  )
}

export default FaqComp