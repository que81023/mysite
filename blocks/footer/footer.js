import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  console.log(footerPath);
  const fragment = await loadFragment(footerPath);

  //const teasure = await loadFragment('/teasure');

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  
  // const spanValue = document.createElement('span');
  // var message = 'Reni Laimujam';
  // spanValue.append(message);
  // footer.append(spanValue);

  //footer.append(teasure);


  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
}
