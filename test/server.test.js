var expect = require('chai').expect;
var request = require('request');

const rgbToHexUrl =
  'http://localhost:3000/rgbToHex?red=255&green=255&blue=255';

var hexToRgbUrl =
  'http://localhost:3000/hexToRgb?hex=00ff00';

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
      request(
        rgbToHexUrl,
        function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          expect(error).to.equal(null);
          done();
        }
      );
    });

    it('returns the color in hex', function (done) {
      request(
        rgbToHexUrl,
        function (error, response, body) {
          expect(body).to.not.be.a('null');
          expect(body).to.equal('ffffff');
          expect(error).to.equal(null);
          done();
        }
      );
    });
  });

  /**
   * [description]
   * @param  {[type]} ) {it('returns status 200', function () {});    it('returns the color in RGB', function () {});  } [description]
   * @return {[type]}   [description]
   */
  describe('Hex to RGB conversion', function () {
    it('returns status 200', function (done) {
      request(
        hexToRgbUrl,
        function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          expect(error).to.equal(null);
          done();
        }
      );
    });

    it('returns the color in RGB', function (done) {
      request(
        hexToRgbUrl,
        function (error, response, body) {
          expect(body).to.not.be.a('null');
          expect(error).to.equal(null);
          expect(body).to.equal('[0,255,0]');
          done();
        }
      );
    });
  });
});