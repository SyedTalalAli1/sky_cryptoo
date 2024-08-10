import React from "react";

class CopyRight extends React.Component {
  render() {
    const horizontalLineStyle = { borderBottom: '1px solid #ccc', margin: '20px 0', padding: '20px',color:"rgb(169,169,169" };

    return (
      <>
        <div style={{ backgroundColor: "black", paddingTop: '20px' }}>
          <div style={horizontalLineStyle}></div>
          <div className="copyright" style={{ textAlign: "center", color: "rgb(169, 169, 169)" }}>
            <p>&copy; 2024 Sky Crypto . All rights reserved.</p>
          </div>
        </div>
      </>
    );
  }
}

export default CopyRight;
