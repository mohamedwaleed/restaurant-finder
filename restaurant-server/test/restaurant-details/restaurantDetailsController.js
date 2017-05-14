'use strict';
/* global describe, it, beforeEach */

process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../../app');
chai.should();

chai.use(chaiHttp);

describe('Restaurants detials', () => {

  describe('/GET restaurant details', () => {
      it('it should GET restaurant details', (done) => {
        chai.request(app)
            .get('/restaurant/details?placeId=ChIJK7qCJHdGWBQRd6_5JIeM9r0&key=AIzaSyBvh95idRI46rYYWqQpoHatZve2GoWIfUg')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.not.eq(undefined);
                res.body.should.be.not.eq(null);
                res.body.should.be.a('object');
                res.body.success.should.be.eql(true);
              done();
            });
      });
  });

  describe('/GET restaurant details', () => {
      it('it should not GET restaurant details in case of missing params', (done) => {
        chai.request(app)
            .get('/restaurant/details?key=AIzaSyBvh95idRI46rYYWqQpoHatZve2GoWIfUg')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.not.eq(undefined);
                res.body.should.be.not.eq(null);
                res.body.should.be.a('object');
                res.body.success.should.be.eql(false);
              done();
            });
      });
  });

});