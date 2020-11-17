import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const MenuTemplate = ({
  SameTypeDatas,
  cart,
  setCart,
  orderNamesInCart,
  orders,
  setOrders,
  wholeOrderPrices,
  setWholeOrderPrices,
  totalPrice,
  setTotalPrice,
  amountOfOrders,
  setAmountOfOrders,
}) => {
  const addToCart = (food) => {
    if (orderNamesInCart.includes(food.name)) {
      setOrders(orders + 1);
      setWholeOrderPrices(wholeOrderPrices + food.price);
      setTotalPrice(totalPrice + food.price);
      setAmountOfOrders(amountOfOrders + 1);
    }
    else {
      setCart([...cart, { ...food }]);
    }
    // console.log("chosen FOOD", chosenFood);
    // console.log("CartList", cart);
  };
  return (
    <div className="container">
      <div className="row">
        {SameTypeDatas.map((chosenFood, index) => {
          return (
            <div className="card" key={index}>
              <img
                className="card-img-top"
                src={chosenFood.src}
                alt={chosenFood.name}
              />
              <div className="card-body">
                <h5 className="card-title">{chosenFood.name}</h5>
                <p className="card-text item_description">
                  {chosenFood.description}
                </p>
                <div className="order_card_container">
                  <span className="price_card">
                    Price : £{chosenFood.price}
                  </span>
                  <button
                    className="btn_card"
                    onClick={(event) => addToCart(chosenFood)}
                  >
                    add to basket
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTemplate;
