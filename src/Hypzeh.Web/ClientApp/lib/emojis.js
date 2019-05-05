export const emojis = [
  {
    emoji: '🐧',
    label: 'Penguin',
  },
  {
    emoji: '🐤',
    label: 'Baby Chick',
  },
  {
    emoji: '🌭',
    label: 'Hot Dog',
  },
];

export const randomEmoji = () => (emojis[Math.floor(Math.random() * emojis.length)]);
