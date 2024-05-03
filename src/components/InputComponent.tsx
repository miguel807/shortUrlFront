import { TextField } from "@mui/material";

const InputComponent = ({setInputUrl,placeholder}) => {

    const handleChange= (e)=>{
        setInputUrl(e.target.value)
    }
    
    return ( <>
     <TextField 
     style={{width:"100%",margin:"10px 0px"}}
     onChange={handleChange}
   
  id="outlined-basic" 
  label={placeholder} 
  sx={{
    color: 'primary', // Cambia el color del texto a blanco
    '& .MuiOutlinedInput-root': { // Estilos del contenedor del input
      '& fieldset': { // Estilos del borde del input
        borderColor: 'primary', // Cambia el color del borde a blanco
      },
      '&.Mui-focused fieldset': { // Estilos del borde cuando el input está enfocado
        borderColor: 'primary', // Cambia el color del borde a blanco
      },
    },
    '& .MuiInputLabel-root': { // Estilos de la etiqueta del input
      color: 'primary', // Cambia el color de la etiqueta a blanco
    },
    '& .MuiOutlinedInput-input': { // Estilos del texto dentro del input
      color: 'primary', // Cambia el color del texto dentro del input a blanco
    },
  }} 
  variant="outlined" 
/>
    </> );
}
 
export default InputComponent;