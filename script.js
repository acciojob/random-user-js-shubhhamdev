document.addEventListener('DOMContentLoaded', () => {
  const getUserBtn = document.getElementById('getUser');
  const infoButtons = document.querySelectorAll('.infoButton');
  const additionalInfoDiv = document.getElementById('additionalInfo');
  const infoContentDiv = document.getElementById('infoContent');

  getUserBtn.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
     .then(response => response.json())
     .then(data => {
        const user = data.results[0];
        document.getElementById('userImage').src = user.picture.large;
        document.getElementById('userName').textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
        updateInfoContent(user);
        additionalInfoDiv.style.display = 'block';
      });
  });

  infoButtons.forEach(button => {
    button.addEventListener('click', () => {
      const attrValue = button.getAttribute('data-attr');
      updateInfoContent(attrValue);
    });
  });

  function updateInfoContent(attrValue) {
    let content = '';
    switch (attrValue) {
      case 'age':
        content = `<p>Age: ${new Date().getFullYear() - new Date(user.dob.date).getFullYear()}</p>`;
        break;
      case 'email':
        content = `<p>Email: ${user.email}</p>`;
        break;
      case 'phone':
        content = `<p>Phone: ${user.phone}</p>`;
        break;
      default:
        break;
    }
    infoContentDiv.innerHTML = content;
  }
});
