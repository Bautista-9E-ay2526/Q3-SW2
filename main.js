//Function for Discount Button
function displayDcount(){
    let Budge = document.getElementById("budget").value;
    const discount = .2;
    let displayDcount = Number(Budge * 0.2);

    document.getElementById("dcounts_box").innerHTML = `
         <div class="container bg-secondary" id="reco">
                <h4> Recommended Brands </h4>
                <button class="btn btn-primary mt-3"> Acer </button>
                <button class="btn btn-primary mt-3"> Apple </button>
                <button class="btn btn-primary mt-3"> Lenovo </button>
                
                <p class="text-light mt-2">Elligible discount:<span class="bg-danger">${displayDcount} </span></p>

                </div>`
}

function displayLoc() {
    document.getElementById("storeLocs").innerHTML =`
        <div class="container bg-secondary mx-auto" id="loc">
            <h2> Store Locations </h2>
                <h4>SM Megamall</h4>
                <p>3rd Floor, Right Beside KFC <br>
                    Phone Number: 606060606 <br>
                    Landline: 123456767676
                </p>

                <h4>Gilmore corner N.Domingo </h4>
                <p>Right Beside DataBlitz <br>
                    Phone Number: 667676766 <br>
                    Landline: 8989898989
                </p>

                <h4> Capitol Heights, Beijing Tower </h4>
                <p> 2nd floor, unit 207 <br
                    Phone Number: 4545454546 <br>
                    Landline: 191919119
                </p>
        </div> `
}
