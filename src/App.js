import React, { useEffect, useState } from "react";
import './App.css';
import fizzbuzz from './service/fizzbuzz';
import { StyledList, StyledCell, StyledWrapper, StyledUnorderedList, StyledTitle } from './styles';
import getPeople from './service/apiConnection';



const App = () => {
  const [init, setInit] = useState(false);
  const [people, setPeople] = useState([]);

  useEffect(() => {
  const getData = async () => {
    const apiData = await getPeople();
    setInit(true);
    setPeople(apiData.results || []);
    };
    !init && getData();
  }, [init]);
  console.log({people})
  const fizzbuzzData = fizzbuzz();
  return (
    <StyledWrapper>
      <StyledCell>
        <StyledTitle>FizzBuzz</StyledTitle>
        <StyledList>
          {fizzbuzzData.map((e) => (<li>{e}</li>))}
        </StyledList>
      </StyledCell>
      <StyledCell>
        <StyledTitle>People</StyledTitle>
        <StyledUnorderedList>
          {people.map((p) => (<li>{p.birth_year} - {p.name}</li>))}
        </StyledUnorderedList>
      </StyledCell>
    </StyledWrapper>
  );
}

export default App;
