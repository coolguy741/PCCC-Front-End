import styled from 'styled-components';

interface DropdownProps {
  isOpen?: boolean;
  close: () => void;
  open: () => void;
  content: JSX.Element;
  trigger: JSX.Element;
}

export const Dropdown: React.FC<DropdownProps> = ({
  isOpen = false,
  close,
  content,
  trigger,
  open,
}) => {
  return (
    <StyledDropdown>
      <div className="trigger" onClick={open}>
        {trigger}
      </div>
      {isOpen && (
        <>
          <div className="wrapper" onClick={close} />
          <div className="dropdown">{content}</div>
        </>
      )}
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  & .dropdown {
    width: 400px;
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translate(-50%);
    background: #ffffff;
    z-index: 3;
  }

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--black);
    opacity: 0.5;
    z-index: 2;
  }

  .trigger {
    background: #ffffff;
    cursor: pointer;
    margin: auto;
    top: 20px;
    left: 50%;
    transform: translate(-50%);
    position: absolute;
    width: 20px;
  }
`;
