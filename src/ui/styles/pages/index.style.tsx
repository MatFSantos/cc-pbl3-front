import { Button, Modal, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const TextFieldStyled = styled(TextField)`
  font-size: 16px;
  width: 250px;

  .MuiOutlinedInput-input {
    font-size: 20px;
    font-family: Acme, sans-serif;
  }
`;

export const ContainerForm = styled('div')`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtonForm = styled(Button)`
  margin: 3px;
  padding: 0;
  font-family: Acme, sans-serif;
`;

export const TextForm = styled('p')`
  margin: auto 0;
  padding: 20px 10px;
`;

export const TextErro = styled('p')`
  color: ${({ theme }) => theme.palette.error.main};
  font-size: 12px;
  margin: 0;
  padding: 0 10px;
`;

export const TextSuccess = styled('p')`
  color: ${({ theme }) => theme.palette.success.main};
  font-size: 12px;
  margin: 0;
  padding: 0 10px;
`;

export const ContainerApp = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  grid-template-areas: 'sugestions search';
`;

export const ContainerContent = styled('div')`
  grid-area: ${(props) => props['data-area']};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContent = styled('p')`
  font-size: 20px;
`;

export const Content = styled('div')`
  width: 300px;
  height: 100px;
  border-radius: 8px;
  font-size: 12px;
  margin: 10px 0;
  box-shadow: 1px 1px 10px grey;
  transition: all ease 0.3s;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: none;
    transition: display ease 0.3s;
  }

  :hover {
    button {
      display: block;
    }
    box-shadow: 1px 1px 10px black;

    transform: scale(1.3);
  }
`;

export const ItemContent = styled('p')`
  margin: 0;
  padding: 3px 10px;
`;

export const ModalStyled = styled(Modal)`
  margin: auto;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  width: 500px;
  height: 500px;
  border-radius: 8px;
  border: 4px solid ${({ theme }) => theme.palette.primary.light};
  padding: 10px;
  box-shadow: 10px 10px 1000px black;
`;

export const ContentModal = styled('div')`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const ContentRoute = styled('div')`
  border-right: 1px dashed black;
  border-top: 1px dashed black;
  padding: 10px;
  margin: 5px 10px;
  width: 200px;
  p {
    margin: 2px 0;
  }
  > :nth-child(1) {
    font-weight: bold;
  }
`;
export const ContentTextModal = styled('div')`
  text-align: center;
  p {
    margin: 2px;
  }
`;
