/// <reference types = 'cypress' />
import { FlipkartSelectors } from '../models/flipkart';

const flipkartSelectorsObject: FlipkartSelectors = new FlipkartSelectors();

export class WishlistPage {

    performPriceValidation(): void {
        let totalPrice: number = 0;
        cy.get(flipkartSelectorsObject.eachItemPriceSelector).each(($price) => {
            cy.wrap($price)
                .then(itemPrice => {
                    cy.log(itemPrice.text());
                    let singleItemPrice: string = itemPrice.text().slice(1).replace(',', '');
                    let elementPrice: number = parseInt(singleItemPrice);
                    totalPrice = elementPrice + totalPrice;
                    cy.log("The total price is equal to ₹" + totalPrice.toString());
                })
        })
    }
}