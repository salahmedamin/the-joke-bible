import "./style.css";

export const Footer = () => {
  return (
    <div
      className="footer"
      style={{ backgroundImage: "url(/assets/HW2/bitmap-copy@3x.png)" }}
    >
      <div>
        <div>GOT JOKES? GET PAID</div>
        <div style={{ marginBottom: 20 }}>FOR SUBMITTING</div>
        <div style={{ color: "#cfb995", cursor: "pointer", display: "flex" }}>
          <div>SUBMIT JOKE</div>
          <img
            src="/assets/HW1/path@3x.png"
            style={{
              width: 23,
              height: 16,
              marginLeft: 10,
            }}
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};
