async function getMovie() {
    try {
        let movie = document.getElementById('movie').value;

        let response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=28b49a37&s=${movie}`);

        let data = await response.json();

        let movies_div = document.getElementById('movies')
        let erro = document.getElementById('erro')

        if (data.Response == 'False') {
            erro.textContent = 'Movie not found'
        } else {
            for (Search of data.Search) {
                let divs = document.createElement('div')
                let title = document.createElement('h4')
                title.innerText = Search.Title;
                let imgs = document.createElement('img')
                imgs.src = Search.Poster;
                let yr = document.createElement('p')
                yr.innerText = Search.Year;
                let msg = document.createElement('div')
                let ratng = document.createElement('p')
                ratng.innerText = 'Recommended'
                ratng.style.color = 'red'

                if (Number(Search.Year) > 2000) {
                    msg.append(title, yr, ratng)
                } else {
                    msg.append(title, yr)
                }
                divs.append(imgs, msg)
                movies_div.append(divs)
            }
        }
    }
    catch (err) {
        console.log(err)
    }
}