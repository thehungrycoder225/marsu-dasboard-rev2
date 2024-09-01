document.addEventListener('DOMContentLoaded', () => {
  // Fetch the JSON data
  fetch('../data/accreditation-ds.json')
    .then((response) => response.json())
    .then((data) => {
      // Process the data and create charts and tables for each campus
      const campuses = Object.keys(data);
      campuses.forEach((campus, index) => {
        if (data[campus]) {
          createChart(campus, data[campus]);
          createCollapse(campus, data[campus], index);
          console.table(data[campus]);
        }
      });
    })
    .catch((error) => console.error('Error fetching the JSON data:', error));

  function createChart(campus, programs) {
    // Create a column for the chart
    const col = document.createElement('div');
    col.className = 'col-md-3';
    document.addEventListener('DOMContentLoaded', () => {
      // Fetch the JSON data
      fetch('../data/accreditation-ds.json')
        .then((response) => response.json())
        .then((data) => {
          // Process the data and create charts and tables for each campus
          const campuses = Object.keys(data);
          campuses.forEach((campus, index) => {
            if (data[campus]) {
              createChart(campus, data[campus]);
              createTab(campus, data[campus], index);
            }
          });
        })
        .catch((error) =>
          console.error('Error fetching the JSON data:', error)
        );

      function createChart(campus, programs) {
        // Create a column for the chart
        const col = document.createElement('div');
        col.className = 'col-md-3';

        // Create a card for the chart
        const card = document.createElement('div');
        card.className = 'card';

        // Create a card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Create a title for the chart
        const title = document.createElement('h5');
        title.className = 'fw-bold text-center';
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
        const backgroundColors = [
          '#800f2f',
          '#fb8b24',
          '#912941',
          '#a13f53',
          '#b15366',
          '#c16779',
          '#d17b8d',
          '#e08fa1',
          '#f0a3b5',
          '#ffb8c9',
          '#fb9431',
          '#fc9d3d',
          '#fca648',
          '#fcae54',
          '#fdb760',
          '#febf6d',
          '#fec679',
          '#ffce86',
        ];
        programs.forEach((program) => {
          const level = program['Program Accreditation Status'];
          if (!labels.includes(level)) {
            labels.push(level);
            data.push(1);
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
                backgroundColor: backgroundColors.slice(0, labels.length),
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

      function createTab(campus, programs, index) {
        const tabList = document.getElementById('campusTabs');
        const tabContent = document.getElementById('campusTabsContent');

        // Create tab
        const tab = document.createElement('li');
        tab.className = 'nav-item';
        const tabLink = document.createElement('a');
        tabLink.className = `nav-link ${index === 0 ? 'active' : ''}`;
        tabLink.id = `${campus.replace(/\s+/g, '-')}-tab`;
        tabLink.setAttribute('data-toggle', 'tab');
        tabLink.href = `#${campus.replace(/\s+/g, '-')}`;
        tabLink.setAttribute('role', 'tab');
        tabLink.setAttribute('aria-controls', campus.replace(/\s+/g, '-'));
        tabLink.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        tabLink.textContent = campus;
        tab.appendChild(tabLink);
        tabList.appendChild(tab);

        // Create tab content
        const tabPane = document.createElement('div');
        tabPane.className = `tab-pane fade ${index === 0 ? 'show active' : ''}`;
        tabPane.id = campus.replace(/\s+/g, '-');
        tabPane.setAttribute('role', 'tabpanel');
        tabPane.setAttribute(
          'aria-labelledby',
          `${campus.replace(/\s+/g, '-')}-tab`
        );

        // Create table for the tab content
        const table = document.createElement('table');
        table.className = 'table table-sm table-hover text-sm-1';
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        const thIndex = document.createElement('th');
        thIndex.textContent = '#';
        const thProgram = document.createElement('th');
        thProgram.textContent = 'Undergraduate Programs Offered';
        const thYear = document.createElement('th');
        thYear.textContent = 'Year of Initial Operation';
        const thStatus = document.createElement('th');
        thStatus.textContent = 'Program Accreditation Status';
        const thStartDate = document.createElement('th');
        thStartDate.textContent = 'Start Date (MMM-DD-YYYY)';
        const thEndDate = document.createElement('th');
        thEndDate.textContent = 'End Date (MMM-DD-YYYY)';
        tr.appendChild(thIndex);
        tr.appendChild(thProgram);
        tr.appendChild(thYear);
        tr.appendChild(thStatus);
        tr.appendChild(thStartDate);
        tr.appendChild(thEndDate);
        thead.appendChild(tr);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        programs.forEach((program, index) => {
          const row = tbody.insertRow();
          const cellIndex = row.insertCell(0);
          const cellProgram = row.insertCell(1);
          const cellYear = row.insertCell(2);
          const cellStatus = row.insertCell(3);
          const cellStartDate = row.insertCell(4);
          const cellEndDate = row.insertCell(5);

          cellIndex.textContent = index + 1;
          cellProgram.textContent = program['Undergraduate Programs Offered'];
          cellYear.textContent = program['Year of Initial Operation'];
          cellStatus.textContent = program['Program Accreditation Status'];
          cellStartDate.textContent = program['Start Date (MMM-DD-YYYY)'];
          cellEndDate.textContent = program['End Date (MMM-DD-YYYY)'];
        });
        table.appendChild(tbody);
        tabPane.appendChild(table);
        tabContent.appendChild(tabPane);
      }
    });
    // Create a card for the chart
    const card = document.createElement('div');
    card.className = 'card';

    // Create a card body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Create a title for the chart
    const title = document.createElement('h5');
    title.className = 'fw-bold text-center';
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
    const backgroundColors = [
      '#800f2f',
      '#fb8b24',
      '#912941',
      '#a13f53',
      '#b15366',
      '#c16779',
      '#d17b8d',
      '#e08fa1',
      '#f0a3b5',
      '#ffb8c9',
      '#fb9431',
      '#fc9d3d',
      '#fca648',
      '#fcae54',
      '#fdb760',
      '#febf6d',
      '#fec679',
      '#ffce86',
    ];
    programs.forEach((program) => {
      const level = program['Program Accreditation Status'];
      if (!labels.includes(level)) {
        labels.push(level);
        data.push(1);
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
            backgroundColor: backgroundColors.slice(0, labels.length),
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

  function createCollapse(campus, programs, index) {
    const accordion = document.getElementById('accordion');

    // Create card for collapse
    const card = document.createElement('div');
    card.className = 'card';

    // Create card header
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    cardHeader.id = `heading${index}`;

    const h5 = document.createElement('h5');
    h5.className = 'mb-0';

    const button = document.createElement('button');
    button.className = `btn btn-link fw-bold text-decoration-none text-green ${
      index === 0 ? '' : 'collapsed'
    }`;
    button.setAttribute('data-toggle', 'collapse');
    button.setAttribute('data-target', `#collapse${index}`);
    button.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');
    button.setAttribute('aria-controls', `collapse${index}`);
    button.textContent = campus;

    h5.appendChild(button);
    cardHeader.appendChild(h5);
    card.appendChild(cardHeader);

    // Create collapse div
    const collapseDiv = document.createElement('div');
    collapseDiv.id = `collapse${index}`;
    collapseDiv.className = `collapse ${index === 0 ? 'show' : ''}`;
    collapseDiv.setAttribute('ariaLabelledby', `heading${index}`);
    collapseDiv.setAttribute('data-parent', '#accordion');

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body my-2 table-responsive';
    // Create table for the card body
    const table = document.createElement('table');
    table.className = 'table able-sm table-hover text-sm-1 align-middle ';
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const thIndex = document.createElement('th');
    thIndex.textContent = '#';
    const thProgram = document.createElement('th');
    thProgram.textContent = 'Undergraduate Programs Offered';
    1;
    const thYear = document.createElement('th');
    thYear.textContent = 'Year of Initial Operation';
    const thStatus = document.createElement('th');
    thStatus.textContent = 'Program Accreditation Status';
    const thStartDate = document.createElement('th');
    thStartDate.textContent = 'Start Date (MMM-DD-YYYY)';
    const thEndDate = document.createElement('th');
    thEndDate.textContent = 'End Date (MMM-DD-YYYY)';
    tr.appendChild(thIndex);
    tr.appendChild(thProgram);
    tr.appendChild(thYear);
    tr.appendChild(thStatus);
    tr.appendChild(thStartDate);
    tr.appendChild(thEndDate);
    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    programs.forEach((program, index) => {
      const row = tbody.insertRow();
      const cellIndex = row.insertCell(0);
      const cellProgram = row.insertCell(1);
      const cellYear = row.insertCell(2);
      const cellStatus = row.insertCell(3);
      const cellStartDate = row.insertCell(4);
      const cellEndDate = row.insertCell(5);

      cellIndex.textContent = index + 1;
      cellProgram.textContent = program['Undergraduate Programs Offered'];
      cellYear.textContent = program['Year of Initial Operation'];
      cellStatus.textContent = program['Program Accreditation Status'];
      cellStartDate.textContent = program['Start Date (MMM-DD-YYYY)'];
      cellEndDate.textContent = program['End Date (MMM-DD-YYYY)'];
    });
    table.appendChild(tbody);
    cardBody.appendChild(table);
    collapseDiv.appendChild(cardBody);
    card.appendChild(collapseDiv);
    accordion.appendChild(card);
  }
});
