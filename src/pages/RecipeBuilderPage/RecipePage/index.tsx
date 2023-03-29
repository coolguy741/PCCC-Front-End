import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Global/Button";
import { Icon } from "../../../components/Global/Icon";
import mockData from "../../../lib/mockData/recipes/recipePreview.json";

export const RecipePage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  }
  
  const handleEdit = () => {
    navigate("./edit");
  }

  const handleAddToCalendar = () => {
    alert("Add to calendar");
  }

  const handlePrint = () => {
    navigate("./print");
  }

  return (
    <PageContainer>
      <ButtonGroup>
        <Button onClick={handleBack}>Back</Button>
        <SubButtonGroup>
          <IconContainer>
            <Icon name = "heart"/>
          </IconContainer>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleAddToCalendar}>Add to calendar</Button>
          <Button onClick={handlePrint}>Print</Button>
        </SubButtonGroup>
      </ButtonGroup>
      <h2>{mockData.name}</h2>
      <h3>{"Servering Size : " + mockData.serveringSize}</h3>
      <CenterAlignedContainer>
        <img src={mockData.image} placeholder="recipe"/>
      </CenterAlignedContainer>
      <TwoColumnContainer>
        <div className="first-child">
          <h3>Ingredients</h3>
          <ul>
            {mockData.ingredients.map((ingredient, index) => (
              <li key={index}>
                <Text>{ingredient}</Text>
              </li>
            ))}
          </ul>
        </div>
        <div className="second-child">
          <h3>Directions</h3>
          <Text>{mockData.directions}</Text>
        </div>
      </TwoColumnContainer>
      <h3>What is it good for?</h3>
      <Text>{mockData.advantage}</Text>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SubButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const CenterAlignedContainer = styled.div`
  display: flex;
  justify-content:center;
`

const TwoColumnContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  .first-child{
    width: 30%;
  }

  .second-child{
    width: 60%;
  }
`
const Text = styled.p`
  font-size: 1rem;
  margin: 0px;
`