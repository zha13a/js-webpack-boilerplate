import '~/styles/test.styles.css';
import '~/styles/test.fonts.css';

window.onload = () => {
  const rootNode = document.getElementById('root');
  rootNode.innerText = '-> This should be a custom font';
}