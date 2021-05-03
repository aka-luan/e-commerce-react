import { Container, Content } from "./styles";

export function SearchBar() {

  function btnClickHandler() {
    
    // const ele = document.getElementById(`${target}`).style as CSSStyleDeclaration;
    // if (target.checked) {
    //   ele.style.background = 'black'; 
    // }
  }
  return (
    <Container> 
      <Content>
        <h1>Aka-luan Search</h1>
        <div className="input-content">
          <input type="text" placeholder="Write something..." />
          <div>
            <button type="button" id="" className="input-btn" onClick={() => btnClickHandler()}>All fields</button>            
            <button type="button" id="" className="input-btn">Clothing</button>            
            <button type="button" id="" className="input-btn">Eletronics</button>            
            <button type="button" id="" className="input-btn">Jewelry</button>            
            {/* <label id="all fields"><input type="checkbox" onChange={e => checkedInputHandler(e)}/>All fields</label>
            <label id="clothing"><input type="checkbox" defaultChecked/>Clothing</label>
            <label id="electronics"><input type="checkbox" />Electronics</label>
            <label id="jewelry"><input type="checkbox" />Jewelry</label>             */}
          </div>
          <button className="search-btn" onClick={() => console.log('botão clicado')}><i className="fas fa-search"></i></button>
        </div>  
          
      </Content>
    </Container>
  )
}