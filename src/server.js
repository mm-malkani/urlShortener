import "dotenv/config"
import cors from "cors"
import express from "express"
import morgan from "morgan"
import cluster from "cluster"
import { cpus } from "os"
import urlRouter from "./routes/v1/url.js"

//Routers
const app = express()

//Request logger

//Request logger

app.use(morgan("tiny"))

// Third-Party Middleware

app.use(cors())

// Built-In Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(rateLimiter)

if (cluster.isPrimary) {
	let len = cpus().length
	if (process.env.NODE_ENV !== "production") len = 1
	console.log(`Master ${process.pid} is running`)
	// Fork workers.
	for (let i = 0; i < len; i++) {
		cluster.fork()
	}

	// })
} else {
	// * Routes * //
    app.use("/v1/sample", urlRouter)

	// * Check * //

	app.get("/", (req, res) => {
		res.send("Hello World!! " + process.pid)
	})

	app.listen(parseInt(process.env.PORT), () =>
		console.log(`Server ready to roll on an anonymous port!`)
	)
}