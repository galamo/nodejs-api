# Products API:
1. Get products GET /products
2. Create Product POST /products
3. Edit product PUT /products/:product_id => req.body /products/1 { name:"phone" }


# HW 
1. Complete the cart feature
2. POST /Cart - return new cart id
3. POST Product - add product to cart { productId:1, cardId:2 }
4. GET /Cart/:id - get all cart products

<!-- [{ id:"cart_id , products:[] }] -->