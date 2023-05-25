// Задание 1
// Имеется объект

const obj = {
products: [
    {title: "bottle of wine", price: 35, category: "wines"},
    {title: "1984", price: 15, category: "books", author: "George Orwell"},
    {title: "Iphone XR", price: 400, category: "phones", campera: "12MP"}
    ]
};

// Используя деструктуризацию пулучите в отдельную переменную значение поля author;

// Version 1
// const {products} = obj;
// const [,secondPosition] = products;
// const {author} = secondPosition;

// Version2
const {products: [, {author}]} = obj;

console.log(author);