import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../lib/firebase"
import Typewriter from "./TypeWriter"

const Contact = () => {
  const [titles, setTitles] = useState([])

  useEffect(() => {
    const fetchTitles = async () => {
      const docRef = doc(db, "portofolio", "LC")
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        const raw = docSnap.data().tes

        let parsed = []
        if (Array.isArray(raw)) {
        parsed = raw
        } else if (typeof raw === "string") {
        parsed = raw.split(/[.]/).map(s => s.trim()).filter(Boolean)
        }

        console.log("Parsed titles:", parsed)
        setTitles(parsed)
      } else {
        console.warn("Document not found")
      }
    }

    fetchTitles()
  }, [])

  return (
    <div className="mt-6">
      {titles.length > 0 ? (
        <Typewriter texts={titles} />
      ) : (
        <p className="text-sm text-gray-400">Loading titles...</p>
      )}
    </div>
  )
}

export default Contact
