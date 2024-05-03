import { Button } from "@mui/material";

const ButtonComponent = ({label,clik}) => {

    const handleClick = ()=>{
        clik();
    }
    return ( <>
        <div style={{marginBottom:"15px"}}>
               <Button onClick={handleClick} variant="outlined">{label}</Button>
        </div>
    </> );
}
 
export default ButtonComponent;