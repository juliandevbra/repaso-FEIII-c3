const Doctor = ({item, setTurno}) => {
    // console.log(item)
    const {nombre, especialidad} = item
  return (
    <div>
        <h3>Doctor: {nombre} </h3>
        <h4>Especialidad: {especialidad}</h4>
        <button onClick={() => setTurno({doctor: item, form: true})}>Sacar turno</button>
    </div>
  )
}

export default Doctor