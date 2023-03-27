/// <reference types = 'cypress' />
import filterData from '../../fixtures/filterData.json';
import * as data from '../../../cypress.json'
import { FlipkartSelectors } from '../models/flipkart';

const flipkartSelectorsObject: FlipkartSelectors = new FlipkartSelectors();

export class HomePage {

    visitFlipkart(): void {
        cy.visit(data.siteLink);
    }

    performLogin(): Cypress.Chainable {
        return cy.get(flipkartSelectorsObject.loginSelector);
    }

    searchingProduct(): void {
        cy.get(flipkartSelectorsObject.searchSelector).clear().type(filterData.searchData);
    }
}