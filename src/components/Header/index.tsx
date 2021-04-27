import { Container, Content } from "./styles"
import logoImg from "../../assets/logo.svg"
export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="Luan Alves Clothing logo" />
          <ul>
            <li>
              <button>Categoria<i className="fas fa-caret-down" style={{ marginLeft: "1rem" }}></i></button>
            </li>
            <li>
              <button>Sobre nós</button>
            </li>
            <li>
              <button>Assistência</button>
            </li>
            <li>
              <button>Contatos</button>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <button><i className="far fa-heart"></i></button>
            </li>
            <li>
              <button><i className="fas fa-shopping-basket"></i></button>
            </li>
            <li>
              <a href="/">Usuário <i className="fas fa-caret-down" style={{ marginLeft: "1rem" }}></i>
              </a>
              <div className="dropdown-container">
                <div className="dropdown-content">
                  <a href="/">Link 1</a>
                  <a href="/">Link 2</a>
                  <a href="/">Link 3</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  )
}