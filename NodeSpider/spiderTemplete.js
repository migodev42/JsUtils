const { Builder, By, Key, until, WebDriver } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const sleep  = require('../../apis/Sleep.js')
const fs = require('fs');
const path = require('path');



class XXSpider{
  constructor(){

  }

  getChromeOption() {
    const chr = new Options();
    // const pluginPath=path.resolve(__dirname,'bomayu1111.crx');
    // const plugin=fs.readFileSync(pluginPath,'base64');    
    // chr.addExtensions(plugin);
    chr.addArguments('--disable-gpu');
    chr.addArguments('--disable-cache');
    // chr.addArguments('--headless')
    chr.addArguments("--log-level=3");
    chr.addArguments("--silent");
    return chr;
  }
 
  async initCHROME(url) {
    const chrOption = this.getChromeOption();
    let CHROME = await new Builder().forBrowser('chrome').setChromeOptions(chrOption).build();
    await CHROME.get(url);
    let curUrl = await CHROME.getCurrentUrl();
    while (curUrl !== url) {

      await CHROME && CHROME.quit();
      CHROME = await new Builder().forBrowser('chrome').setChromeOptions(chrOption).build();
      await CHROME.get(url);
      curUrl = await CHROME.getCurrentUrl();
      await sleep(30000);


    }
    return CHROME;
  }

  async main(){
    try{
      this.CHROME=this.initCHROME('https://www.lagou.com/gongsi/');

    }catch(e){
      console.log(e)
    }finally{
      this.CHROME && await this.CHROME.quit();
    }
  }


}

const spider=new XXSpider();
spider.main();
debugger;