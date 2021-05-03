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
              <button className="dropbtn">Category<i className="fas fa-caret-down" style={{ marginLeft: "1rem" }}></i>
              </button>
              <div>
                {categories?.map(category => <a key={category} href="/">{category[0].toUpperCase() + category.slice(1)}</a>)}
              </div>
            </div>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Assistance</a>
            </li>
            <li>
              <a href="/">Contacts</a>
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
              <button className="dropbtn">User<i className="fas fa-caret-down" style={{ marginLeft: "1rem" }}></i>
              </button>
              <div>
                <a href="/"><i className="far fa-id-badge"></i>My profile</a>
                <a href="/"><i className="fas fa-user-edit"></i>Edit profile</a>
                <a href="/"><i className="fas fa-cog"></i>Settings</a>
                <a href="/"><i className="far fa-question-circle"></i>Help</a>
                <a href="/"><i className="fas fa-sign-out-alt"></i>Logout</a>
              </div>
            </div>
          </ul>
        </div>
      </Content>
    </Container>
  )
}