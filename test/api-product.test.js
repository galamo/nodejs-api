const { expect } = require("chai");
const axios = require("axios")


describe("POST /Product", function () {
    it("Create new Product - Success ", async function () {
        const dummyUser = {
            email: `email${Date.now()}@gmail.com`,
            password: "1234",
            gender: "male",
            phone: "050602151"
        }
        const signUpResult = await axios.post("http://localhost:4000/auth/sign-up", dummyUser)
        expect(signUpResult.status).equal(200)

        const resultLogin = await axios.post("http://localhost:4000/auth/login", { email: dummyUser.email, password: dummyUser.password })
        // console.log(resultLogin.data.token)


        const product = {
            id: 1243,
            title: "product dummy",
            category: "drinks",
            images: ["a"],
            rating: 1.2
        }
        const result = await axios.post("http://localhost:4000/products/new", product, {
            headers: {
                authorization: resultLogin.data.token
            }
        })
        const { data } = result;
        expect(result.status).equal(200)
        expect(data.message).equal("Product Added!")
    })
    it("Create new Product - Failed ", async function () {
        try {
            const product = {
                id: 1243,
                title: "product dummy",
                category: "drinks111",
                images: ["a"],
                rating: 1.2
            }
            const result = await axios.post("http://localhost:4000/products/new", product)
            throw new Error("FAILED")
        } catch (error) {
            expect(error.response.status).equal(400)
        }
    })
})

