async function fetchEmploymentData() {
  try {
    const response = await fetch('../data/traces-ds.JSON'); // Ensure the correct file path and extension
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return null;
  }
}

function prepareEmployment(data) {
  const programStatusCount = {};

  data.graduates.forEach((graduate) => {
    const program = graduate.Program;
    const status = graduate.Status;

    if (!programStatusCount[program]) {
      programStatusCount[program] = {
        Employed: 0,
        Unemployed: 0,
        'Not Tracked': 0,
      };
    }

    if (status === 'Employed') {
      programStatusCount[program].Employed++;
    } else if (status === 'Unemployed') {
      programStatusCount[program].Unemployed++;
    } else {
      programStatusCount[program]['Not Tracked']++;
    }
  });

  return programStatusCount;
}

function createColumnBarChart(programStatusCount) {
  const ctx = document.getElementById('employmentChart').getContext('2d');
  const labels = Object.keys(programStatusCount);
  const employedData = labels.map(
    (label) => programStatusCount[label].Employed
  );
  const unemployedData = labels.map(
    (label) => programStatusCount[label].Unemployed
  );
  const notTrackedData = labels.map(
    (label) => programStatusCount[label]['Not Tracked']
  );

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Employed',
          data: employedData,
          backgroundColor: '#800f2f',
          borderColor: '#cf8890',
          borderWidth: 1,
        },
        {
          label: 'Unemployed',
          data: unemployedData,
          backgroundColor: '#fb8b24',
          borderColor: '#ffcba3',
          borderWidth: 1,
        },
        {
          label: 'Not Tracked',
          data: notTrackedData,
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true,
        },
        x: {
          beginAtZero: true,
        },
      },
    },
  });
}

async function displayGraduateStatusChart() {
  const data = await fetchEmploymentData();
  if (data !== null) {
    const programStatusCount = prepareEmployment(data);
    createColumnBarChart(programStatusCount);
  } else {
    console.error('No data available to create chart.');
  }
}
displayGraduateStatusChart();
