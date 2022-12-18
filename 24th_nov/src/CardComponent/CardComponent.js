const CardComponent = (props) => {

  const person = props.person;
  return (
      <div id="card" className="card">
          <img src={person.img} />
          <h2>{person.name}</h2>
          <h3>{person.city}</h3>
          <h4>{person.qualification}</h4>
          <h4>{person.currentRole}</h4>
      </div>
  )
}

export default CardComponent;