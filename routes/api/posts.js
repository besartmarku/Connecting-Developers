const express = require("express");
const request = require("request");
const config = require("config");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const Post = require("../../models/Post");

//@route   GET api/posts
//@desc    Test Route
//@access  Public
router.post(
  "/",
  [
    auth,
    [
      check("title", "title is required")
        .not()
        .isEmpty()
    ]
  ],
  (req, res) => {
    try {
      // let posts = await Post.findOne({ user: req.user.id });

      const profileFields = {
        title: "First Name"
      };
      // Create
      profile = new Post(profileFields);

      profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
