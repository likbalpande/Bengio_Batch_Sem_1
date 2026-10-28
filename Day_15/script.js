console.log("Hello");

const data = {
    products: [
        {
            id: 26,
            title: "Green Chili Pepper",
            price: 0.99,
        },
        {
            id: 27,
            title: "Honey Jar",
            price: 6.99,
        },
        {
            id: 28,
            title: "Ice Cream",
            price: 5.49,
        },
        {
            id: 29,
            title: "Juice",
            price: 3.99,
        },
        {
            id: 30,
            title: "Kiwi",
            price: 2.49,
        },
        {
            id: 31,
            title: "Lemon",
            price: 0.79,
        },
        {
            id: 32,
            title: "Milk",
            price: 3.49,
        },
        {
            id: 33,
            title: "Mulberry",
            price: 4.99,
        },
        {
            id: 34,
            title: "Nescafe Coffee",
            price: 7.99,
        },
        {
            id: 35,
            title: "Potatoes",
            price: 2.29,
        },
    ],
    total: 194,
    skip: 25,
    limit: 10,
};

const { products } = data;

let i = 0;
const n = products.length;
let mx = 0;

while (i < n) {
    const product = products[i];

    if (mx < product.price) {
        mx = product.price;
    }

    i += 1;
}

// console.log(mx);
i = 0;

while (i < n) {
    const product = products[i];

    if (mx == product.price) {
        console.log(product.title);
        break;
    }

    i += 1;
}
