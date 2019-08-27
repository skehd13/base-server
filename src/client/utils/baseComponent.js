import React from "react";

class baseComponent extends React.Component {
  // 동적 Link(css) 생성기
  createLink(href) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = href;
    document.getElementsByTagName("head")[0].appendChild(link);
    return link;
  }
  // 동적 Script 생성기
  createScript(src) {
    const script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    return script;
  }
}

export default baseComponent;
