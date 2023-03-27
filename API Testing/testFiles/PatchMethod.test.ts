import { describe, it } from "mocha";
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import * as data from '../data.json';
import * as testUserData from '../testUserData.json';

chai.use(chaiHttp);

describe('Https gorest PATCH Method', function () {

    it('Validate status code and response content when we request valid end point', async function () {
        const response = await chai.request(data.baseURL)
            .patch(data.patchEndPoint[0] + testUserData.patchUserId.valid)
            .set('Content-Type', data.contentTypeValue)
            .set('Authorization', data.accessToken)
            .send({
                "gender": testUserData.updateUserDetail.gender,
                "name": testUserData.updateUserDetail.name
            })
        expect(response).to.have.status(200);
        expect(response.body).to.have.property('gender', testUserData.updateUserDetail.gender);
        expect(response.body).to.have.property('name', testUserData.updateUserDetail.name);
    })

    it('Validate status code and response content when user id is invalid', async function () {
        const response = await chai.request(data.baseURL)
            .patch(data.patchEndPoint[1] + testUserData.patchUserId.invalid)
            .set('Content-Type', data.contentTypeValue)
            .set('Authorization', data.accessToken)
            .send({
                "gender": testUserData.updateUserDetail.gender,
                "name": testUserData.updateUserDetail.name
            })
        expect(response).to.have.status(404);
        expect(response.body).to.have.property('message', data.message.patchErrorMessage);
    })
})