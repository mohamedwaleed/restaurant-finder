'use strict';
/* global describe, it, beforeEach */

process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../../app');
chai.should();

chai.use(chaiHttp);

describe('Restaurants list', () => {

  describe('/GET nearby restaurants', () => {
      it('it should GET all nearby restaurants', (done) => {
        chai.request(app)
            .get('/restaurant/nearby?type=restaurant&location=29.99382,31.16988&radius=1000&key=AIzaSyBvh95idRI46rYYWqQpoHatZve2GoWIfUg')
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

    describe('/GET nearby restaurants', () => {
        it('it should not GET all restaurants in case of missing parameters', (done) => {
          chai.request(app)
              .get('/restaurant/nearby?location=29.99382,31.16988&radius=1000&key=AIzaSyBvh95idRI46rYYWqQpoHatZve2GoWIfUg')
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