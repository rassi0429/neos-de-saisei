'use strict';

// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

// Log `title` of current active web page
// const pageTitle = document.head.getElementsByTagName('title')[0].innerHTML;
// console.log(
//   `Page titl1e is: '${pageTitle}' - evaluated by Chrome extension's 'contentScript.js' file`
// );
setTimeout(() => {
  document.getElementById("flex").innerHTML += "<button id='kamiBtn'>Neosで再生</button>"
  document.getElementById("kamiBtn").addEventListener("click", sendWH)
}, 2000)

function sendWH() {
  chrome.storage.sync.get(["data"], result => {
    let webHookAddress = result.data.webHookAddress;
    let userName = result.data.userName;
    const regex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/


    const xml = new XMLHttpRequest();
    xml.open("POST", "https://textbox.kokoa.dev/kokoa/neosdesaisei/"+webHookAddress, false);
    xml.setRequestHeader("content-type", "text/plain");
    xml.send(window.location)
  })
}

