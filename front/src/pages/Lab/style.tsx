import styled from '@emotion/styled';

export const Anaglyph = styled.div`
  letter-spacing: 6px;
  text-shadow: red 0 0, cyan 0 0;
  transition: text-shadow 200ms;

  &: hover {
    text-shadow: red -6px 0, cyan 6px 0;
  }
`;
