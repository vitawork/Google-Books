import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ empty, children }) {
  return (
    <div className="container" style={{ marginTop: empty ? "200px" : "0" }}>
      {children}
    </div>
  );
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ center, children }) {
  return <div className={`row ${center ? "center" : ""}`}>{children}</div>;
}

export function Col({ size, children }) {
  return <div className={`col ${size}`}>{children}</div>;
}
