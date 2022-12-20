const CardComponent = ({person,key}) => {

  //destrct also like const {img,name,city}=person

  const r = Math.floor(Math.random()*100)
  return (
      <div id={`parent${r}`} className="cardLayout card" key={r}>
          <img className='imageWidth' src={person?.avatar_url} />
          <h2>{person?.name ? person?.name :"UserName: NA"}</h2>
          <h3>User Location:{person?.location ? person?.location : "NA"}</h3>
          <p>Company Name: {person?.company ? person?.company : "NA"}</p>
          <p>{person?.currentRole}</p>
      </div>
  )
}

export default CardComponent;