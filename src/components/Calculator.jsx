import React from 'react'
import '../styles/Calculator.css'

const Calculator = () => {
  return (
    <div>
      <form>
        <div class='description'>
          <label for='liters'>Liters</label>
          <label for='output'>Output</label>
          <label for='scrap'>Scrap</label>
        </div> 

        <div class='input'>
          <input id='liters' type='number' placeholder='Enter total liters'/>
          <input id='output' type='number' placeholder='Enter current output'/>
          <input id='scrap' type='number' placeholder='Enter current scrap'/>

        </div> 
        <div class='dropdown'>
          <div>
            <label for='bpm'>Bags per minute</label>
            <select name='bpm' id='bpm'>
              <option value='28'>28</option>
              <option value='24'>24</option>
            </select>
          </div>
          
          <div>
            <label for='bag-size'>Bag size</label>
            <select name='bag-size' id='bag-size'>
              <option value='50'>50ml</option>
              <option value='100'>100ml</option>
            </select>
          </div>
          
        </div>
      </form>
      <button>Calculate</button>
      
      
    </div>

  )
}

export default Calculator