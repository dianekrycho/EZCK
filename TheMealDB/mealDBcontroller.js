
async function getData(http_query){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd5f8dc3a4emsha9e8365a7f93f49p18090cjsn331adb360d2e',
            'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
        }
    };
    const response = await fetch(http_query, options)
        //.then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return response.json();
}

//module.exports.getData = getData

// list of all the meals categories + description of categories : beef, chicken, lamb, side, pasta, ...
// query : 'https://themealdb.p.rapidapi.com/categories.php'

// list of all the ingredients : beef, chicken, cashew, bay leaves, ....
// query : 'https://themealdb.p.rapidapi.com/list.php?i=list'

// search meal by name
// query : 'https://themealdb.p.rapidapi.com/search.php?s=Arrabiata'

// filter by multi-ingredients
// query : 'https://themealdb.p.rapidapi.com/filter.php?i=chicken_breast%2Cgarlic%2Csalt'

// look up meal details from id
// query : 'https://themealdb.p.rapidapi.com/lookup.php?i=52772'