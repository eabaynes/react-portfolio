// import the data from data.js
import Data from "../portfolio-data/data.js";

// function to map through the data and return a card for each project
export default function Work() {
  return (
    <div className="grid grid-cols-3">
      {Data.map((project) => {
        return (
          <div
            className="m-2 flex flex-col items-center justify-evenly rounded-md bg-white bg-opacity-30"
            key={project.id}
          >
            <img src={project.src} alt={project.title} className="w-7/12" />
            <h2 className="font-bebas-neue text-2xl font-bold text-deep-purple">
              {project.title}
            </h2>
            <p className=" text-sm text-mid-purple ">{project.skills}</p>
            <div className="flex">
              <a
                href={project.github}
                className="mx-1 font-bold hover:text-slate-700"
              >
                Github
              </a>
              <a
                href={project.deployed}
                className="mx-1 font-bold hover:text-purple-800"
              >
                Deployed
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
