// import the data from data.js
import Data from "../portfolio-data/data.js";

// function to map through the data and return a card for each project
export default function Work() {
  return (
    <div className="grid grid-cols-3">
      {Data.map((project) => {
        return (
          <div className="m-2 flex flex-col" key={project.id}>
            <img src={project.src} alt={project.title} className="w-max" />
            <h2>{project.title}</h2>
            <p>{project.skills}</p>
            <a href={project.github}>Github</a>
            <a href={project.deployed}>Deployed</a>
          </div>
        );
      })}
    </div>
  );
}
