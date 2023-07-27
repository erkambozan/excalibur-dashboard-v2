import { createSlice } from "@reduxjs/toolkit";
import { HierarchyProps } from "./entity/Hierarchy";
import { hierarchyList } from "./usecase/HierarchyList";

export const initialState = {
  hierarchies: [] as HierarchyProps[],
  loading: false,
  error: null,
  selectedHierarchy: {} as HierarchyProps,
};

export const hierarchySlice = createSlice({
  name: "hierarchy",
  initialState,
  reducers: {
    findHierarchyByPath: (state = initialState, action) => {
      const hierarchyPath = action.payload;
      const hierarchy = state.hierarchies.find(
        (hierarchy) => hierarchy.path === hierarchyPath
      );
      if (hierarchy) {
        state.selectedHierarchy = hierarchy;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hierarchyList.fulfilled, (state, action) => {
      state.hierarchies = action.payload;
    });
  },
});

export const hierarchyReducer = hierarchySlice.reducer;
export const { findHierarchyByPath } = hierarchySlice.actions;
