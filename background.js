// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';



chrome.runtime.onInstalled.addListener(function () {
  console.log("Console on Install");
});

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});

chrome.webNavigation.onCompleted.addListener(function() {
  //alert("This is my favorite website!");
  console.log("This is my favorite website!");
}, {url: [{urlMatches : 'https://github.com/Joaosilgo'}]});
/*
chrome.browserAction.setBadgeText({text: 'ON'});
chrome.browserAction.setBadgeBackgroundColor({color: '#A9A9A9'});

*/
chrome.runtime.onInstalled.addListener(function() {
  for (let key of Object.keys(kLocales)) {
    chrome.contextMenus.create({
      id: key,
      title: kLocales[key],
      type: 'normal',
      contexts: ['selection'],
    });
  }
});


const kLocales = {
  'com.au': 'Australia',
  'com.br': 'Brazil',
  'ca': 'Canada',
  'cn': 'China',
  'fr': 'France',
  'it': 'Italy',
  'co.in': 'India',
  'co.jp': 'Japan',
  'com.ms': 'Mexico',
  'ru': 'Russia',
  'co.za': 'South Africa',
  'co.uk': 'United Kingdom'
};


