module.exports = { contents: "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = require(\"react\");\nconst react_dom_1 = require(\"react-dom\");\nrequire(\"./style.css\");\nfunction App() {\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"h1\", null, \"React fusebox boilerplate\")));\n}\nreact_dom_1.default.render(react_1.default.createElement(App, null), document.getElementById('app-container'));\n//# sourceMappingURL=index.js.map",
dependencies: ["react","react-dom","./style.css"],
sourceMap: "{\"version\":3,\"file\":\"index.jsx\",\"sourceRoot\":\"\",\"sources\":[\"/src/index.jsx\"],\"names\":[],\"mappings\":\";;AAAA,iCAA0B;AAC1B,yCAAiC;AACjC,uBAAqB;AAErB,SAAS,GAAG;IACV,OAAO,CACL;QACE,sEAAkC,CAC9B,CACP,CAAC;AACJ,CAAC;AAED,mBAAQ,CAAC,MAAM,CAAC,8BAAC,GAAG,OAAG,EAAE,QAAQ,CAAC,cAAc,CAAC,eAAe,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"import React from 'react';\\nimport ReactDOM from 'react-dom';\\nimport './style.css';\\n\\nfunction App() {\\n  return (\\n    <div>\\n      <h1>React fusebox boilerplate</h1>\\n    </div>\\n  );\\n}\\n\\nReactDOM.render(<App />, document.getElementById('app-container'));\\n\"]}",
headerContent: undefined,
mtime: 1553336461990,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}
