function fetchGSFaculty(facultyId) {
  fetch('../data/gs-faculty.JSON')
    .then((response) => response.json())
    .then((data) => {
      const tableContainer = document.getElementById('gsFacultyTable');

      // Create table
      const table = document.createElement('table');
      table.className = 'table table-bordered table-striped';

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
