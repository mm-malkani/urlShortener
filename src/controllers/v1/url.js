import validUrl from "valid-url"
import { error } from "../../configs/response.js"

const addUrl = async (req, res) => {
	const uid = req.user.uid
	const url = req.body.url
	if (validUrl.isUri(url)) {
		addUrlHelper(url,uid)
	} else {
		res.status(400).json(
			error(
				"Invalid Url.",
				{
					data: "Please check the url you have entered.",
				},
				res.statusCode
			)
		)
	}
}

const getFullUrl = async (req, res) => {
    const url = req.params.url        
    // const url = req.query.url   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
}

export { addUrl }