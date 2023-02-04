const express = require("express");
const router = express.Router();

const validUrl = require("valid-url");
const shortid = require("shortid");
const config = require("config");

const Url = require("../models/URL");

router.post("./shorten", async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = config.get("baseUrl");

  if (!validUrl.isUri(baseURL)) {
    return res.status(401).json("Invalid Base URL");
  }
  const urlCode = shortid.generate();

  if (!validUrl.isUri(longUrl)) {
    try {
      const url = await Url.findOne({ longUrl });
      if (url) {
        res.json(url);
      } else {
        const shortUrl = `${baseUrl}/${urlCode}`;
      }
    } catch (error) {
      return res.status(401).json("Server Error");
    }
  } else {
    return res.status(401).json("Invalid Long URL Input");
  }
});
