function displayResearchProfile() {
  fetch('../data/research-ds.JSON')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const tableBody = document.querySelector('#researchTable tbody');

      data.forEach((item) => {
        const researchers = Array.isArray(
          item['Name of Faculty Researcher / Author']
        )
          ? item['Name of Faculty Researcher / Author'].join(', ')
          : item['Name of Faculty Researcher / Author'] || 'N/A';

        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${item['Research Title']}</td>
          <td>${researchers}</td>
          <td>${item['Status of Research']}</td>
          <td>${item['Venue']}</td>
          <td>${item['Duration of Research']['Date Started']}</td>
          <td>${item['Duration of Research']['Date of Completion']}</td>
          <td>${item['Product Name / Methods / Process / Technology']}</td>
        `;
        tableBody.appendChild(row);
      });

      new DataTable('#researchTable', {
        responsive: true,
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

document.addEventListener('DOMContentLoaded', displayResearchProfile);
