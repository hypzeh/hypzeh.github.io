const insert = (emoji, label) => ({ emoji, label });
const library = [
  // A
  // B
  insert('👉', 'Backhand Index Pointing Right'),
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
  insert('😭', 'Loudly Crying Face'),
  // M
  // N
  insert('🤓', 'Nerd Face'),
  // O
  // P
  insert('🐧', 'Penguin'),
  insert('💩', 'Pile of Poo'),
  insert('💜', 'Purple Heart'),
  // Q
  // R
  insert('❤️', 'Red Heart'),
  insert('🚀', 'Rocket'),
  // S
  insert('😍', 'Smiling Face With Heart-Eyes'),
  insert('😊', 'Smiling Face With Smiling Eyes'),
  // T
  insert('🤔', 'Thinking Face'),
  insert('👍', 'Thumbs Up'),
  insert('💕', 'Two Hearts'),
  // U
  // V
  // W
  // X
  // Y
  // Z
];

const getRandom = () => library[Math.floor(Math.random() * library.length)];

export default {
  library,
  getRandom,
};
