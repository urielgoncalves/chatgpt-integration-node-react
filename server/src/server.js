const app = require("./app")
const port = process.env.SERVER_PORT || 3000

app.listen(port, () => {
    console.log(` Server listening on port ${port}`)
})