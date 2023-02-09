import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
`;

export const Select = styled.select`
  padding: 1rem;
  width: 100%;
`;
export const Boton = styled.button`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
