import {styled} from "styled-components";

const HeaderSyled = styled.header`
  & h1 {
    font-family: 'Handjet', monospace;
    text-align: center;
    text-transform: uppercase;
    color: #c1e2dd;
    text-shadow: 0 0 4px rgba(35, 34, 34, 0.4);
    font-size: 3.5rem;
    margin: 0;
  }
  
  & h1 em {
    font-style: normal;
    color: #00eeff;
  }

  & p {
    font-size: 1.2rem;
    margin: 0;
    text-align: center;
    color: #c6f4f2;
  }
`
export const Header = () => {
  return (
    <HeaderSyled>
      <h1>The <em>Almost</em> Final Countdown</h1>
      <p>Stop the timer once you estimate that time is (almost) up</p>
    </HeaderSyled>
  )
}
