document.addEventListener("DOMContentLoaded", function () {
    fetch('https://s3.amazonaws.com/open-to-cors/assignment.json') 
        .then(response => response.json())
        .then(data => {
            const products = data.products;
            const productIds = Object.keys(products);

            // Sort productIds based on descending popularity
            productIds.sort((a, b) => products[b].popularity - products[a].popularity);

            const tableBody = document.querySelector('#productTable tbody');

            // Populate the table with sorted data
            productIds.forEach(productId => {
                const product = products[productId];
                const row = tableBody.insertRow();

                const titleCell = row.insertCell(0);
                titleCell.textContent = product.title;

                const priceCell = row.insertCell(1);
                priceCell.textContent = product.price;

                const popularityCell = row.insertCell(2);
                popularityCell.textContent = product.popularity;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});