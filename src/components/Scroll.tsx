import { ReactNode } from "react";

const Scroll = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px",
      }}
    >
      {children}
    </div>
  );
};
export default Scroll;
