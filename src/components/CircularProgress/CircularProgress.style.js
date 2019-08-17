import styled, { css } from 'styled-components';

const CircularProgressStyles = () => css`
  width: 100px;
  height: 100px;
`;

export default component => styled(component)(CircularProgressStyles);
