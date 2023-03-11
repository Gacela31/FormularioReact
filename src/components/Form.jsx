import React, { useState } from 'react'
import Card from './Card';

/**
 * 1-creo el las etiquetas form y los inputs
 * 2-creo las constantes useState para cada imput
 * 3-agrego las variables a los values de cada input
 * 4-agrego el onChange como propiedad del input, declarando una nueva funcion 
 * 5-defino las funciones de cada input onChange
 * 6-le agregamos el submit y declaramos la función con el preventDEfault
 */
const Form = () => {
    const [animal, setAnimal] = useState("");
    const [nombreMascota, setNombreMascota] = useState("");
    const [peso, setPeso] = useState("");
    const [selectValue, setSelectValue] = useState("");
    const [send, setSend] = useState (false)
    const [errorSelect, setErrorSelect]= useState("")

    const onChangeAnimal = (event) =>{
        setAnimal(event.target.value);
    }
    const onChangeMascota = (event) =>{
        setNombreMascota(event.target.value);
    }
    const onChangePeso = (event) =>{
        setPeso(event.target.value);
    }
    const onChangeSelectValue = (event) =>{
        setSelectValue(event.target.value);
    }

    const validAnimal = (animal) =>{
        const withoutSpace = animal.trim();
        if(withoutSpace.length >= 3){
            return true
        }else{
            setErrorSelect("Por favor chequea que la información sea correcta");
        }
    }
    
    const validNombreMascota = (nombreMascota) =>{
        const withoutSpace = nombreMascota.trim();
        if(withoutSpace.length >= 6){
            return true
        }else{
            setErrorSelect("Por favor chequea que la información sea correcta");
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const isAnimalValid = validAnimal(animal);
        const isNombreValid = validNombreMascota(nombreMascota);

        if(isAnimalValid && isNombreValid){
            setSend(true);
            setErrorSelect("");
        } 
    }
 
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Animal Favorito' 
            value={animal} 
            onChange={onChangeAnimal}
            />

            <input 
            type="text" 
            placeholder='Nombre de tu Mascota' 
            value={nombreMascota} 
            onChange={onChangeMascota}
            />

            <input 
            type="integer" 
            placeholder='Peso de tu Mascota' 
            value={peso} 
            onChange={onChangePeso}
            />

            <select 
            placeholder='Edad de su Mascota' 
            value={selectValue}
            onChange={onChangeSelectValue}
            >
                <option value="" disabled default >Edad</option>
                <option value="Menor de 5 años">Menor de 5 años</option>
                <option value="Mayor de 5 años">Mayor de 5 años</option>
            </select>

            <button type='submit' value="enviar">Enviar</button>
        </form>
        <div className='error'>{errorSelect}</div>
        {send ? <Card 
        animal={animal} 
        nombre={nombreMascota} 
        peso={peso} 
        selectValue={selectValue} 
        /> :""}
    </div>
  )
}

export default Form