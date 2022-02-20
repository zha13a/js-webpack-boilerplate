import '~/styles/test.styles.css';
import '~/styles/test.fonts.css';

import { titleText } from './js/test';
import webpackLogo from '~/img/webpack-icon.svg';

window.onload = () => {
  const rootNode = document.getElementById('root');

  const title = document.createElement('div');
  title.setAttribute('class', 'title');
  title.innerText = titleText();

  const logo = document.createElement('img');
  logo.setAttribute('class', 'webpack-logo');
  logo.src = webpackLogo;

  rootNode.append(title, logo);
  // rootNode.innerText = '-> This should be a custom font';
}