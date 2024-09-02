function fetchGSFaculty() {
  fetch('../data/gs-faculty.JSON')
    .then((response) => response.json())
    .then((data) => {
      const tableContainer = document.getElementById('gsFacultyTable');

      // Create table
      const table = document.createElement('table');
      table.className = 'table table-sm table-hover text-sm-1';

      // Create table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      const headers = ['Name', 'Position', 'Status'];
      headers.forEach((headerText) => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      // Create table body
      const tbody = document.createElement('tbody');
      data.forEach((item) => {
        const row = document.createElement('tr');
        Object.values(item).forEach((text) => {
          const cell = document.createElement('td');
          cell.textContent = text;
          row.appendChild(cell);
        });
        tbody.appendChild(row);
      });
      table.appendChild(tbody);

      // Append table to container
      tableContainer.appendChild(table);
    })
    .catch((error) => console.error('Error fetching the JSON data:', error));
}

fetchGSFaculty();

function fetchGSEnrollment() {
  fetch('../data/gs-enrollment.JSON')
    .then((response) => response.json())
    .then((data) => {
      const mainCampus = data['Main Campus'];
      const programs = mainCampus['Program Offered'];
      const priorityPrograms = mainCampus['Priority Program'];

      const labels = Object.values(programs);
      const priorityData = Object.keys(priorityPrograms).map((key) => {
        const value = priorityPrograms[key];
        return typeof value === 'object'
          ? parseInt(value['Priority Program'])
          : parseInt(value);
      });
      const nonPriorityData = Object.keys(priorityPrograms).map((key) => {
        const value = priorityPrograms[key];
        return typeof value === 'object'
          ? parseInt(value['Non-Priority Program'])
          : 0;
      });

      const ctx = document.getElementById('gsEnrollmentChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Priority Program',
              data: priorityData,
              backgroundColor: '#800f2f',
              borderColor: '#800f2f',
              borderWidth: 1,
            },
            {
              label: 'Non-Priority Program',
              data: nonPriorityData,
              backgroundColor: '#fb8b24',
              borderColor: '#fb8b24',
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    })
    .catch((error) => console.error('Error fetching the JSON data:', error));
}

fetchGSEnrollment();

function fetchGSAccre() {
  fetch('../data/gs-accreditation.JSON')
    .then((response) => response.json())
    .then((data) => {
      const tableContainer = document.getElementById('gsAccreTable');

      // Create table
      const table = document.createElement('table');
      table.className = 'table table-sm table-hover text-sm-1';

      // Create table header
      const thead = document.createElement('thead');
      const headerRow = document.createElement('tr');
      const headers = ['Program', 'Start Date', 'End Date', 'Level'];
      headers.forEach((headerText) => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      // Create table body
      const tbody = document.createElement('tbody');
      data.accreditation.forEach((campus) => {
        campus.programs.forEach((program) => {
          const row = document.createElement('tr');
          const cellProgram = document.createElement('td');
          const cellStartDate = document.createElement('td');
          const cellEndDate = document.createElement('td');
          const cellLevel = document.createElement('td');

          cellProgram.textContent = program.program;
          cellStartDate.textContent = program.start_date;
          cellEndDate.textContent = program.end_date;
          cellLevel.textContent = program.level;

          row.appendChild(cellProgram);
          row.appendChild(cellStartDate);
          row.appendChild(cellEndDate);
          row.appendChild(cellLevel);
          tbody.appendChild(row);
        });
      });
      table.appendChild(tbody);

      // Append table to container
      tableContainer.appendChild(table);
    })
    .catch((error) => console.error('Error fetching the JSON data:', error));
}

fetchGSAccre();
