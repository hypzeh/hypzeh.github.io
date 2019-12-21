import random from '../../../../../utils/random';

const create = (value, name) => ({ value, name });
const EMOJIS = [
  // A
  create('👽', 'Alien'),
  // B
  create('🐤', 'Baby Chick'),
  create('🎒', 'Backpack'),
  create('🥓', 'Bacon'),
  // C
  create('🐱', 'Cat Face'),
  create('👑', 'Crown'),
  // D
  create('🐕', 'Dog'),
  create('🐉', 'Dragon'),
  // E
  create('🧝', 'Elf'),
  create('👀', 'Eyes'),
  create('🤯', 'Exploding Head'),
  // F
  create('😂', 'Face With Tears of Joy'),
  create('🔥', 'Fire'),
  create('🦊', 'Fox'),
  // G
  create('🎲', 'Game Die'),
  create('🧞', 'Genie'),
  create('👻', 'Ghost'),
  create('🎓', 'Graduation Cap'),
  // H
  create('🐣', 'Hatching Chick'),
  create('🎧', 'Headphone'),
  create('🙉', 'Hear-No-Evil Monkey'),
  create('🦔', 'Hedgehog'),
  create('⚡', 'High Voltage'),
  create('🌭', 'Hot Dog'),
  // I
  // J
  // K
  // L
  create('🦁', 'Lion'),
  // M
  create('🧙', 'Mage'),
  // N
  create('🤓', 'Nerd Face'),
  // O
  // P
  create('🥳', 'Partying Face'),
  create('🐧', 'Penguin'),
  create('💩', 'Pile of Poo'),
  create('🍕', 'Pizza'),
  create('🍗', 'Poultry Leg'),
  // Q
  // R
  create('🦝', 'Raccoon'),
  create('❤️', 'Red Heart'),
  create('🤖', 'Robot'),
  create('🚀', 'Rocket'),
  create('🐓', 'Rooster'),
  // S
  create('🙈', 'See-No-Evil Monkey'),
  create('🌠', 'Shooting Star'),
  create('😴', 'Sleeping Face'),
  create('😎', 'Smiling Face With Sunglasses'),
  create('✨', 'Sparkles'),
  create('🙊', 'Speak-No-Evil Monkey'),
  // T
  create('🦖', 'T-Rex'),
  create('🏆', 'Trophy'),
  // U
  // V
  create('🧛', 'Vampire'),
  create('🎮', 'Video Game'),
  // W
  create('🍉', 'Watermelon'),
  create('😉', 'Winking Face'),
  // X
  // Y
  // Z
];

const getRandom = () => random.fromList(EMOJIS);

export default { getRandom };
