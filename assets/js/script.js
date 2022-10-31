const options = document.getElementById('descuento');
const texto = document.getElementById("cantTotal");
const cantidad= document.getElementById("cantInput");
const total= 200;

function calcTotal(event){
    event.preventDefault();
    let descuento= 0;
    let monto = 0;
   
    switch(Number(options.value)){
        case 1:
            descuento=0.8;
            break;
        case 2:
            descuento=0.5;
            break;
        case 3: 
            descuento=0.15; 
            break;
        // default:
        //     descuento=1;
        //     break;
    }
    monto =(total-(descuento*total))*Number(cantInput.value);
    texto.textContent= `Total a Pagar: $ ${monto}`;
   
}

// const submitButton = document.getElementById('debugBtn');

// submitButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(options.value)
// })