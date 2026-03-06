/// <reference types="cypress"/>
describe('Buscar dispositivos', () => {
    it('deve buscar dispositivos com sucesso', () =>{
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/1'
        }).then((response) =>{

            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal("Google Pixel 6 Pro");
            expect(response.body.id).to.equal("1");
        });
    });
    it("cadastrar dispositivos com sucesso", () => {
        cy.request({
            method: "POST",
            body: {
                  "name": "Apple Macdog Pro 16",
                  "data": {
                  "year": 2020,
                  "price": 3000.99,
                  "CPU model": "Intel Core bark",
                  "Hard disk size": "11 TB"
                }
            },
        }).then((response) =>{
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal("Apple Macdog Pro 16");
            expect(response.body.id).not.empty
        })
    })

});