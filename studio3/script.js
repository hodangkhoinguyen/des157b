(function() {
    'use strict';
    const DATA_SIZE = 10;
    const dataContainer = document.getElementById("data-container");

    // Create 10 data rows
    for (let i = 0; i < DATA_SIZE; i++) {
      const dataItem = document.createElement("div");
      const cell1 = document.createElement("input");
      cell1.setAttribute("type", "text");
      cell1.className = "col1";
      dataItem.appendChild(cell1);
      const cell2 = document.createElement("input");
      cell2.setAttribute("type", "text");
      cell2.className = "col2";
      dataItem.appendChild(cell2);
      dataContainer.appendChild(dataItem);
    }

    const chart = document.getElementById('myChart');
    chart.style.display = "none";

    const generateBtn = document.getElementById("generate-graph");
    const randomBtn = document.getElementById("random-data");
    const clearBtn = document.getElementById("clear-data");
    const downloadBtn = document.getElementById("download-chart");
    const mainContainer = document.querySelector('.main-container');

    // Datasets for getting data table
    let datasets = {
      col1: [],
      col2: []
    };

    // Create the line chart
    generateBtn.addEventListener("click", function () {
      mainContainer.childNodes.forEach(
        function (elem) {
          if (elem.nodeName === "IFRAME") {
            console.log(elem)
            mainContainer.removeChild(elem);
          }
        }
      );
      datasets = {
        col1: [],
        col2: []
      };
      for (let i = 0; i < DATA_SIZE; i++) {
        const cell1 = document.getElementsByClassName("col1")[i].value;
        const cell2 = document.getElementsByClassName("col2")[i].value;
        if (cell1 !== "") {
          datasets.col1.push(cell1);
        }
        if (cell2 !== "") {
          datasets.col2.push(cell2);
        }
      }

      chart.innerHTML = "";
      new Chart(chart, {
        type: "line",
        data: {
          labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
          datasets: [
            {
              data: datasets.col1,
              label: "Col1",
              borderColor: "#8e5ea2",
              fill: false
            },
            {
              data: datasets.col2,
              label: "Col 2",
              borderColor: "#3e95cd",
              fill: false
            }
          ]
        },
        options: {
          maintainAspectRatio: true,
          legend: {
          position: 'bottom'
          },

          title: {
            display: true,
            text: "Customized Line Chart"
          }
        }
      });

      chart.style.display = "block";
    });

    // Clear the data on table
    clearBtn.addEventListener("click", function () {
      for (let i = 0; i < DATA_SIZE; i++) {
        document.getElementsByClassName("col1")[i].value = "";
        document.getElementsByClassName("col2")[i].value = "";
      }
    });

    // Add random values for the table
    randomBtn.addEventListener("click", function () {
      for (let i = 0; i < DATA_SIZE; i++) {
        document.getElementsByClassName("col1")[i].value = Math.floor(Math.random() * 100);
        document.getElementsByClassName("col2")[i].value = Math.floor(Math.random() * 100);
      }
    });

    // Allow download the chart pdf
    downloadBtn.addEventListener("click", function () {
      html2pdf().from(mainContainer).save();
    });
})();
