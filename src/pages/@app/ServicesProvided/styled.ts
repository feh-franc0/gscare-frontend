import { TextField, Text, Button } from '@radix-ui/themes';
import styled from 'styled-components';

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

export const Title = styled.h2`
font-size: 2rem;
color: #Fff;
font-family: sans-serif;
/* border-bottom: 2px solid #fff; */

`;


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;


export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  /* margin-left: 10px; */
`;

export const FilterSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  /* margin-left: 10px; */
`;

export const FilterButton = styled.button`

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
`;

// export const Pagination = styled.div`
//   text-align: right;
// `;


// export const PaginationButton = styled.button`
//   padding: 5px 10px;
//   font-size: 14px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin: 0 5px;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

export const RightHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const Pagination = styled.div`
  text-align: right;
`;


export const PaginationButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #007bff;
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


export const PaginationContainer = styled.div`
  gap: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  /* background-color: #f0f0f0; */
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
