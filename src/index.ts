import { app } from "./app"


const PORT: number = 3000

app.listen(PORT, () => {
  console.log(`Server on port: http://localhost:${PORT}`)

})
