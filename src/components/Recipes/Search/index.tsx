import React, { useState } from 'react';
import styled from 'styled-components';

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  onSelect: (value: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<Props> = ({ options, onSelect, onKeyDown }) => {
  const [query, setQuery] = useState<string>('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSelect = (option: Option) => {
    setQuery('');
    onSelect(option.value);
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <Style.Container>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        onKeyDown={onKeyDown}
      />
      {query && (
        <ul>
          {filteredOptions.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    position: relative;
    width: 100%;

    input {
      width: 100%;
    }

    ul {
      position: absolute;
      top: 10px;
      background-color: var(--yellow);
      width: 100%;

      li {
        border-bottom: black 1px solid;
      }
    }
  `,
};
