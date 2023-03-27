/// <reference types = 'cypress' />
import filterData from '../../fixtures/filterData.json';
import { FlipkartSelectors } from '../models/flipkart';

const flipkartSelectorsObject: FlipkartSelectors = new FlipkartSelectors();

export class ProductPage {

    filterPrice(): void {
        cy.get(flipkartSelectorsObject.minRangeSelector).select(filterData.minPriceRange);
        cy.get(flipkartSelectorsObject.maxRangeSelector).select(filterData.maxPriceRange);
    }

    addToWishlist(): void {
        cy.get(flipkartSelectorsObject.addToWishlistSelector).each(($element) => {
            cy.wrap($element).click({ force: true });
        })
    }
}