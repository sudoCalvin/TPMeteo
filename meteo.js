function showCity() {
    /* let cities = document.getElementsByClassName("city"); */
    var codeVille = document.getElementById("ville-select").value;
    const arrayVilles = ["Lyon", "Macon", "Stockholm"];
    let longueur = arrayVilles.length;
    /* let longueur = cities.length; */
    
    const list = document.querySelector(".box");
    const div = document.createElement("div");
    div.classList.add("city");
    
    document.querySelectorAll(".city").forEach(a=>a.style.display="none");

    arrayVilles.forEach(function(i) {
        if(i==codeVille)
            div.style.display = "";
            
            
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${codeVille}&appid=eb9f6ae73deae1d90596cc4450f1e973&units=metric`)
                .then(response => response.json())
                .then(data => {
                    const {main, name, sys, weather } = data;
                    //console.log(data.weather[0].description) // get état sky
                    const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
                    
                    const markup = `
                    <h2>${codeVille}</h2>
                    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
                    <figure>
                    <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}">
                    <figcaption>${weather[0]["description"]}</figcaption>
                    </figure>`;
                    div.innerHTML = markup;
                    list.appendChild(div);
        })
    })
}
