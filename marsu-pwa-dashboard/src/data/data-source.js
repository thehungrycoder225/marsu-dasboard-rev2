export const enrollmentData = [
  {
    _id: 'boac_2023', // Unique identifier combining branch and year
    year: 2023,
    branch: {
      id: 1,
      code: 'BOAC',
      name: 'Boac',
    },
    programs: [
      {
        category: 'Bachelor of Science in Civil Engineering',
        priority: 431,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Computer Engineering',
        priority: 144,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Electrical Engineering',
        priority: 161,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Electronics Engineering',
        priority: 94,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Mechanical Engineering',
        priority: 161,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Industrial Technology',
        priority: 1673,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Information Technology',
        priority: 729,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Information System',
        priority: 248,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Secondary Education',
        priority: 306,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Culture and Arts Education',
        priority: 103,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Technology and Livelihood Education',
        priority: 103,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Arts in English Language Studies',
        priority: 162,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Arts in Communication',
        priority: 233,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Social Works',
        priority: 280,
        non_priority: 0,
      },
      {
        category:
          'Bachelor of Science in Entrepreneurship-Entrepreneurial Management',
        priority: 248,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Business Administration',
        priority: 855,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Accountancy',
        priority: 103,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Law Enforcement Administration',
        priority: 290,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Public Administration',
        priority: 304,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Environmental Science',
        priority: 200,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Nursing',
        priority: 428,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Midwifery',
        priority: 65,
        non_priority: 0,
      },
      {
        category: 'Diploma in Midwifery',
        priority: 0,
        non_priority: 38,
      },
    ],
  },
  {
    _id: 'gasan_2023',
    year: 2023,
    branch: {
      id: 2,
      code: 'GASAN',
      name: 'Gasan',
    },
    programs: [
      {
        category: 'Bachelor of Science in Fisheries',
        priority: 393,
        non_priority: 0,
      },
    ],
  },
  {
    _id: 'sta_cruz_2023',
    year: 2023,
    branch: {
      id: 3,
      code: 'STA_CRUZ',
      name: 'Sta. Cruz',
    },
    programs: [
      {
        category: 'Bachelor of Elementary Education',
        priority: 121,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Arts in Political Science',
        priority: 222,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Accounting Information System',
        priority: 98,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Tourism Management',
        priority: 399,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Information System',
        priority: 145,
        non_priority: 0,
      },
    ],
  },
  {
    _id: 'torrijos_2023',
    year: 2023,
    branch: {
      id: 4,
      code: 'TORRIJOS',
      name: 'Torrijos',
    },
    programs: [
      {
        category: 'Bachelor of Science in Agriculture',
        priority: 145,
        non_priority: 0,
      },
      {
        category: 'Bachelor in Agricultural Technology',
        priority: 96,
        non_priority: 0,
      },
      {
        category: 'Bachelor of Science in Entrepreneurship_Agri_Business',
        priority: 1,
        non_priority: 0,
      },
      {
        category: 'Diploma in Agricultural Technology',
        priority: 0,
        non_priority: 90,
      },
      {
        category: 'Certificate in Agricultural Science',
        priority: 0,
        non_priority: 37,
      },
    ],
  },
];

export const licensureExamsData = [
  {
    _id: 'boac_2023', // Unique identifier combining branch and year
    year: 2023,
    branch: {
      id: 1,
      code: 'BOAC',
      name: 'Boac_Branch',
    },
    categories: [
      {
        categoryName: 'Nursing',
        firstTimeTakers: 90,
        passingRate: 86,
        totalExaminees: 100,
        topPerformers: [],
        remarks: '',
      },
      {
        categoryName: 'Social Work',
        firstTimeTakers: 52,
        passingRate: 37,
        totalExaminees: 60,
        topPerformers: [],
        remarks: '',
      },
      {
        categoryName: 'Electrical Engineering',
        firstTimeTakers: 26,
        passingRate: 20,
        totalExaminees: 30,
        topPerformers: [],
        remarks: '',
      },
      {
        categoryName: 'Electronics Engineering',
        firstTimeTakers: 18,
        passingRate: 5,
        totalExaminees: 20,
        topPerformers: [],
        remarks: '',
      },
      {
        categoryName: 'Civil Engineering',
        firstTimeTakers: 119,
        passingRate: 57,
        totalExaminees: 130,
        topPerformers: [''],
        remarks: '',
      },
      {
        categoryName: 'Mechanical Engineering',
        firstTimeTakers: 16,
        passingRate: 15,
        totalExaminees: 18,
        topPerformers: [],
        remarks: 's',
      },
      {
        categoryName: 'Secondary Education',
        firstTimeTakers: 101,
        passingRate: 86,
        totalExaminees: 110,
        topPerformers: [''],
        remarks: '',
      },
      {
        categoryName: 'Elementary Education',
        firstTimeTakers: 23,
        passingRate: 23,
        totalExaminees: 25,
        topPerformers: [],
        remarks: '',
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
