const insert = (emoji, label) => ({ emoji, label });

export const emojis = [
  // A
  // B
  // C
  insert('🐤', 'Baby Chick'),
  // D
  // E
  // F
  insert('😂', 'Face With Tears of Joy'),
  insert('🔥', 'Fire'),
  insert('🙏', 'Folded Hands'),
  // G
  insert('🌍', 'Globe Showing Europe-Africa'),
  insert('🎓', 'Graduation Cap'),
  // H
  insert('🌭', 'Hot Dog'),
  // I
  // J
  // K
  // L
  // M
  // N
  // O
  // P
  insert('🐧', 'Penguin'),
  insert('💩', 'Pile of Poo'),
  // Q
  // R
  insert('❤️', 'Red Heart'),
  // S
  insert('😊', 'Smiling Face With Smiling Eyes'),
  // T
  insert('🤔', 'Thinking Face'),
  insert('👍', 'Thumbs Up'),
  // U
  // V
  // W
  // X
  // Y
  // Z
];

export const randomEmoji = () => (emojis[Math.floor(Math.random() * emojis.length)]);
