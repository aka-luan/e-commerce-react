import { useState, useEffect } from 'react'

import { Container, Content } from "./styles"

import logoImg from "../../assets/logo.svg"

import { api } from '../../services/api'



export function Header() {
  const [categories, setCategories] = useState<string[]>()

  useEffect(() => {
    api.get<string[]>('/products/categories')
    .then(response => setCategories(response.data))
  }, [])

  //console.log(categories)
  
  return (
    <Container>
      <Content>
        <div>
          <img src={logoImg} alt="Luan Alves Clothing logo" />
          <ul>
            <div className="dropdown-left">
              <button className="dropbtn">category<i className="fas fa-caret-down" style={{ marginLeft: "1rem" }}></i>
              </button>
              <div>
                {categories?.map(category => <a href="/">{category}</a>)}
              </div>
            </div>
            <li>
              <a href="/">about us</a>
            </li>
            <li>
              <a href="/">assistance</a>
            </li>
            <li>
              <a href="/">contacts</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="/"><i className="far fa-heart"></i></a>
            </li>
            <li>
              <a href="/"><i className="fas fa-shopping-basket"></i></a>
            </li>
            <div className="dropdown-right">
              <button className="dropbtn">user<i className="fas fa-caret-down" style={{ marginLeft: "1rem" }}></i>
              </button>
              <div>
                <a href="/"><i className="far fa-id-badge"></i>my profile</a>
                <a href="/"><i className="fas fa-user-edit"></i>edit profile</a>
                <a href="/"><i className="fas fa-cog"></i>settings</a>
                <a href="/"><i className="far fa-question-circle"></i>help</a>
                <a href="/"><i className="fas fa-sign-out-alt"></i>logout</a>
              </div>
            </div>
          </ul>
        </div>
      </Content>
    </Container>
  )
}