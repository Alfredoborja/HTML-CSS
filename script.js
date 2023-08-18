const inventory = {
    apple: {price:12, qty:0},
    cherry: {price: 15, qty:0},
    strawberry: {price: 18, qty:0}
};

//en la consola del explorador se puede escribir inventory['apple'] o inventory.apple o inventory 

function sum(){
    let total = 0;
    const keys = Object.keys(inventory);
    // keys.forEach(function dostufffunction(){

    // })
    keys.forEach(key=>{//la funcion foreach pasa el valor actual en la lista el primer argumento de la funcion que defina (key)
        total += inventory[key].price * inventory[key].qty;
    });
    return total; 
}

function calculate(box){
    let qty = 0;
     if(box.value.length > 0){
        qty = parseInt(box.value);
     }

     inventory[box.id].qty = qty;

     const total = sum();
     return `$${total}.00`;
}


// creamos un detector de eventos
window.addEventListener('DOMContentLoaded', () => {

    const totalContainer = document.getElementById('total-container');
    const inputBoxes = document.querySelectorAll('#calculator input');

    inputBoxes.forEach(box => {
        box.addEventListener('change', ()=>{
            totalContainer.textContent = calculate(box);
        })    
    });

    inputBoxes.forEach(box => {
        box.addEventListener('keyup', ()=>{
            totalContainer.textContent = calculate(box);
        })    
    });
    

});
