const Artwork = require("../models/Artwork");
const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
  const newArtwork = new Artwork(req.body);

  try {
    const savedArtwork = await newArtwork.save();
    res.status(200).json(savedArtwork);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Artwork by id
router.get("/find/:id", async (req, res) => {
  try {
    const artwork = await Artwork.findById(req.params.id);
    res.status(200).json(artwork);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Artworks
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let artworks;

    if (qNew) {
      artworks = await Artwork.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      artworks = await Artwork.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      artworks = await Artwork.find();
    }

    res.status(200).json(artworks);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
