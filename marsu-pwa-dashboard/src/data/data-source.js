export const enrollmentData = [
  {
    branch_id: 1,
    branch_name: 'Boac',
    categories: [
      'Bachelor of Science in Civil Engineering',
      'Bachelor of Science in Computer Engineering',
      'Bachelor of Science in Electrical Engineering',
      'Bachelor of Science in Electronics Engineering',
      'Bachelor of Science in Mechanical Engineering',
      'Bachelor of Science in Industrial Technology',
      'Bachelor of Science in Information Technology',
      'Bachelor of Science in Information System',
      'Bachelor of Secondary Education',
      'Bachelor of Culture and Arts Education',
      'Bachelor of Technology and Livelihood Education',
      'Bachelor of Arts in English Language Studies',
      'Bachelor of Arts in Communication',
      'Bachelor of Science in Social Works',
      'Bachelor of Science in Entrepreneurship-Entrepreneurial Management',
      'Bachelor of Science in Business Administration',
      'Bachelor of Science in Accountancy',
      'Bachelor of Science in Law Enforcement Administration',
      'Bachelor of Science in Public Administration',
      'Bachelor of Science in Environmental Science',
      'Bachelor of Science in Nursing',
      'Bachelor of Science in Midwifery',
      'Diploma in Midwifery',
    ],
    series: [
      {
        name: 'Priority Program',
        data: [
          431,
          144,
          161,
          94,
          161,
          1673,
          729,
          248,
          306,
          103,
          103,
          162,
          233,
          280,
          248,
          855,
          103,
          290,
          304,
          200,
          428,
          65,
          null,
        ],
      },
      {
        name: 'Non-Priority Program',
        data: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          38,
        ],
      },
    ],
  },
  {
    branch_id: 2,
    branch_name: 'Gasan',
    categories: ['Bachelor of Science in Fisheries'],
    series: [
      {
        name: 'Priority Program',
        data: [393],
      },
      {
        name: 'Non-Priority Program',
        data: [null],
      },
    ],
  },
  {
    branch_id: 3,
    branch_name: 'Sta. Cruz',
    categories: [
      'Bachelor of Elementary Education',
      'Bachelor of Arts in Political Science',
      'Bachelor of Science in Accounting Information System',
      'Bachelor of Science in Tourism Management',
      'Bachelor of Science in Information System',
    ],
    series: [
      {
        name: 'Priority Program',
        data: [121, 222, 98, 399, 145],
      },
      {
        name: 'Non-Priority Program',
        data: [null, null, null, null, null],
      },
    ],
  },
  {
    branch_id: 4,
    branch_name: 'Torrijos',
    categories: [
      'Bachelor of Science in Agriculture',
      'Bachelor in Agricultural Technology',
      'Bachelor of Science in Entrepreneurship_Agri_Business',
      'Diploma in Agricultural Technology',
      'Certificate in Agricultural Science',
    ],
    series: [
      {
        name: 'Priority Program',
        data: [145, 96, 1, null, null],
      },
      {
        name: 'Non-Priority Program',
        data: [null, null, null, 90, 37],
      },
    ],
  },
];

export const licensureExamsData = [
  {
    branch_id: 1,
    branch_name: 'Boac',
    year: 2023,
    categories: [
      'Nursing',
      'Social Work',
      'Electrical Engineering',
      'Electronics Engineering',
      'Civil Engineering',
      'Mechanical Engineering',
      'Secondary Education',
      'Elementary Education',
    ],
    series: [
      {
        name: 'First Time Takers',
        data: [90, 52, 26, 18, 119, 16, 101, 23],
      },
      {
        name: 'Passed',
        data: [86, 37, 20, 5, 57, 15, 86, 23],
      },
      {
        name: 'Passing Rate',
        data: [95.56, 71.15, 76.92, 27.78, 47.86, 93.75, 85.15, 100],
      },
    ],
  },
  {
    branch_id: 2,
    branch_name: 'Gasan',
    year: 2023,
    categories: ['Fisheries'],
    series: [
      {
        name: 'First Time Takers',
        data: [7],
      },
      {
        name: 'Passed',
        data: [4],
      },
      {
        name: 'Passing Rate',
        data: [57.14],
      },
    ],
  },
  {
    branch_id: 4,
    branch_name: 'Torrijos',
    year: 2023,
    categories: ['Agriculture'],
    series: [
      {
        name: 'First Time Takers',
        data: [16],
      },
      {
        name: 'Passed',
        data: [11],
      },
      {
        name: 'Passing Rate',
        data: [68.75],
      },
    ],
  },
];

