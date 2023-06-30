import square from '../assets/images/plane-figures/persegi.webp';
import triangle from '../assets/images/plane-figures/segitiga.webp';
import parallelogram from '../assets/images/plane-figures/jajar-genjang.webp';
import rectangle from '../assets/images/plane-figures/persegi-panjang.webp';
import trapezoidal from '../assets/images/plane-figures/trapesium.webp';
import rhombus from '../assets/images/plane-figures/ketupat.webp';

const planeFiguresContentData = [
 {
  id: 1,
  title: 'Square Formula',
  description: 'The first plane figure formulas are squares. A square is a shape that has 4 sides (2 pairs of parallel sides) and the length on each side is the same. A square has 4 right angles (90°) at each corner.',
  formula: {
   keliling: '4 x s',
   luas: 's x s',
  },
  remarks: {
   s: 'Side Length',
  },
  img: square,
 },
 {
  id: 2,
  title: 'Triangle Formula',
  description: 'A triangle is a wake that has 3 sides and 3 corners. In the triangle there are several types that are distinguished by the length of the sides and the size of the angles.',
  formula: {
   keliling: 'a + b + c',
   luas: '1/2 x a x t',
  },
  remarks: {
   a: 'Length of base',
   b: 'Side lenght b',
   c: 'Side lenght c',
  },
  img: triangle,
 },
 {
  id: 3,
  title: 'Parallelogram Formula',
  description: ' A parallelogram is a wake that has 2 pairs of parallel sides, has the same length and has 2 pairs of equal angles.',
  formula: { keliling: 'a + t', luas: '2 x (a x b)' },
  remarks: { a: 'Length of base', b: 'Side lenght b', t: 'Height' },
  img: parallelogram,
 },
 {
  id: 4,
  title: 'Rectangle Formula',
  description: 'A rectangle is a wake that has 2 pairs of parallel sides and the sides facing each other have the same length. Just like a square, the rectangle at each corner has a right angle (90°).',
  formula: { keliling: '2 x (p + l)', luas: 'p x l' },
  remarks: { p: 'Length', l: 'Width' },
  img: rectangle,
 },
 {
  id: 5,
  title: 'Trapezoidal formula',
  description: 'A trapezoid is a wake that has 2 pairs of parallel sides but on 1 pair the sides have an unequal length or the two sides are not of equal length.',
  formula: { keliling: 'AB + BC + CD + DA', luas: '1/2 × (a + b) × t' },
  remarks: { AB: 'Side Length', BC: 'Side Length', CD: 'Side Length', DA: 'Side Length', a: 'Side Length', b: 'Side Length B' },
  img: trapezoidal,
 },
 {
  id: 6,
  title: 'Rhombus Formula',
  description: 'A rhombus is a wake that has 4 sides of equal length and has 2 corners facing each other that are the same size.',
  formula: { keliling: 's × 4', luas: ' 1/2 × d1 × d2' },
  remarks: { s: 'Side Length', d1: 'Diagonal Length 1', d2: 'Diagonal Length 2' },
  img: rhombus,
 },
];

export default planeFiguresContentData;
