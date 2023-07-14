module.exports = {
    "TO CHECK THE NORMALIZATION OF GOOGLE": function (browser) {

        const emailfield = 'input[name="email"]'
        const emailId = 'kasmanifahim@gmail.com'

        const passfield = 'input[name="password"]'
        const pass = 'A@B123456'

        const phonefield = 'input[name="phone"]'
        const phone = '999999999'

        const companyfield = 'input[name="company"]'
        const company = 'Cyara'


        browser.url("https://staging.testrtc.com/signin")
        browser
            .pause(3 * 100)
            .maximizeWindow()
            .click("#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-5.MuiGrid-grid-lg-4.css-1me74c > div > div.MuiGrid-root.MuiGrid-container.css-1d3bbye > div:nth-child(1) > form > div > div:nth-child(6) > div > div > a > p")
            .setValue(emailfield, emailId)
            .pause(2 * 100)
            .setValue(passfield, pass)
            .pause(2 * 100)
            .setValue(phonefield, phone)
            .pause(2 * 100)
            .setValue(companyfield, company)
            .pause(2 * 100)
            .saveScreenshot('./screenshots/field.png')
            //Tick check box
            .click("#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-5.MuiGrid-grid-lg-4.css-1me74c > div > form > div > div:nth-child(5) > div > label > span.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.css-1fh6okl > input")
            .click("button[type='submit']")
            .pause(7 * 1000)
            .assert.visible('#notification-snackbar')
            .saveScreenshot('./screenshots/example2.png')
    



    }
}
