(function() {
    'use strict';

    const button = document.querySelector('#mode');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section');
    let mode = 'dark';
    const noInternetBanner = document.getElementById("no-internet");
    const messengerBanner = document.getElementById("messenger");
    const typeInput = document.getElementById("texting-input");
    console.log(typeInput);
    button.addEventListener('change', function() {
        if (mode === 'dark') {
            onlineMode();
        } else {
            offlineMode();
        }
    });
    onlineMode();

    // Handle the online mode
    function onlineMode() {
        mode = 'light';
        body.className = 'switch';
        banner.className = 'switch';
        button.className = 'switch';
        for (const section of sections) {
            section.className = 'switch';
        }
        noInternetBanner.style.display = "none";
        messengerBanner.style.display = "inherit";
    }

    // Handle the offline mode
    function offlineMode() {
        mode = 'dark';
        body.removeAttribute('class');
        banner.removeAttribute('class');
        button.removeAttribute('class');
        for (const section of sections) {
            section.removeAttribute('class');
        }
        noInternetBanner.style.display = "inherit";
        messengerBanner.style.display = "none";
    }
    typeInput.addEventListener("input", (e) => {
        console.log(e.target.value);
        let content = e.target.value;
        if (content.length > 0) {
            document.getElementById("typing-status").style.visibility = "visible";
        }
        else {
            document.getElementById("typing-status").style.visibility = "hidden";
        }
    })
})()