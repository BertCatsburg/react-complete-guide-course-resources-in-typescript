import styled from "styled-components";


interface BigButtonInterface {
  onClick: () => void;
}

export const BigButton = styled.button<BigButtonInterface>`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
`
