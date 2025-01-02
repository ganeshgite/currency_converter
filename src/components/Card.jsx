import React from 'react'
import Input from './Input'
import Swap_button from './Swap_button'
import getCurrency from '../getCurrency'

const Card = () => {
  return (
    <div>
        <div className="card text-center  ">
            <Input />
            <Swap_button  />
            <Input />

        </div>
    </div>
  )
}

export default Card