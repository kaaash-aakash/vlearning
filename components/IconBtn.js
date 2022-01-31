import styled from "styled-components";

const IconButton = styled.li`
  margin: 4px;

  a {
    border-radius: 4px;
    color: black;
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({ color }) => color};
  }

  a * {
    color: ${({ color }) => color};
  }

  a:hover,
  a:hover * {
    background-color: ${({ color }) => color};
    color: white;
  }
`;

const IconBtn = ({ icon, color, link }) => {
  return (
    <IconButton color={color}>
      <a href={link}>{icon}</a>
    </IconButton>
  );
};

export default IconBtn;
