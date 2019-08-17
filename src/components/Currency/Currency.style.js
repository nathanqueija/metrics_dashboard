import styled, { css } from 'styled-components';

const CurrencyStyles = () => css`
  display: flex;
  .name {
    margin-right: 5px;
    font-weight: 600;
  }
`;

export default component => styled(component)(CurrencyStyles);
