'use strict'

const chai = require("chai");
const mocha = require("mocha");
const promised = require('chai-as-promised');
const axios = require('axios');
const describe = mocha.describe;
const expect = chai.expect;
chai.use(promised);

// Get method, using Chai assertions with Mocha as BDD
describe("GET - verify HTTP Status Codes", function () {

    it("should return 200 OK with a list of users", async function () {
        const url = "https://reqres.in/api/users?page=2";
        const response = await axios.get(url)
        const data = response.data;

        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal("OK");
        expect(data).to.be.an("object");

        console.log(data, '\n');
    })

    it("should return 404 for a Not Found request", async function () {
        const url = "https://reqres.in/api/users/23";
        axios.get(url)
        .catch(function(error) {
            if (error.response) {
                console.log(url);
                console.log(error.response.status);
                console.log(error.response.statusText, '\n');
                expect(error.response.status).to.equal(404);
                expect(error.response.statusText).to.equal("Not Found");
            }
            else if (error.request) {
                console.log(error.request);
            } 
            else { 
                console.log('Error', error.message); 
            }  
        });
    })

    it("should return 403 for a Forbidden request", async function () {
        const url = "https://demo.akeneo.com/api/rest/v1/categories";
        axios.get(url)
        .catch(function(error) {
            if (error.response) {
                console.log(url);
                console.log(error.response.status);
                console.log(error.response.statusText, '\n');
                expect(error.response.status).to.equal(403);
                expect(error.response.statusText).to.equal("Forbidden request");
            }
            else if (error.request) {
                // The request was made but no response was received `error.request` is an instance 
                // of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js    
                console.log(error.request);
            } 
            else { 
                // Something happened in setting up the request that triggered an Error     
                console.log('Error', error.message); 
            }   
            //console.log(error.config); 
        });
    })
})