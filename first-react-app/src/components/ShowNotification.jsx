import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const ShowNotification = (message) => {
    Toastify({
        text:message,
        duration: 2000,
        gravity: 'top',
        position: 'right',
        message: message,
        style:{
          background:"#89c74a",
          color:"white"
        }
      }).showToast();
}

export default ShowNotification