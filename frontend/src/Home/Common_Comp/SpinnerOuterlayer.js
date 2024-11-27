import ReactDOM from 'react-dom';

export default function SpinnerOuterlayer(props) {
   const content = props.children;
   return ReactDOM.createPortal(content,document.getElementById('loading-spinner'));

}