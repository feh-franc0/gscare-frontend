import styled from 'styled-components';
import { TextField } from "@radix-ui/themes";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
`;


export const ContainerSearch_Filter_Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  gap: 10px;
  svg{
    cursor: pointer;
  }

  @media screen and (max-width: 1360px) {
    flex-direction: column;
  }
`;

export const InputSearch = styled(TextField.Root)`
  width: 55%;
  padding: 5px;
  box-sizing: border-box;
  /* border-radius: 18px; */

  @media screen and (max-width: 1360px) {
    width: 100%;
  }
`

export const ContainerFilterAndPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 45%;

  @media screen and (max-width: 1360px) {
    width: 100%;
    justify-content: space-between;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Filter = styled.div`
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
  display: flex;
  margin: auto 0;
  cursor: pointer;
  padding: 5px;

  color: #fff;
  font-size: 16px;
  font-weight: bold;
  gap:10px;

  button {
    box-shadow: none;
  }
`;

export const PaginationContainer = styled.div`
  gap: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  height: 40px;
  background: #324a83;
  width: 100%;
`;

export const NavigationButton = styled.button`
  background: transparent;
  /* background-color: #fff; */
  /* border: 2px solid #fff; */
  border: none;
  color: #fff;
  border-radius: 8px;
  display: flex;
  margin: auto 0;
  cursor: pointer;
  padding: 5px;

  svg {
    width: 24px;
    height: 24px;
  }

  span {
    padding: 0 5px;
    transform: translateY(10%);
  }
  @media screen and (max-width: 780px) {
    span {
      display: none;
    }
  }


  &:hover {
    span {
      /* text-decoration: underline; */
      color: #BDBDBD;
    }
    svg {
      color: #BDBDBD;
    }
  }
`;

export const PageIndicator = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;




export const Button = styled.button`
  background-color: #1F2C53;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;


export const EmployeeCard = styled.div`
  position: relative;
  background: #f5f5f5;
  padding: 0px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 550px;
  max-height: 550px;
  width: 90%; 
  height: auto; 
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    margin: 8px;
  }

  strong {
    font-weight: bold;
  }

  background-size: 50px 50px;
  background-repeat: no-repeat;
  background-position: center top;
`;

export const EmployeeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const EmployeeImageContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1F2C53;
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  img {
    height: 100px;
    object-fit: cover;
    border: 2px solid #fff;
    border-radius: 50%;
    margin: 10px;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: transparent;
    color: #1F2C53;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 10px;
    cursor: pointer;
  }
`;

export const TableContainer = styled.div`
  overflow: hidden;
  overflow-x: auto;
  max-width: 100%;
  margin: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 5px 0 100px 0;
  /* margin-top: 20px; */

  th, td {
    /* border: 1px solid #ddd; */
    padding: 18px;
    text-align: center;
  }

  th {
    background-color: #1F2C53;
    color: #fff;
  }

  tbody {
    tr:nth-child(even) {
      background-color: #f5f5f5;
    }

    tr:nth-child(odd) {
      background-color: #f0f0f0;
    }
  }

  th:first-child {
    border-top-left-radius: 10px;
    /* border-bottom-left-radius: 10px; */
  }

  th:last-child {
    border-top-right-radius: 10px;
    /* border-bottom-right-radius: 10px; */
  }
`;


export const TableRow = styled.tr`
  &:hover {
    background-color: #ddd;
  }
`;

export const TableCell = styled.td`
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;



export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 15px;
  
  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media screen and (max-width: 780px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;

  
  @media screen and (max-width: 780px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  /* margin-left: 10px; */

  @media screen and (max-width: 780px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FilterSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  /* margin-left: 10px; */

  
  @media screen and (max-width: 780px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  display: flex;
  font-weight: bold;
  font-family: sans-serif;
  padding: 10px 10px;
  font-size: 16px;
  background-color: #fff;
  color: #696969;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    color: #5c5c5c;
  }

  span {
    display: none;
  }
  
  @media screen and (max-width: 780px) {
    justify-content: space-between;
    
    span {
      display: flex;
    }

    width: 100%;
  }
`;

export const Pagination = styled.div`
  text-align: right;
`;


export const PaginationButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #1F2C53;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const CurrentPageDiv = styled.span`
  margin: 0 10px;
`;
