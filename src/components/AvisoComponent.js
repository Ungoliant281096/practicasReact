import React, { useEffect } from 'react'

export const AvisoComponent = () => {
    
    useEffect(() => {
        alert("El componente AvisoComponent está montado!!!");

        return () => {
            alert("Componente desmontado!!!");
        }
    }, [])
  
    return (
    <div>
        <hr/>
        <h3>Saludos Fabian ¿Qué tal estas?</h3>
        <button onClick={e =>{
            alert("Bienvenido!!!")
        }}>Mostrar alerta</button>
    </div>
  )
}
