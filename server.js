const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())
app.use(express.static("public"));

const seasons = {
    'season 1': {
        'season': 'Season 1',
        'episode': 'Episode 1',
        'rating': '8.1'
    },
    'season 2': {
        'season': 'Season 2',
        'episode': 'Episode 21',
        'rating': '8.1'
    },
    'season 3': {
        'season': 'Season 3',
        'episode': 'Episode 1 & 9',
        'rating': '7.9'
    },
    'season 4': {
        'season': 'Season 4',
        'episode': 'Episode 26',
        'rating': '8'
    },
    'season 5': {
        'season': 'Season 5',
        'episode': 'Episode 15 & 23',
        'rating': '7.9'
    },
    'season 6': {
        'season': 'Season 6',
        'episode': 'Episode 22',
        'rating': '8.3'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:season', (request, response)=>{
    const selectedSeason = request.params.season.toLowerCase()
    if(seasons[selectedSeason]){
        response.json(seasons[selectedSeason])
    }else{
        response.json(seasons['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})