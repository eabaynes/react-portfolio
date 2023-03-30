/* eslint-disable react/no-unescaped-entities */
export default function About() {
  return (
    <div className="flex justify-between">
      <img
        src="./Portrait.png"
        alt="selfie"
        className="mt-20 h-1/4 w-1/4 px-5 py-5"
      />
      <div className="flex flex-col justify-center px-10 py-20">
        <div className="w-max">
          {/* typing animation adapted from https://play.tailwindcss.com/q6LZjWKr97 */}
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black font-bebas-neue text-6xl text-deep-purple ">
            Hi! My name is Elliot
          </h1>
        </div>
        <div className="mx-10 my-10 flex flex-col text-lg text-mid-purple">
          <p className="my-3">
            I'm a former Chef turned Web Developer! After 10 years cooking and
            managing foodservice operations, I decided it was time for a change
            so I can better manage my health and future. I love to learn and
            wound up turning to the world of technology- where there is always
            something to learn. My interests lie mostly in front-end development
            and user experience, but I have done back-end development as well.
          </p>
          <p className="mb-3">
            My experience in the hospitality industry has given me a strong set
            of soft skills including communication, teamwork, and problem
            solving. I'm no stranger to hard work and environments that require
            adaptability and flexibility. While I'm no longer a professional
            Chef, I still love to cook and share my creations with friends and
            coworkers.
          </p>
          <p className="mt-3">
            I'm currently seeking a full-time position as a Front End Developer
            where I can continue to sharpen my skills and grow as a developer.
            My long term goal is to learn more programming languages and
            technologies, and eventually become a UX/UI designer with the
            ability to contribute to the development process.
          </p>
        </div>
        <button className=" ml-10 mt-2 w-max rounded-md bg-deep-purple px-2 py-1 font-bebas-neue text-xl text-white ">
          <a href="../public/ElliotBaynesResume.pdf" download>
            Download My Resume
          </a>
        </button>
      </div>
    </div>
  );
}
