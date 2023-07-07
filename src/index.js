import ReactDOM from 'react-dom'
import App from './App'
import './assets/style.css'
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App/>); 

// ReactDOM.createRoot is used to create a root-level entry point for your React application, 
// and the render method is called to render your App component into the specified root element.