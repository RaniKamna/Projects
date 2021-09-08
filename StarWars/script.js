var timerId;
async function searchStarWars(n) {
    let res = await fetch(`https://swapi.dev/api/people/?search=${n}`);
    let data = await res.json();
    return data.results
}

async function main() {
    let name = document.getElementById('query').value
    let star = await searchStarWars(name);
    if (star === undefined) {
        return false;
    }
    appendSearch(star)
}

let search_div = document.getElementById('starbox')

function appendSearch(m) {
    search_div.innerHTML = null;
    m.forEach(({ name, birth_year, gender }) => {
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
        let div3 = document.createElement('div')
        let p_name = document.createElement('p')
        let p_year = document.createElement('p')
        let p_gender = document.createElement('p')
        p_name.innerText = name;
        p_name.style.fontSize = '15px'
        p_year.innerHTML = birth_year;
        p_year.style.color = '#f2f2f2'
        p_year.style.fontSize = '13px'
        p_gender.innerHTML = gender;
        p_gender.style.color = '#f2f2f2'
        p_gender.style.fontSize = '13px'
        div3.append(p_name,p_year)
        div1.append(div2)
        div2.append(div3,p_gender)
        search_div.append(div1)
    })
}

function debounce(func, delay) {
    if (timerId) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
        func();
    }, delay);
}