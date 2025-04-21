// const trendChart = () => {
//   const xLabel = [
//     ' 2015-2016',
//     ' 2016-2017',
//     ' 2017-2018',
//     ' 2018-2019',
//     ' 2019-2020',
//     ' 2020-2021',
//     ' 2021-2022',
//     ' 2022-2023',
//   ];

//   new Chart('trendChart', {
//     type: 'line',
//     data: {
//       labels: xLabel,
//       datasets: [
//         {
//           data: [1279, 1211, 1067, 1073, 1093, 1168, 1346, 1535],
//           label: 'BS Information Technology',
//           borderColor: '#1BA605',
//           backgroundColor: '#1BA605',
//         },
//         {
//           data: [490, 351, 232, 226, 246, 270, 275, 350],
//           label: 'BS Information Systems',
//           borderColor: '#FBAA30',
//           backgroundColor: '#FBAA30',
//         },
//         {
//           data: [1769, 1562, 1299, 1299, 1339, 1438, 1621, 1885],
//           label: 'Total',
//           borderColor: '#141414',
//           backgroundColor: '#141414',
//         },
//       ],
//     },
//     options: {
//       legend: { position: 'bottom' },
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });
// };

// trendChart();

const chartLabel = [
  ' 2015-2016',
  ' 2016-2017',
  ' 2017-2018',
  ' 2018-2019',
  ' 2019-2020',
  ' 2020-2021',
  ' 2021-2022',
  ' 2022-2023',
];
let ctx = document.getElementById('trendChart').getContext('2d');

let chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: chartLabel,
    datasets: [
      {
        label: 'Information Technology',
        data: [1279, 1211, 1067, 1073, 1093, 1168, 1346, 1535],
        backgroundColor: 'rgba(26, 166, 5, 0.5)',
        borderColor: 'rgba(26, 166, 5, 1)',
        borderWidth: 1,
      },
      {
        label: 'Information Systems',
        data: [490, 351, 232, 226, 246, 270, 275, 350],
        backgroundColor: 'rgba(251, 170, 48,0.5)',
        borderColor: 'rgba(251, 170, 48, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total',
        data: [1769, 1562, 1299, 1299, 1339, 1438, 1621, 1885],
        type: 'line',
        backgroundColor: 'rgba(91, 0, 0, 0.5)',
        borderColor: 'rgba(91, 0, 0, 0.5)',
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      x: [
        {
          stacked: true,
          beginAtZero: true,
        },
      ],
      y: [
        {
          stacked: true,
          beginAtZero: true,
        },
      ],
    },
  },
});

const renderBarChart = () => {
  const ctx = document.getElementById('semChart').getContext('2d');
  const chartLabels = [
    '1st Semester ( A.Y. 2015 - 2016)',
    '2nd Semester ( A.Y. 2015 - 2016)',
    '1st Semester ( A.Y. 2016 - 2017)',
    '2nd Semester ( A.Y. 2016 - 2017)',
    '1st Semester ( A.Y. 2017 - 2018)',
    '2nd Semester ( A.Y. 2017 - 2018)',
    '1st Semester ( A.Y. 2018 - 2019)',
    '2nd Semester ( A.Y. 2018 - 2019)',
    '1st Semester ( A.Y. 2019 - 2020)',
    '2nd Semester ( A.Y. 2019 - 2020)',
    '1st Semester ( A.Y. 2020 - 2021)',
    '2nd Semester ( A.Y. 2020 - 2021)',
    '1st Semester ( A.Y. 2021 - 2022)',
    '2nd Semester ( A.Y. 2021 - 2022)',
    '1st Semester ( A.Y. 2022 - 2023)',
  ];
  const dataIT = [
    630, 649, 584, 627, 529, 538, 517, 556, 530, 563, 555, 613, 660, 686, 753,
    782,
  ];
  const dataIS = [
    240, 250, 169, 182, 112, 120, 107, 119, 122, 124, 142, 128, 133, 142, 195,
    155,
  ];
  chartLabels.reverse();
  dataIT.reverse();
  dataIS.reverse();
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: [
        {
          label: 'Information Technology',
          backgroundColor: 'rgba(26, 166, 5, 0.5)',
          borderColor: 'rgba(26, 166, 5, 1)',
          borderWidth: 1,
          data: dataIT,
        },
        {
          label: 'Information Systems',
          backgroundColor: 'rgba(251, 170, 48,0.5)',
          borderColor: 'rgba(251, 170, 48, 1)',
          borderWidth: 1,
          data: dataIS,
        },
      ],
    },
    options: {
      tooltips: {
        displayColors: true,
        callbacks: {
          mode: 'x',
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
      responsive: true,
      maintainAspectRatio: true,
      legend: { position: 'bottom' },
      indexAxis: 'y',
    },
  });
};

renderBarChart();

const backBtn = document.querySelector('.btn-back-mod');
backBtn.textContent = 'Main Menu';
