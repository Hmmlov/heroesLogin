import { Link } from "react-router-dom";

const CharactersByHeroes = ({alter_ego, characters}) => {
    /* if(alter_ego === characters) return (<></>);
    return <p>{characters}</p> */
    /* Podemos reducir la condicional if a un ternario más simple */
    return (alter_ego === characters) 
            ? <></> 
            : <p>{characters}</p>
}

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`;

    /* const charactesByHeroes = (<p>{characters}</p>); */
  return(
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImageUrl} alt={superhero} className="card-img"/>
                </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {/* (alter_ego !== characters) && characterByHero | que vendría a ser = (<p>{characters}</p>) 
                            (alter_ego !== characters) && (<p>{characters}</p>) 
                        */}
                        <CharactersByHeroes characters={characters} alter_ego={alter_ego} />
    	                
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link to={`/heroes/${id}`}>
                            Más..
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};