export const extensionProgramsData = [
  {
    branch_id: 1,
    branch_name: 'Boac',
    programs: [
      {
        name: 'The eSalba for Disaster and Health Risks Reduction',
        start_date: '2023-01-31',
        end_date: '2023-02-02',
      },
      {
        name: 'Masaganang Agrikultura, Maunlad na Ekonomiya',
        start_date: '2023-05-26',
        end_date: '2023-05-26',
      },
    ],
  },
  {
    branch_id: 2,
    branch_name: 'Gasan',
    programs: [
      {
        name: 'The eSalba for Disaster and Health Risks Reduction',
        start_date: '2023-01-31',
        end_date: '2023-02-02',
      },
      {
        name: 'Distribution of Farm Materials to Seaweed Farmers',
        start_date: '2023-03-03',
        end_date: '2023-03-03',
      },
    ],
  },
];

export const facultyData = [
  {
    name: 'Ronjie Mar L. Malinao',
    designation: 'College Dean',
    rank: 'Associate Professor 3',
    education: [
      'Doctor in Information Technology Technological University of the Philippines – Manila',
      'Master in Information Technology Manuel S. Enverga University Foundation, Inc.',
      'Bachelor of Science in Information Technology Marinduque State College',
    ],
  },
  {
    name: 'Maria Nessa M. Solomon',
    designation: 'Assistant Dean',
    rank: 'Assistant Prof.2',
    education: [
      'Doctor in Information Technology University of the East - Manila (CAR)',
      'Master of Arts in Education Marinduque State College',
    ],
  },
];

export const researchData = [
  {
    title: 'Lived Experiences of Selected MSMEs on Technological Assistance',
    researcher: 'Michael V. Capiña',
    status: 'Completed',
    duration: {
      start_date: '2022-09-25',
      end_date: '2023-01-25',
    },
    forum: {
      title:
        '2023 International Conference on Sustainable Agri-vironment Education, Entrepreneurship, and Community Development (ICSAVED)',
      venue: 'Mariano Marcos State University',
      type: 'International',
      date: '2023-03-14',
    },
    product: 'Micro-enterprise Development Training',
  },
  {
    title:
      'Tracer Study of Diploma in Midwifery Graduates in the Marinduque State College from 2006-2022',
    researcher: 'Abegail O. Magcamit',
    status: 'Completed',
    duration: {
      start_date: '2022-10-01',
      end_date: '2023-03-01',
    },
    forum: {
      title:
        '35th APSOM Annual Convention – Association of Philippine Schools of Midwifery, Inc',
      venue: 'Century Park Hotel, Malate, Manila',
      type: 'National',
      date: '2023-04-19',
    },
    product:
      'Technology Forum and Workshop on New Trends in Agribusiness for Federation of Mogpog Association',
  },
];

export const graduateTracesData = [
  {
    branch_id: 1,
    branch_name: 'Boac',
    graduates: [
      {
        program: 'Bachelor of Science in Civil Engineering',
        graduates: [
          {
            id: 1,
            name: 'LAZARTE, Eduardson C.',
            status: 'Employed',
            company: 'Sunwest Inc.',
          },
          {
            id: 2,
            name: 'LIAO, Cyrill James S.',
            status: 'Not Tracked',
            company: '',
          },
        ],
      },
      {
        program: 'Bachelor of Science in Mechanical Engineering',
        graduates: [
          {
            id: 1,
            name: 'MUHI, Justine Jay R.',
            status: 'Not Tracked',
            company: '',
          },
          {
            id: 2,
            name: 'SARINO, Charles Henry M.',
            status: 'Not Tracked',
            company: '',
          },
        ],
      },
    ],
  },
];

