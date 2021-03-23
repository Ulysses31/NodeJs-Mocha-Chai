var expect = require('chai').expect;
var request = require('request');

const url =
  'http://localhost:3000/rgbToHex?red=255&green=255&blue=255';

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
    it('returns status 200', function () {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(error).to.equal(null);
      });
    });
    it('returns the color in hex', function () {
      expect(response).to.not.equal(null);
    });
  });

  /**
   * [description]
   * @param  {[type]} ) {it('returns status 200', function () {});    it('returns the color in RGB', function () {});  } [description]
   * @return {[type]}   [description]
   */
  describe('Hex to RGB conversion', function () {
    it('returns status 200', function () {
      request(url, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(error).to.equal(null);
      });
    });
    it('returns the color in RGB', function () {
      expect(response).to.not.equal(null);
    });
  });
});
