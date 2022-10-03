import { useState } from "react"
const SimpleForm = ()=>{
const [firsName, setFirsName]=useState('')
const [lastName, setLastName]=useState('')
const [age, setAge]=useState('')

const handleLastNameChange = (event)=>{
setLastName(event.target.value)
}

const handleFirstNameChange = (event)=>{
    setFirsName(event.target.value)
    }
    

const handleSubmitForm=(event)=>{
   event.preventDefault();
   console.log('enviado', firsName,lastName,age) 
}
    return (
        <form onSubmit={handleSubmitForm}>
            <label>Nombres
            <input value={firsName} onChance={handleFirstNameChange}/>
            </label>
            {/* otra manera con funciones*/}
            <label>Apellidos 
            <input value={lastName} onChange={handleLastNameChange}/>
            </label>
            <label>Edad
            <input value={age} onChance={(event)=>setAge(event.target.value)}/>
            </label>
            <button type='submit'>enviar</button>
        </form>
    )
}

export default SimpleForm