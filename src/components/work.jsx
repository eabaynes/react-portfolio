// import the data from data.js
import Data from "../portfolio-data/data.js";

// function to map through the data and return a card for each project
function workCards() {
  return (
    <div>
      <h1>Work</h1>
      {Data.map((project) => {
        return (
          <div className="card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.github}>Github</a>
            <a href={project.deployed}>Deployed</a>
          </div>
        );
      })}
    </div>
  );
}

export default function Work() {
  return <div>{workCards()}</div>;
}
