import "../Style/style.css";
import Button from "@material-ui/core/Button";
import { styled } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const MyButton = styled(Button)({
  backgroundColor: "red",
  margin: "2rem",
  "&:hover": {
    backgroundColor: "green",
  },
});

const Style = () => {
  return (
    <>
      <h1>Use Of material ui</h1>
      <div className="a">
        <Link to="/">Home</Link>
        <h1>hello there</h1>
        <p id="a2">
          <MyButton variant="text">Text</MyButton>
          <Button variant="contained" color="#ffee58  ">
            Contained
          </Button>
          <Button variant="outlined" style={{ margin: "2rem" }}>
            Outlined
          </Button>
        </p>
      </div>
    </>
  );
};

export default Style;
