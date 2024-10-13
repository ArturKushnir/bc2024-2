
// 2 завдання з веб програмування 
const bank = document.getElementById('bank');
fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=JPY&date=20240127&json')
    .then(response => response.json())
    .then(value => {
        bank.innerHTML = value.map(value => `currency code: ${value.r030}, txt: ${value.txt}, rate: ${value.rate}, cc: ${value.cc}, exchangedate: ${value.exchangedate}`).join('');
    })
    .catch(error => {
        console.error('Error fetching users:', error);
    });


// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

let userBlock = document.getElementById('user-list');
fetch('http://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    let userList = `<ul>`;
    data.forEach(user => {
        userList += `<li>${user.id}, ${user.name}, <a href="https://jsonplaceholder.typicode.com/users/${user.id}">more information</a></li>`;
    })
    userList += `</ul>`;

    userBlock.innerHTML += `${userList}`;
})

// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

    let basketblock = document.getElementById('basket');

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => {
        data.carts.forEach(cart => {

            cart.products.forEach(product => {

                basketblock.innerHTML += `
                    <div>
                        <p>Product ID: ${product.id}</p>
                        <p>Title: ${product.title}</p>
                        <p>Price: ${product.price}</p>
                        <p>Quantity: ${product.quantity}</p>
                        <p>Total: ${product.total}</p>
                        <hr>
                    </div>
                `;
            });
        });
    })
    .catch(error => console.error('Error fetching carts:', error));


// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

let recipeBlock = document.getElementById('recipe');
fetch('https://dummyjson.com/recipes')
.then(res => res.json())
    .then(data => {
        data.recipes.forEach(recipe => {

            let ul = '<ul>';
            recipe.ingredients.forEach(ingredient => {
                ul += `<li>${ingredient}</li>`;
            });
            ul += '</ul>';

            recipeBlock.innerHTML += `
                <div>
                    <p>Recipe ID: ${recipe.id}</p>
                    <p>Title: ${recipe.name}</p>
                    <p>Ingredients:</p>
                    ${ul}
                    <p>Instructions: ${recipe.instructions}</p>
                    <p>Preparation Time: ${recipe.prepTimeMinutes} minutes</p>
                    <hr>
                </div>
            `;
        });
    })
