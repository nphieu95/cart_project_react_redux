import * as Types from "./../constants/ActionType";
var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
// var initialState = [
//   {
//     product: {
//       id: 1,
//       name: "Iphone 7 Plus",
//       image:
//         "https://fptshop.com.vn/Uploads/Originals/2019/1/21/636836609818617272_ip7-plus-hong-1.png",
//       description: "Sản phẩm do Apple sản xuất",
//       price: 11490000,
//       inventory: 10,
//       rating: 3,
//     },
//     quantity: 1,
//   },
//   {
//     product: {
//       id: 3,
//       name: "Galaxy A21s",
//       image:
//         "https://didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/g/a/galaxy-a21s-den-didongviet_1.jpg",
//       description: "Sản phẩm do Samsung sản xuất",
//       price: 5690000,
//       inventory: 15,
//       rating: 4,
//     },
//     quantity: 2,
//   },
//   {
//     product: {
//       id: 2,
//       name: "Nokia 6.1 Plus",
//       image:
//         "https://images.fpt.shop/unsafe/fit-in/640x640/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2018/9/28/636737264632784078_nokia6Plus-den-1.jpg",
//       description: "Sản phẩm do Nokia sản xuất",
//       price: 6990000,
//       inventory: 40,
//       rating: 5,
//     },
//     quantity: 3,
//   },
// ];

const cart = (state = initialState, action) => {
  var {product, quantity} = action;
  var index =-1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if(index !== -1){
        state[index].quantity += quantity;
      }else{
        state.push({
          product,
          quantity
        })
      }
      localStorage.setItem('CART', JSON.stringify(state))
      return [...state];
    case Types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if(index !== -1){
        state.splice(index, 1);
      }
      localStorage.setItem('CART', JSON.stringify(state))
      return [...state]
    case Types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if(index !== -1){
        state[index].quantity = quantity;
      }
      localStorage.setItem('CART', JSON.stringify(state))
      return [...state];
    default:
      return [...state];
  }
};

var findProductInCart = (cart, product) => {
  var index = -1;
  if(cart.length > 0){
    for(var i = 0; i < cart.length; i++){
      if(cart[i].product.id === product.id){
        index = i;
        break;
      }
    }
  }
  return index;
}

export default cart;
