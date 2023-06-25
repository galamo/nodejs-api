const { expect } = require("chai")
const axios = require("axios")



describe("POST /auth/sign-up", function () {

    

    it("Create new user Success ", async function () {
        const dummyUser = {
            email: `email${Date.now()}@gmail.com`,
            password: "1234",
            gender: "male",
            phone: "050602151"
        }
        const result = await axios.post("http://localhost:4000/auth/sign-up", dummyUser)
        expect(result.status).equal(200)
    })
    it("Create new user  With bad request ", async function () {
        try {
            const dummyEmail = `email${Date.now()}@gmail.com`
            const dummyUser = {
                email: dummyEmail,
                password: "1234",
                gender: "we",
                phone: "050602151"
            }
            const result = await axios.post("http://localhost:4000/auth/sign-up", dummyUser)
            throw new Error("TEST FAIELD")
        } catch (error) {
            expect(error?.response.status).equal(400)
        }
    })
    it("Create new user User already exist ", async function () {
        try {
            const dummyEmail = `email${Date.now()}@gmail.com`
            const dummyUser = {
                email: dummyEmail,
                password: "1234",
                gender: "male",
                phone: "050602151"
            }
            const result1 = await axios.post("http://localhost:4000/auth/sign-up", dummyUser)
            const result2 = await axios.post("http://localhost:4000/auth/sign-up", dummyUser)
            throw new Error("TEST FAIELD")
        } catch (error) {
            expect(error?.response.status).equal(409)
        }
    })
})

describe("POST /auth/login", function () {
    it("Create new user Success ", async function () {
        const dummyUser = {
            email: `email${Date.now()}@gmail.com`,
            password: "1234",
            gender: "male",
            phone: "0506021"
        }
        await axios.post("http://localhost:4000/auth/sign-up", dummyUser)
        const resultLogin = await axios.post("http://localhost:4000/auth/login", { email: dummyUser.email, password: dummyUser.password })
        expect(typeof resultLogin.data.token).equal("string")
    })

})