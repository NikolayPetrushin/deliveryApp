const state = {
  mainMenuItem: [
    { id: 1, link: "/", menuItem: "Pizza" },
    { id: 2, link: "sushi", menuItem: "Sushi" },
    { id: 3, link: "burgers", menuItem: "Burgers" },
  ],
  items: {
    pizza: [
      {
        id: 1,
        name: "Perfetto",
        price: 300,
        img: "https://static.1000.menu/img/content-v2/08/f3/21103/picca-v-duxovke-s-kolbasoi-i-syrom_1616655833_29_max.jpg",
      },
      {
        id: 2,
        name: "Cezar",
        price: 200,
        img: "https://klike.net/uploads/posts/2020-04/1588058477_1.jpg",
      },
      {
        id: 3,
        name: "Diabolo",
        price: 180,
        img: "https://st.depositphotos.com/1003814/5052/i/950/depositphotos_50523105-stock-photo-pizza-with-tomatoes.jpg",
      },
      {
        id: 4,
        name: "Belissimo",
        price: 160,
        img: "https://www.djurenko.com/wp-content/uploads/2018/09/pizza-con-acciughe_15.jpg",
      }
    ],
    sushi: [
      {
        id: 5,
        name: "California",
        price: 300,
        img: "https://sushi-point.com.ua/uploads/product/big/filadelfiya-original.jpg",
      },
      {
        id: 6,
        name: "Philodelphia",
        price: 200,
        img: "https://roll-club.kh.ua/wp-content/uploads/2021/01/trio-filadelfiy.jpg",
      },
      {
        id: 7,
        name: "Maki",
        price: 180,
        img: "https://smachno.ua/wp-content/uploads/2018/10/24/Snimok.png",
      },
    ],
    burgers: [
      {
        id: 8,
        name: "New York burger",
        price: 300,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdm-QzC6D99s0GJaZlxWltXtJ47ERDcQr3C6oPe0EkyTLAhh5-_qBvmFHSBpGFlodN0g&usqp=CAU",
      },
      {
        id: 9,
        name: "King burger",
        price: 200,
        img: "https://www.djurenko.com/wp-content/uploads/2018/10/home-burger_23.jpg",
      },
      {
        id: 10,
        name: "Ukrainian burger",
        price: 180,
        img: "https://rus.team/images/article/38761/2019-08-21-218_69230-1_527125.webp",
      },
    ],
  },
  cart: [
    {
      id: 1,
      name: "New York burger",
      price: 300,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdm-QzC6D99s0GJaZlxWltXtJ47ERDcQr3C6oPe0EkyTLAhh5-_qBvmFHSBpGFlodN0g&usqp=CAU",
    },
    {
      id: 3,
      name: "Ukrainian burger",
      price: 180,
      img: "https://rus.team/images/article/38761/2019-08-21-218_69230-1_527125.webp",
    },
    {
      id: 7,
      name: "Maki",
      price: 180,
      img: "https://smachno.ua/wp-content/uploads/2018/10/24/Snimok.png",
    }
  ]
};
export default state;
