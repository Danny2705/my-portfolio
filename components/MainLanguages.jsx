import Image from "next/image";
import HTM from "../app/src/html.png";
import CSS from "../app/src/css.png";
import JS from "../app/src/javascript.png";
import ReactJS from "../app/src/react.png";
import NextJS from "../app/src/next-js.svg";
import Node from "../app/src/node.png";
import Redux from "../app/src/redux.png";
import Tailwind from "../app/src/tailwind.png";
import CS from "../app/src/cs.png";
import Java from "../app/src/java.png";
import Mongo from "../app/src/mongo.png";
import Python from "../app/src/python.png";
import Postman from "../app/src/postman.svg";
import Firebase from "../app/src/firebase.png";
import Android from "../app/src/android.png";
import Git from "../app/src/git.png";
import Laptop from "../app/src/laptop.png";

export default function MainLanguages() {
  const items = [
    HTM,
    CSS,
    JS,
    ReactJS,
    NextJS,
    Node,
    Redux,
    Tailwind,
    CS,
    Java,
    Mongo,
    Python,
    Postman,
    Firebase,
    Android,
    Git,
  ];

  const rows = [];
  let currentRow = [];
  let rowCount = 1;
  const maxCols = 5;

  items.forEach((item, index) => {
    currentRow.push(
      <div key={index} className='m-4'>
        <Image src={item} alt={`Language ${index}`} width={70} height={50} />
      </div>
    );
    if (currentRow.length === rowCount) {
      rows.push(
        <div key={`row-${rowCount}`} className='flex items-center'>
          {currentRow}
        </div>
      );
      currentRow = [];
      rowCount = Math.min(rowCount + 1, maxCols);
    }
  });

  return (
    <div className='flex'>
      <div className='bg-[#151315] flex justify-center items-center w-full flex-col'>
        <h1 className='text-xl uppercase'>Languages</h1>
        <div className='flex flex-col items-center justify-center'>{rows}</div>
      </div>

      <Image src={Laptop} />
    </div>
  );
}
