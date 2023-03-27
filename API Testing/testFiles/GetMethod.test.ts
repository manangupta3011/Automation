import { describe, it } from "mocha";
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import * as data from '../data.json';

chai.use(chaiHttp);

describe('Https gorest GET Method', function () {

    it('Validate status code and response content when we request valid end point', async function () {
        const response = await chai.request(data.baseURL)
            .get(data.getEndPoint)
            .set('Content-Type', data.contentTypeValue)
            .set('Authorization', data.accessToken)
        console.log(response);
        expect(response).to.have.status(200);
        expect(response.body).to.be.an('array').of.length.greaterThan(0);
        expect(response.body[0]).to.have.property('id');
        expect(response.body[0]).to.have.property('name');
        expect(response.body[0]).to.have.property('email');
        expect(response.body[0]).to.have.property('gender');
        expect(response.body[0]).to.have.property('status');
    })

    it('Validate status code when we request invalid end point', async function () {
        const response = await chai.request(data.baseURL)
            .get(data.getWrongEndPoint)
            .set('Content-Type', data.contentTypeValue)
            .set('Authorization', data.accessToken)
        expect(response).to.have.status(404);
    })
})