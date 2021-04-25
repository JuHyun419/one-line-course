import { AddButton, SearchButton, ClearButton } from "./buttons/";

import { useSearchBarSuggestion } from "./hooks/useSearchBarSuggestion";
import { useSearchBarSelectedKeywords } from "./hooks/useSearchBarSelectedKeywords";
import { useSearchBarSelectedPlatforms } from "./hooks/useSearchBarSelectedPlatforms";
import { useToggleSearchBar } from "./useToggleSearchBar";

import {
  platformsEnglish,
  platformsEnglishAsArr,
  keywordsKorean,
  keywordsKoreanAsArr,
  keywordsEnglish,
  keywordsEnglishAsArr,
} from "./SearchData";

export {
  AddButton,
  SearchButton,
  ClearButton,
  useSearchBarSuggestion,
  useSearchBarSelectedKeywords,
  useSearchBarSelectedPlatforms,
  useToggleSearchBar,
  platformsEnglish as platforms,
  platformsEnglishAsArr as platformsAsArr,
  keywordsKorean,
  keywordsKoreanAsArr,
  keywordsEnglish,
  keywordsEnglishAsArr,
};
