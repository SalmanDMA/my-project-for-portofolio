import { linkAskMe, linkHome, linkPlaneFigures } from './linkData';

const footerData = [
 {
  id: 1,
  title: 'About Katik',
  link: [
   {
    id: 1,
    link: linkHome,
    text: 'Home',
   },
   {
    id: 2,
    link: linkPlaneFigures,
    text: 'Plane Figures',
   },
   {
    id: 3,
    link: linkAskMe,
    text: 'Ask Me',
   },
  ],
  type: 'link',
 },
 {
  id: 2,
  title: 'Similar Website',
  link: [
   {
    id: 1,
    link: 'https://mathsolver.microsoft.com/en',
    text: 'Microsoft Math Solver',
   },
   {
    id: 2,
    link: 'https://www.wolframalpha.com/',
    text: 'Wolfram Alpha',
   },
   {
    id: 3,
    link: 'https://www.symbolab.com/',
    text: 'Symbolab Math Solver',
   },
   {
    id: 4,
    link: 'https://www.khanacademy.org/math',
    text: 'Khanacademy',
   },
  ],
  type: '',
 },
 {
  id: 3,
  title: 'Helpful Articles',
  link: [
   {
    id: 1,
    link: 'https://link.springer.com/article/10.1007/s13347-019-00348-9',
    text: 'Technology and Mathematics',
   },
   {
    id: 2,
    link: 'https://www.sciencenews.org/topic/math',
    text: 'Math | Science News',
   },
   {
    id: 3,
    link: 'https://www.tandfonline.com/doi/abs/10.1080/00131725.2020.1698683?journalCode=utef20',
    text: 'The Roles of Technology ',
   },
   {
    id: 4,
    link: 'https://www.sciencedaily.com/news/computers_math/',
    text: 'Computers & Math News',
   },
  ],
  type: '',
 },
];

export default footerData;
