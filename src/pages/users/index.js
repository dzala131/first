import axios from "axios";
import { Fragment } from "react";

const index = ({ resultJson }) => {
  return (
    <div>
      {!resultJson
        ? "."
        : resultJson.map((val, i) => {
            return (
              <Fragment key={i}>
                <p>{val.email}</p>
              </Fragment>
            );
          })}
    </div>
  );
};

export default index;

export async function getStaticProps() {
  let result = await fetch("http://localhost:3000/api/hello");

  let resultJson = await result.json();

  //   let data = await result.data;
  console.log(resultJson);
  return {
    props: {
      resultJson,
    },
  };
}
