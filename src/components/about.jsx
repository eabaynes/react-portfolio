/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div>
      <img src="./Portrait.png" alt="selfie" className="w-72" />
      <div className="w-max">
        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black font-bebas-neue text-6xl text-deep-purple ">
          Hi! My name is Elliot
        </h1>
      </div>
      <div className="my-3 flex w-2/4 flex-col text-xl">
        <p>
          I'm a former Chef turned Web Developer! After 10 years cooking, I
          decided it was time for a change so I can better manage my health and
          future. I love to learn and wound up turning to the world of
          technology- where there is always something to learn. My interests lie
          mostly in front-end development and user experience, but I have done
          back-end development as well.
        </p>
        <p>
          My experience in the hospitality industry has given me a strong set of
          soft skills including communication, teamwork, and problem solving.
          I'm no stranger to hard work and environments that require
          adaptability and flexibility. While I'm no longer a professional Chef,
          I still love to cook and share my creations with friends and
          coworkers.
        </p>
        <p>
          I'm currently seeking a full-time position as a Front End Developer
          where I can continue to sharpen my skills and grow as a developer. My
          long term goal is to learn more languages and skills, and eventually
          become a UX/UI designer with the ability to contribute to the
          development process.
        </p>
      </div>
      <h2>
        <a href="../public/ElliotBaynesResume.pdf" download>
          Download My Resume
        </a>
      </h2>
    </div>
  );
}
