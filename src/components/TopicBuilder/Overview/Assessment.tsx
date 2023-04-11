import styled from 'styled-components';

export const TopicAssessment = () => {
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
        <h4>Lesson Assessment</h4>
        <div>
          <div>
            <div>
              Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </div>
            <div>
              <Style.Input type="text" />
            </div>
          </div>
          <div>
            <div>
              Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor?
            </div>
            <div className="flex">
              <span>
                <Style.Input type="radio" />
              </span>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
            </div>
            <div className="flex">
              <span>
                <Style.Input type="radio" />
              </span>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
            </div>
            <div className="flex">
              <span>
                <Style.Input type="radio" />
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
                <Style.Input type="radio" />
                <label>True</label>
              </div>
              <div className="flex">
                <Style.Input type="radio" />
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
              <Style.Input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Style = {
  Input: styled.input`
    padding: 0.75rem;
    border: none;
    border-radius: 0.2rem;
    width: 100%;
  `,
};
