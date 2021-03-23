process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = require('chai').expect;
var request = require('request');
var server = require('../server');
var should = chai.should();

const rgbToHexUrl = '/rgbToHex?red=255&green=255&blue=255';

var hexToRgbUrl = '/hexToRgb?hex=00ff00';

chai.use(chaiHttp);

/**
 * [description]
 * @param  {[type]} ) {describe('RGB to Hex conversion', function () {    it('returns status 200', function () {});    it('returns the color in hex', function () {});  });  describe('Hex to RGB conversion', function () {    it('returns status 200', function () {});    it('returns the color in RGB', function () {});  });} [description]
 * @return {[type]}   [description]
 */
describe('Color Code Converter API', function () {
  /**
   * [description]
   * @param  {[type]} ) {it('returns status 200', function () {});    it('returns the color in hex', function () {});  } [description]
   * @return {[type]}   [description]
   */
  describe('RGB to Hex conversion', function () {
    it('returns status 200', function (done) {
      chai
        .request(server)
        .get(rgbToHexUrl)
        .end((err, res, body) => {
          if (err) {
            done(err);
          } else {
            expect(err).to.equal(null);
            expect(res.statusCode).to.equal(200);
            done();
          }
        });
    });

    it('returns the color in hex', function (done) {
      chai
        .request(server)
        .get(rgbToHexUrl)
        .end((err, res, body) => {
          if (err) {
            done(err);
          } else {
            expect(err).to.equal(null);
            expect(res.text).to.equal('ffffff');
            done();
          }
        });
    });
  });

  /**
   * [description]
   * @param  {[type]} ) {it('returns status 200', function () {});    it('returns the color in RGB', function () {});  } [description]
   * @return {[type]}   [description]
   */
  describe('Hex to RGB conversion', function () {
    it('returns status 200', function (done) {
      chai
        .request(server)
        .get(hexToRgbUrl)
        .end((err, res, body) => {
          if (err) {
            done(err);
          } else {
            expect(err).to.equal(null);
            expect(res.statusCode).to.equal(200);
            done();
          }
        });
    });

    it('returns the color in RGB', function (done) {
      chai
        .request(server)
        .get(hexToRgbUrl)
        .end((err, res, body) => {
          if (err) {
            done(err);
          } else {
            expect(err).to.equal(null);
            expect(res.text).to.equal('[0,255,0]');
            done();
          }
        });
    });
  });
});