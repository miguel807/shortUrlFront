
import { useState } from 'react'
import './App.css'
import InputComponent from './components/InputComponent'
import ButtonComponent from './components/ButtonComponent';
import CreateShortUrl from './services/CreateShortUrl';
import GetAllShortUrl from './services/GetAllShortUrl';
import CardUrlComponent from './components/CardUrlComponent';

function App() {
 const [inputUrl,setInputUrl] = useState("");
 const [shortUrl,setShortUrl] = useState("")
 const [showUrl,setShowUrl] = useState(false)
 const [allUrl,setAllUrl] = useState([]);


 const handleClick =async ()=>{
  setShortUrl(await CreateShortUrl(inputUrl))  
  
 }

 const handleClickGetAll = async()=>{
    setAllUrl(await GetAllShortUrl())
    
 }

 const handleClickRedirect = ()=>{
  window.open(`http://localhost:3000/short-url/redirect/${shortUrl}`, '_blank');
 }
 
  return (
    <>
    <div className='container'>
      <h2>Short Url </h2>
      <InputComponent setInputUrl={setInputUrl} placeholder={"Enter your url to generate"} />
       <ButtonComponent clik={handleClick} label={"Create"} />


      { shortUrl!="" && <div><h4 className='shortUrl'> https://render.com/{shortUrl} </h4>
       <ButtonComponent clik={handleClickRedirect}  label={"ir"} /> </div>}


      <div>
        <ButtonComponent clik={handleClickGetAll}  label={"Get some short url"} />
        <div className='url-container'>
              <ol>
                {allUrl.map((itm,index)=>{
                  
                    return <CardUrlComponent key={index} shortUrl={itm.shortUrl} url={itm.url} visitCount={itm.visitCount} />  
                })}
              </ol>
        </div>  
      </div>
    </div>
    </>
  )
}

export default App
