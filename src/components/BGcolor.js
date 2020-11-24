import React,{useState,useEffect,Fragment} from 'react';
import ReactDOM from 'react-dom';

const colors = {
  Red : 'red',
  Blue : 'blue',
  Green : 'green'
}

export default function ColorChange(){
  const [color, setColor] = useState(colors.Sea)
  useEffect(
    () => {
      document.body.style.background = color
    },
    [color]
  )
  return (
    <Fragment>
      <select value={color} onChange={e => setColor(e.target.value)}>
        {Object.entries(colors).map(([name, value]) => (
          <option key={`color--${name}`} value={value}>
            {name}
          </option>
        ))}
      </select>
      <h1>{color}</h1>
    </Fragment>
  )
}