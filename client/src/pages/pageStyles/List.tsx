import styled from "styled-components";

export const List = styled("div")`
float: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 20px;
  color: white;
  width: 60%;
  height: 11%; 
  text-align: center;
  background-color:#798E71 ; 
  margin-left: 2%; 
  margin-right: 2%; 
  margin-top: 4%;  
  border: none;
border-radius: 4px;
`;


export const ListItem = styled("div")`
float: left;
  padding: 10px;
  color: white;
  width: 100%;
  height: 100%; 
  text-align: center;
  background-color: ${props => props.theme.main};
  margin-left: 2%; 
  margin-top: 2%; 
  margin-bottom: 2%;
  margin-right: 2%;
  border: none;
border-radius: 4px;
`;