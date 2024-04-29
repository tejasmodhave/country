container=document.getElementById("container");
selectTag=document.getElementById("select");
selectTag=addEventListener("change",function(){
    fetchdata(selectTag.value);
});



 async function fetchdata(order){
    console.log(order);
  let API_LINK = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"
      
    if(order!= undefined){
        API_LINK += "?sort-population&order=" + order;
    }
    

  try {
    let res = await fetch(API_LINK);
    let data = await res.json();
    console.log(data.data);
    showData(data.data)

  }catch (error) {
    console.log(error);
  }
}
fetchdata();

function showData(data){
    container.innerHTML=""
    data.forEach(element => {
        let countryDiv = document.createElement("div");
        countryDiv.className = "countryDiv"

        let rank = document.createElement("h4");
        rank.innerHTML= element.Rank;

        let country = document.createElement("h3")
        country.innerHTML = element.country;

        let population = document.createElement("p")
        population.innerHTML = element.population

        countryDiv.append(rank,country,population)

        container.appendChild(countryDiv);
 } ); 
}

