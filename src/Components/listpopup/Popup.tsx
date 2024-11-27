import React, { useState } from "react";
import Header from "./Header";
import Selectors from "./Selectors";
import Footer from "./Footer";
import Searchbar from "./Searchbar";

const Popup: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "stretch",
      }}
    >
      <Header />
      <Searchbar onSearch={handleSearch} />
      <Selectors searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default Popup;
