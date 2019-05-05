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
  {
    emoji: '💩',
    label: 'Pile of Poo',
  },
  {
    emoji: '🔥',
    label: 'Fire',
  },
  {
    emoji: '❤️',
    label: 'Red Heart',
  },
  {
    emoji: '😂',
    label: 'Face With Tears of Joy',
  },
  {
    emoji: '🤔',
    label: 'Thinking Face',
  },
  {
    emoji: '👍',
    label: 'Thumbs Up',
  },
];

export const randomEmoji = () => (emojis[Math.floor(Math.random() * emojis.length)]);
