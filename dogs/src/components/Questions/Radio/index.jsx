

const Radio = ({pergunta,options, resposta, id, value, onChange, active }) => {
  if(active === false) return null
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} style={{display:'flex', margin:'10px 0',cursor:'pointer'}}>
          <input 
            type="radio" 
            checked={value === option} 
            value={option} 
            onChange={onChange}
            id={id}/>
          {option}
        </label>
      ))}
    </fieldset>
  )
}

export default Radio