function calculateTotal() {

    let total = 0;

    let selectedCourses =
        document.querySelectorAll(
            'input[type="checkbox"]:checked'
        );

    selectedCourses.forEach(course => {
        total += parseInt(course.value);
    });

    let discount = 0;

    if (selectedCourses.length === 2) {
        discount = 0.05;
    } else if (selectedCourses.length === 3) {
        discount = 0.10;
    } else if (selectedCourses.length >= 4) {
        discount = 0.15;
    }

    let finalTotal = total - (total * discount);

    document.getElementById("total").innerHTML =
        "R" + finalTotal.toLocaleString();
}

function getDirections() {

    const campus =
        document.getElementById("campus").value;

    if (campus === "Johannesburg") {

        window.open(
            "https://maps.google.com/?q=123+Rivonia+Road+Johannesburg",
            "_blank"
        );

    } else if (campus === "Soweto") {

        window.open(
            "https://maps.google.com/?q=Vilakazi+Street+Soweto",
            "_blank"
        );

    } else if (campus === "Alexandra") {

        window.open(
            "https://maps.google.com/?q=5+3rd+Avenue+Alexandra",
            "_blank"
        );

    } else {

        alert("Please select a campus.");

    }
}

document.querySelector(".registration-form")
.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Registration submitted successfully!\n\n" +
        "Thank you for registering with Empowering The Nation."
    );

    this.reset();
});

let cart = [];

function addToCart(courseName, price) {

    cart.push({ name: courseName, price: price });

    updateCart();
}

function updateCart() {

    let cartList = document.getElementById("cart-items");
    let totalDisplay = document.getElementById("cart-total");

    cartList.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - R${item.price}
            <button onclick="removeItem(${index})">X</button>
        `;

        cartList.appendChild(li);
    });

    totalDisplay.innerText = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}