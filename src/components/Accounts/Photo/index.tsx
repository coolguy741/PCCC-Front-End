import styled from "styled-components";

interface PhotoProps {
  src: string;
  role: string;
}

export const Photo = ({ src, role }: PhotoProps) => {
  return (
    <Container>
      <img className="image" src={src} placeholder="photo"/>
      {(role !== "Admin") && <img className="icon" src={role === "Standard" ? "/images/star-icon.svg" : "/images/professional-icon.svg"} placeholder="icon"/>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .image {
    border: none;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  .icon {
    position: absolute;
    top: 70%;
    left: 8%;
  }
`;
