(function() {
    'use strict';
    const milestoneList = document.getElementById("milestones");

    async function getData() {
        const readData = await fetch('./data.json');
        const data = await readData.json();
        for (let i = 0; i < data.length; i++) {
            let element = milestoneHTML(data[i]);
            milestoneList.innerHTML += element;
        }
    }

    function milestoneHTML(data) {
        let html = "<li>";        
        html += "<div class='hidden'>";
        html += `<div>Topic: ${data.item}</div>`;
        html += `<div>What/Where: ${data.description}</div>`;
        html += `<div>How: ${data.special}</div>`;
        html += "</div>";
        html += `${data.year}`;
        html += "</li>";
        return html;
    }

    getData();
})();