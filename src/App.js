import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";
import MyNavbar from "./components/mynavbar/MyNavbar";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Feminine from "./pages/feminine/Feminine";
import Masculine from "./pages/masculine/Masculine";
import Childish from "./pages/childish/Childish";
import Beauty from "./pages/beauty/Beauty";

import Fcomponent from "./components/cours-component/fcomponent/Fcomponent";
import Mcomponent from "./components/cours-component/mcomponent/Mcomponent";
import Chcomponent from "./components/cours-component/chcomponent/Chcomponent";
import Bcomponent from "./components/cours-component/bcomponent/Bcomponent";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import { CartProvider } from "./components/context/CartContext";
import db from "./db";
import CartCours from "./components/cartcours/CartCours";
import CartIcon from "./components/cartIcon/CartIcon";
import ZarinpalPayment from "./components/zarinpal/ZarinpalPyment";
import MeneShoes from "./components/maleComponents/MensShoes";
import MensSports from "./components/maleComponents/MensSports";
import MensClothing from "./components/maleComponents/MensClothing";
import MensAccessory from "./components/maleComponents/MensAccessory";
import ProductsChildish from "./components/chidrenComponents/productsChildish";
import { Girlish } from "./components/chidrenComponents/Girlish";
import Boyish from "./components/chidrenComponents/Boyish";
import SearchBox from "./components/searchBox/SearchBox";
import { LoginPage } from "./components/loginPage/LoginPage";

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </CartProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/searchBox";
  return (
    <>
      
      <MyNavbar showNavbar={showNavbar} />
      <Routes>
        {" "}
        <Route path="/" element={<Home />}>
          <Route path="fcomponent" element={<Fcomponent />} />
          <Route path="mcomponent" element={<Mcomponent />} />
          <Route path="chcomponent" element={<Chcomponent />} />
          <Route path="bcomponent" element={<Bcomponent />} />
          <Route index element={<Navigate to="fcomponent" />} />
        </Route>{" "}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginPage" element={<LoginPage/>} />
        <Route path="/feminine" element={<Feminine />} />
        <Route path="/masculine" element={<Masculine />} />
        <Route path="/childish" element={<Childish />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/shopping" element={<ShoppingCart />} />
        <Route path="/checkout" element={<ZarinpalPayment />} />
        <Route path="/mCloding" element={<MensClothing />} />
        <Route path="/mAccessory" element={<MensAccessory />} />
        <Route path="/mShoes" element={<MeneShoes />} />
        <Route path="/mSport" element={<MensSports />} />
        <Route path="/productChildish" element={<ProductsChildish />} />
        <Route path="/productGirlish" element={<Girlish />} />
        <Route path="/boyish" element={<Boyish />} />
        <Route path="/searchBox" element={<SearchBox />} />
      </Routes>{" "}
      <CartIcon />
    </>
  );
}
export default App;
