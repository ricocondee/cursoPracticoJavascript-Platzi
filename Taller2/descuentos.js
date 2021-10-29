function ValidateCoupons(coupon){
    coupon = document.getElementById('coupon');
    coupon = coupon.value
    const info = document.getElementById('info');
    var coupons = ["15OFF", "30OFF", "50OFF"];
    if (coupons.some(coupons => coupons == coupon)){
        if (coupon == "15OFF"){
            coupon = 15;
        }
        else if (coupon == "30OFF"){
            coupon = 30;
        }
        else if (coupon == "50OFF"){
            coupon = 50;
        }
        info.innerText = "Cupon aplicado.";
    }
    else{
        info.innerText = "Cupon invalido.";
    };

    return coupon;
    
}

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function showResult(){
    const inputPrecio = document.getElementById('precio');
    const inputDescuento = document.getElementById('descuento');
    const priceValue = inputPrecio.value;
    const discountValue = inputDescuento.value;
    if (discountValue == ''){
        const descuentoCupon = ValidateCoupons(coupon);
        const precioFinal = calcularPrecioConDescuento(priceValue, descuentoCupon);
        const showPrice = document.getElementById('showPrice');
        if (Number.isNaN(precioFinal)){
            showPrice.innerText = " ";
        }
        else{
            showPrice.innerText = "El Valor a pagar con descuento es: $" + precioFinal
        }
    }
    else{
        const precioFinal = calcularPrecioConDescuento(priceValue, discountValue);
        const showPrice = document.getElementById('showPrice')
        showPrice.innerText = "El Valor a pagar con descuento es: $" + precioFinal
    }
}
