// Fetch the JSON data
fetch('../data/enrollment-ds.JSON')
  .then((response) => response.json())
  .then((data) => {
    // Process the data and create charts for each campus
    const campuses = Object.keys(data);
    campuses.forEach((campus, index) => {
      createTab(campus, data[campus], index);
    });
  })
  .catch((error) => console.error('Error fetching the JSON data:', error));

function createTab(campus, programs, index) {
  const tabId = campus.replace(/\s+/g, '-');

  // Create the tab button
  const tabButton = document.createElement('button');
  tabButton.className = `nav-link ${index === 0 ? 'active' : ''}`;
  tabButton.id = `v-pills-${tabId}-tab`;
  tabButton.dataset.bsToggle = 'pill';
  tabButton.dataset.bsTarget = `#v-pills-${tabId}`;
  tabButton.type = 'button';
  tabButton.role = 'tab';
  tabButton.ariaControls = `v-pills-${tabId}`;
  tabButton.ariaSelected = index === 0 ? 'true' : 'false';
  tabButton.textContent = campus;
  document.getElementById('v-pills-tab').appendChild(tabButton);

  // Create the tab pane
  const tabPane = document.createElement('div');
  tabPane.className = `tab-pane fade ${index === 0 ? 'show active' : ''}`;
  tabPane.id = `v-pills-${tabId}`;
  tabPane.role = 'tabpanel';
  tabPane.ariaLabelledby = `v-pills-${tabId}-tab`;

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
  canvas.id = tabId;
  container.appendChild(canvas);

  tabPane.appendChild(container);
  document.getElementById('v-pills-tabContent').appendChild(tabPane);

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
      responsive: true,
      indexAxis: 'y',
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
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
