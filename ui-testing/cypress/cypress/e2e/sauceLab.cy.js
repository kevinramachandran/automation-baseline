describe("Sauce Lab Testing", () => {

    it.skip("Login Testing", () => {

        cy.visit("https://www.saucedemo.com/");

        cy.wait(2000);


        cy.get("#user-name").clear().type("standard_user");
        cy.get("#password").clear().type("secret_sauce");

        cy.get("#login-button").click();


        cy.get("[class='header_label']").should('have.text', 'Swag Labs')

    });

    it("Sorting the product", () => {

        cy.visit("https://www.saucedemo.com/");

        //cy.wait(2000);


        cy.get("#user-name").clear().type("standard_user");
        cy.get("#password").clear().type("secret_sauce");

        cy.get("#login-button").click();


        cy.get("[class='header_label']").should('have.text', 'Swag Labs')

        cy.get("select.product_sort_container").select("Price (low to high)")

    });

});