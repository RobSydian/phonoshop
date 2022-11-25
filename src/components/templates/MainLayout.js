import { useRef, useState } from "react";
import StyledMainLayout from "../../styles/templates/StyledMainLayout";
import Header from "../Header";

export default function MainLayout({
  children,
  title,
  urls,
  hasSearchBar = false,
  searchBarInputFn,
}) {
  const inputRef = useRef();
  const inputOnChange = () => {
    delayAction(inputRef.current.value, searchBarInputFn);
    // searchBarInputFn(userInput);
  };
  const [timer, setTimer] = useState(null);

  function delayAction(input, fn) {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    setTimer(
      setTimeout(() => {
        fn(input);
      }, 300)
    );
  }

  return (
    <StyledMainLayout>
      <Header breadcrumbUrls={urls} />
      <div className="titleArea">
        <h1>{title}</h1>
        {hasSearchBar && (
          <input
            className="searchInput"
            type="input"
            ref={inputRef}
            onChange={inputOnChange}
          />
        )}
      </div>
      <div>{children}</div>
    </StyledMainLayout>
  );
}
