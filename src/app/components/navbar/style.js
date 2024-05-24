import styled from "styled-components"
export const Nav = styled.nav`
  padding: 0.5rem 1rem;
  background-color: #ebb1b1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  section{
    display: flex;  
    align-items: center;
    gap: 1rem;
    
    a {
      text-decoration: none;
      height: fit-content;
    }
    
  }
  
  @media (max-width: 540px){
    flex-direction: column;
    gap: 1rem;
    
    
  }
  
`

export const Name = styled.p`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`

export const LinkNav = styled.p`
  color: #000000;
  border: 1px solid #000000;
  padding: 10px;
  border-radius: 4px;
  background-color: #be6a6a;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    border: 1px solid #00000067;
    background-color: #be6a6a67;
    transition: 0.25s ease-in-out;
  }
  &:active {
    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
  }
`
export const Logo = styled.div`
  background-image: url("/cat.png");
  background-position: 60% 28%;
  background-repeat: no-repeat;
  background-size: 146px;
  height: 40px;
  width: 40px;
  border: 1px solid black;
  `
  
  /* export const Logo = styled.div<{ $urlImage: any }>`
  background-image: url(${(props) => props.$urlImage || ""});
  background-image: url(${({ $urlImage }) => $urlImage});
` */