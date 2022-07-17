import { useHover } from "hooks/useHover";

export const Like = ({ isLike, count, onClick }) => {
  const [ref, isHovered] = useHover();
  return (
    <div
      onClick={onClick}
      ref={ref}
      style={{
        borderRadius: "50%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "20px 20px",
        width: 40,
        height: 40,
        backgroundImage: `url(/assets/HW2/${
          !isLike ? "hand-copy@3x" : "hand@3x"
        }.png)`,
        transition: ".3s ease all",
        backgroundColor: isLike
          ? isHovered
            ? "var(--more-boring-green)"
            : "var(--boring-green)"
          : isHovered
          ? "var(--more-boring-red)"
          : "var(--boring-red)",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          color: isLike ? "var(--boring-green)" : "var(--boring-red)",
          position: "absolute",
          fontFamily: "montserrat",
          top: "calc( 100% + 7px )",
          cursor: "default",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {count}
      </div>
    </div>
  );
};
