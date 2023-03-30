import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./features/appStateSlice";
import authModalSlice from "./features/authModalSlice";
import globalloadingSlice from "./features/globalloadingSlice";
import themeModelSlice from "./features/themeModeSlice";
import userSlice from "./features/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModelSlice,
    authModal: authModalSlice,
    globalLoading: globalloadingSlice,
    appState: appStateSlice,
  },
});

export default store;
