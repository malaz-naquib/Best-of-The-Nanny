document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const season = document.querySelector('input').value
    try{
        const response = await fetch(`https://best-of-the-nanny.onrender.com/api/${season}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.season
    }catch(error){
        console.log(error)
    }
}