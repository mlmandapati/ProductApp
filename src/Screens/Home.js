import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";

export default function Home(props) {
  const url = `https://cdn.contentstack.io/v3/content_types/${props.type}/entries?environment=preview`;

  //const [list, setList] = useState([]);
  const [blocks, setBlocks] = useState([]);

  const options = {
    method: "GET",
    headers: {
      api_key: "blt3815e63116cffb83",
      access_token: "cs8db86493b65d47aa5ee93e0e",
      "Content-Type": "application/json",
    },
  };

  // async function getPageContent() {
  //     try{
  //         const response = await fetch(url,options);
  //         const result = await response.text();
  //         const parsedResult = await JSON.parse(result);
  //         console.log("parsedResult",parsedResult);
  //         setBlocks(parsedResult.entries?.[0].page_content);

  //         console.log("edited", parsedResult.entries?.[0].page_content);

  //         // const parsedResult = JSON.parse(result);
  //         // setData(parsedResult.results);
  //         // console.log("after fetch", data);

  //     }catch(error) {
  //         console.log(error);
  //     }

  // }

  useEffect(() => {
    const getPageContent = async () => {
      try {
        // const response = await fetch(url,options);
        // const result = await response.text();
        // const parsedResult = await JSON.parse(result);
        // console.log("parsedResult",parsedResult);
        // console.log("response",response);

        // setBlocks(parsedResult.entries?.[0].page_content);

        // console.log("edited", parsedResult.entries?.[0].page_content);
        await fetch(url, options)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setBlocks(data.entries?.[0].page_content);
          });
      } catch (error) {
        console.log(error);
      }
    };

    getPageContent();
    // console.log("Blocks", blocks);
  }, [props]);

  console.log(blocks);
  return (
    <div>
      {/* {console.log("blocks", blocks[0])} */}

      {blocks.length > 0 &&
        blocks?.map((block, index) => {
          if (block.banner) {
            return <Banner top_rated={block.banner.top_rated} />;
          }
          if (block.categories) {
            return <Categories type="category_product" />;
          }
        })}
    </div>
  );
}
