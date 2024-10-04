import "./style.css";

import products from "./api/products.json";
import { showProdcutsContainer } from "./homeProductsCards";

// function to call the products as card

showProdcutsContainer(products);