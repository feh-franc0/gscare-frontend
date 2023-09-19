import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  background-color: #4047d0;
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;

  &:hover{
    /* cursor: pointer; */
  }
`

export const Logo = styled.img`
  width: 100px;
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  gap: 5px;

  a {
    font-size: 0.9rem;
    color: aliceblue;
  }

  p {
    font-size: 1rem;
    color: #bcbcbc;
  }
`

export const Action = styled.div`
  display: flex;
  position: relative;
  gap: 20px;

  button{
    border: none;
    border-radius: 10px;
    height: 50px;
    color: white;
    margin: auto;
    background-color: #137d00;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    padding: 5px 15px;

    &:hover {
      cursor: pointer;
      background-color: #238615;
      color: #e5e5e5;
    }
}
`
export const Infos = styled.div`
  display: flex;

  ul{
    margin: auto;
    display: flex;
    position: relative;
    list-style: none;

    li{
      color: #e4e4e4;
      font-size: 1.2rem;
      padding: 0px 10px;
      justify-content: space-between;

      &:hover {
        cursor: pointer;
      }
    }
  }
`