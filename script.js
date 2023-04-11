(function() {
    'use strict';

    const button = document.querySelector('#mode');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section');
    let mode = 'dark';
    const noInternetBanner = document.getElementById("no-internet");
    const messengerBanner = document.getElementById("messenger");
    let messageContainer = document.getElementsByClassName("message-container")[0];
    const typedInput = document.getElementById("texting-input");
    const sendButton = document.getElementById("send-button");
    const dot = document.getElementById("dot");
    const activeBar = document.getElementById("active-content");

    button.addEventListener('change', function() {
        if (mode === 'dark') {
            onlineMode();
        } else {
            offlineMode();
        }
    });

    // Handle the online mode
    function onlineMode() {
        mode = 'light';
        body.className = 'switch';
        banner.className = 'switch';
        button.className = 'switch';
        noInternetBanner.className = 'switch';
        messengerBanner.className = 'switch';
        dot.className = 'switch';
        activeBar.innerText = "Nguyen is OFFLINE";

        for (const section of sections) {
            section.className = 'switch';
        }
        updateMessage();
    }

    // Handle the offline mode
    function offlineMode() {
        mode = 'dark';
        body.removeAttribute('class');
        banner.removeAttribute('class');
        button.removeAttribute('class');
        noInternetBanner.removeAttribute('class');
        messengerBanner.removeAttribute('class');

        dot.removeAttribute('class');
        activeBar.innerText = "Nguyen is OFFLINE";

        for (const section of sections) {
            section.removeAttribute('class');
        }
    }

    let messageList = [{
        from: "me",
        content: "Hi there! Welcome to My Little Corner!"
    }, {
        from: "me",
        content: "Let me know if you have any query!"
    }];

    typedInput.addEventListener("keydown", function(event) {
        if (event.key === 'Enter') {
            newMessage();
        }
    });

    sendButton.addEventListener("click", function() {
        newMessage();
    });

    function newMessage() {
        messageList.push({
            from: "user",
            content: typedInput.value
        });
        typedInput.value = "";
        updateMessage();
    }
    function updateMessage() {
        // Delete the previous message div's
        let deleteList = [];
        for (let child of messageContainer.children) {
            if (child.tagName === "DIV") {
                deleteList.push(child);
            }
        }
        deleteList.forEach(elem => {
            messageContainer.removeChild(elem);
        });

        // Render the message div's
        for (let message of messageList) {
            const messageDiv = document.createElement("div");
            messageDiv.className = `text-${message.from}`;
            const messageBubble = document.createElement("div");
            messageBubble.textContent = message.content;
            messageBubble.classList.add("message");
            messageBubble.classList.add(`from-${message.from}`);
            messageDiv.appendChild(messageBubble);
            messageContainer.appendChild(messageDiv);
        }
    }
})()