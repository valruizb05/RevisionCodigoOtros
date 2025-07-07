const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {   
  $n.textContent = 'cargando...';       
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);  
    const data = await response.json();                         


    $n.textContent = data.name;
    $b.textContent = data.blog;
    $l.textContent = data.location;

  } catch (err) {
    console.log('Error:', err);                                 
    $n.textContent = `Algo salió mal: ${err}`;                  
  }
}

displayUser('stolinski').catch(handleError);