import React, { useState, useEffect} from 'react';

export default function App() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  function handlePositionReceived({coords}) {
    const { latitude, longitude } = coords;

    setLocation({ latitude, longitude});
  }
  

  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
    
  );
}


/*


 useEffect( async () => {

    const response = await fetch('https://api.github.com/users/JonathasGoncalves/repos');
    const data = await response.json();

    setRepositores(data);
  }, []);

  useEffect(() => {
    const filtro = repositores.filter(repo => repo.favorite);
    document.title = `Você tem ${filtro.length} favoritos`;
  }, [repositores])

  function handleFavorito(id) {
    const newRepositores = repositores.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite} : repo;
    })

    setRepositores(newRepositores);
  }


  return (
     <ul>
        {repositores.map(repo => (
          <li key={repo.id}>
             {repo.name}
             {repo.favorite && <span>(Favorito)</span>}
             <button onClick={() => handleFavorito(repo.id)}>
                Favoritar
             </button> 
          </li>
        ))}
      </ul>
    
  );


  */
