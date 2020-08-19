import React, { useState, useEffect, useRef } from 'react';
import { Button, Input, Radio } from 'antd';

const Todo = () => {
  const [value, setValue] = useState('')
  const [selctedRadio, setSelectedRadio] = useState('')
  const [options, setOptions] = useState([])

  const handleClick = () => {
    setOptions([...options, { label: value, value, }])
    setValue('')
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleRadioChange = (e) => {
    console.log(e.target.value)
    setSelectedRadio(e.target.value)
  }
  return (
    <div>
      {options.length ? null : <h3>{selctedRadio ? selctedRadio : 'No option yet'}</h3>}
      {options.length ? <Radio.Group onChange={handleRadioChange}>
        {options.map(item => <Radio key={item.value} value={item.value}>{item.value}</Radio>)}
      </Radio.Group> : null}
      {selctedRadio ? <h3>{selctedRadio}</h3> : null}
      <div style={{ marginTop: 16 }}>
        <Input style={{ width: 300 }} value={value} onChange={handleChange} />
      </div>
      <div style={{ marginTop: 16 }}>
        <Button onClick={handleClick} disabled={options.some(item => item.value === value)}>Add</Button>
      </div>
    </div>
  )
}

export default Todo;