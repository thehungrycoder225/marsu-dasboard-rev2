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
      new DataTable(document.querySelector('#extensionTable'), {
        searchable: true,
        sortable: true,
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
      new DataTable(document.querySelector('#extensionTable2'), {});
    });
}

displayTable2();
