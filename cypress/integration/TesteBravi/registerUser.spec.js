const faker = require('faker');
const phone = faker.phone.phoneNumberFormat();
function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return match[1] + match[2] + match[3]
    }
    return null
}

describe('Register a user with required fields', function(){
    const email = faker.internet.email();
    it('Write full name', function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Felipe')
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('Neves')
    })
    it('Write e-mail', function(){
        cy.get('#eid > .form-control').type(email)
    })
    it('Write phone number', function(){
        cy.get(':nth-child(4) > .col-md-4 > .form-control').type(formatPhoneNumber(phone))
    })
    it('Select gender', function(){
        cy.get(':nth-child(1) > .ng-pristine').click()
    })
    it('Select country', function(){
        cy.get('#countries').select('Brazil')
    })
    it('Select date of birth', function(){
        cy.get('#yearbox').select('1998')
        cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('April')
        cy.get('#daybox').select('14')
    })
    it('Write an password', function(){
        cy.get('#firstpassword').type('Felipe123')
    })
    it('Confirm the password', function(){
        cy.get('#secondpassword').type('Felipe123')
    })
    it('Submit user register', function(){
        cy.get('#submitbtn').click()
    })
})