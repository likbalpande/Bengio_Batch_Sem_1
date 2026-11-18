const products = [
    {
        title: "Duster",
        price: "Rs. 200",
        rating: "4.7",
    },
    {
        title: "Marker",
        price: "Rs. 70",
        rating: "4.1",
    },
    {
        title: "HDMI Connector",
        price: "Rs. 600",
        rating: "4.0",
    },
];

const newCard = document.createElement("div");
newCard.className = "card";

newCard.innerHTML = `<img src="" />
            <div class="product-info">
                <h4>${products[0].title}</h4>
                <p>Price: ${products[0].price}</p>
                <p>Rating: ${products[0].rating}⭐️ </p>
            </div>`;

const parent = document.getElementById("root");

parent.appendChild(newCard);

console.dir(parent);
