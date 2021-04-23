import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  EButtonSize,
  ELecturePlatform,
  EButtonType,
  ILectureFetchResult,
} from "../../../../typings/type";
import Button from "../../../../component/button/Button";

import { SelectedKeywords } from "../../Search-keyword/";
import { setInputBuildAutoSuggestion } from "../../../../store/action/search/ActionCreators";

import "./_SearchBar.scss";
// import { TCombinedStates } from "~store";
import {
  AllKeywordsData,
  AllPlatformsData,
} from "../../Search-keyword/SearchKeywordData";
import { TCombinedStates } from "~store";

// const koreanCheckReg = /[ㄱ-ㅎ가-힣]/;
// const englishCheckReg = /[a-zA-Z]/;
// const othersCheckReg = /[^ㄱ-ㅎ가-힣a-zA-Z ]/;

const SearchBar: React.FC<{
  searchIcon: JSX.Element;
}> = ({ searchIcon }) => {
  // const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [inputFinished, setInputFinished] = useState(true);

  // const _buildSuggestion = useCallback(
  //   (input: string | Array<string>) =>
  //     dispatch(setInputBuildAutoSuggestion(input)),
  //   [dispatch]
  // );

  // all the fetechedLectures
  const prefetchedLectures: ILectureFetchResult[] = useSelector(
    (state: TCombinedStates) => state.searchAsync.lectures
  );

  // if (!prefetchedLectures) return;

  // make all lectures into one skill keywords array
  const unqAvailableSkillsKeywords: string[] = useMemo(
    () =>
      Array.from(
        new Set(
          prefetchedLectures.map((lec: ILectureFetchResult) => lec.skills)
        )
      ),
    [prefetchedLectures]
  );

  const [cachedKeywords, setCachedKeywords] = useState<string[]>([]);

  const isFirst = useRef(true);

  const onSearchBarInputDetected = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // start detecting whether the input finished or not,
      setInputFinished(false);
      const { value: input } = e.target;
      setInput(input);
      // _buildSuggestion(input);
    },
    [setInputFinished]
  );

  useEffect(() => {
    let nextInputAwaitTimer: NodeJS.Timeout;
    if (!inputFinished) {
      nextInputAwaitTimer = setTimeout(() => {
        // Set back to true, if no detection of input.
        setInputFinished(true);
        suggest(
          unqAvailableSkillsKeywords,
          cachedKeywords,
          setCachedKeywords,
          input,
          isFirst
        );
      }, 500);
    }

    return () => {
      if (nextInputAwaitTimer) {
        clearTimeout(nextInputAwaitTimer);
      }
    };
  }, [inputFinished, setInputFinished]);

  return (
    <div className="searchBar">
      {/* TODO:  */}
      <input
        type="text"
        className="searchBar--input"
        placeholder="키워드를 입력해서 강의를 찾으세요"
        onChange={onSearchBarInputDetected}
      />
      {searchIcon}
      <Button
        btnSize={EButtonSize.Small}
        btnType={EButtonType.Primary}
        additionalClassName="searchBar--btn"
      >
        검색
      </Button>
      <div className="searchBar--separator"></div>
      <p>선택한 키워드들...</p>
      <div>
        <SelectedKeywords />
      </div>
      <Button
        btnSize={EButtonSize.Small}
        btnType={EButtonType.Primary}
        additionalClassName="searchBar--clearBtn"
      >
        비우기
      </Button>
    </div>
  );
};

const suggest = (
  unqAvailableSkillsKeywords: string[],
  cachedKeywords: string[],
  setCachedKeywords: React.Dispatch<React.SetStateAction<string[]>>,
  input: string,
  isFirst: React.MutableRefObject<boolean>
): void | Error => {
  // no empty input allowed
  if (input === "") {
    console.log("cached keywords gone!");
    setCachedKeywords([]);
    isFirst.current = true;
    return;
  }

  let skillKeywords: string[] = [];

  if (isFirst.current) {
    console.log("unq keywords : ", unqAvailableSkillsKeywords);
    skillKeywords = unqAvailableSkillsKeywords;
    isFirst.current = false;
  } else {
    console.log("cached keywords : ", cachedKeywords);
    console.log(cachedKeywords);

    skillKeywords = cachedKeywords;
  }

  // make the input into the array
  let cmp: Array<string> = [];
  if (input.length === 1) {
    cmp.push(input);
  } else {
    cmp.concat(input.split(""));
  }

  // process
  for (let i = 0; i < cmp.length; ++i) {
    const matchedSkillKeywords: Array<string> = skillKeywords.filter(
      (skillKeyword: string) => skillKeyword.includes(cmp[i]!)
    );
    console.log("matched keywords : ", matchedSkillKeywords);
    setCachedKeywords(matchedSkillKeywords);
  }
};

export default SearchBar;
