          
fetch('./mens.json')
.then(response => response.json())
.then(json => 
{
  console.log(json)

  var i;

  var data='';

for (i in json)
{
  data +=
                      `
              <div class="col-md-4">
              <div class="card mt-3">
                  <div class="product-1 align-items-center p-2 text-center ">
                      <img src="${json[i].image}" alt="" class="rounded" width="160" height="200px">
                      <h5>${json[i].name}</h5>
                      <!-- card info -->
                      <div class="mt-3 info">
                          <span class="text-1 d-block">${json[i].category}</span>
                          
                      </div>
                      <div class="const mt-3 text-dark">
                          <span>${json[i].price}</span>
                      </div>
                  </div>


                  <div class="row">
                  <div class="col-12 shoe text-center text-white mt-3 cursor">
                  <a href="spec.html" style="text-decoration:none;color:white;">  <btn class="text-uppercase my_btn">DETAILS</btn></a>
                  </div>
                

                  </div>
              </div>
          </div>
              `
              
}
document.getElementById("cards").innerHTML =data;
});

