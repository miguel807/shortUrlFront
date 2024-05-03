import '../App.css'
const CardUrlComponent = ({url,shortUrl,visitCount}) => {
    return ( <>
            <div className="cardUrl">
            
                <h5>Url: {url}</h5>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center",gap:"20px"}}>
                <span>Short: {shortUrl}</span>
                <span>Visits: {visitCount}</span>
                </div>
            </div>
    </> );
}
 
export default CardUrlComponent;