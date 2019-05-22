import moment from 'moment';

const experience = [
  {
    company: 'Zupa',
    positions: [
      {
        title: 'Software Developer',
        location: 'Southampton, United Kingdom',
        description: 'this is a description about my time as a software developer...',
        start: moment('2018-10'),
        end: moment(),
      },
    ],
  },
  {
    company: 'APD Communications',
    positions: [
      {
        title: 'Software Engineer',
        location: 'Hull, United Kingdom',
        description: 'this is a description about my time as a software engineer...',
        start: moment('2018-05'),
        end: moment('2018-08'),
      },
      {
        title: 'Graduate Software Engineer',
        location: 'Hull, United Kingdom',
        description: 'this is a description about my time as a graduate software engineer...',
        start: moment('2017-08'),
        end: moment('2018-05'),
      },
    ],
  },
  {
    company: 'Seed Software',
    positions: [
      {
        title: 'Software Engineer (Part-Time)',
        location: 'Hull, United Kingdom',
        description: 'this is a description about my time as a part-time software engineer...',
        start: moment('2016-09').startOf('month'),
        end: moment('2017-05').endOf('month'),
      },
    ],
  },
];

export default experience;
