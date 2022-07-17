import Container from ".";

export const MiddleContainer = ({ children, style }) => {
  return (
    <Container
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--white)",
        marginTop: 0,
        ...style,
      }}
    >
      {children}
    </Container>
  );
};
