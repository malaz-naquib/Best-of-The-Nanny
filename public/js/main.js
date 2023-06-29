document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const season = document.querySelector('input').value
    try{
        const response = await fetch(`https://rap-names-app-mn.onrender.com/api/${season}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.season
        document.querySelector('h2').innerText = data.episode
        document.querySelector('h2').innerText = data.rating
    }catch(error){
        console.log(error)
    }
}