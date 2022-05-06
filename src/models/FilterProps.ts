import { Dispatch, SetStateAction } from "react";

export type FilterProps = {
  filters: {};
  setFilters:  Dispatch<SetStateAction<string | boolean>>;
};
