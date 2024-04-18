import { useState, useEffect } from "react";

export default function Payment() {

  const [html, setHTML] = useState({__html: ""});
    
  useEffect(() => {
    async function createMarkup() {
      let response;
      response = await fetch(`https://cartify-2.onrender.compay/product_page`)
       const backendHtmlString = await response.text()

       console.log(backendHtmlString)
        return {__html: backendHtmlString};
     }
     createMarkup().then(result => setHTML(result));
  }, []);
  

  return <div dangerouslySetInnerHTML={html} />;

}
