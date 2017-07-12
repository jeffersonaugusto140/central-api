'use strict';

// -- mocha --grep crawlerContent

var chai = require('chai');
var expect = chai.expect;
var util = require('util');
var crawlerContent = require('../logic/service/crawlerContentService');

var urlDolarHoje = 'http://www.dolarhoje.net.br';
var urlUol = 'https://economia.uol.com.br/cotacoes/cambio/dolar-comercial-estados-unidos';

describe('crawlerContent', function () {
    it('Deve retornar conteúdo em branco quando options for nulo.', function (done) {
        // Arrange
        var options = null;

        // Act - Assert
        crawlerContent.get(options, function (ret) {
            expect(ret.success, 'Retorno deve ser FALSE').to.be.false;
            expect(ret.content, 'Conteúdo deve ser vazio').to.be.empty;
            done();
        });
    });

    it('Deve retornar conteúdo em branco quando options não for válido.', function (done) {
        // Arrange
        var options = {};

        // Act - Assert
        crawlerContent.get(options, function (ret) {
            expect(ret.success, 'Retorno deve ser FALSE').to.be.false;
            expect(ret.content, 'Conteúdo deve ser vazio').to.be.empty;
            done();
        });
    });

    it('Deve retornar conteúdo em branco quando requisitar página que não existe.', function (done) {
        // Arrange
        var options = {
            url: 'www.testeteste.com.br'
        };

        // Act - Assert
        crawlerContent.get(options, function (ret) {
            expect(ret.success, 'Retorno deve ser FALSE').to.be.false;
            expect(ret.content, 'Conteúdo deve ser vazio').to.be.empty;
            done();
        });
    });

    it('Deve retornar conteúdo html quando requisitar url dolar hoje.', function (done) {
        // Arrange
        var options = {
            url: urlDolarHoje
        };

        // Act - Assert
        crawlerContent.get(options, function (ret) {
            expect(ret.success, 'Retorno deve ser TRUE').to.be.true;
            expect(ret.content, 'Conteúdo deve ser preenchido.').to.have.string('html');
            done();
        });
    });

    it('Deve retornar conteúdo html quando requisitar url uol.', function (done) {
        // Arrange
        var options = {
            url: urlUol
        };

        // Act - Assert
        crawlerContent.get(options, function (ret) {
            expect(ret.success, 'Retorno deve ser TRUE').to.be.true;
            expect(ret.content, 'Conteúdo deve ser preenchido.').to.have.string('html');
            done();
        });
    });
})