document.addEventListener("DOMContentLoaded", function() {
    fetch('capability.json')
      .then(response => response.json())
      .then(data => {
        const cardContainer = document.getElementById('card-container');
  
        data.forEach(item => {
          const card = document.createElement('div');
          card.className = 'card';
          
          const image = document.createElement('img');
          image.src = item.image;
          
          const header = document.createElement('h2');
          header.textContent = item.header;
          
          const content = document.createElement('p');
          content.textContent = item.content;
          
          card.appendChild(image);
          card.appendChild(header);
          card.appendChild(content);
          
          cardContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  