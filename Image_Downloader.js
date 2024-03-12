const axios = require('axios');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
//const Creating = require('./Creating')

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://br.pinterest.com/pin/633387433962269/');

  const img = await page.waitForSelector('img');
  const SRC = await img?.evaluate(el => el.src)

  const H1 = await page.waitForSelector('H1')
  const H1Content = await H1?.evaluate(el => el.innerText)

  const website = 'https://br.pinterest.com/pin/633387433962269/'
  const urlObject = new URL(website)

  const Domain = (urlObject.hostname.split('.')[1])

  const Folder_Path = `C:/Users/Edson/Downloads/${Domain}`

  //const Folder_Path = 'Hello';

  module.exports = Folder_Path;

  const Path_File = `C:/Users/Edson/Downloads/${Domain}/${H1Content}.jpg`

  const Checking_Folder = async() => {
    fs.exists(path.join(Folder_Path),
    (exists) => {
      if(exists){
        console.log('Esse diretório já existe')
      }else{
        console.log('Diretório ainda não existe')
        Creating
      }
    })
  }

  //Checking_Folder()
  browser.close()
})()