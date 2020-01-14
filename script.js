function showLangauges(){
    var languageMenu = document.getElementsByClassName("languageMenu")[0];
    if (languageMenu.style.display == "none"){
        languageMenu.style.display = "block";
    }
    else {
        languageMenu.style.display = "none";
    }
}



function createImgGrid() {
    var imageClass = document.getElementById('images');
    var images = ["img1.webp", "img2.webp", "img3.webp"];


    for (var i = 0; i < 3; i++) {
        var zoomContainer = document.createElement('div');
        zoomContainer.classList.add('zoom-effect-container');
        
        var img1 = document.createElement('div');
        img1.classList.add('img1');
        var image = document.createElement('img');

        image.setAttribute("src", "assets/"+images[i]);
        image.classList.add('image1');
        
        img1.appendChild(image);

        zoomContainer.appendChild(img1);

        imageClass.appendChild(zoomContainer);
    }
}


function createNavbar() {
    var cities = document.getElementById('cities');
    var places = ["Delhi", "Gurgaon", "Noida", "Mumbai", "Bangalore", "Goa", "Chennai", "Hyderabad", "Kolkata", "Jaipur", "All Cities"]
    var city = "";
    var h2 = "";

    for (var i = 0; i < 10; i++) {
        city = document.createElement('div');
        city.classList.add('city');
        var a  = document.createElement('a');
        a.classList.add('link', 'cityName');
        a.href = "#";

        var cityData = document.createElement('div');
        cityData.classList.add('cityData');

        h2 = document.createElement('h2');
        h2.classList.add('text');
        h2.innerHTML = places[i];
        cityData.appendChild(h2);

        var arrow = document.createElement('span');
        arrow.classList.add('arrow');

        a.appendChild(cityData);
        a.appendChild(arrow);

        city.appendChild(a);

        cities.appendChild(city);
    }
    
    city = document.createElement('div');
    city.classList.add('city');
    h2 = document.createElement('h2');
    h2.classList.add('all');
    h2.innerHTML = places[i];
    city.appendChild(h2);
    cities.appendChild(city);

}