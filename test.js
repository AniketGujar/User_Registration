const assert = require('chai').assert;
let main = require('./main');

// First Name Test
describe('First Name pattern validation', function () {
    it('should return when the value is a object', function () {
        let firstName = main.firstName('Aniket');
        assert.isOk(firstName, 'the first name passes test');
    })
    it('should return when the value is not object', function () {
        let firstName = main.firstName('');
        assert.isOk(firstName, 'the first name fails the test');
    })
});

// Last Name Test
describe('Last Name pattern validation', function () {
    it('should return  when the value is a object', function () {
        let lastName = main.lastName('Gujar');
        assert.isOk(lastName, 'the last name passes test');
    })
    it('should return when the value is not object', function () {
        let lastName = main.lastName('af');
        assert.isOk(lastName, 'the last name fails the test');
    })
});

// Email Validation Test
describe('Email pattern validation', function () {
    it('should return when the value is a object', function () {
        let email = main.userEmail('aniketgujar@gmial.co.in');
        assert.isOk(email, 'the email passes test');
    })
    it('should return when the value is not object', function () {
        let email = main.userEmail('aniketgujar@.in');
        assert.isOk(email, 'the email fails the test');
    })
});

// Mobile Number Validation Test
describe('Mobile pattern validation', function () {
    it('should return  when the value is a object', function () {
        let number = main.mobileNumber('91 7878965412');
        assert.isOk(number, 'the mobile number passes test');
    })
    it('should return when the value is not object', function () {
        let number = main.mobileNumber('0123456789');
        assert.isOk(number, 'the mobile number fails the test');
    })
});

// Password Validation Test
describe('Password pattern validation', function () {
    it('should return  when the value is a object', function () {
        let password = main.userPassword('Ani@12ket');
        assert.isNotNull(password, 'the password passes test');
    })
    it('should return when the value is not object', function () {
        let password = main.userPassword('Adn12ke');
        assert.isNotNull(password, 'the password fails the test');
    })
});

