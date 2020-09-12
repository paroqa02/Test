var webdriver = require('selenium-webdriver');


// setup and build selenium driver object
function searchTextOnGoogle() 

{

    //open browser
    var driver= new webdriver.Builder().forBrowser('chrome').build();

    //navigate to a url, serach for a text and get title pf page

    driver.get('https://www.lambdatest.com').then(function()
    {
        driver.findElement(WebDriver.By.linkText('Automation')).click().then(function()

        {
            driver.getTitle().then(function(title)

            {
                setTimeout(function()
                    {
                        console.log(title);
                        driver.quit();

                    }, 5000);
            });
            
        });
    });
}

searchTextOnGoogle();





/*var driver = new webdriver.Builder().usingServer('https://hub-cloud.browserstack.com/wd/hub').
withCapabilities(capabilities).build();
driver.get('https://www.google.com').then(function(){
  driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack').then(function(){
    driver.getTitle().then(function(title) {
      console.log(title);
      driver.quit();
    });
  });
});*/ 
