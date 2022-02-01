import styled, {css} from 'styled-components'

export const  Button = styled.button`
border: none;
outline: none;
width: 100%;
height: 35px;
border-radius: 5px;
color: white;
padding: 0px 10px;
font-weight: 600;
letter-spacing: 0.1em;
cursor:pointer;

${props => props.register && css`
background: #2983bc;
height:50px
  `}
  ${props => props.delete && css`
    background: #bc2929;
    @media(max-width:340px){font-size:9px}
  `}
`
