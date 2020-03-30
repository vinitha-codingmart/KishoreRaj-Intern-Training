var secretKey = "$2b$10$/5uZoym3N63qVJYzdQHPOeNQXI4Up0Rh3dQj42ZnLuXQkwFePdq26";


var places;

function getPlaces() {
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            places = JSON.parse(req.response);            
            console.log(places);
            // underscore.js is used to filter the duplicates in the JSON which is contained in the previous link (jsonbin).
            //var filtered = _.uniq(places.docs, false, function(p){ return p.ID});
        }
    };

    req.open("GET", "https://api.jsonbin.io/b/5e2193c65df640720836f40a/2", true);
    req.setRequestHeader("secret-key", secretKey);
    req.send();

}

function listPlaces(getPlace) {
    var dataList = document.getElementById('listPlaces');
    dataList.innerHTML = "";
    //console.log(getPlace.value);
    var letters = /^[A-Za-z]+$/;
    if (getPlace.value.match(letters)){
        for (var i = 0; i < places.docs.length; i++) {
            if (places.docs[i].Name.toLowerCase().includes(getPlace.value.toLowerCase())) {
                console.log(places.docs[i].Name);
                var option = document.createElement("option");
                option.value = places.docs[i].Name;
                dataList.appendChild(option);
                    
            }
        }            
    }
}


var busesAvailable;
var srcCityId;
var desCityId;

function getDetails(callback) {
    var source = document.getElementById('source').value;
    var destination = document.getElementById('destination').value;
    var doj = document.getElementById('doj').value;

    console.log(typeof(source));
    console.log(typeof(destination));
    console.log(typeof(doj));

    for (var i = 0; i < places.docs.length; i++) {
        if (source === places.docs[i].Name) {
            srcCityId = places.docs[i].ID;
        }
        if (destination === places.docs[i].Name) {
            desCityId = places.docs[i].ID;
        }
    }

    console.log(srcCityId);
    console.log(desCityId);

    callback();
}


function listBuses() {
    // https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "https://www.redbus.in/search/SearchResults?fromCity="+srcCityId+"&toCity="+desCityId+"&src="+source.value+"&dst="+destination.value+"&DOJ="+doj.value+"&sectionId=0&groupId=0&limit=0&offset=0&sort=0&sortOrder=0&meta=true&returnSearch=0";
    var apiurl = proxyurl + url;
    var req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            busesAvailable = JSON.parse(req.response);
            console.log(busesAvailable);
            console.log(busesAvailable.metaData.totalCount);
            console.log(busesAvailable.metaData.sections[0].dn);
            console.log(busesAvailable.metaData.minFr);
            console.log(busesAvailable.inv[0].Tvs);
            console.log(busesAvailable.inv[0].bt);
            console.log(busesAvailable.inv[0].dt);
            console.log(busesAvailable.inv[0].at);
            console.log(busesAvailable.inv[0].rt.totRt);
            console.log(busesAvailable.inv[0].rt.ct);
            console.log(busesAvailable.inv[0].frLst);            
            console.log(busesAvailable.inv[0].minfr);
            console.log(busesAvailable.inv[0].StdBp);
            console.log(busesAvailable.inv[0].StdDp);
            console.log(busesAvailable.inv[0].WnSt);
            console.log(busesAvailable.inv[0].nsa);    
            localStorage.setItem("busesAvailable", JSON.stringify(busesAvailable));
            redirect();
        }
    }
    req.open("POST", apiurl, true);   
    req.setRequestHeader("Content-Type", "application/json");
    req.send();
}

function searchBus() {
    getDetails(listBuses);
}




window.onload = () => {
    getPlaces();
}


function redirect() {
    window.location.href = "displaybuses.html";    
}