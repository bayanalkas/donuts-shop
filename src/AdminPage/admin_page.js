import './admin_p.css';


document.addEventListener('DOMContentLoaded', function () {
    const createForm = document.getElementById('create-donut-form');
    const updateForm = document.getElementById('update-donut-form');
    const deleteForm = document.getElementById('delete-donut-form');

    createForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(createForm);
        fetch('http://localhost/Donuts/create_donut.php', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
          .then(data => {
              alert(data.message);
              createForm.reset(); 
          })
          .catch(error => console.error('Error:', error));
    });
    
    

    updateForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(updateForm);
        fetch('http://localhost/Donuts/update_donut.php', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
          .then(data => alert(data.message))
          .catch(error => console.error('Error:', error));
    });

    deleteForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(deleteForm);
        fetch('http://localhost/Donuts/delete_donut.php', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
          .then(data => alert(data.message))
          .catch(error => console.error('Error:', error));
    });
});

export default function AdminPage() {
  }