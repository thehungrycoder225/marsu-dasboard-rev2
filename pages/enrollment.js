// Fetch the JSON data
fetch('../data/enrollment-ds.JSON')
  .then((response) => response.json())
  .then((data) => {
    // Process the data and create charts for each campus
    const campuses = [
      'Boac Main Campus-Tanza, Boac, Marinduque',
      'GASAN CAMPUS-Pinggan, Gasan, Marinduque',
      'TORRIJOS CAMPUS-Cagpo, Torrijos, Marinduque',
      'STA. CRUZ CAMPUS-Matalaba, Sta. Cruz, Marinduque',
    ];
    campuses.forEach((campus) => {
      if (data[campus]) {
        createChart(campus, data[campus]);
      }
    });
  })
  .catch((error) => console.error('Error fetching the JSON data:', error));

function createChart(campus, programs) {
  // Create a container for the chart
  const container = document.createElement('div');
  container.className = 'chart-container';

  // Create a title for the chart
  const title = document.createElement('div');
  title.className = 'chart-title';
  title.textContent = campus;
  container.appendChild(title);

  // Create a canvas element for the chart
  const canvas = document.createElement('canvas');
  canvas.id = campus.replace(/\s+/g, '-');
  container.appendChild(canvas);

  document.getElementById('chartsContainer').appendChild(container);

  // Prepare the data for the chart
  const labels = [];
  const priorityData = [];
  const nonPriorityData = [];

  programs.forEach((program) => {
    labels.push(program['Undergraduate Program Offered']);
    priorityData.push(
      program['No. of Enrollees for 1st Semester AY 2023-2024'][
        'Priority Program'
      ] || 0
    );
    nonPriorityData.push(
      program['No. of Enrollees for 1st Semester AY 2023-2024'][
        'Non-Priority Program'
      ] || 0
    );
  });

  // Create the chart
  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Priority Program',
          data: priorityData,
          backgroundColor: '#800f2f', // Modified color
          borderColor: '#800f2f', // Modified color
          borderWidth: 1,
        },
        {
          label: 'Non-Priority Program',
          data: nonPriorityData,
          backgroundColor: '#fb8b24', // Modified color
          borderColor: '#fb8b24', // Modified color
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          stacked: true,
          beginAtZero: true,
        },
        y: {
          stacked: true,
          beginAtZero: true,
        },
      },
    },
  });
}
