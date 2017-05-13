'use strict';
/* global describe, it, beforeEach */

process.env.NODE_ENV = 'test';

var mongoose = require("mongoose");

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../../app');
chai.should();

chai.use(chaiHttp);

describe('Reviews', () => {
    beforeEach((done) => { //Before each test we empty the database
        mongoose.model('Review').remove({}, () => {
           done();
        });
    });

  describe('/GET place reviews', () => {
      it('it should GET all place reviews', (done) => {
        chai.request(app)
            .get('/restaurant/review/ChIJK7qCJHdGWBQRd6_5JIeM9r0')
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

  describe('/POST save place reviews', () => {
      it('it should save place reviews', (done) => {

        var placeReview = {
            placeId: 'ChIJK7qCJHdGWBQRd6_5JIeM9r0',
            date: '2017-1-1',
            name: 'Mohamed',
            description: 'Good restaurant',
            rating: 3
        };
        chai.request(app)
            .post('/restaurant/review/')
            .send(placeReview)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.not.eq(undefined);
                res.body.should.be.not.eq(null);
                res.body.success.should.be.eql(true);
              done();
            });
      });
  });

  describe('/POST save place reviews', () => {
      it('it should not save place reviews in case missing data', (done) => {

        var placeReview = {
        };
        chai.request(app)
            .post('/restaurant/review/')
            .send(placeReview)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.not.eq(undefined);
                res.body.should.be.not.eq(null);
                res.body.success.should.be.eql(false);
              done();
            });
      });
  });

});