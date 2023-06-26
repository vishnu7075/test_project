const Homepage = require('../pageobjects/homePage.page');

describe("QaWolf.com  ", () => {

    it("should be able to launch url", async () => {
        await Homepage.launchUrl();
        await expect(browser).toHaveUrl("https://www.qawolf.com/")
    });
it('user should be able to select  industries and click on startups', async () => {
        await Homepage.startUps('industries', 'Startups');
        expect(await Homepage.$pageHeader('Startups').isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/industries/startups");
    });
    it('user should be able to select  industries and click on startups', async () => {
        await Homepage.startUps('industries', 'Enterprise');
        expect(await Homepage.$pageHeader('Enterprise').isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/industries/enterprise");
    });
    it('user should be able to select  industries and click on Fintech', async () => {
        await Homepage.finTech('industries','Fintech');
        expect(await Homepage.$pageHeader('Fintech').isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/industries/fintech");
    });
    it('user should be able to select  industries and click on Healthcare', async () => {
        await Homepage.healthcare('industries','Healthcare');
        expect(await Homepage.$pageHeader('Healthcare').isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/industries/healthcare");
    });
    it('user should be able to select  industries and click on eCommerce & Retail', async () => {
        await Homepage.eCommerceRetail('industries','eCommerce & Retail');
        expect(await Homepage.$pageHeader('eCommerce & Retail').isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/industries/ecommerce-retail");
    });
    it('user should be able to select  industries and click on Blockchain & Web3', async () => {
        await Homepage.BlockchainWeb3('industries','Blockchain & Web3');
        expect(await Homepage.$pageHeader('Blockchain & Web3').isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/industries/blockchain-web3");
    });
    it('user should be able to select  industries and click on HR & Recruiting', async () => {
        await Homepage.hrRecruiting('industries','HR & Recruiting');
        expect(await Homepage.$pageHeader('HR & Recruiting').isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/industries/hr-recruiting");
    });
    it('user should be able to select  industries and click on Property Management', async () => {
        await Homepage.PropertyManagement('industries','Property Management');
        expect(await Homepage.$pageHeader('Property Management').isDisplayed()).toBe(true, 'Expect startup page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/industries/property-management");
    });
    it('user should be able to select  test anything and click on email', async () => {
        await Homepage.email('test anything');
        expect(await Homepage.$pageHeader('Emails').isDisplayed()).toBe(true, 'Expect email page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/capabilities/emails");
    });
    it('user should be able to select  test anything and click on IntegrationsAndApi', async () => {
        await Homepage.IntegrationsAndApi('test anything');
        expect(await Homepage.$pageHeader('Internal and third-party APIs').isDisplayed()).toBe(true, 'Expect IntegrationsAndApi page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/capabilities/apis");
    });
    it('user should be able to select  test anything and click on Multi-user flows', async () => {
        await Homepage.MultiUserFlows('test anything');
        expect(await Homepage.$pageHeader('Multi-user flows').isDisplayed()).toBe(true, 'Expect Multi-user flows page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/capabilities/multi-user-flows");
    });
    it('user should be able to select  test anything and click on SMS and phone calls', async () => {
        await Homepage.SmsAndPhoneCalls('test anything');
        expect(await Homepage.$pageHeader('SMS and phone calls').isDisplayed()).toBe(true, 'Expect SMS and phone calls page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/capabilities/sms-and-phone-calls");
    });
    it('user should be able to select  test anything and click on iFrames', async () => {
        await Homepage.iFrames('test anything');
        expect(await Homepage.$pageHeader('iFrames').isDisplayed()).toBe(true, 'Expect iFrames page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/capabilities/iframes");
    });
    it('user should be able to select  test anything and Chrome extensions', async () => {
        await Homepage.ChromeExtensions('test anything');
        expect(await Homepage.$pageHeader('Chrome extensions').isDisplayed()).toBe(true, 'Expect Chrome extensions page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/capabilities/chrome-extensions");
    });
    it('user should be able to  select content and caseStudy', async () => {
        await Homepage.content('content');
        expect(await Homepage.$pageHeader('End-to-end Success').isDisplayed()).toBe(true, 'Expect caseStudy page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/case-studies");
    });
    it('user should be able to  select content and Blog', async () => {
        await Homepage.Blog('content');
        expect(await Homepage.$pageHeader('Wolf Tracts').isDisplayed()).toBe(true, 'Expect Blog page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/blog");
    });
    it('user should be able to  select content and Buying guide', async () => {
        await Homepage.buyingGuide('content');
        expect(await Homepage.$pageHeader('BUYING').isDisplayed()).toBe(true, 'Expect SMS and phone calls page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/content/buying-guide");
    });
    it('user should be able to  select Get started', async () => {
        await Homepage.getStarted('Get started');
        expect(await Homepage.$pageHeader('started').isDisplayed()).toBe(true, 'Expect Get started page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/get-started");
    });
    it('user should be able to enter email and click on schedule demo button', async () => {
        await Homepage.scheduleDemo();
       // expect(await Homepage.$pageHeader('good').isDisplayed()).toBe(true, 'Expect Schedule demo page header to be displayed');
        await expect(browser).toHaveUrl("https://www.qawolf.com/schedule-a-demo");
    });
   
});