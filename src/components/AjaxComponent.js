import React, { useEffect, useState } from 'react';

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const[errores , setErrores] = useState("");

  // Genérico / básico
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        "id": 1,
        "email": "victor@reqres.in",
        "first_name": "Victor",
        "last_name": "Robles",
      },
      {
        "id": 2,
        "email": "juan@reqres.in",
        "first_name": "Juan",
        "last_name": "Lopez",
      },
      {
        "id": 3,
        "email": "pepe@reqres.in",
        "first_name": "Pepe",
        "last_name": "Lopez",
      }
    ]);
  }

  const getUsuaiosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then(respuesta => respuesta.json())
      .then(resultado_final => {
        setUsuarios(resultado_final.data);
        console.log(usuarios);
      },
        error => {
          console.log(error);
        }
      )
  }


  const getUsuariosAjaxAw = () => { // Add async keyword here

    setTimeout(async () => {
      try{
        const peticion = await fetch("https://reqres.in/api/users?page=2");
        const { data } = await peticion.json();
  
        setUsuarios(data);
        setCargando(false)
      }catch(error){
        console.log(error);
        setErrores(error.message);
      }

    }, 1000);


  }


  useEffect(() => {
    getUsuariosAjaxAw();
    // getUsuaiosAjaxPms();
    // getUsuariosEstaticos();
  }, []);

  if(errores !== ""){
    if (cargando == true) {
      return (
        <div className='cargando'>
          {errores}
        </div>
      );
  }

  } else if(cargando == true) {
    if (cargando == true) {
      return (
        <div className='cargando'>
          Cargando datos...
        </div>
      );
  }

  } else if (cargando == false && errores === ""){
    return (
      <div>
        <h2>Listado de usuario via AJAX</h2>
        <ol className='usuarios'>
          {
            usuarios.map(usuario => {
              console.log(usuario);
              return (<li key={usuario.id}>
                  <img src={usuario.avatar} width="25"/>
                  &nbsp;
                {usuario.first_name} {usuario.last_name}</li>)
          })
          }
        </ol>
      </div>
    );
  }
};
