document.addEventListener('DOMContentLoaded', () => {
  // Fetch the JSON data
  fetch('../data/accreditation-ds.json')
    .then((response) => response.json())
    .then((data) => {
      // Process the data and create charts for each campus
      const campuses = Object.keys(data);
      campuses.forEach((campus) => {
        if (data[campus]) {
          createChart(campus, data[campus]);
        }
      });
    })
    .catch((error) => console.error('Error fetching the JSON data:', error));

  function createChart(campus, programs) {
    // Create a column for the chart
    const col = document.createElement('div');
    col.className = 'col-md-3 h-100';

    // Create a card for the chart
    const card = document.createElement('div');
    card.className = 'card';

    // Create a card body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Create a title for the chart
    const title = document.createElement('h5');
    title.className = 'card-title chart-title';
    title.textContent = campus;
    cardBody.appendChild(title);

    // Create a canvas element for the chart
    const canvas = document.createElement('canvas');
    canvas.id = campus.replace(/\s+/g, '-');
    cardBody.appendChild(canvas);

    card.appendChild(cardBody);
    col.appendChild(card);
    document.getElementById('chartsContainer').appendChild(col);

    // Prepare the data for the chart
    const labels = [];
    const data = [];
    const backgroundColors = [];
    programs.forEach((program) => {
      const level = program['Program Accreditation Status'];
      if (!labels.includes(level)) {
        labels.push(level);
        data.push(1);
        backgroundColors.push(getRandomColor());
      } else {
        const index = labels.indexOf(level);
        data[index]++;
      }
    });

    // Create the chart
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,

        datasets: [
          {
            data: data,
            backgroundColor: backgroundColors,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
