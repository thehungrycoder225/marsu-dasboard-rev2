async function fetchData() {
  try {
    const response = await fetch('../data/research-ds.JSON');
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

function prepareData(data) {
  const researcherCount = {};
  const forumTypeCount = {
    International: 0,
    National: 0,
    Regional: 0,
  };

  data.forEach((item) => {
    const researchers = Array.isArray(
      item['Name of Faculty Researcher / Author']
    )
      ? item['Name of Faculty Researcher / Author']
      : [item['Name of Faculty Researcher / Author']];

    researchers.forEach((researcher) => {
      if (researcher) {
        researcherCount[researcher] = (researcherCount[researcher] || 0) + 1;
      }
    });

    const forumType = item['Forum Type'];
    if (forumType && forumTypeCount[forumType] !== undefined) {
      forumTypeCount[forumType]++;
    }
  });

  return { researcherCount, forumTypeCount };
}

function createChart(
  ctx,
  chartType,
  labels,
  data,
  backgroundColor,
  borderColor,
  showLabel
) {
  new Chart(ctx, {
    type: chartType,
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Data',
          data: data,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: showLabel || false,
          position: 'bottom',
        },
      },
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

async function displayResearchProfile() {
  const data = await fetchData();
  if (data !== null) {
    const tableBody = document.querySelector('#researchTable tbody');
    data.forEach((item) => {
      const researchers = Array.isArray(
        item['Name of Faculty Researcher / Author']
      )
        ? item['Name of Faculty Researcher / Author'].join(', ')
        : item['Name of Faculty Researcher / Author'] || 'N/A';

      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item['Research Title'] || 'N/A'}</td>
        <td>${researchers}</td>
        <td>${item['Status of Research'] || 'N/A'}</td>
        <td>${item['Venue'] || 'N/A'}</td>
        <td>${item['Duration of Research']['Date Started'] || 'N/A'}</td>
        <td>${item['Duration of Research']['Date of Completion'] || 'N/A'}</td>
      `;
      tableBody.appendChild(row);
    });

    new DataTable('#researchTable', {
      responsive: true,
    });

    const { researcherCount, forumTypeCount } = prepareData(data);

    const barChartCtx = document.getElementById('barChart').getContext('2d');
    createChart(
      barChartCtx,
      'bar',
      Object.keys(researcherCount),
      Object.values(researcherCount),
      '#800f2f',
      '#800f2f'
    );

    const pieChartCtx = document.getElementById('pieChart').getContext('2d');
    createChart(
      pieChartCtx,
      'doughnut',
      Object.keys(forumTypeCount),
      Object.values(forumTypeCount),
      ['  #800f2f', '#fb8b24', '#ffab67'],
      ['  #cf8890', '#ffcba3', '#ffdbc1'],
      true
    );
  } else {
    console.error('No data available to create charts.');
  }
}

document.addEventListener('DOMContentLoaded', displayResearchProfile);
