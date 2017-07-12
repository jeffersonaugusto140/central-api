'use strict'

// mocha --grep crawlerDolarHoje

var chai = require('chai');
var expect = chai.expect;

describe('crawlerDolarHoje', function () {
    var service = require('../logic/service/crawlerDolarHojeService');
    var crawlerContentService = require('../logic/service/crawlerContentService');
    var crawlerContentServiceStub = require('./stubs/crawlerDolarHojeStub');

    crawlerContentService = crawlerContentServiceStub.crawlerContentServiceStub(crawlerContentService);

    function expectedRetrun(data) {
        expect(data, 'Retorno não pode ser nulo.').to.not.be.null;
        expect(data, 'Retorno deve conter propriedade [comercialValue].').to.have.property('comercialValue');
        expect(data, 'Retorno deve conter propriedade [turismValue].').to.have.property('turismValue');
        expect(data, 'Retorno deve conter propriedade [sourseName].').to.have.property('sourseName');
        expect(data, 'Retorno deve conter propriedade [timeQuery].').to.have.property('timeQuery');
    }

    it('Deve validar atributos quando requisitar cotação.', function (done) {
        service.get(crawlerContentService, function (data) {
            expectedRetrun(data);
            done();
        }) 
    });

    it('Deve retornar dólar comercial igual a 3,3080 e dólar turismo 3,4400 quando requisitar cotação.', function (done) {
        service.get(crawlerContentService, function (data) {
            expectedRetrun(data);
            
            expect(data.comercialValue).to.be.equal(3.3080);
            expect(data.turismValue).to.be.equal(3.4400);

            done();
        }) 
    });

    it('Deve retornar sourceName igual a [Dólar Hoje] quando requisitar cotação.', function (done) {
        service.get(crawlerContentService, function (data) {
            expectedRetrun(data);
            
            expect(data.comercialValue).to.be.equal(3.3080);
            expect(data.turismValue).to.be.equal(3.4400);

            done();
        }) 
    });
})
