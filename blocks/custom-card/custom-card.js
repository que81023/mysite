import { fetchPlaceholders } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
    const placeholders = await fetchPlaceholders();
    const keyPlaceholder = placeholders.card;
    console.log(keyPlaceholder);

    const x = document.getElementById("custom-card").innerHTML = keyPlaceholder;
    console.log(x);
    const teasure = await loadFragment('/teasure');

    const contain = document.createElement('div');
    
    contain.append(teasure);
    block.append(contain);
}