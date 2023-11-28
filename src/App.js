import React, { useState, useEffect } from "react";

import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Orders from "./pages/Orders";

import AppContext from "./context";

import SneakerPage from "./pages/SneakerPage";
import ScrollToTop from "./utils/ScrollToTop";
import Contacts from "./pages/Contacts";
import FAQ from "./pages/FAQ";
import Delivery from "./pages/Delivery";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favouritesResponse, sneakersResponse] =
          await Promise.all([
            axios.get("https://react-sneakers-db.onrender.com/cart"),
            axios.get("https://react-sneakers-db.onrender.com/favourites"),
            axios.get("https://bb0c94dca4d237ec.mokky.dev/sneakers"),
          ]);

        setIsLoading(false);

        setSneakers(sneakersResponse.data);
        setCartSneakers(cartResponse.data);
        setFavourites(favouritesResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных =(");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartSneakers.find(
        (sneaker) => Number(sneaker.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartSneakers((prev) =>
          prev.filter((sneaker) => Number(sneaker.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://react-sneakers-db.onrender.com/cart/${findItem.id}`
        );
      } else {
        setCartSneakers((prev) => [...prev, obj]);
        const { data } = await axios.post(
          "https://react-sneakers-db.onrender.com/cart",
          obj
        );
        setCartSneakers((prev) =>
          prev.map((sneaker) => {
            if (sneaker.parentId === data.parentId) {
              return {
                ...sneaker,
                id: data.id,
              };
            }
            return sneaker;
          })
        );
      }
    } catch (error) {
      alert("Ошибка при добавлении в корзину");
    }
  };

  const onRemoveSneaker = (id) => {
    try {
      axios.delete(`https://react-sneakers-db.onrender.com/cart/${id}`);
      setCartSneakers((prev) =>
        prev.filter((sneaker) => Number(sneaker.id) !== Number(id))
      );
    } catch (error) {
      alert("Ошибка при удалении из корзины");
      console.error(error);
    }
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (favourites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://react-sneakers-db.onrender.com/favourites/${obj.id}`
        );
        setFavourites((prev) =>
          prev.filter((sneaker) => Number(sneaker.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://react-sneakers-db.onrender.com/favourites",
          obj
        );
        setFavourites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в желаемое");
      console.error(error);
    }
  };

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const isSneakerAdded = (id) => {
    return cartSneakers.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        sneakers,
        cartSneakers,
        favourites,
        isSneakerAdded,
        onAddToFavourite,
        onAddToCart,
        setCartOpened,
        setCartSneakers,
      }}
    >
      <div className="wrapper clear">
        <div className="inner">
          <Drawer
            sneakers={cartSneakers}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveSneaker}
            opened={cartOpened}
          />

          <Header onClickCart={() => setCartOpened(true)} />

          <ScrollToTop />
          <Routes>
            <>
              <Route
                path=""
                element={
                  <Home
                    sneakers={sneakers}
                    cartSneakers={cartSneakers}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onAddToFavourite={onAddToFavourite}
                    onAddToCart={onAddToCart}
                    isLoading={isLoading}
                  />
                }
              />

              <Route
                path="/sneaker/:id"
                element={<SneakerPage sneakers={sneakers} />}
              />

              <Route path="contacts" element={<Contacts />} />

              <Route path="delivery" element={<Delivery />} />

              <Route path="faq" element={<FAQ />} />

              <Route path="favourites" element={<Favourites />} />

              <Route path="orders" element={<Orders />} />
            </>
          </Routes>
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