export const accreditationData = [
  {
    branch_id: 1,
    branch_name: 'Boac',
    programs: [
      {
        id: 1,
        program: 'Bachelor of Secondary Education',
        year_of_initial_operation: '1986-1987',
        accreditation_status: 'Level III Re- Accredited',
        start_date: 'October 1, 2022',
        end_date: 'September 23, 2023',
      },
      {
        id: 2,
        program: 'BS in Civil Engineering',
        year_of_initial_operation: '1998-1999',
        accreditation_status: 'Level III Re- Accredited',
        start_date: 'May 16, 2021',
        end_date: 'May 15, 2025',
      },
      {
        id: 3,
        program: 'BS in Electrical Engineering',
        year_of_initial_operation: '1998-1999',
        accreditation_status: 'Level III Re- Accredited',
        start_date: 'May 16, 2021',
        end_date: 'May 15, 2025',
      },
      {
        id: 4,
        program: 'BS in Computer Engineering',
        year_of_initial_operation: '2008-2009',
        accreditation_status: 'Level III Re- Accredited',
        start_date: 'July 1, 2021',
        end_date: 'June 30, 2025',
      },
      {
        id: 5,
        program: 'BS in Electronics Engineering',
        year_of_initial_operation: '2008-2009',
        accreditation_status: 'Level III Re- Accredited',
        start_date: 'July 1, 2021',
        end_date: 'June 30, 2025',
      },
      {
        id: 6,
        program: 'BS in Information Systems',
        year_of_initial_operation: '1998-1999',
        accreditation_status: 'Level III Re- Accredited',
        start_date: 'January 1, 2020',
        end_date: 'December 31, 2023',
      },
      {
        id: 7,
        program: 'BS in Information Technology',
        year_of_initial_operation: '1998-1999',
        accreditation_status: 'Level III Re- Accredited',
        start_date: 'January 1, 2020',
        end_date: 'December 31, 2023',
      },
      {
        id: 8,
        program: 'BS in Industrial Technology',
        year_of_initial_operation: '1989-1990',
        accreditation_status: 'Level III Re- Accredited',
        start_date: 'January 1, 2020',
        end_date: 'December 31, 2023',
      },
      {
        id: 9,
        program: 'BA in Communication',
        year_of_initial_operation: '2010-2011',
        accreditation_status: 'Level III Re- Accredited',
        start_date: 'October 16, 2021',
        end_date: 'October 15, 2025',
      },
      {
        id: 10,
        program: 'BA in English Language Studies',
        year_of_initial_operation: '2006-2007',
        accreditation_status: 'Level III Re- Accredited',
        start_date: 'October 16, 2021',
        end_date: 'October 15, 2025',
      },
      {
        id: 11,
        program: 'BS in Entrepreneurship',
        year_of_initial_operation: '2006-2007',
        accreditation_status: 'Level III Re- Accredited',
        start_date: 'July 1, 2021',
        end_date: 'June 30, 2025',
      },
      {
        id: 12,
        program: 'BS in Nursing',
        year_of_initial_operation: '2006-2007',
        accreditation_status: 'Level III Re- Accredited',
        start_date: 'July 1, 2021',
        end_date: 'June 30, 2025',
      },
      {
        id: 13,
        program: 'Bachelor of Public Administration',
        year_of_initial_operation: '2012-2013',
        accreditation_status: 'Level II Re- Accredited',
        start_date: 'July 1, 2022',
        end_date: 'June 30, 2026',
      },
      {
        id: 14,
        program: 'BS in Social Work',
        year_of_initial_operation: '2013-2014',
        accreditation_status: 'Level II Re- Accredited',
        start_date: 'July 1, 2022',
        end_date: 'June 30, 2026',
      },
      {
        id: 15,
        program: 'BS in Mechanical Engineering',
        year_of_initial_operation: '2013-2014',
        accreditation_status: 'Level II Re- Accredited',
        start_date: 'July 1, 2022',
        end_date: 'June 30, 2026',
      },
      {
        id: 16,
        program: 'BS in Accounting Information System',
        year_of_initial_operation: '2013-2014',
        accreditation_status: 'Level II Re- Accredited',
        start_date: 'July 1, 2022',
        end_date: 'June 30, 2026',
      },
      {
        id: 17,
        program: 'BS in Law Enforcement Administration',
        year_of_initial_operation: '2008-2009',
        accreditation_status: 'Accreditable',
        start_date: 'N/A',
        end_date: 'N/A',
      },
      {
        id: 18,
        program: 'BS in Environmental Science',
        year_of_initial_operation: '2013-2014',
        accreditation_status: 'Accreditable',
        start_date: 'N/A',
        end_date: 'N/A',
      },
      {
        id: 19,
        program: 'Bachelor in Culture and Arts Education',
        year_of_initial_operation: '2018-2019',
        accreditation_status: 'Accreditable',
        start_date: 'N/A',
        end_date: 'N/A',
      },
      {
        id: 20,
        program: 'Bachelor in Technology and Livelihood Education',
        year_of_initial_operation: '2018-2019',
        accreditation_status: 'Accreditable',
        start_date: 'N/A',
        end_date: 'N/A',
      },
      {
        id: 21,
        program: 'BS in Accountancy',
        year_of_initial_operation: '2018-2019',
        accreditation_status: 'Accreditable',
        start_date: 'N/A',
        end_date: 'N/A',
      },
      {
        id: 22,
        program: 'BS in Business Administration',
        year_of_initial_operation: '2018-2019',
        accreditation_status: 'Accreditable',
        start_date: 'N/A',
        end_date: 'N/A',
      },
    ],
  },
  {
    branch_id: 2,
    branch_name: 'Santa Cruz',
    programs: [
      {
        id: 1,
        program:
          'Bachelor of Elementary Education major in Pre-Elementary & General Education',
        year_of_initial_operation: '1992-1993',
        accreditation_status: 'Level 3',
        start_date: 'December 16, 2020',
        end_date: 'December 15, 2024',
      },
      {
        id: 2,
        program: 'AB in Political Science',
        year_of_initial_operation: '1992-1993',
        accreditation_status: 'Level 2',
        start_date: 'October 1, 2022',
        end_date: 'Sep-01-2023',
      },
      {
        id: 3,
        program: 'BS in Information Systems (SC)',
        year_of_initial_operation: '1998-1999',
        accreditation_status: 'Level 2',
        start_date: 'Jul-01-2021',
        end_date: 'Jun-01-2026',
      },
      {
        id: 4,
        program: 'BS in Tourism Management',
        year_of_initial_operation: '2007-2008',
        accreditation_status: 'Level 3',
        start_date: 'July 1, 2021',
        end_date: 'June 30, 2025',
      },
    ],
  },
  {
    branch_id: 3,
    branch_name: 'Torrijos',
    programs: [
      {
        id: 1,
        program: 'BS in Agricultural Technology',
        year_of_initial_operation: '2012-2013',
        accreditation_status: 'Level 2',
        start_date: 'N/A',
        end_date: 'N/A',
      },
      {
        id: 2,
        program: 'BS Entrep major in Agri business',
        year_of_initial_operation: '2012-2013',
        accreditation_status: 'Level 2',
        start_date: 'November 1, 2018',
        end_date: 'October 31, 2022',
      },
      {
        id: 3,
        program: 'BS in Agriculture',
        year_of_initial_operation: '2006-2007',
        accreditation_status: 'Level 2',
        start_date: 'July 1, 2022',
        end_date: 'June 30, 2026',
      },
    ],
  },
  {
    branch_id: 4,
    branch_name: 'Gasan',
    programs: [
      {
        id: 1,
        program: 'BS in Fiseries',
        year_of_initial_operation: '1985-1986',
        accreditation_status: 'Level 3',
        start_date: 'July 1, 2021',
        end_date: 'June 30, 2025',
      },
    ],
  },
];
