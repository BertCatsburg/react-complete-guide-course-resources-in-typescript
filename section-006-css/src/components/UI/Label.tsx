import styled from "styled-components";

interface LabelProps {
  $invalid?: boolean | undefined;
}
export const Label = styled.label<LabelProps>`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({$invalid}) => $invalid ? '#f87171' : '#6b7280'};
`
