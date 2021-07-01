import styled from 'styled-components';

export const HomeStyles = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding-top: 10%;
  img {
    width: 500px;
  }
  .wrapperInput {
    margin-left: 30px;
  }
`;

export const InputStyles = styled.div`
  display: flex;
  input {
    height: 50px;
    width: 80%;
    padding-left: 10px;
    outline: none;
    font-size: 18px;
    color: #fff;
    background-color: #6c63ff;
    border: none;
    border-radius: 10px 0 0 10px;
    font-size: 16px;
    transition: 0.2s;

    &::placeholder {
      color: #ccc;
      font-size: 16px;
    }
    &:focus,
    &:hover {
      outline: none;
      box-shadow: 0 0 0 1px #b6e1fe, 0 0 0 2px #1b8bd7;
    }
  }

  button {
    width: 20%;
    border-radius: 0 10px 10px 0;
    border: none;
    cursor: pointer;
    background-color: #3f3d56;
    color: #ccc;
    transition: 0.2s;
    &:focus,
    &:hover {
      outline: none;
      box-shadow: 0 0 0 1px #b6e1fe, 0 0 0 2px #1b8bd7;
    }
  }
`;
