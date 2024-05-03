const GetAllShortUrl = async ()=>{
    const response = await fetch("http://localhost:3000/short-url/")
    if(response.ok){
        const data = await response.json();
        return data;
    }
}

export default GetAllShortUrl;