const express = require("express")
const cfenv = require("cfenv")

// Constants
const port = 8080
const HOST = "0.0.0.0"

// App
const app = express()
app.get("/", (req, res) => {
    if (process.env.VCAP_SERVICES) {
        let vcap_services = process.env.VCAP_SERVICES
        res.send("Estos son los servicios vinculados: " + vcap_services)
    } else {
        const msg = "No existe VCAP_SERVICES"
        res.send(msg)
    }
})

app.listen(port, HOST)
console.log(`Corriendo en http://${HOST}:${port}`)