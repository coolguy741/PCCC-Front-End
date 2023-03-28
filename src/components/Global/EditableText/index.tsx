import React, { useState } from 'react';
import styled from 'styled-components';
import { SmallButton } from '../SmallButton';

interface Props {
  text: string;
}

export const EditableText: React.FC<Props> = ({ text }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };

  return (
    <Container>
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={handleTextChange} />
          <SmallButton onClick={handleSaveClick}>Save</SmallButton>
        </>
      ) : (
        <>
          <p>{editedText}</p>
          <SmallButton onClick={handleEditClick}>Edit</SmallButton>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding : 20px;
  background-color: #C4C4C4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  p{
    margin: 0;
    padding: 0;
  }
`
