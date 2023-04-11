import styled from 'styled-components';

export const AssessmentForm = () => {
  return (
    <div>
      <div>
        <div>
          <label>Curriculum</label>
        </div>
        <select>
          <option value={'curriculum-a'}>Curriculm A</option>
        </select>
      </div>
      <div>
        <div>Topic: Garden Guardian</div>
        <div>Tools of the trade - Assessment</div>
        <div>
          <div>
            <div>
              Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </div>
            <div>
              <StyledInput type="text" />
            </div>
          </div>
          <div>
            <div>
              Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </div>
            <div className="flex">
              <span>
                <StyledInput type="radio" />
              </span>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
            </div>
            <div className="flex">
              <span>
                <StyledInput type="radio" />
              </span>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
            </div>
            <div className="flex">
              <span>
                <StyledInput type="radio" />
              </span>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
            </div>
          </div>
          <div>
            <div>
              Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </div>
            <div className="flex">
              <div className="flex">
                <StyledInput type="radio" />
                <label>True</label>
              </div>
              <div className="flex">
                <StyledInput type="radio" />
                <label>False</label>
              </div>
            </div>
          </div>
          <div>
            <div>
              Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </div>
            <div>
              <StyledInput type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledInput = styled.input`
  padding: 0.75rem;
  border: none;
  border-radius: 0.2rem;
  width: 100%;
`;
