import { useHover } from "hooks/useHover";

export const PrevNext = ({ isNext, onClick }) => {
  const [ref, isHovered] = useHover();
  return (
    <div
      onClick={onClick}
      ref={ref}
      className="shadow"
      style={{
        borderRadius: "2px",
        padding: "10px",
        backgroundColor: "white",
        color: "#cfb995",
        fontFamily: "montserrat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 17,
        fontWeight: "bold",
        cursor: "pointer",
        flexDirection: !isNext ? "row" : "row-reverse",
      }}
    >
      <img
        src="/assets/HW2/arrow-left-copy-2@3x.png"
        alt="arrow"
        style={{
          width: 14,
          height: 19,
          marginRight: !isNext ? (isHovered ? 16 : 8) : undefined,
          marginLeft: isNext ? (isHovered ? 16 : 8) : undefined,
          transform: isNext ? "rotate(180deg)" : undefined,
          transition: ".3s ease all",
        }}
      />
      <div>{isNext ? "NEXT" : "PREV."} JOKE</div>
    </div>
  );
};
