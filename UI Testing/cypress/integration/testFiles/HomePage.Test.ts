/// <reference types = 'cypress' />
import { HomePage } from '../pageObject/HomePageAction'
import userData from '../../fixtures/data.json';
import userLogin from '../../fixtures/login.json';
import { FlipkartSelectors } from '../models/flipkart';

const flipkartSelectorsObject: FlipkartSelectors = new FlipkartSelectors();
const homePageObject: HomePage = new HomePage();

describe('Home Page Automation', function () {

    beforeEach(() => {
        homePageObject.visitFlipkart();
        homePageObject.performLogin().click();
    })

    it('Login with incorrect credentials', function () {
        cy.get(flipkartSelectorsObject.mobileSelector).type(userLogin.Mobile);
        cy.get(flipkartSelectorsObject.passwordSelector).type(userLogin.wrongPassword);
        cy.get(flipkartSelectorsObject.loginButtonSelector).click();
        cy.get(flipkartSelectorsObject.errorMessageSelector).should('have.text', userData.errorMessage);
    })

    it('Login with correct credentials', function () {
        cy.get(flipkartSelectorsObject.mobileSelector).type(userLogin.Mobile);
        cy.get(flipkartSelectorsObject.passwordSelector).type(userLogin.Password); // Need to update password
        cy.get(flipkartSelectorsObject.loginButtonSelector).click();
        cy.get(flipkartSelectorsObject.loginCheckDataSelector);
        cy.get(flipkartSelectorsObject.loginCheckDataSelector).should('have.text', userData.loginCheck);
    })
})