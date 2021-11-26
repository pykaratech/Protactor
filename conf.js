
const { percySnapshot } = require('@percy/protractor')
describe('Integration test with visual testing', function () {
    it('Loads the app', function () {
        browser.get('http://example.com')
        percySnapshot('My snapshot')
    })
})