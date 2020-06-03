//Requires
const express = require("express");

//Router
const router = express.Router();

var samples = ["sample1", "sample2", "sample3"];

router.get("/", (req, res) => {
    res.json(samples)
});
router.post("/:sample", (req, res) => {
    samples.push(req.params.sample);
    res.json(samples);
})


module.exports = router