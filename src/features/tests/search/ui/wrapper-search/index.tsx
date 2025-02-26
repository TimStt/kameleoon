import { fabricCreateContext } from "@shared/libs/context-wrapper/create-context";
import { useContext } from "react";
import { ITestDTO } from "src/entities/test/api";
import SearchInput from "../search-input";

export interface ISearchTestsWrapper {
  result?: ITestDTO[];
  isLoading?: boolean;
}

const SearchContext = fabricCreateContext<ISearchTestsWrapper>();

const WrapperSearch = ({
  renderDashboard,
}: {
  renderDashboard: React.ReactNode;
}) => {
  const searchResult = useContext(SearchContext);

  return (
    <SearchContext.Provider value={searchResult}>
      {/* <SearchInput /> */}
      {renderDashboard}
    </SearchContext.Provider>
  );
};

export default WrapperSearch;
