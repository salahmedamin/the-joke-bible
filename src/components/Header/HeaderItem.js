import Overflow from "components/Overflow";
import { useState } from "react";
import HeaderItemImage from "./HeaderItem/HeaderItemImage";

export default function HeaderItem({ text, isBereich = false }) {
  const [showOverflow, setshowOverflow] = useState(false);
  const bereichItems = [
    "My published jokes",
    "My saved jokes",
    "Account Information",
    { value: "Publish new joke", className: "overflow-publish" },
  ];
  return (
    <div
      style={{
        background: isBereich ? "#cfb995" : undefined,
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (isBereich) setshowOverflow(!showOverflow);
      }}
      className="header-item"
    >
      {!isBereich ? text : undefined}
      {isBereich ? (
        <>
          <HeaderItemImage img={"url(/assets/HW1/shape.png)"} />
          <div style={{ marginRight: 25 }}>{text}</div>
          <HeaderItemImage img={"url(/assets/HW1/path_2.png)"} />
          <Overflow
            showOverflow={showOverflow}
            items={bereichItems}
            arrowPos="right"
          />
        </>
      ) : undefined}
    </div>
  );
}
