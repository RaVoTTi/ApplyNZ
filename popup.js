document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("personal-details");

    button.addEventListener("click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const currentTab = tabs[0];
            chrome.scripting.executeScript({
                target: {tabId: currentTab.id},
                files: ['content.js']
            }, () => {
                chrome.tabs.sendMessage(currentTab.id, {action: "PERSONAL_DETAILS"}, (response) => {
                    alert(response);
                });
            });
        });
    });
    const identification = document.getElementById("identification");

    identification.addEventListener("click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const currentTab = tabs[0];
            chrome.scripting.executeScript({
                target: {tabId: currentTab.id},
                files: ['content.js']
            }, () => {
                chrome.tabs.sendMessage(currentTab.id, {action: "IDENTIFICATION"}, (response) => {
                    alert(response);
                });
            });
        });
    });
    const occupation = document.getElementById("occupation");

    occupation.addEventListener("click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const currentTab = tabs[0];
            chrome.scripting.executeScript({
                target: {tabId: currentTab.id},
                files: ['content.js']
            }, () => {
                chrome.tabs.sendMessage(currentTab.id, {action: "OCCUPATION"}, (response) => {
                    alert(response);
                });
            });
        });
    });
    const health = document.getElementById("health");

    health.addEventListener("click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const currentTab = tabs[0];
            chrome.scripting.executeScript({
                target: {tabId: currentTab.id},
                files: ['content.js']
            }, () => {
                chrome.tabs.sendMessage(currentTab.id, {action: "HEALTH"}, (response) => {
                    alert(response);
                });
            });
        });
    });
    const character = document.getElementById("character");

    character.addEventListener("click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const currentTab = tabs[0];
            chrome.scripting.executeScript({
                target: {tabId: currentTab.id},
                files: ['content.js']
            }, () => {
                chrome.tabs.sendMessage(currentTab.id, {action: "CHARACTER"}, (response) => {
                    alert(response);
                });
            });
        });
    });
    const whsSpecific = document.getElementById("whs-specific");

    whsSpecific.addEventListener("click", () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const currentTab = tabs[0];
            chrome.scripting.executeScript({
                target: {tabId: currentTab.id},
                files: ['content.js']
            }, () => {
                chrome.tabs.sendMessage(currentTab.id, {action: "WHS-SPECIFIC"}, (response) => {
                    alert(response);
                });
            });
        });
    });
});
