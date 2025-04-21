const backBtn = document.querySelector('.btn-back-mod');
backBtn.textContent = 'Main Menu';
const renderStatusChartIT = () => {
  const ctx = document.getElementById('statusChartIT').getContext('2d');
  const statusLabel = ['Permanent', 'Contractual', 'Temporary', 'Part-Timer'];
  const dataIT = [11, 7, 0, 0];
  const dataGenEd = [2, 7, 0, 1];
  const statusChartIT = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: statusLabel,
      datasets: [
        {
          label: 'I.T. Education',
          backgroundColor: '#1BA605',
          data: dataIT,
        },
        {
          label: 'General Education',
          backgroundColor: '#FBAA30',
          data: dataGenEd,
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
      //   legend: { position: 'bottom' },
      indexAxis: 'y',
    },
  });
};

renderStatusChartIT();

const renderRankChartIT = () => {
  const ctx = document.getElementById('rankChartIT').getContext('2d');
  const statusLabel = [
    'Associate Professor 3',
    'Associate Professor 2',
    'Assistant Professor 3',
    'Assistant Professor 2',
    'Instructor 1',
    'College Lecturer',
  ];
  const dataIT = [1, 1, 1, 2, 6, 7];
  const dataGenEd = [0, 0, 0, 1, 1, 8];
  const rankChartIT = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: statusLabel,
      datasets: [
        {
          label: 'I.T. Education',
          backgroundColor: '#1BA605',
          data: dataIT,
        },
        {
          label: 'General Education',
          backgroundColor: '#FBAA30',
          data: dataGenEd,
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
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: 'Poppins',
          },
        },
      },
      indexAxis: 'y',
    },
  });
};

renderRankChartIT();

const renderAttainmentIt = () => {
  const ctx = document.getElementById('eduChartIT').getContext('2d');
  const statusLabel = [
    'Doctor’s degree',
    ' Units in Doctor’s degree',
    'Master’s degree',
    'Units in Master’s degree',
    ' Bachelor’s degree',
  ];
  const dataIT = [3, 0, 9, 3, 3];
  const dataGenEd = [0, 0, 2, 3, 5];
  const eduChartIT = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: statusLabel,
      datasets: [
        {
          label: 'I.T. Education',
          backgroundColor: '#1BA605',
          data: dataIT,
        },
        {
          label: 'General Education',
          backgroundColor: '#FBAA30',
          data: dataGenEd,
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

renderAttainmentIt();

// Charts Information Systems

const renderStatusChartIS = () => {
  const ctx = document.getElementById('statusChartIS').getContext('2d');
  const statusLabel = ['Permanent', 'Contractual', 'Temporary', 'Part-Timer'];
  const dataIS = [5, 0, 2, 0];
  const dataGenEd = [2, 0, 7, 1];
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: statusLabel,
      datasets: [
        {
          label: 'I.T. Education',
          backgroundColor: '#1BA605',
          data: dataIS,
        },
        {
          label: 'General Education',
          backgroundColor: '#FBAA30',
          data: dataGenEd,
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
      //   legend: { position: 'bottom' },
      indexAxis: 'y',
    },
  });
};

renderStatusChartIS();

const renderRankChartIS = () => {
  const ctx = document.getElementById('rankChartIS').getContext('2d');
  const statusLabel = [
    'Assistant Professor 4',
    'Assistant Professor 2',
    'Instructor 1',
    'College Lecturer',
  ];
  const dataIS = [0, 3, 2, 2];
  const dataGenEd = [1, 1, 0, 8];
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: statusLabel,
      datasets: [
        {
          label: 'I.T. Education',
          backgroundColor: '#1BA605',
          data: dataIS,
        },
        {
          label: 'General Education',
          backgroundColor: '#FBAA30',
          data: dataGenEd,
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
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: 'Poppins',
          },
        },
      },
      indexAxis: 'y',
    },
  });
};

renderRankChartIS();

const renderAttainmentIS = () => {
  const ctx = document.getElementById('eduChartIS').getContext('2d');
  const statusLabel = [
    'Doctor’s degree',
    ' Units in Doctor’s degree',
    'Master’s degree',
    'Units in Master’s degree',
    ' Bachelor’s degree',
  ];
  const dataIT = [1, 1, 3, 1, 1];
  const dataGenEd = [0, 0, 1, 3, 6];
  const barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: statusLabel,
      datasets: [
        {
          label: 'I.T. Education',
          backgroundColor: '#1BA605',
          data: dataIT,
        },
        {
          label: 'General Education',
          backgroundColor: '#FBAA30',
          data: dataGenEd,
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

renderAttainmentIS();

// A Row can Only Contain 3 Faculty
const galleryParentAdmin = document.querySelector('.gallery_admin');
const galleryParentRegular = document.querySelector('.gallery_regular');
const galleryParentLecturer = document.querySelector('.gallery_lecturer');
const galleryParentLecturerSC = document.querySelector('.gallery_lecturer-sc');
const galleryParentGenEd = document.querySelector('.gallery_genEd');
const galleryParentGenEdSC = document.querySelector('.gallery_genEd-sc');
// const renderRow = document.createElement('div');
// renderRow.classList.add('row');
// const renderCol = document.createElement('div');
// renderCol.classList.add('col-xl-12');
// const renderCardGroup = document.createElement('div');
// renderCardGroup.classList.add('card-group');

const renderFaculty = (ds, parentElement) => {
  ds.forEach((faculty) => {
    const renderCard = document.createElement('div');
    renderCard.classList.add('card');
    renderCard.classList.add('mb-3');
    renderCard.classList.add('mx-3');
    renderCard.classList.add('p-2');

    renderCard.innerHTML = `<div class="row g-0">
    <div class="col-md-4">
      <img
        src="${faculty.imgUrl}"
        class="img-fluid rounded"
        alt="..."
      />
    </div>
    <div class="col-md-8 d-flex">
      <div
        class="card-body align-self-center justify-content-center"
      >
        <div class="">
          <h5 class="card-title fw-bold">${faculty.name}</h5>
          <p class="card-text fs-6">${faculty.designation}</p>
          <h6>Educational Attainment</h6>
          <ul>
           ${faculty.education.map((item) => `<li>${item}</li>`).join('')}
          </ul>
          <h6>Academic Rank</h6>
          <ul>
            <li> ${faculty.rank}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`;
    parentElement.appendChild(renderCard);
  });
};

const fetchFacultyData = () => {
  fetch('../data/faculty-ds.json')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((category) => {
        if (category.admin) {
          renderFaculty(category.admin, galleryParentAdmin);
        }
        if (category.regular) {
          renderFaculty(category.regular, galleryParentRegular);
        }
        if (category.lecturer) {
          renderFaculty(category.lecturer, galleryParentLecturer);
        }
        if (category.lecturerSC) {
          renderFaculty(category.lecturerSC, galleryParentLecturerSC);
        }
        if (category.gened) {
          renderFaculty(category.gened, galleryParentGenEd);
        }
        if (category.genedSC) {
          renderFaculty(category.genedSC, galleryParentGenEdSC);
        }
      });
    });
};

fetchFacultyData();
renderFaculty();
