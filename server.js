const express = require("express")
const cfenv = require("cfenv")

// Constants
const port = 8080
const HOST = "0.0.0.0"

// App
const app = express()
app.get("/", (req, res) => {
    if (process.env.VCAP_SERVICES) {
        const appEnv = cfenv.getAppEnv(appEnvOpts)
        let ce_services = process.env.CE_SERVICES
        res.send("Estos son los servicios vinculados: " + ce_services + "\n esto es otra cosa:" + appEnv)
    } else {
        const msg = "No existe VCAP_SERVICES"
        res.send(msg)
    }
})

app.listen(port, HOST)
console.log(`Corriendo en http://${HOST}:${port}`)