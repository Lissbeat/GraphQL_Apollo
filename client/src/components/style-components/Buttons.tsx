import styled from "styled-components";
//button props 
type ButtonProps = {
  Width:number
  cancel:boolean
  Float:boolean
  MarginTop:number
}

export const ConfirmButton = styled("button")<ButtonProps>`
float: ${props => props.Float? "right": "center"};
width: ${props => props.Width}%;
background-color:${props => props.cancel? "#d32f2f": "#5ac04c"}; 
font-size: 20px;
color: black;
text-align: center;
font-weight: 100; 
padding-top: 2%;
padding-bottom: 2%; 
font-family: "Trebuchet MS", Helvetica, sans-serif;
letter-spacing: 0.2px;
word-spacing: -0.2px;
margin: auto;  
margin-top: ${props => props.MarginTop}px; 
margin-right: 10px; 
margin-left: 70px; 
margin-bottom: 10px; 
border: 2px solid white;
border-radius: 4px;
//kanppens farge endres når man holder over den
&:hover{
background-color: darkgrey; 
}
`;

export const DeleteButton= styled("div")`
  font-size: 100%;
  float: right;
  color: white; 

  background-color: transparent; 
  &:hover{
  background-color: darkgrey; 
  } 
  `;