'use strict';

var chai = require('chai');
var expect = chai.expect;
var service = require('../logic/service/userService');
var util = require('util');

process.env.NODE_ENV = "testing";

describe('userService - create user', function () {
    it('Deve retornar success = FALSE quando usuário não for infromado.', function(done){
        // Arrange
        var user = {};

        // Act - Assert
        service.add(user, function (ret) {
            expect(ret.success).to.be.false;
            done();
        });
    });

    it('Deve retornar success = FALSE quando e-mail não for informado.', function(done){
        // Arrange
        var user = {
            email: ''
        };

        // Act - Assert
        service.add(user, function (ret) {
            expect(ret.success).to.be.false;
            done();
        });
    });

    it('Deve retornar success = FALSE quando e-mail informado não válido.', function(done){
        // Arrange
        var user = {
            email: ''
        };

        // Act - Assert
        service.add(user, function (ret) {
            expect(ret.success).to.be.false;
            done();
        });
    });

    it('Deve retornar success = FALSE quando password não for informado.', function(done){
        // Arrange
        var user = {
            email: 'testemail@testemail.com',
            password: ''
        };

        // Act - Assert
        service.add(user, function (ret) {
            expect(ret.success).to.be.false;
            done();
        });
    });

    it('Deve retornar success = FALSE quando usuário informado já existir na base de dados.', function(done){
        // Arrange
        var newEmail = util.format('testemail%s@testemail.com', new Date().getMilliseconds());

        var user = {
            name: 'Name of user',
            email: newEmail,
            password: '123456',
            claims: [],
            roles: ['user_financial']
        };

        // Act - Assert
        service.add(user, function (ret) {
            service.add(user, function (ret2) {
                expect(ret2.success).to.be.false;
                expect(ret2.message).to.have.string('User already exists in the database.');

                done();
            });
        });
    });

    it('Deve retornar success = TRUE quando usuário informado conter todos os campos preenchidos.', function(done){
        // Arrange
        var user = {
            name: 'Name of user',
            email: util.format('testemail%s@testemail.com', new Date().getMilliseconds()),
            password: '123456',
            claims: [{
                key: 'view', value: true
            }, {
                key: 'lastLogin', value: '01/01/2017 14:34:22'
            }],
            roles: ['user_financial']
        };

        // Act - Assert
        service.add(user, function (ret) {
            expect(ret.success).to.be.true;
            done();
        });
    });
});

describe('userService - request a new token', function () {
    
    it('Deve retornar [User not found] quanto não informar usuário.', function (done) {
         // Arrange
         var user = {};

         // Act - Asert
         service.resquestToken(user, function(ret){
             expect(ret.message).to.have.string('User not found');
             done();
         });
    });

    it('Deve retornar [User not found] quanto informar usuário inexistente.', function (done) {
        // Arrange 
        var user = {
            name: 'Name of user',
            email: 'testeemailquenaoexiste@teste.com',
            password: '123456',
            claims: [],
            roles: ['user_financial']
        };
        
        // Act - Assert
        service.resquestToken(user, function (ret) {
            expect(ret.message).to.have.string('User not found');
            done();
        });
    });

    it('Deve retornar [Wrong password] quanto informar senha inválida.', function (done) {
        // Arrange
        var newEmail = util.format('testemail%s@testemail.com', new Date().getMilliseconds());

        var newUser = function () {
            return {
                name: 'Name of user',
                email: newEmail,
                password: '123456',
                claims: [],
                roles: ['user_financial']
            };
        }

        var userForAdd = newUser();
        
        var userForRequestToken = newUser();
        userForRequestToken.password = '123123';
        // Act - Assert
        service.add(userForAdd, function (ret1) {
            service.resquestToken(userForRequestToken, function (ret) {
                expect(ret.message).to.have.string('Wrong password');
                done();
            });
        });
    });
  
    it('Deve retornar [Enjoy your token!] quanto informar e-mail e senhas corretos.', function (done) {
        // Arrange
        var newEmail = util.format('testemail%s@testemail.com', new Date().getMilliseconds());

        var newUser = function () {
            return {
                name: 'Name of user',
                email: newEmail,
                password: '123456',
                claims: [],
                roles: ['user_financial']
            };
        }

        var userForAdd = newUser();
        
        var userForRequestToken = newUser();

        // Act - Assert
        service.add(userForAdd, function (ret1) {
            service.resquestToken(userForRequestToken, function (ret) {
                expect(ret.message).to.have.string('Enjoy your token!');
                done();
            });
        });
    });
})