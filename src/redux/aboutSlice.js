import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { db } from "../../lib/firebase"
import { doc, getDoc } from "firebase/firestore"

export const fetchAboutData = createAsyncThunk("about/fetchData", async () => {
  const docRef = doc(db, "portofolio", "LC")
  const docSnap = await getDoc(docRef)

  let titles = []
  let techs = []

  if (docSnap.exists()) {
    const data = docSnap.data()

    // === Titles ===
    const rawTitles = data.tes
    titles = Array.isArray(rawTitles)
      ? rawTitles
      : typeof rawTitles === "string"
      ? rawTitles.split(/[.]/).map(s => s.trim()).filter(Boolean)
      : []

    // === Techs ===
    const rawTechs = data.techs
    techs = Array.isArray(rawTechs)
      ? rawTechs
      : typeof rawTechs === "string"
      ? rawTechs.split(",").map(t => t.trim()).filter(Boolean)
      : []

    // Optional fallback
    if (titles.length === 0) titles = ["Front-End Developer"]
    if (techs.length === 0) techs = ["React", "Tailwind"]
  }

  return { titles, techs }
})


const aboutSlice = createSlice({
  name: "about",
  initialState: {
    titles: [],
    techs: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAboutData.fulfilled, (state, action) => {
        state.loading = false
        state.titles = action.payload.titles
        state.techs = action.payload.techs
      })
      .addCase(fetchAboutData.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default aboutSlice.reducer
