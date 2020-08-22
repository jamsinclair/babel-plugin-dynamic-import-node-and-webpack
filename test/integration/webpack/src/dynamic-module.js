/* global document */
export default () => {
  const h1 = document.createElement('h1');
  h1.id = 'dynamic-module-text';
  h1.textContent = 'This text was appended by a dynamic module';
  document.body.appendChild(h1);
};
