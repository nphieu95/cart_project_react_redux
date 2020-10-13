var initialState = [
  {
    id: 1,
    name: "Iphone 7 Plus",
    image : './images/Apple_Iphone_7Plus.png',
    description: 'Apple A10 Fusion 4 nhân - 3/32Gb - 5.5" FHD',
    price: 11490000,
    inventory: 10,
    rating : 3
  },
  {
    id: 2,
    name: "Nokia 6.1 Plus",
    image : './images/Nokia_6.1_Plus.jpg',
    description: 'Snapdragon 636 8 nhân - 4/64Gb - 5.8" FHD+',
    price: 6990000,
    inventory: 40,
    rating : 5
  },
  {
    id: 3,
    name: "Galaxy A21s",
    image : './images/Samsung_Galaxy_A21S.jpg',
    description: 'Exynos 850 8 nhân - 4/64Gb - 6.5" HD+',
    price: 5690000,
    inventory: 15,
    rating : 4
  },
  {
    id: 4,
    name: "Nokia 5.1 Plus",
    image : './images/Nokia_5.1_Plus.png',
    description: 'Meditek P60 - 3/32Gb-  5.8" HD+',
    price: 5690000,
    inventory: 10,
    rating : 5
  },
  {
    id: 5,
    name: "Xiaomi Mi 10T Pro 5G",
    image : './images/Xiaomi_Mi_10T.png',
    description: 'Snapdragon 865 8 nhân - 8/256Gb - 6.67" FHD+',
    price: 11999000,
    inventory: 15,
    rating : 4
  },
  {
    id: 6,
    name: "Nokia 8.3",
    image : './images/Nokia_8.3.png',
    description: 'Snapdragon 765G 8 nhân - 8/128Gb - 6.81"FHD+',
    price: 11990000,
    inventory: 15,
    rating : 5
  },
  {
    id: 7,
    name: "Samsung Galaxy Z Flip",
    image : './images/Samsung_Z_Flip.jpg',
    description: 'Snapdragon 855+ 8 nhân - 8/256Gb - 6.7" UHD',
    price: 36000000,
    inventory: 15,
    rating : 4
  }
];

const products = (state = initialState, action) => {
  switch(action.type){
      default : return [...state];
  }
}
export default products;