# Products API:
1. Get products GET /products
2. Create Product POST /products
3. Edit product PUT /products/:product_id => req.body /products/1 { name:"phone" }


# HW 19-6
1. Complete the cart feature
2. POST /Cart - return new cart id
3. POST Product - add product to cart { productId:1, cardId:2 }
4. GET /Cart/:id - get all cart products



# HW 21-6
1. Protect the Create Product API - only if user have valid token
valid = token sent from user + token exist in tokens array
2. Advanced - Protect all your application except - login/sign up
