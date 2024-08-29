const backBtn = document.querySelector('.btn-back-mod');
backBtn.textContent = 'Main Menu';

const ctx = document.querySelector('#cUnitsChart').getContext('2d');

// Load the JSON data
fetch('../data/exam-ds.JSON')
  .then((response) => response.json())
  .then((data) => {
    // Extract the required data for the chart
    console.log(data);
    const programs = [];
    const takers = [];
    const passers = [];
    const examDate = []; // Add the Exam Date value

    for (const programData of data['Undergraduate Program Offered']) {
      programs.push(programData['Program']);
      takers.push(programData['Number of 1st Time Takers']);
      passers.push(programData['Number of 1st Time Passers']);
      examDate.push(programData['Date']); // Add the Exam Date value
    }

    // Create the chart
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: programs,
        datasets: [
          {
            label: 'Number of 1st Time Takers',
            data: takers,
            backgroundColor: '#800f2f', // Modified color
            borderColor: '#800f2f', // Modified color
            borderWidth: 1,
          },
          {
            label: 'Number of 1st Time Passers',
            data: passers,
            backgroundColor: '#fb8b24', // Modified color
            borderColor: '#fb8b24', // Modified color
            borderWidth: 1,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: [
            {
              stacked: true,
              beginAtZero: true,
            },
          ],
          y: [
            {
              stacked: true,
              beginAtZero: true,
            },
          ],
        },
      },
    });

    // Display the data on the table
    const tableBody = document.querySelector('#dataTable tbody');
    tableBody.innerHTML = '';

    for (let i = 0; i < programs.length; i++) {
      const row = document.createElement('tr');

      const programCell = document.createElement('td');
      programCell.textContent = programs[i];
      row.appendChild(programCell);

      const examDateCell = document.createElement('td');
      examDateCell.textContent = examDate[i]; // Add the Exam Date value
      row.appendChild(examDateCell);

      const passersCell = document.createElement('td');
      passersCell.textContent = passers[i];
      row.appendChild(passersCell);

      tableBody.appendChild(row);
    }
  });
