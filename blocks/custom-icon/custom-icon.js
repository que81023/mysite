import { loadFragment } from '../fragment/fragment.js';


export default async function decorate(block) {
  const teasure = await loadFragment('/teasure');

  const contain = document.createElement('div');
  
  contain.append(teasure);
  block.append(contain);
}
