var timerId;
async function searchStarWars(n) {
    let res = await fetch(`https://swapi.dev/api/people/?search=${n}`);
    let data = await res.json();
    return data.results;
}

async function main() {
    let name = document.getElementById('query').value
    let star = await searchStarWars(name);
    if (star === undefined) {
        return false;
    }
    appendSearch(star);
}

let search_div = document.getElementById('starbox');

function appendSearch(star) {
    search_div.innerHTML = null;
    star.forEach((m) => {
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let p_name = document.createElement('p');
        let p_year = document.createElement('p');
        let p_gender = document.createElement('p');
        p_name.textContent = m.name;
        p_name.style.fontSize = '15px';
        p_year.textContent = m.birth_year;
        p_year.style.color = '#f2f2f2';
        p_year.style.fontSize = '13px';
        p_gender.textContent = m.gender;
        p_gender.style.color = '#f2f2f2';
        p_gender.style.fontSize = '13px';
        div3.append(p_name, p_year);
        div1.append(div2);
        div2.append(div3, p_gender);
        search_div.append(div1);
        div1.addEventListener("click", () => {
            showDetails(m);
        })
    })
}

function showDetails(m) {
    const logo = document.querySelector(".logo");
    logo.style.display = "none";
    const searchbox = document.querySelector(".searchbox");
    searchbox.style.display = "none";
    const details = document.querySelector(".details");
    details.style.display = "block";
    details.innerHTML = null;

    const p_detail = document.createElement("div");
    p_detail.className = "p_detail";
    const h1 = document.createElement("h1");
    h1.textContent = m.name;
    const detail_div = document.createElement("div");
    detail_div.className = "detail_div";
    const personal_info = document.createElement("div");
    personal_info.className = "personal_info";
    const h3 = document.createElement("h3");
    h3.textContent = "Personal Info";
    const p1 = document.createElement("p");
    p1.textContent = `Birth Year: ${m.birth_year}`;
    const p2 = document.createElement("p");
    p2.textContent = `Gender: ${m.gender}`;
    const p3 = document.createElement("p");
    p3.textContent = `Height: ${m.height}`;
    personal_info.append(h3, p1, p2, p3);
    const anatomy = document.createElement("div");
    anatomy.className = "anatomy";
    const heading = document.createElement("h3");
    heading.textContent = "Anatomy";
    const eyeclr = document.createElement("p");
    eyeclr.textContent = `Eye Color: ${m.eye_color}`;
    const mass = document.createElement("p");
    mass.textContent = `Gender: ${m.mass}`;
    const hairclr = document.createElement("p");
    hairclr.textContent = `Height: ${m.hair_color}`;
    anatomy.append(heading, eyeclr, mass, hairclr);
    detail_div.append(personal_info, anatomy);
    const button = document.createElement("button");
    button.textContent = "Go Back";
    button.className = "go-back";
    button.addEventListener("click", () => {
        goBack();
    });
    p_detail.append(h1, detail_div, button);
    details.append(p_detail);
}

function goBack() {
    const logo = document.querySelector(".logo");
    logo.style.display = "block";
    const search = document.querySelector(".searchbox");
    search.style.display = "block";
    const details = document.querySelector(".details");
    details.style.display = "none";
}

function debounce(func, delay) {
    if (timerId) {
        clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
        func();
    }, delay);
}