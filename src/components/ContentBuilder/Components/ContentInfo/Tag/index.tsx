import {
  BaseSyntheticEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

import { convertToRelativeUnit } from "../../../../../styles/helpers/convertToRelativeUnits";
import { Icon } from "../../../../Global/Icon";
import { Input } from "../../../../Global/Input";
import { Typography } from "../../../../Global/Typography";

interface Props {
  tags: string[];
  addTag: (tag: string) => void;
  deleteTag: (tag: string) => void;
}

export const Tags: React.FC<Props> = ({ tags, addTag, deleteTag }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocusing, setIsFocusing] = useState(false);
  const [tag, setTag] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.onfocus = () => {
        setIsFocusing(true);
      };
    }
  }, [inputRef]);

  const handleSubmit = (event: FormEvent) => {
    event?.preventDefault();
    addTag(tag);
    setTag("");
  };

  const handleTagChange = (event: BaseSyntheticEvent) => {
    const {
      target: { value },
    } = event;

    setTag(value);
  };

  const handleDelete = (event: BaseSyntheticEvent) => {
    const {
      target: { id },
    } = event;

    deleteTag(id);
  };

  return (
    <Style.Container>
      {isFocusing && (
        <Style.TagWrapper
          onClick={() => {
            setIsFocusing(false);
          }}
        />
      )}
      <label>Tags</label>
      <Style.TagsContainer onSubmit={handleSubmit} isFocusing={isFocusing}>
        <Input
          placeholder="Add Tags"
          ref={inputRef}
          value={tag}
          onChange={handleTagChange}
          className={isFocusing ? "border-blue__active" : ""}
        />
        {isFocusing && (
          <Style.Tags>
            {tags.map((tag) => (
              <Style.Tag key={tag}>
                <Typography color="white">{tag}</Typography>
                <Icon name="close-solid" onClick={handleDelete} id={tag} />
              </Style.Tag>
            ))}
          </Style.Tags>
        )}
      </Style.TagsContainer>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    height: 100%;
    margin-left: 2rem;
    display: flex;
    width: 100%;
    min-width: 352px;
    align-items: center;
    & > label {
      margin-right: 1.5rem;
      color: var(--neutral-600);
    }
  `,
  TagsContainer: styled.form<{ isFocusing: boolean }>`
    position: relative;
    z-index: ${(props) => (props.isFocusing ? 100 : 98)};
    width: 100%;

    & input {
      background: #ffffff50;
    }

    .border-blue__active {
      border: ${convertToRelativeUnit(1, "vh")} solid var(--blue-500);
    }
  `,
  Tags: styled.div`
    position: absolute;
    z-index: 101;
    background: #ffffff50;
    backdrop-filter: blur(118px);
    width: 100%;
    max-height: 15vh;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 1vh;
    column-gap: 0.75rem;
    row-gap: 1vh;
    top: 110%;
    border-radius: 0.5rem;
  `,
  TagWrapper: styled.div`
    position: fixed;
    top: 0;
    z-index: 99;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  Tag: styled.div`
    background: var(--green-500);
    border-radius: 100px;
    color: #ffffff;
    text-transform: capitalize;
    padding: 0.5rem 0.75rem;
    display: flex;
    & > img {
      margin-left: 0.5rem;
    }
  `,
};
