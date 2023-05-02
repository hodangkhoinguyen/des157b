(function() {
    'use strict';
    const milestoneList = document.getElementById("milestones");
    const nextBtn = document.getElementById("nextBtn");
    const backBtn = document.getElementById("backBtn");
    const title = document.getElementById("title");
    const content = document.getElementById("content");

    let allData = [];
    let i = 0;
    let brightness = 40;

    async function getData() {
        const readData = await fetch('./data.json');
        const data = await readData.json();
        for (let i = 0; i < data.length; i++) {
            let element = milestoneHTML(data[i]);
            milestoneList.innerHTML += element;
        }
        allData = data;
    }

    function milestoneHTML(data) {
        let html = "<li>";
        html += `${data.year}`;
        html += "</li>";
        return html;
    }
    getData();

    nextBtn.addEventListener("click", function () {
        const milestoneList = document.getElementsByTagName("li");
        if (i >= milestoneList.length) {
            return;
        }

        milestoneList[i].className = "active";
        title.textContent = "My first " + allData[i].item;
        content.innerHTML = "";
        content.innerHTML += `When: ${allData[i].year}<br>`;
        content.innerHTML += `What: ${allData[i].description}<br>`;
        content.innerHTML += `Note: ${allData[i].special}<br>`;

        if (i < milestoneList.length) {
            i++;
        }
    });

    backBtn.addEventListener("click", function () {
        if (i < 0) {
            return;
        }
        const milestoneList = document.getElementsByTagName("li");
        if (i > 0) {
            i--;
        }
        milestoneList[i].classList.remove("active");
        if (i == 0) {
            title.textContent = "Click Next to Start";
            content.innerHTML = "";
        }
        title.textContent = "My first " + allData[i-1].item;
        content.innerHTML = "";
        content.innerHTML += `When: ${allData[i-1].year}<br>`;
        content.innerHTML += `What: ${allData[i-1].description}<br>`;
        content.innerHTML += `Note: ${allData[i-1].special}<br>`;
    });
})();