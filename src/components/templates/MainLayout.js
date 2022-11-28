import React, { useRef, useState } from "react";
import StyledMainLayout from "../../styles/templates/StyledMainLayout";
import Header from "../Header";
import { AiFillCaretLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function MainLayout({
  children,
  title,
  urls,
  hasSearchBar = false,
  searchBarInputFn,
  hasBackButton = false,
}) {
  const inputRef = useRef();
  const inputOnChange = () => {
    delayAction(inputRef.current.value, searchBarInputFn);
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

  const backButton = hasBackButton ? (
    <Link to="/">
      <AiFillCaretLeft className="back-button" />
    </Link>
  ) : null;

  return (
    <StyledMainLayout>
      <Header breadcrumbUrls={urls} />
      <div className="titleArea">
        <h1>
          {backButton}
          {title}
        </h1>
        {hasSearchBar && (
          <input
            className="searchInput"
            type="text"
            placeholder="Example: Liquid, Alcatel..."
            ref={inputRef}
            onChange={inputOnChange}
          />
        )}
      </div>
      <div>{children}</div>
    </StyledMainLayout>
  );
}
