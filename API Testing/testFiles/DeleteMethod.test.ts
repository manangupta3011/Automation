import { describe, it } from "mocha";
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import * as data from '../data.json';
import * as testUserData from '../testUserData.json';

chai.use(chaiHttp);

describe('Https gorest DELETE Method', function () {

    it('Validate status code and response content when user id is valid', async function () {
        const response = await chai.request(data.baseURL)
            .delete(data.deleteEndPoint + testUserData.deleteUserId.valid)
            .set('Content-Type', data.contentTypeValue)
            .set('Authorization', data.accessToken)
        expect(response).to.have.status(204);
        expect(response.body).to.not.have.property('name', testUserData.deleteUserDetail.name);
    })

    it('Validate status code and response content when user id is invalid', async function () {
        const response = await chai.request(data.baseURL)
            .delete(data.deleteEndPoint + testUserData.deleteUserId.invalid)
            .set('Content-Type', data.contentTypeValue)
            .set('Authorization', data.accessToken)
        expect(response).to.have.status(404);
        expect(response.body).to.have.property('message', data.message.deleteErrorMessage);
    })
})