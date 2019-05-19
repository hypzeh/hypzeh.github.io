import moment from 'moment';

const experience = [
  {
    company: 'APD Communications',
    positions: [
      {
        title: 'Software Engineer',
        location: 'Hull, United Kingdom',
        description: 'this is a description about my time as a graduate software engineer...',
        start: moment('2018-05').startOf('month'),
        end: moment('2018-08').endOf('month'),
      },
      {
        title: 'Graduate Software Engineer',
        location: 'Hull, United Kingdom',
        description: 'this is a description about my time as a graduate software engineer...',
        start: moment('2017-08').startOf('month'),
        end: moment('2018-05').endOf('month'),
      },
    ],
  },
];

export default experience;
