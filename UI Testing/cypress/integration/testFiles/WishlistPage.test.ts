/// <reference types = 'cypress' />
import { HomePage } from '../pageObject/HomePageAction'
import { WishlistPage } from '../pageObject/WishlistPageAction'
import userData from '../../fixtures/data.json';
import userLogin from '../../fixtures/login.json';
import { FlipkartSelectors } from '../models/flipkart';

const flipkartSelectorsObject: FlipkartSelectors = new FlipkartSelectors();
const homePageSelectorsObject: HomePage = new HomePage();
const wishlistPageSelectorsObject: WishlistPage = new WishlistPage();

describe('Wishlist Page Automation', function () {

    beforeEach(() => {
        homePageSelectorsObject.visitFlipkart();
        homePageSelectorsObject.performLogin().click();
        cy.get(flipkartSelectorsObject.mobileSelector).type(userLogin.Mobile);
        cy.get(flipkartSelectorsObject.passwordSelector).type(userLogin.Password); // Need to update password
        cy.get(flipkartSelectorsObject.loginButtonSelector).click();
        cy.get(flipkartSelectorsObject.loginCheckDataSelector);
    })

    it('Price validation for each product', function () {
        cy.get(flipkartSelectorsObject.wishlistCartSelector).trigger('mouseover').invoke('show');
        cy.contains(userData.wishlistText).click({ force: true });
        cy.get(flipkartSelectorsObject.wishlistItemsSelector)
            .its('length')
            .then(totalItems => {
                cy.get(flipkartSelectorsObject.totalItemSelector).should('contain', totalItems);
            })
        wishlistPageSelectorsObject.performPriceValidation();
    })
})