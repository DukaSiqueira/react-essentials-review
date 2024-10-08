export default function CoreConcept({
    image = 'https://via.placeholder.com/150', 
    title = 'Default Title', 
    description = 'Default Description'}) {
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }