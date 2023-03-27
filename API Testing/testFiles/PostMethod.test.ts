import { describe, it } from "mocha";
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import * as data from '../data.json';
import * as testUserData from '../testUserData.json';

chai.use(chaiHttp);

describe('Https gorest POST Method', function () {

    it('Validate status code and response content  when new user is created', async function () {
        const response = await chai.request(data.baseURL)
            .post(data.postEndPoint)
            .send({
                "name": testUserData.newUserDetails.name,
                "email": testUserData.newUserDetails.email,
                "gender": testUserData.newUserDetails.gender,
                "status": testUserData.newUserDetails.status
            })
            .set('Content-Type', data.contentTypeValue)
            .set('Authorization', data.accessToken)
        expect(response).to.have.status(201);
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('name', testUserData.newUserDetails.name);
        expect(response.body).to.have.property('email', testUserData.newUserDetails.email);
        expect(response.body).to.have.property('gender', testUserData.newUserDetails.gender);
        expect(response.body).to.have.property('status', testUserData.newUserDetails.status);
    })

    it('Validate status code and response content when new user with an already existing details is created', async function () {
        const response = await chai.request(data.baseURL)
            .post(data.postEndPoint)
            .send({
                "name": testUserData.newUserDetails.name,
                "email": testUserData.newUserDetails.email,
                "gender": testUserData.newUserDetails.gender,
                "status": testUserData.newUserDetails.status
            })
            .set('Content-Type', data.contentTypeValue)
            .set('Authorization', data.accessToken)
        expect(response).to.have.status(422);
        expect(response.body[0]).to.have.property('field', data.postErrorField);
        expect(response.body[0]).to.have.property('message', data.message.postErrorMessage);
    })
})