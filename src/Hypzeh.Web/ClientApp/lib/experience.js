import moment from 'moment';

const experience = [
  {
    company: 'Zupa',
    positions: [
      {
        title: 'Software Developer',
        location: 'Southampton, United Kingdom',
        description: 'Created microservices',
        start: moment('2018-10'),
        end: moment(),
        isPresent: true,
      },
    ],
  },
  {
    company: 'APD Communications',
    positions: [
      {
        title: 'Software Engineer',
        location: 'Hull, United Kingdom',
        description: 'Created secure, intelligent and connected control room and fleet technologies that help organisations protect and preserve society.',
        start: moment('2018-05'),
        end: moment('2018-08'),
        isPresent: false,
      },
      {
        title: 'Graduate Software Engineer',
        location: 'Hull, United Kingdom',
        description: 'Designed and developed core features of a contact management solution used by the emergency service operators, aiding in ~224,650 calls a day.',
        start: moment('2017-08'),
        end: moment('2018-05'),
        isPresent: false,
      },
    ],
  },
  {
    company: 'Seed Software',
    positions: [
      {
        title: 'Software Engineer (Part-Time)',
        location: 'Hull, United Kingdom',
        description: 'Collaborated with a client, demonstrating the effects of flooding in the local area through real-time simulation, in a VR environment.',
        start: moment('2016-09').startOf('month'),
        end: moment('2017-05').endOf('month'),
        isPresent: false,
      },
    ],
  },
];

export default experience;
