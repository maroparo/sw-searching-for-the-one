import React from "react";
import PropTypes from "prop-types";

import {
  ResultItem,
  CharacterInfo,
  CharacterName,
  CharacterSideNotes,
} from "components/SearchResults/styles";
import Collapsible from "components/styled/Collapsible";
import AppearancesList from "components/MovieAppearances";
import IconSpecies from "assets/icons/species-icon.png";
import IconPlanet from "assets/icons/planet-icon.png";
import IconsPopulation from "assets/icons/population-icon.png";
import { formatHugeNumbers } from "utils/helpers";
import { CharacterType } from "utils/types";

const SingleResultItem = (props) => {
  const { character, isEven } = props;
  const characterInfo = () => {
    return (
      <CharacterInfo>
        <CharacterName>{character.name}</CharacterName>
        <CharacterSideNotes>
          <span>
            <img src={IconSpecies} alt="Species" title="Species" />
            {/*For some the reason, when the character is human, the API returns an empty array on species.*/}
            {character.species.length > 0 ? character.species.join() : "Human"}
          </span>
          <span>
            <img src={IconPlanet} alt="Home Planet" title="Home Planet" />
            {character.homeWorld.name}
          </span>
          <span>
            <img src={IconsPopulation} alt="Population" title="Population" />
            {formatHugeNumbers(character.homeWorld.population)}
          </span>
        </CharacterSideNotes>
      </CharacterInfo>
    );
  };
  return (
    <ResultItem
      key={character.name.replace(" ", "-").toLowerCase()}
      isEven={props.isEven}
    >
      <Collapsible content={characterInfo()}>
        <AppearancesList
          movies={character.movieAppearances}
          character={character.name}
          isEven={isEven}
        />
      </Collapsible>
    </ResultItem>
  );
};

SingleResultItem.propTypes = {
  isEven: PropTypes.bool.isRequired,
  character: CharacterType.isRequired,
};

export default SingleResultItem;
