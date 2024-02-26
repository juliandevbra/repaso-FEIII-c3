import {useState} from 'react'

const Form = ({doctor}) => {

    const [paciente, setPaciente] = useState({
        nombre: '',
        obraSocial: ''
    })
    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)
    console.log(paciente)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(paciente.nombre.length > 3 && paciente.obraSocial.length > 2){
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }
    }

  return (
    <div>
        <p>Vas a sacar turno con el doctor: {doctor.nombre}</p>
        <form onSubmit={handleSubmit}>
            <label>Nombre del paciente: </label>
            <input type="text" onChange={(event) => setPaciente({...paciente, nombre: event.target.value})}/>
            <label>Obra social</label>
            <input type="text" onChange={({target}) => setPaciente({...paciente, obraSocial: target.value})}/>
            <button>Agendar</button>
        </form>
        {show && <h4>{paciente.nombre}, se ha agendado su turno para el 5 de marzo.</h4>}
        {err && <p>Por favor, coloque la información correctamente.</p>}
        <hr />
    </div>
  )
}

export default Form