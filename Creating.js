const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const Folder_Path = require('./Image_Downloader.js')

console.log(Folder_Path)
//const empty = require('empty-dir')

/*(async() => {
  ///Iniciando o Puppeteer
  const Browser = await puppeteer.launch() //Iniciar o puppeteer
  const Page = await Browser.newPage()
  await Page.goto('https://br.pinterest.com/pin/1054405331495515152/')

  //Acessando o HTML da página

  const Img = await Page.waitForSelector('img')
  const SRC = await Img?.evaluate(el => el.src)
  const H1 = await Page.waitForSelector('H1')
  const H1_Content = await H1?.evaluate(el => el.innerText)

  const Website = 'https://br.pinterest.com/pin/1054405331495515152/'
  const URL_Objeto = new URL(Website)
  const Domain = (URL_Objeto.hostname.split('.')[1])

  const Folder_Path = `C:/Users/Edson/Downloads/${Domain}`

  const Creating_Folder = async() => {
    fs.mkdir(path.join(Folder_Path),
    (err) => {
      if(err){
        console.error(`${err}`)
      }else{
        console.log('Diretório criado com sucesso')
      }
    })
  }

  Creating_Folder()
  Browser.close()
})()

module.exports = Creating_Folder()
/*module.exports.Checking_Emptiness = async() => {
  const response = 
}*/