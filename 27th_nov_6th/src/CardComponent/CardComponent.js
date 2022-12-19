const CardComponent = (props) => {

  //destrct also like const {img,name,city}=person
  const person = props.person;
  return (
      <div id="card" className="card">
          <img src={person?.avatar_url} />
          <h2>{person?.name}</h2>
          <h3>{person?.location}</h3>
          <p>{person?.company}</p>
          <p>{person?.currentRole}</p>
      </div>
  )
}

export default CardComponent;