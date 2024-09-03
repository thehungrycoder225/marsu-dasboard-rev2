function displayTable() {
  fetch('../data/extension_project-ds.JSON')
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector('#extensionTable tbody');
      data.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.start_date}</td>
                <td>${item.end_date}</td>
                <td>${item.hours}</td>
                <td>${item.multiplier}</td>
                <td>${item.participants}</td>
                <td>${item.total_score}</td>
                <td>${item.final_score}</td>
            `;
        tableBody.appendChild(row);
      });
      new DataTable('#extensionTable', {
        responsive: true,
      });
    })
    .catch((error) => console.error('Error fetching data:', error));
}

displayTable();

function displayTable2() {
  fetch('../data/extension-ds.JSON')
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.querySelector('#extensionTable2 tbody');

      data.forEach((item) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item['Mandated / Priority Program/s']}</td>
          <td>${item['Extension Program']}</td>
          <td>${item['Start Date (MMM-DD-YYYY)']}</td>
          <td>${item['End Date (MMM-DD-YYYY)']}</td>
        `;
        tableBody.appendChild(row);
      });
      new DataTable('#extensionTable2', {
        responsive: true,
      });
    });
}

displayTable2();

function displayTable3() {
  fetch('../data/extension_partner-ds.JSON')
    .then((response) => response.json())
    .then((data) => {
      // Flatten the data for DataTable
      const flattenedData = [];
      const programCount = {};

      data.forEach((item) => {
        const partner =
          item[
            'Partner LGU /Community/ Industry / SMEs / Private or Public Agencies / NGOs'
          ];
        item['Extension Program / Activities'].forEach((activity) => {
          flattenedData.push({
            partner: partner,
            program: activity.Program,
            startDate: activity['Start Date'],
            endDate: activity['End Date'],
          });

          // Count the number of programs per partner
          if (programCount[partner]) {
            programCount[partner]++;
          } else {
            programCount[partner] = 1;
          }
        });
      });

      // Initialize DataTable
      const table = document
        .getElementById('extensionTable3')
        .getElementsByTagName('tbody')[0];
      flattenedData.forEach((row) => {
        const newRow = table.insertRow();
        newRow.insertCell(0).textContent = row.partner;
        newRow.insertCell(1).textContent = row.program;
        newRow.insertCell(2).textContent = row.startDate;
        newRow.insertCell(3).textContent = row.endDate;
      });
      new DataTable('#extensionTable3', {
        responsive: true,
      });

      // Prepare data for the column chart
      const labels = Object.keys(programCount);
      const counts = Object.values(programCount);

      // Initialize Chart.js
      const ctx = document
        .getElementById('extensionPartnerChart')
        .getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Number of Extension Programs',
              data: counts,
              backgroundColor: ['#800f2f', '#fb8b24'], // Modified color
              borderColor: [
                '#800f2f',
                '#fb8b24',
                '#912941',
                '#a13f53',
                '#b15366',
                '#c16779',
                '#d17b8d',
                '#e08fa1',
                '#f0a3b5',
                '#ffb8c9',
                '#fb9431',
                '#fc9d3d',
                '#fca648',
                '#fcae54',
                '#fdb760',
                '#febf6d',
                '#fec679',
                '#ffce86',
              ], // Modified color
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              position: 'bottom',
              display: false,
            },
          },
        },
      });
    });
}

displayTable3();
