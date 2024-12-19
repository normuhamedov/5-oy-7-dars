let elProductList = document.querySelector(".products")
let elInflatableProductList = document.querySelector(".inflatable-products")
let productData = JSON.parse(localStorage.getItem("products"))

let elModalWrapper = document.querySelector(".modal-wrapper")
let elModalInner = document.querySelector(".modal-inner")

let orderList = JSON.parse(localStorage.getItem("order-products")) || []

function renderProducts(arr , list , id) {
    list.innerHTML = null
    arr.filter(item => item.categoryId = id).forEach(item => {
        let elItem = document.createElement("li")
        elItem.className = `w-[340px] relative bg-slate-200 shadow-mx rounded-tr-[30px] rounded-b-[30px] pt-[31px] pb-[20px] px-[34px]`
        elItem.innerHTML = `
        <img class="mb-[17px]" src="${item.imgUrl}" alt="pool img">
        <div class="flex items-center justify-between">
            <div class="flex flex-col">
                <span class="before:w-[85px] before:rotate-[5deg] before:top-[5px] before:rounded-full before:h-[2px] before:absolute before:bg-[#FF0000] relative text-[12px] text-slate-400 leading-[13.44px]">${item.oldPrice} сум</span>
                <strong class="text-[15px] text-black leading-[14px]">${item.discountPrice} сум</strong>
            </div>
            <button onclick="handleOrderBtnClick(${item.id})" class="w-[107px] bg-[#FFE600] text-[16px] font-bold py-[3px] rounded-tr-[20px] rounded-bl-[20px]" >Заказать</button>
        </div>
        <button class="${item.status == 0 && "bg-[#139D4B]"} ${item.status == 1 && "bg-[#FFD600]"} ${item.status == 2 && "bg-[#ED2020]"} absolute top-0 left-0 text-[15px] py-[3px] bg-[#139D4B] font-bold rounded-br-[20px] w-[140px]">
        ${item.status == 0 ? "Рекомендуем" : ""}
        ${item.status == 1 ? "Cкидка" : ""}
        ${item.status == 2 ? "Нет в наличии" : ""}
        </button>
        `
        list.append(elItem)
    });
}
renderProducts(productData , elProductList, "0")
renderProducts(productData , elInflatableProductList, "1")

function handleOrderBtnClick(id) {
    const findProduct = productData.find(item => item.id == id)
    elModalWrapper.classList.remove("scale-0")


    elModalInner.innerHTML = `
    <div class="flex items-center">
        <div class="w-[55%] py-[50px] rounded-[35px] bg-white shadow-lg">
            <img src="${findProduct.imgUrl}" alt="Pool img" width="489" height="305" />
            <strong class="block text-[20px] mt-[31px] text-center">${findProduct.discountPrice} сум</strong>
        </div>
        <div class="w-[30%] ml-[47px]">
            <form class="order-form flex flex-col gap-[17px]" autocomplete="off">
                <input required name="username"  class="pl-5 rounded-[17px] outline-none py-[15px] shadow-xl border-[1px] border-[#CBCBCB] placeholder:font-bold placeholder:text-[25px] font-bold text-[25px]" type="text" placeholder="Ваше имя"" />
                <input required name="number"  class="pl-5 rounded-[17px] outline-none py-[15px] shadow-xl border-[1px] border-[#CBCBCB]"placeholder:font-bold placeholder:text-[25px] font-bold text-[25px]" type="text" placeholder="Ваш номер" />
                <input required name="address"  class="pl-5 rounded-[17px] outline-none py-[15px] shadow-xl border-[1px] border-[#CBCBCB]" placeholder:font-bold placeholder:text-[25px] font-bold text-[25px]" type="text" placeholder="Ваш адрес"/>
                <button class="add-btn-submit py-[10px] w-[237px] block mx-auto bg-[#FFE600] font-bold text-[20px] text-center rounded-[10px]">Заказать</button>
            </form>
        </div>
    </div>
`

}

elModalWrapper.addEventListener("click", (e) => e.target.id === "wrapper" && elModalWrapper.classList.add("scale-0"));

