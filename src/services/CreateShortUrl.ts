
const CreateShortUrl = async (url:string)=>{
    const response = await fetch("http://localhost:3000/short-url/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url }),
    });

    if (response.ok) {
        const data = await response.json();
        return data.shortUrl;
    } else {
        console.error('Error:', response.status);
    }
}
export default CreateShortUrl;