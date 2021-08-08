//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultPrice");

    resultP.innerText = "El precio con descuento son $ " + precioConDescuento;
}

//CUPONES DE DESCUENTO: 
const coupons = [
    {
        name: "descuentirijillo",
        discount: 17,
    },
    {
        name: "0000022",
        discount: 100,
    },
    {
        name: "puesPaFidelizar",
        discount: 30,
    },
    {
        name: "descuentoClientz",
        discount: 70,
    },
    {
        name: "laOstiasDescuentox",
        discount: 90,
    },
]

const inputDiscount = document.getElementById("InputDiscount")
const couponValue = inputDiscount.value;


const isCouponValueValid = function(coupon){
    return coupon.name === couponValue;
};
const userCoupon = coupons.find(isCouponValueValid);
    if(!userCoupon){
        //alert("El cupon" + userCoupon + "no es valido");
    }else{
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioCOnDescuento(priceValue, descuento);
        const resultP = document.getElementById("ResultPrice");
        resultP.innerText = "El precio con descuento son : $ " + precioConDescuento;
    }