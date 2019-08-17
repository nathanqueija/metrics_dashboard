import styled, { css } from 'styled-components';

const ProfileStyles = ({ onClick, secondary, compact }) => css`
  height: 100%;
  display: flex;
  flex-direction: column;

  .info {
    height: 200px;
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

  .data {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
  }
`;

export default component => styled(component)(ProfileStyles);
