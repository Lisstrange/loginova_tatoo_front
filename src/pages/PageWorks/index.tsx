import { Link } from "react-router-dom";

const PageWorks: React.FC = () => {
  return (
    <html lang="en">
      Страница с работами
      <head></head>
      <body>
        <header>
          My portfolio.
          {/* <Logo /> */}
          На этом же уровне будет навбар(навигация или хз как там её, не знаю,
          как сделать. Сделаю из готовых темплейтов бутстрапа)
        </header>
        <Link to="https://reactjs.org/">Моё</Link> портфолио
        <nav>
          <div>
            блок с приветствием и т.п.
            <div>А тут краткое описание под приветствием</div>
          </div>
        </nav>
        <div>
          WorkPage
          <div></div>
        </div>
      </body>
    </html>
  );
};

export default PageWorks;
