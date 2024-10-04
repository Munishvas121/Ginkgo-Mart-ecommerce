const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");


export const showProdcutsContainer = (products) => {
if (!products) {
    return false;
}

products.forEach((curProd) => {
    const {id,name,price,brand,stock,description,image } = curProd;

    const productclone = document.importNode(productTemplate.content,true);

    productclone.querySelector(".productName").textContent = name;
    productclone.querySelector(".productImage").src = image;
    productclone.querySelector(".productImage").alt = name;
    productclone.querySelector(".productStock").textContent = stock;
    productclone.querySelector(".productDescription").textContent = description;
    productclone.querySelector(".productPrice").textContent = `₹${price}`;
    productclone.querySelector(".productActualPrice").textContent = `₹${price*4}`;
   

    productContainer.append(productclone);


});
};