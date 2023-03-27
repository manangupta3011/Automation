/// <reference types = 'cypress' />
import { HomePage } from '../pageObject/HomePageAction'
import { ProductPage } from '../pageObject/ProductPageAction'
import userLogin from '../../fixtures/login.json';
import { FlipkartSelectors } from '../models/flipkart';

const flipkartSelectorsObject: FlipkartSelectors = new FlipkartSelectors();
const homePageObject: HomePage = new HomePage();
const productPageObject: ProductPage = new ProductPage();

describe('Product Page Automation', function () {

    beforeEach(() => {
        homePageObject.visitFlipkart();
        homePageObject.performLogin().click();
        cy.get(flipkartSelectorsObject.mobileSelector).type(userLogin.Mobile);
        cy.get(flipkartSelectorsObject.passwordSelector).type(userLogin.Password); // Need to update password
        cy.get(flipkartSelectorsObject.loginButtonSelector).click();
        cy.get(flipkartSelectorsObject.loginCheckDataSelector);
    })

    it('Add products to wishlist', function () {
        homePageObject.searchingProduct();
        productPageObject.filterPrice();
        productPageObject.addToWishlist();
    })
})