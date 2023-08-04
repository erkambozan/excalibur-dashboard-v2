import { createSlice } from "@reduxjs/toolkit";
import { HierarchyProps } from "./entity/Hierarchy";
import { hierarchyList } from "./usecase/HierarchyList";

export const initialState = {
  hierarchies: [] as HierarchyProps[],
  loading: false,
  error: null,
  selectedHierarchy: {} as HierarchyProps,
  name: "",
  type: "",
};

export const hierarchySlice = createSlice({
  name: "hierarchy",
  initialState,
  reducers: {
    setSelectHierarchy: (state = initialState, action) => {
      const hierarchyPath = action.payload;
      const hierarchy = state.hierarchies.find(
        (hierarchy) => hierarchy.path === hierarchyPath
      );
      if (hierarchy) {
        state.selectedHierarchy = hierarchy;
      }
    },
    setName: (state = initialState, action) => {
      state.name = action.payload;
    },
    setType: (state = initialState, action) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hierarchyList.fulfilled, (state, action) => {
      state.hierarchies = action.payload;
    });
  },
});

export const hierarchyReducer = hierarchySlice.reducer;
export const { setSelectHierarchy, setName, setType } = hierarchySlice.actions;
