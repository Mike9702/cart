 import loader from "./components/loader.js";
 import showMenu from "./components/showMenu.js";
 import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";

/*UI Elements*/
/*ocultar loader*/
 loader();

 /*mostrar menu*/
 showMenu();

 /*mostrar carrito*/
 showCart();

 /*end UI elements*/

 /* Productos */
const {db, printProducts} = products(await getProducts());

 /*carrito*/
 cart(db, printProducts)