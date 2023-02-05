import React from 'react'
import '../styles/Calculator.css'
import { useState } from 'react'


let formData = {
  liters: '',
  output: '',
  scrap: '',
  bpm: 28,
  bagSize: 50
}

const convertTime = (num) => {
  if(num > 0) {
    let hour = Math.floor(num)
    let min = (num - hour) * 60
    return `${hour} hours and ${Math.floor(min)} minutes`
  }
  if(num < 0) {
    let min = num * 60;
    return `${Math.floor(min)} minutes`
  }
}


const calculate = (totalLiters,output,scrap,bpm,bagSize) => {
  const currentBags = output - scrap;
  const currentLiters = currentBags * bagSize / 1000;
  const litersRemaining = totalLiters - currentLiters;
  const bagsRemaining = litersRemaining * 1000 / bagSize;
  const hoursRemaining = bagsRemaining / bpm / 60; // total in minutes
  console.log(hoursRemaining)
  return {
    "Liters-Remaining": litersRemaining,
    "Bags-Remaining": bagsRemaining,
    "Hours-Remaining": convertTime(hoursRemaining)
  }
}


const Calculator = () => {
  const [form, setForm] = useState(formData)

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = calculate(form.liters,form.output,form.scrap,form.bpm,form.bagSize)
    console.log(answer)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div>
      <form>
        <div className='description'>
          <label htmlFor='liters'>Liters</label>
          <label htmlFor='output'>Output</label>
          <label htmlFor='scrap'>Scrap</label>
        </div> 

        <div className='input'>
          <input
            name='liters'
            id='liters' 
            type='number' 
            placeholder='Enter total liters'
            value={form.liters}
            onChange={handleChange}
            />
          <input
            name='output'
            id='output' 
            type='number' 
            placeholder='Enter current output'
            value={form.output}
            onChange={handleChange}
            />
          <input 
            name='scrap'
            id='scrap' 
            type='number' 
            placeholder='Enter current scrap'
            value={form.scrap}
            onChange={handleChange}
            />
        </div> 
        <div className='dropdown'>
          <div>
            <label htmlFor='bpm'>Bags per minute</label>
            <select name='bpm' id='bpm' onChange={handleChange}>
              <option value={28}>28</option>
              <option value={24}>24</option>
            </select>
          </div>
          
          <div>
            <label htmlFor='bag-size'>Bag size</label>
            <select name='bagSize' id='bag-size' onChange={handleChange}>
              <option value={50}>50ml</option>
              <option value={100}>100ml</option>
            </select>
          </div>
          
        </div>
      </form>
      <button onClick={handleSubmit}>Calculate</button>
      
      
    </div>

  )
}

export default Calculator