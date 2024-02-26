import {useState} from 'react'
import './App.css'
import Doctor from './Components/Doctor'
import Form from './Components/Form'

function App() {
  const [turno, setTurno] = useState({
    doctor: {},
    form: false
  })

  let doctores = [
    { id: 1, nombre: 'Rick Sanchez', especialidad: 'Gastroenterologo'},
    { id: 2, nombre: 'Julius Hibbert' , especialidad: 'Dermatologo'},
    { id: 3, nombre: 'Nick Riviera' , especialidad: 'Otrorrinonaringologo'},
    { id: 4, nombre: 'John Zoidberg ' , especialidad: 'Cirujano'}
  ]
console.log(turno)
  return (
    <>
      {turno.form && <Form doctor={turno.doctor}/>}
      {doctores.map((item) => <Doctor key={item.id} setTurno={setTurno} item={item}/>)}
    </>
  )
}

export default App
