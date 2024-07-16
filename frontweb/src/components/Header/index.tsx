import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { SiSpring } from "react-icons/si";

import PrintEstoque from "../../assets/images/print-estoque.png";
import PrintLanchonete from "../../assets/images/print-lanchonete.png";
import PrintMovies from "../../assets/images/print-movies.png";
import Estoque from "../../assets/videos/estoque.mov";
import Lanchonete from "../../assets/videos/lanchonete.mov";
import ProjectViteVideo from "../../assets/videos/project-vite.mov";
import CardSkills from "../CardSkills";
import { HeaderStyled } from "./style";

export default function Header() {
  return (
    <HeaderStyled>
      <div className="section">
        <div className="header-container">
          <h1>Hey!</h1>
          <h2>VINICIUS MONTES</h2>
          <p className="header-subtitle">
            Profissional em desenvolvimento de sistemas
          </p>
          <div className="header-social-container">
            <a href="https://github.com/viniciusmontes" target="_blank">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/viniciusmontesj" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="header-content">
          <CardSkills
            cardSkills={{
              name: "Backend",
              icon: <SiSpring size={32} />,
              description: `Profissional em projetos Spring Boot, na criação de CRUD utilizando web services REST, implementando padrões DTO, seguindo os tratamentos de exceções com dados para auditorias e paginações. Testes automatizados com TDD e JUnit, Mockito e MockBean.\n Validação de dados com Bean Validation, autenticação e autorização com OAuth2 e JWT. Domínio e ORM. Consulta ao banco de dados. Docker, Implantação, CI/CD`,
              image: ProjectViteVideo,
              poster: PrintMovies,
            }}
          />
          <CardSkills
            cardSkills={{
              name: "Front-end",
              icon: <FaReact size={32} />,
              description: `Criação de projetos ReactJS, TypeScript, rotas e navegação, integração com Figma e Bootstrap. Criaçãp de telas e layouts, uso de props e React Hooks (useState, useEffect), integração com APIs usando Axios.Formulários de login, e permissionamento em nível de rotas e componentes.Testes com JEST (unidade, integração, cenários), e implantação no Netlify com entrega contínua.Estruturação de dashboards complexos com gráficos, sumários, listagens e indicadores.`,
              image: Lanchonete,
              poster: PrintLanchonete,
            }}
          />
          <CardSkills
            cardSkills={{
              name: "Fullstack",
              icon: <IoCodeSlash size={32} />,
              description: `Profissional em projetos full stack, com experiência tanto em backend quanto frontend, utilizando Java e ReactJS. Habilidades em criação de CRUD, integração com APIs, autenticação e autorização, testes automatizados, e implantação contínua.`,
              image: Estoque,
              poster: PrintEstoque,
            }}
          />
        </div>
      </div>
    </HeaderStyled>
  );
}
