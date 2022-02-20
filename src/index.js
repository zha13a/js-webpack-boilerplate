import '~/styles/test.styles.scss';
import '~/styles/test.fonts.scss';

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
};
