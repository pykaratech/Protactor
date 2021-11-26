
const { percySnapshot } = require('@percy/protractor')
describe('Integration test with visual testing', function () {
    it('Loads the app', function () {
        browser.get('https://localhost:44323/')
        percySnapshot('My snapshot')
    })
})
