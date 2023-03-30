export default function Footer() {
  return (
    <footer className="transparent fixed bottom-3 right-1 text-xs text-mid-purple md:text-sm lg:text-lg">
      <ul className="flex justify-end">
        <li className="mx-1 hover:text-orange-700 lg:mx-5">
          <a href="https://stackoverflow.com/users/21523615/ceramiccat">
            Stack Overflow
          </a>
        </li>
        <li className="mx-1 hover:text-slate-700 lg:mx-5">
          <a href="https://github.com/eabaynes">GitHub</a>
        </li>
        <li className="mx-1 hover:text-purple-700 lg:mx-5">
          <a href="https://www.linkedin.com/in/elliot-baynes-4a182b248/">
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
}
