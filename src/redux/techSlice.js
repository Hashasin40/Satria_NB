import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

// thunk untuk fetch data dari Firestore
export const fetchTech = createAsyncThunk("tech/fetchTech", async () => {
  const docRef = doc(db, "portofolio", "Tech");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const raw = docSnap.data().tech;

    let parsed = [];
    if (Array.isArray(raw)) {
      parsed = raw;
    } else if (typeof raw === "string") {
      // Bisa split per kalimat atau full string
    //   parsed = raw.split(/[.]/).map((s) => s.trim()).filter(Boolean);
      parsed = [raw.trim()] // kalau mau full aja
    }
    return parsed;
  } else {
    return [];
  }
});

const techSlice = createSlice({
  name: "tech",
  initialState: {
    techs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTech.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTech.fulfilled, (state, action) => {
        state.loading = false;
        state.techs = action.payload;
      })
      .addCase(fetchTech.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default techSlice.reducer;