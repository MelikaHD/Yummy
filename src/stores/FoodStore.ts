import type { Food } from "@/interfaces/Food";
import { ref } from "vue";
import food1 from "@/assets/images/foods/dinner/food1.jpg";
import food2 from "@/assets/images/foods/dinner/food2.jpg";
import food3 from "@/assets/images/foods/dinner/food3.jpg";
import food4 from "@/assets/images/foods/dinner/food4.jpg";
import food7 from "@/assets/images/foods/dinner/food7.jpg";
import food8 from "@/assets/images/foods/dinner/food8.jpg";
import food9 from "@/assets/images/foods/dinner/food9.jpg";
import food10 from "@/assets/images/foods/dinner/food10.jpg";
import food13 from "@/assets/images/foods/dinner/food13.jpg";
import food14 from "@/assets/images/foods/dinner/food14.jpg";
import food15 from "@/assets/images/foods/dinner/food15.jpg";
import food16 from "@/assets/images/foods/dinner/food16.jpg";
import food17 from "@/assets/images/foods/dinner/food17.jpg";
import food18 from "@/assets/images/foods/dinner/food18.jpg";
import food19 from "@/assets/images/foods/dinner/food19.jpg";
import food20 from "@/assets/images/foods/dinner/food20.jpg";
import food21 from "@/assets/images/foods/dinner/food21.jpg";
import food22 from "@/assets/images/foods/dinner/food22.jpg";
import food23 from "@/assets/images/foods/dinner/food23.jpg";
import defaultDinner from "@/assets/images/foods/dinner/defaultDinner.jpeg";

import food24 from "@/assets/images/foods/drink/food24.jpg";
import food25 from "@/assets/images/foods/drink/food25.jpg";
import food26 from "@/assets/images/foods/drink/food26.jpg";
import food27 from "@/assets/images/foods/drink/food27.jpg";
import food28 from "@/assets/images/foods/drink/food28.jpg";
import food29 from "@/assets/images/foods/drink/food29.jpg";
import defaultDrink from "@/assets/images/foods/drink/defaultDrink.jpeg";

import food31 from "@/assets/images/foods/breakfast/food31.jpg";
import food32 from "@/assets/images/foods/breakfast/food32.jpg";
import food33 from "@/assets/images/foods/breakfast/food33.jpg";
import food36 from "@/assets/images/foods/breakfast/food36.jpg";
import food37 from "@/assets/images/foods/breakfast/food37.jpg";
import food38 from "@/assets/images/foods/breakfast/food38.jpg";
import food41 from "@/assets/images/foods/breakfast/food41.jpg";
import food42 from "@/assets/images/foods/breakfast/food42.jpg";
import food43 from "@/assets/images/foods/breakfast/food43.jpg";
import food44 from "@/assets/images/foods/breakfast/food44.jpg";
import food45 from "@/assets/images/foods/breakfast/food45.jpg";
import food46 from "@/assets/images/foods/breakfast/food46.jpg";
import food47 from "@/assets/images/foods/breakfast/food47.jpg";
import food48 from "@/assets/images/foods/breakfast/food48.jpg";
import food49 from "@/assets/images/foods/breakfast/food49.jpg";
import food50 from "@/assets/images/foods/breakfast/food50.jpg";
import food51 from "@/assets/images/foods/breakfast/food51.jpg";
import food55 from "@/assets/images/foods/breakfast/food55.jpg";
import food56 from "@/assets/images/foods/breakfast/food56.jpg";
import food59 from "@/assets/images/foods/breakfast/food59.jpg";
import food60 from "@/assets/images/foods/breakfast/food60.jpg";
import food61 from "@/assets/images/foods/breakfast/food61.jpg";
import food62 from "@/assets/images/foods/breakfast/food62.jpg";
import food63 from "@/assets/images/foods/breakfast/food63.jpg";
import food64 from "@/assets/images/foods/breakfast/food64.jpg";
import food65 from "@/assets/images/foods/breakfast/food65.jpg";
import food66 from "@/assets/images/foods/breakfast/food66.jpg";
import food67 from "@/assets/images/foods/breakfast/food67.jpg";
import food68 from "@/assets/images/foods/breakfast/food68.jpg";
import food69 from "@/assets/images/foods/breakfast/food69.jpg";
import food70 from "@/assets/images/foods/breakfast/food70.jpg";
import food71 from "@/assets/images/foods/breakfast/food71.jpg";
import food72 from "@/assets/images/foods/breakfast/food72.jpg";
import defaultBreakfast from "@/assets/images/foods/breakfast/defaultBreakfast.jpeg";

