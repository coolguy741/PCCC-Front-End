import styled from "styled-components";

export const TopicEducatorNotes = () => {
  return (
    <div>
      <div>
        <div>
          <label>Curriculum</label>
        </div>
        <select>
          <option value={"curriculum-a"}>Curriculm A</option>
        </select>
      </div>
      <Style.NotesContainer>
        <h4>Educator Notes</h4>
        <div>
          <div>
            Before conducting this education, familiarize yourself with the
            following items:
            <p>
              <strong>Foraging: </strong>
              to find food in nature.
            </p>
            <p>
              <strong>Nature: </strong>for the purposes of all Power Full Kids
              lessons and activities, we will use the term nature to distinguish
              between cultivated areas and uncontrolled areas-or the wild.
              Instincts: the natural way plants, animals, and insects behave
              without thinking.
            </p>
            <p>
              <strong>Nature: </strong>for the purposes of all Power Full Kids
              lessons and activities, we will use the term nature to distinguish
              between cultivated areas and uncontrolled areas-or the wild.
              Instincts: the natural way plants, animals, and insects behave
              without thinking.
            </p>
            <p>
              <strong>Knowledge keeper: </strong>elders or advisors who play a
              central rol as teachers in their community. Modern indigenous
              communities have trusted members who hold sacred knowledge, but at
              one time, the passing of knowledge through generations after much
              trial and error would have been the primary way all young people
              learned about living with nature.
            </p>
          </div>
        </div>
      </Style.NotesContainer>
    </div>
  );
};

const Style = {
  NotesContainer: styled.div`
    h4 {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 10px 0;
    }

    & > div {
      & > div {
        p {
          font-weight: 300;
        }

        font-size: 0.75rem;
        strong {
          font-size: 0.8rem;
          margin-top: 10px;
          font-weight: 700 !important;
        }
      }
    }
  `,
};
