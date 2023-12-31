import styled from "styled-components";

interface PhotoProps {
  src: string;
  role: string | undefined | null;
  alt?: string;
  width?: string;
}

export const Photo = ({
  src,
  role,
  alt = "photo",
  width = "100%",
}: PhotoProps) => {
  return (
    <Style.Container size={width}>
      <img className="image" src={src} alt={alt} width={width} height={width} />
      {role !== "professional" && (
        <img
          className="icon"
          src={
            role === "Standard"
              ? "/images/star-icon.svg"
              : "/images/professional-icon.svg"
          }
          alt="Role-Icon"
        />
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div<{ size: string }>`
    position: relative;
    width: ${(props) => props.size};
    height: ${(props) => props.size};

    .image {
      border: none;
      border-radius: 50%;
    }

    .icon {
      position: absolute;
      top: 70%;
      left: 8%;
    }
  `,
};