export const foods = ref<Food[]>([
  {
    id: "132axe987",
    category: "Dinner",
    description: "Mixture of seasonal fruits served for two people",
    mainImage: food1,
    name: "Sharing Fruit Platter",
    price: 14.95,
    subCategory: ["Newest"],
  },
  {
    id: "856axe987",
    category: "Dinner",
    description: "",
    mainImage: defaultDinner,
    name: "Hummus with Bread",
    price: 7.95,
    subCategory: ["Appetisers"],
  },
  {
    id: "654axe987",
    category: "Dinner",
    description: "Grilled Aubergine with Garlic and egg",
    mainImage: food2,
    name: "Grilled Aubergine",
    price: 7.95,
    subCategory: ["Appetisers"],
  },
  {
    id: "132opt987",
    category: "Dinner",
    description: "Premium calamari served with sweet chilli",
    mainImage: food3,
    name: "Calamari Bites",
    price: 8.95,
    subCategory: ["Appetisers"],
  },
  {
    id: "456ane745",
    category: "Dinner",
    description: "",
    mainImage: defaultDinner,
    name: "Falafel with Hummus",
    price: 8.95,
    subCategory: ["Appetisers"],
  },
  {
    id: "132axe988",
    category: "Dinner",
    description: "",
    mainImage: food4,
    name: "Chicken Skewers",
    price: 9.95,
    subCategory: ["Appetisers"],
  },
  {
    id: "132axe999",
    category: "Dinner",
    description: "",
    mainImage: defaultDinner,
    name: "Halloumi Fries",
    price: 7.95,
    subCategory: ["Appetisers"],
  },
  {
    id: "131axe987",
    category: "Dinner",
    description:
      "Delicious vegetable-packed burger with vegan cheese,portobello mushroom and grilled onions",
    mainImage: defaultDinner,
    name: "Vegan Burger",
    price: 14.95,
    subCategory: ["Burgers"],
  },
  {
    id: "132axe987",
    category: "Dinner",
    description:
      "Grilled chicken burger served with cheese, fresh lettuce,tomato and Sapores’ burger sauce",
    mainImage: defaultDinner,
    name: "Chicken Burger",
    price: 14.95,
    subCategory: ["Burgers"],
  },
  {
    id: "131ase987",
    category: "Dinner",
    description:
      "Grilled chicken burger served with Ghost chilli sauce, melted cheese, jalapenos, fresh lettuce and tomato",
    mainImage: defaultDinner,
    name: "Ghost Chicken Burger",
    price: 15.95,
    subCategory: ["Burgers"],
  },

  {
    id: "189aze987",
    category: "Dinner",
    description:
      "Known to some as Iran's national dish, ghormeh sabzi is a stew made of several types of herbs, red kidney beans, Persian dried limes and lamb.",
    mainImage: food7,
    name: "Ghormeh Sabzi",
    price: 18.95,
    subCategory: ["Grills"],
  },
  {
    id: "169ayk957",
    category: "Dinner",
    description:
      "Known to some as Iran's national dish, ghormeh sabzi is a stew made of several types of herbs, red kidney beans, potato and Tofu",
    mainImage: defaultDinner,
    name: "Ghormeh Sabzi Veg",
    price: 19.95,
    subCategory: ["Grills"],
  },
  {
    id: "163axe987",
    category: "Dinner",
    description:
      "Grilled marinated chicken cutlets and lamb cutlets served in tangy tomato sauce with Persian rice and yoghurt",
    mainImage: defaultDinner,
    name: "Mixed kebab",
    price: 22.95,
    subCategory: ["Grills"],
  },
  {
    id: "271aze987",
    category: "Dinner",
    description:
      "Premium lamb cutlets served in tangy tomato sauce with rice and Persian yoghurt.",
    mainImage: food8,
    name: "Lamb Shish Kebab",
    price: 22.95,
    subCategory: ["Grills"],
  },
  {
    id: "963ayk957",
    category: "Dinner",
    description: "Roasted tender lamb shank with teriyaki rice.",
    mainImage: defaultDinner,
    name: "Lamb Shank",
    price: 22.95,
    subCategory: ["Grills"],
  },
  {
    id: "500khd500",
    category: "Dinner",
    description: "Boneless roasted duck with teriyaki rice and Hoisin sauce",
    mainImage: defaultDinner,
    name: "Roast duck",
    price: 19.95,
    subCategory: ["Grills"],
  },
  {
    id: "500khd501",
    category: "Dinner",
    description:
      "Grilled marinated chicken cutlets in tangy tomato sauce with Persian rice and Yoghurt",
    mainImage: defaultDinner,
    name: "Chicken kebab",
    price: 21.95,
    subCategory: ["Grills"],
  },
  {
    id: "500khd502",
    category: "Dinner",
    description:
      "Succulent chicken thighs marinated in Sapores’ special marinade. Served with fries.",
    mainImage: defaultDinner,
    name: "Chicken Thighs",
    price: 19.95,
    subCategory: ["Grills"],
  },
  {
    id: "500khd503",
    category: "Dinner",
    description: "Served with teriyaki rice and chefs signature sauce",
    mainImage: food9,
    name: "Grilled Salmon",
    price: 19.95,
    subCategory: ["Grills"],
  },
  {
    id: "500khd504",
    category: "Dinner",
    description:
      "Four pieces of succulent Aromatic lamb chops served with Sapores yoghurt sauce and sweet chilli dip",
    mainImage: food10,
    name: "Lamb Chops",
    price: 24.95,
    subCategory: ["Grills"],
  },
  {
    id: "500khd505",
    category: "Dinner",
    description:
      "Uruguayan beef delicately marbled throughout for superb, full-bodied flavour (280 grams) Served with steak chips",
    mainImage: defaultDinner,
    name: "Sirloin Steak",
    price: 24.95,
    subCategory: ["Steaks"],
  },
  {
    id: "500khd590",
    category: "Dinner",
    description: "Served with teriyaki rice and chefs signature sauce",
    mainImage: food9,
    name: "Grilled Salmon",
    price: 19.95,
    subCategory: ["Steaks"],
  },
  {
    id: "500khd506",
    category: "Dinner",
    description:
      "Tender yet succulent Uruguayan beef with a strip of juicy crackling (280 grams).Served with steak chips.",
    mainImage: defaultDinner,
    name: "Ribeye Steak",
    price: 24.95,
    subCategory: ["Steaks"],
  },

  {
    id: "500khd509",
    category: "Dinner",
    description:
      "Spaghetti, Beef mince and bolognese sauce sprinkled with parmesan cheese",
    mainImage: food13,
    name: "Spaghetti Bolognese",
    price: 16.95,
    subCategory: ["Pasta"],
  },
  {
    id: "500khd510",
    category: "Dinner",
    description:
      "Spaghetti, Zucchini, Tomato ,Olives and Red pepper flakes. with a choice of vegan sauce or Special sauce.",
    mainImage: food14,
    name: "Vegetable Spaghetti",
    price: 16.95,
    subCategory: ["Pasta"],
  },
  {
    id: "500khd511",
    category: "Dinner",
    description: "Spaghetti, Prawns and Calamari",
    mainImage: food15,
    name: "Seafood Spaghetti",
    price: 18.95,
    subCategory: ["Pasta"],
  },
  {
    id: "500khd512",
    category: "Dinner",
    description: "",
    mainImage: defaultDinner,
    name: "Asparagus",
    price: 5.95,
    subCategory: ["Sides"],
  },
  {
    id: "500khd513",
    category: "Dinner",
    description: "",
    mainImage: defaultDinner,
    name: "Grilled Vegetables",
    price: 5.95,
    subCategory: ["Sides"],
  },
  {
    id: "500khd514",
    category: "Dinner",
    description: "",
    mainImage: defaultDinner,
    name: "Persian Rice",
    price: 4.95,
    subCategory: ["Sides"],
  },
  {
    id: "500khd515",
    category: "Dinner",
    description: "",
    mainImage: food16,
    name: "Mashed Potato",
    price: 5.95,
    subCategory: ["Sides"],
  },
  {
    id: "500khd516",
    category: "Dinner",
    description: "",
    mainImage: food17,
    name: "Masala Chips",
    price: 6.95,
    subCategory: ["Sides"],
  },
  {
    id: "500khd517",
    category: "Dinner",
    description: "",
    mainImage: food18,
    name: "Fries",
    price: 4.95,
    subCategory: ["Sides"],
  },
  {
    id: "500khd518",
    category: "Dinner",
    description: "",
    mainImage: food19,
    name: "Sweet Potato Fries",
    price: 5.95,
    subCategory: ["Sides"],
  },
  {
    id: "500khd519",
    category: "Dinner",
    description: "",
    mainImage: food20,
    name: "Cheesy Fries",
    price: 6.95,
    subCategory: ["Sides"],
  },
  {
    id: "500khd521",
    category: "Dinner",
    description:
      "Fluffy dutch pancake bites served with strawberries and nutella sauce.",
    mainImage: food21,
    name: "Dutch Pancakes",
    price: 8.95,
    subCategory: ["Desserts"],
  },
  {
    id: "500khd522",
    category: "Dinner",
    description: "Double fudge cake Served with Soft Ice Cream.",
    mainImage: defaultDinner,
    name: "Chocolate Fudge Cake",
    price: 7.95,
    subCategory: ["Desserts"],
  },
 
  {
    id: "500khd524",
    category: "Dinner",
    description:
      "Fresh warm brownies, Served with Soft Ice Cream or Whipped Cream.",
    mainImage: defaultDinner,
    name: "Chocolate Brownie",
    price: 7.95,
    subCategory: ["Desserts"],
  },
  {
    id: "500khd525",
    category: "Dinner",
    description:
      "Pistachio with its combination of both dark and white chocolate with with biscuit",
    mainImage: food22,
    name: "Pistachio Cake",
    price: 7.95,
    subCategory: ["Desserts"],
  },
  {
    id: "500khd526",
    category: "Dinner",
    description: "Mixture of seasonal fruits served for two people",
    mainImage: food23,
    name: "Sharing Fruit Platter",
    price: 14.95,
    subCategory: ["Desserts"],
  },
  {
    id: "500khd527",
    category: "Dinner",
    description:
      "Inspired by the caramelised Biscoff biscuit, this cheesecake is infused with deep spices including cinnamon and nutmeg, along with a classic caramel Served with a choice of ice cream.",
    mainImage: defaultDinner,
    name: "Biscoff Cheesecake",
    price: 7.95,
    subCategory: ["Desserts"],
  },
  {
    id: "500khd528",
    category: "Dinner",
    description:
      "Double chocolate cake slice with fountain sparklers and a birthday song!",
    mainImage: defaultDinner,
    name: "Birthday Sparkler",
    price: 14.95,
    subCategory: ["Desserts"],
  },
  {
    id: "430kzd300",
    category: "Drink",
    description:
      "served in a high heel glass, flavored with strawberry,kiwi and orange.",
    mainImage: food24,
    name: "The Bad Bi*ch",
    price: 9.95,
    subCategory: ["Newest", "Mocktails"],
  },
  {
    id: "430kzd301",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Brazilian Lemonade",
    price: 8.95,
    subCategory: ["Newest", "Mocktails"],
  },
  {
    id: "430kzd302",
    category: "Drink",
    description: "Strawberry & passionfuit topped with lemonade",
    mainImage: defaultDrink,
    name: "Strawberry Passion cooler",
    price: 8.95,
    subCategory: ["Newest", "Mocktails"],
  },
  {
    id: "430kzd303",
    category: "Drink",
    description: "Dragon fruit & Mango  topped with lemonade.",
    mainImage: food25,
    name: "Dragon fruit Cooler",
    price: 8.95,
    subCategory: ["Newest", "Mocktails"],
  },
  {
    id: "430kzd304",
    category: "Drink",
    description:
      "An Instagramable drink , in house made guava punch poured in candy floss and sweet glitter.",
    mainImage: food26,
    name: "Sapores Potion",
    price: 8.95,
    subCategory: ["Newest", "Mocktails"],
  },
  {
    id: "430kzd305",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Sapores Fruit Punch",
    price: 8.95,
    subCategory: ["Newest", "Mocktails"],
  },
  {
    id: "430kzd306",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "J20 Apple & Raspberry",
    price: 3.95,
    subCategory: ["Newest", "Soft Drinks"],
  },
  {
    id: "430kzd307",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Fresh Watermelon juice",
    price: 6.95,
    subCategory: ["Newest", "Soft Drinks"],
  },
  {
    id: "430kzd308",
    category: "Drink",
    description: "",
    mainImage: food27,
    name: "Strawberry Mojito",
    price: 8.95,
    subCategory: ["Mocktails"],
  },
  {
    id: "430kzd309",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Passionfruit Mojito",
    price: 8.95,
    subCategory: ["Mocktails"],
  },
  {
    id: "430kzd310",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Watermelon Cooler",
    price: 8.95,
    subCategory: ["Mocktails"],
  },
  {
    id: "430kzd311",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Classic Mojito",
    price: 8.95,
    subCategory: ["Mocktails"],
  },
  {
    id: "430kzd312",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Red Bull Mojito",
    price: 9.95,
    subCategory: ["Mocktails"],
  },
  {
    id: "430kzd313",
    category: "Drink",
    description: "Mango and Dragon fruit with a pink lagoon Serum",
    mainImage: food28,
    name: "Sapores Serum",
    price: 8.95,
    subCategory: ["Mocktails"],
  },
  {
    id: "430kzd314",
    category: "Drink",
    description: "",
    mainImage: food29,
    name: "Peach Ice Tea",
    price: 8.95,
    subCategory: ["Mocktails"],
  },
  {
    id: "430kzd316",
    category: "Drink",
    description: "Served with whipped cream and marshmallows",
    mainImage: defaultDrink,
    name: "Hot Chocolate",
    price: 4.95,
    subCategory: ["Teas & Coffees"],
  },
  {
    id: "430kzd317",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Moroccan Mint Tea",
    price: 3.95,
    subCategory: ["Teas & Coffees"],
  },
  {
    id: "430kzd318",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Matcha Green Tea",
    price: 3.5,
    subCategory: ["Teas & Coffees"],
  },
  {
    id: "430kzd319",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "English Breakfast Tea",
    price: 3.5,
    subCategory: ["Teas & Coffees"],
  },
  {
    id: "430kzd320",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Lemon & Ginger Tea",
    price: 3.5,
    subCategory: ["Teas & Coffees"],
  },
  {
    id: "430kzd321",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "LATTE / CAPPUCCINO",
    price: 3.95,
    subCategory: ["Teas & Coffees"],
  },
  {
    id: "430kzd322",
    category: "Drink",
    description: "Flavours Caramel, Hazelnut or Vanilla available.",
    mainImage: defaultDrink,
    name: "ICE COFFEE",
    price: 4.95,
    subCategory: ["Teas & Coffees"],
  },
  {
    id: "430kzd323",
    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Olive and mint tea",
    price: 3.95,
    subCategory: ["Teas & Coffees"],
  },
  {
    id: "430kzd324",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Peppermint Tea",
    price: 3.5,
    subCategory: ["Teas & Coffees"],
  },
  {
    id: "430kzd325",

    category: "Drink",
    description: "Latte with a choice of Vanilla, Caramel or Hazelnut Syrup.",
    mainImage: defaultDrink,
    name: "Latte with Flavour",
    price: 4.95,
    subCategory: ["Teas & Coffees"],
  },
  {
    id: "430kzd330",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Tonic water",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd331",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Peroni Libera Non-Alcoholic Beer",
    price: 3.95,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd332",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "J20 Orange & Passionfruit",
    price: 3.95,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd333",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Still Water",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd334",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Sparkling Water",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd335",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Coke",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd336",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Diet Coke",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd337",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Coke Zero",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd338",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Sprite",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd339",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Redbull /Redbull sugar free",
    price: 3.95,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd340",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Fanta",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd341",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Rose Lemonade",
    price: 3.95,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd342",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Pineapple Juice",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd343",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Apple Juice",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430kzd344",

    category: "Drink",
    description: "",
    mainImage: defaultDrink,
    name: "Mango Juice",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430zme436",

    category: "Breakfast",
    description:
      "Fresh fluffy pancakes loaded with smoked Rashers and maple syrup on the side.",
    mainImage: defaultBreakfast,
    name: "The American Stack",
    price: 13.95,
    subCategory: ["Newest", "Breakfast"],
  },

  {
    id: "430zme438",

    category: "Breakfast",
    description:
      "A mixed selection of chocolates along with a choice of your favourite sauces including Maple Syrup, Milk chocolate or Nutella.",
    mainImage: defaultBreakfast,
    name: "Sweet Waffles",
    price: 12.95,
    subCategory: ["Newest", "Breakfast"],
  },
  {
    id: "430zme439",

    category: "Breakfast",
    description:
      "Eggs, sourdough bread, sujuk, halloumi, olive, avocado, spinach and cherry tomatoes",
    mainImage: food31,
    name: "Mediterranean Breakfast",
    price: 15.95,
    subCategory: ["Newest", "Breakfast"],
  },
  {
    id: "430zme440",
    category: "Breakfast",
    description:
      "Get a taste of our latest well being product Olive Mint & Honey Tea is full of detoxifying and healing properties.Olive leaf has double the antioxidants capacity of green tea.Feel the boost of energy without the effects of Caffeine.",
    mainImage: food32,
    name: "Olive Mint & Honey Tea",
    price: 3.95,
    subCategory: ["Newest", "Hot Drinks"],
  },
  {
    id: "430zme441",

    category: "Breakfast",
    description:
      "Ruby Hot Chocolate Served with Whipped Cream and Marshmallows",
    mainImage: food33,
    name: "Pink Hot Chocolate",
    price: 4.95,
    subCategory: ["Newest", "Hot Drinks"],
  },
  {
    id: "430zme444",

    category: "Breakfast",
    description:
      "Grilled Burger, cheese & bacon with gherkin, tomato, Sapores sauce served with Gourmet fries",
    mainImage: food36,
    name: "The Big Cheese & Bacon",
    price: 16.95,
    subCategory: ["Newest", "Brunch"],
  },
  {
    id: "430zme445",

    category: "Breakfast",
    description:
      "A double decker which included chicken breast and our famous wagyu beef patty. Served with Mexican Cheese, Lettuce, Tomatoes, Pickles & Sapores Burger Sauce.",
    mainImage: food37,
    name: "Sapores Burger",
    price: 18.95,
    subCategory: ["Newest", "Brunch"],
  },
  {
    id: "430zme446",

    category: "Breakfast",
    description:
      "Cumberland Sausage, Beans A choice of Hash browns or Fries With toast.",
    mainImage: defaultBreakfast,
    name: "Kids Breakfast",
    price: 9.95,
    subCategory: ["Newest", "Kids"],
  },
  {
    id: "430zme447",

    category: "Breakfast",
    description:
      "A delicious crispy chicken breast alongside one of our fresh Belgian waffles with a side serving of maple syrup.",
    mainImage: defaultBreakfast,
    name: "Kids Chicken Waffle",
    price: 9.95,
    subCategory: ["Newest", "Kids"],
  },
  {
    id: "430zme448",

    category: "Breakfast",
    description:
      "A selection of mixed fruit on one of our fresh Belgian waffles. With a choice of Chocolate, Nutella or maple syrup",
    mainImage: defaultBreakfast,
    name: "Kids Fruity Waffle",
    price: 9.95,
    subCategory: ["Newest", "Kids"],
  },
  {
    id: "430zme449",

    category: "Breakfast",
    description:
      "A mixed selection of chocolates with one of our delicious Belgian waffles.With a choice of Milk chocolate or Nutella",
    mainImage: defaultBreakfast,
    name: "Kids Sweet Waffle",
    price: 9.95,
    subCategory: ["Newest", "Kids"],
  },
  {
    id: "430zme450",
    category: "Breakfast",
    description:
      "Vegan Cumberland Sausage, Beans  Hash Brown or Chips With toast.",
    mainImage: defaultBreakfast,
    name: "Kids Vegan Breakfast",
    price: 9.95,
    subCategory: ["Newest", "Kids"],
  },
  {
    id: "430zme451",
    category: "Breakfast",
    description:
      "A Blend of Apples, Pineapple, Spinach, Cucumber and a dash of Lime.",
    mainImage: food38,
    name: "Zenergy Smoothie",
    price: 5.95,
    subCategory: ["Newest", "Smoothie's"],
  },
  {
    id: "430zme453",
    category: "Breakfast",
    description: "Mango, strawberry and pineapple Smoothie.",
    mainImage: defaultBreakfast,
    name: "Fruit Twist",
    price: 5.95,
    subCategory: ["Newest", "Smoothie's"],
  },

  {
    id: "430zme452",
    category: "Breakfast",
    description:
      "A Blend of Strawberries and Bananas for a sweet balanced day.",
    mainImage: defaultBreakfast,
    name: "Sunkissed Smoothie",
    price: 5.95,
    subCategory: ["Newest"],
  },

  {
    id: "430zme454",
    category: "Breakfast",
    description:
      "A tropical mixture of Mango, Coconut, Pineapple, Mint & Lime better sit back its party time.",
    mainImage: defaultBreakfast,
    name: "Tropicolada",
    price: 5.95,
    subCategory: ["Newest", "Smoothie's"],
  },


  {
    id: "430zme457",

    category: "Breakfast",
    description:
      "Looking for a healthy alternative? Then look no further our delicious date Shake promotes healthy skin, boosts energy levels and helps develop muscle strength. What more could you want?",
    mainImage: food41,
    name: "Date Shake",
    price: 8.95,
    subCategory: ["Newest", "Milkshakes"],
  },
  {
    id: "430zme458",

    category: "Breakfast",
    description:
      "Looking to fill your breakfast cravings in the shape of a shake? Our Biscoff and crunchy nut cereal combo is not one to miss creamy and filling just what you need to get your day of to a good start.",
    mainImage: food42,
    name: "Cookie Crunch Cereal Shake",
    price: 10.95,
    subCategory: ["Newest", "Milkshakes"],
  },
  {
    id: "430zme459",

    category: "Breakfast",
    description: "A Creamy Banana Milkshake served with whipped cream.",
    mainImage: food43,
    name: "🍌 Banana Milkshake",
    price: 8.95,
    subCategory: ["Newest", "Milkshakes"],
  },
  {
    id: "430zme460",

    category: "Breakfast",
    description:
      "Have a go on our newest arrival, Millions Bubblegum Shake a refreshing blast from past served with whipped cream and Millions as a garnish.",
    mainImage: food44,
    name: "Millions Bubblegum Shake",
    price: 8.95,
    subCategory: ["Newest", "Milkshakes"],
  },
  {
    id: "430zme461",

    category: "Breakfast",
    description:
      "Get your tastebuds around our latest refreshing mint chocolate milkshake. Topped with whipped cream and chocolate chips",
    mainImage: food45,
    name: "Mint Chocolate milkshake",
    price: 8.95,
    subCategory: ["Newest", "Milkshakes"],
  },
  {
    id: "430zme462",

    category: "Breakfast",
    description:
      "Traditional Lebanese Salad with green vegetables,tomato, cucumber, olive oil and garnished with pomegranate and parmesan.",
    mainImage: food46,
    name: "Sapores Salad",
    price: 11.95,
    subCategory: ["Salads"],
  },
  {
    id: "430zme463",

    category: "Breakfast",
    description:
      "Marinated Chicken breast slices topped with garlic and herb croutons with tomatoes, cucumber and salad. served with a delicious cream sauce, garnished with parmesan cheese.",
    mainImage: food47,
    name: "Grilled Chicken Salad",
    price: 13.95,
    subCategory: ["Salads"],
  },
  {
    id: "430zme464",

    category: "Breakfast",
    description:
      "Two Fried Eggs, Two Beef Cumberland Sausages, Two Smoked Rashers, Two Hash Browns, Beans, Tomatoes, Portobello Mushrooms With Sourdough Toast.Gluten free bread available upon request.",
    mainImage: food48,
    name: "ّFull English",
    price: 14.95,
    subCategory: ["Breakfast"],
  },
  {
    id: "430zme465",

    category: "Breakfast",
    description:
      "Fried Egg, Hash Brown, Beef Cumberland Sausage, Smoked Rashers, Baked Beans, Portobello Mushrooms and Cherry Tomato. Gluten Free Bread Available upon request.",
    mainImage: food49,
    name: "Half English",
    price: 11.95,
    subCategory: ["Breakfast"],
  },
  {
    id: "430zme466",

    category: "Breakfast",
    description:
      "Smashed Tofu & Avocado, Two Vegan Sausages, Two Vegan Rashers,Two Hash browns, Baked Beans, Mushroom and Cherry Tomatoes.",
    mainImage: defaultBreakfast,
    name: "Vegan Breakfast",
    price: 14.95,
    subCategory: ["Breakfast"],
  },
  {
    id: "430zme467",

    category: "Breakfast",
    description:
      "Two Fried Eggs, Two Vegetable Sausages, Two Vegan Rashers, Two Hash Browns, Baked Beans, Mushrooms and Cherry Tomatoes.",
    mainImage: food50,
    name: "Veggi Breakfast",
    price: 14.95,
    subCategory: ["Breakfast"],
  },
  {
    id: "430zme468",

    category: "Breakfast",
    description:
      "Two Eggs, Pancakes, Waffle, Crispy Hash Browns, Smoked Rashers and Maple Syrup",
    mainImage: food51,
    name: "All American",
    price: 14.95,
    subCategory: ["Breakfast"],
  },
  
  {
    id: "430zme470",

    category: "Breakfast",
    description:
      "Poached Eggs with Smoked Scottish Salmon. Served on Toasted Muffins.Gluten free 🍞 available please speak with a member of staff.",
    mainImage: defaultBreakfast,
    name: "Eggs Royale",
    price: 13.95,
    subCategory: ["Breakfast"],
  },
  {
    id: "430zme473",

    category: "Breakfast",
    description:
      "Eggs, Tomato, Garlic and Tumeric.For a Gluten free option please ask a member of staff.",
    mainImage: food55,
    name: "Persian Omelette",
    price: 13.95,
    subCategory: ["Breakfast"],
  },
  {
    id: "430zme474",

    category: "Breakfast",
    description:
      "Avocado, Poached Eggs and Tomato on toasted muffins.Scrambled tofu is also available upon Request.",
    mainImage: food56,
    name: "Smashed Avocado",
    price: 12.95,
    subCategory: ["Breakfast"],
  },
  
  {
    id: "430tyu476",

    category: "Breakfast",
    description: "",
    mainImage: food59,
    name: "Espresso Machiato",
    price: 3.5,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu477",

    category: "Breakfast",
    description: "Hot Chocolate with a espresso shot.",
    mainImage: food60,
    name: "Mocha",
    price: 3.95,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu478",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Espresso",
    price: 3.5,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu479",

    category: "Breakfast",
    description: "",
    mainImage: food61,
    name: "Latte",
    price: 3.95,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu480",

    category: "Breakfast",
    description: "",
    mainImage: food62,
    name: "Americano",
    price: 3.95,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu481",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Cappuchino",
    price: 3.95,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu482",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Flat White",
    price: 3.95,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu483",

    category: "Breakfast",
    description: "",
    mainImage: food63,
    name: "Iced Coffee",
    price: 4.95,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu484",

    category: "Breakfast",
    description: "served with whipped cream and marshmalllows",
    mainImage: food64,
    name: "Hot Chocolate",
    price: 4.95,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu485",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Peppermint Tea",
    price: 3.5,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu486",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Mint & Ginger",
    price: 3.5,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu487",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "English Breakfast Tea",
    price: 3.5,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu488",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Camomile tea",
    price: 3.5,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu489",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Green Tea",
    price: 3.5,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu490",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Lemon & Ginger",
    price: 3.5,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu491",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Mint Tea",
    price: 3.5,
    subCategory: ["Hot Drinks"],
  },
  {
    id: "430tyu492",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Coke",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430tyu493",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Diet Coke",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430tyu494",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Coke Zero",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430tyu495",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Fanta Orange",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430tyu496",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Sprite",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430tyu497",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Rose Lemonade",
    price: 3.95,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430tyu498",

    category: "Breakfast",
    description: "Orange & Passionfruit  Apple & Raspberry",
    mainImage: defaultDrink,
    name: "J20",
    price: 3.95,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430tyu499",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Still Water",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430tyu500",

    category: "Breakfast",
    description: "",
    mainImage: defaultDrink,
    name: "Sparkling Water",
    price: 3.5,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430tyu501",

    category: "Breakfast",
    description: "Normal and Sugar free available please ask staff.",
    mainImage: defaultDrink,
    name: "Redbull",
    price: 3.95,
    subCategory: ["Soft Drinks"],
  },
  {
    id: "430xns502",

    category: "Breakfast",
    description:
      "Grilled Chicken, Cheese, Tomato, Sapores Sauce with Gourmet fries.",
    mainImage: food65,
    name: "Chicken Burger",
    price: 15.95,
    subCategory: ["Brunch"],
  },
  {
    id: "430xns503",

    category: "Breakfast",
    description:
      "Grilled Burger, Cheese, Gherkin, Tomato, Sapores sauce served with Gourmet fries.",
    mainImage: defaultBreakfast,
    name: "The Big Cheese",
    price: 15.95,
    subCategory: ["Brunch"],
  },
  {
    id: "430xns504",

    category: "Breakfast",
    description:
      "Vegetable Burger, Vegan Cheese, Tomato, Mayonnaise served with Gourmet fries.",
    mainImage: food66,
    name: "Vegan Burger",
    price: 15.95,
    subCategory: ["Brunch"],
  },
  {
    id: "430xns505",

    category: "Breakfast",
    description: "Steak Cooked your way with Egg, Tomato's & mushroom sauce.",
    mainImage: defaultBreakfast,
    name: "Steak & Eggs",
    price: 15.95,
    subCategory: ["Brunch"],
  },
  {
    id: "430xns506",

    category: "Breakfast",
    description:
      "Grilled Chicken, Cheese, Tomato, Sapores Sauce with Gourmet fries.",
    mainImage: food67,
    name: "Chicken Waffle",
    price: 14.95,
    subCategory: ["Brunch"],
  },
  {
    id: "430xns507",

    category: "Breakfast",
    description: "Tomato, Olives, mushroom, broccoli and cauliflower.",
    mainImage: food68,
    name: "Vegetable Spaghetti",
    price: 14.95,
    subCategory: ["Brunch"],
  },
  {
    id: "430xns508",

    category: "Breakfast",
    description: "Spaghetti, Beef mince and bolognese sauce.",
    mainImage: food69,
    name: "Spaghetti Bolognese",
    price: 14.95,
    subCategory: ["Brunch"],
  },
  {
    id: "430xdb509",

    category: "Breakfast",
    description: "Spaghetti, Prawns and Calamari in a delicious creamy sauce",
    mainImage: food70,
    name: "Seafood Spaghetti",
    price: 14.95,
    subCategory: ["Brunch"],
  },
  {
    id: "430xdb510",

    category: "Breakfast",
    description: "Tender Chicken nuggets served with fries.",
    mainImage: defaultBreakfast,
    name: "Kids Chicken Nuggets & Chips",
    price: 9.95,
    subCategory: ["Kids"],
  },
  {
    id: "430xdb511",

    category: "Breakfast",
    description:
      "Get your day off to a good start with our fresh fruity Pancakes. 2 fluffy Pancakes served with Mixed fruit and a choice of Maple syrup, Nutella or Chocolate Sauce.",
    mainImage: defaultBreakfast,
    name: "Kids Fruity Pancakes",
    price: 9.95,
    subCategory: ["Kids"],
  },
  {
    id: "430xdb512",

    category: "Breakfast",
    description:
      "Everyone deserves a cheat day right?look no further we have got this covered.Fresh Fluffy Pancakes topped with a selection of chocolate pieces. With a choice of Milk Chocolate or nutella sauce.",
    mainImage: defaultBreakfast,
    name: "Kids Sweet Treat Pancakes",
    price: 9.95,
    subCategory: ["Kids"],
  },
  {
    id: "430xnd513",

    category: "Breakfast",
    description:
      "Try out our latest delicious healthy Acai smoothie with a Blend of Strawberries and Bananas with a dash of honey for a sweet balanced day.",
    mainImage: defaultDrink,
    name: "Tropical Acai Smoothie",
    price: 8.95,
    subCategory: ["Newest", "Smoothie's"],
  },
  {
    id: "430sid514",

    category: "Breakfast",
    description: "x 2 Pieces of bread or toast",
    mainImage: defaultBreakfast,
    name: "Bread or Toast",
    price: 2.5,
    subCategory: ["Sides"],
  },
  {
    id: "430sid515",

    category: "Breakfast",
    description: "",
    mainImage: food71,
    name: "Masala Fries",
    price: 6.95,
    subCategory: ["Sides"],
  },
  {
    id: "430sid516",

    category: "Breakfast",
    description: "x 1 Additional Sausage",
    mainImage: defaultBreakfast,
    name: "Cumberland Sausage",
    price: 2.5,
    subCategory: ["Sides"],
  },
  {
    id: "430sid517",

    category: "Breakfast",
    description: "",
    mainImage: defaultBreakfast,
    name: "Baked Beans",
    price: 2.0,
    subCategory: ["Sides"],
  },
  {
    id: "430sid518",

    category: "Breakfast",
    description: "x 1 Additional Egg",
    mainImage: defaultBreakfast,
    name: "Eggs",
    price: 2.5,
    subCategory: ["Sides"],
  },
  {
    id: "430sid519",

    category: "Breakfast",
    description: "",
    mainImage: defaultBreakfast,
    name: "Avocado",
    price: 3.95,
    subCategory: ["Sides"],
  },
  {
    id: "430sid520",

    category: "Breakfast",
    description: "x 2 Hash Browns",
    mainImage: defaultBreakfast,
    name: "Hash Browns",
    price: 2.5,
    subCategory: ["Sides"],
  },
  {
    id: "430sid521",

    category: "Breakfast",
    description: "",
    mainImage: defaultBreakfast,
    name: "Salmon",
    price: 5.95,
    subCategory: ["Sides"],
  },
  {
    id: "430sid522",

    category: "Breakfast",
    description: "",
    mainImage: defaultBreakfast,
    name: "Cheesy Fries",
    price: 6.95,
    subCategory: ["Sides"],
  },
  {
    id: "430sid523",

    category: "Breakfast",
    description: "",
    mainImage: defaultBreakfast,
    name: "Halloumi Fries x2",
    price: 3.95,
    subCategory: ["Sides"],
  },
  {
    id: "430sid524",

    category: "Breakfast",
    description: "x 2 Bacon Rashers",
    mainImage: defaultBreakfast,
    name: "Bacon Rashers",
    price: 3.0,
    subCategory: ["Sides"],
  },
  {
    id: "430sid525",

    category: "Breakfast",
    description: "",
    mainImage: defaultBreakfast,
    name: "Fries",
    price: 4.95,
    subCategory: ["Sides"],
  },
  {
    id: "430sid526",

    category: "Breakfast",
    description: "x 2 Pieces of bread or toast",
    mainImage: defaultBreakfast,
    name: "Sweet Potato Fries",
    price: 5.95,
    subCategory: ["Sides"],
  },
  {
    id: "430sid527",

    category: "Breakfast",
    description: "",
    mainImage: defaultBreakfast,
    name: "Mushroom",
    price: 2.0,
    subCategory: ["Sides"],
  },
  {
    id: "430mik528",

    category: "Breakfast",
    description:
      "Crushed oreos blended with soft vanilla ice cream and topped with whipped cream and oreo's as a garnish",
    mainImage: food72,
    name: "Oreo Shake",
    price: 8.95,
    subCategory: ["Milkshakes"],
  },
]);
