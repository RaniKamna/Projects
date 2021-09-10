async function getData(url){
    let res = await fetch(url)
    let data = await res.json()
    return data
}

function append(data, place){
    place.innerHTML = null
    data.meals.forEach(({strMeal, strArea,strMealThumb}) =>{
        let div = document.createElement('div')
        let meal = document.createElement('p')
        let img = document.createElement('img')
        let txtdiv = document.createElement('div')

        img.src = strMealThumb
        meal.innerText = strMeal

        txtdiv.append(meal)
        div.append(img, txtdiv)
        place.append(div)
    })
}
export {append, getData}

