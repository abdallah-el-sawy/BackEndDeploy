// ======== ARTICLE END POINTS ======== //

const express = require("express");
const router = express.Router();
const Article = require("../Models/Article");

// create new article
router.post("/createNewArticle", async (req, res) => {
  const newArticle = new Article();
  const articleTitle = req.body.articleTitle;
  const articleBody = req.body.articleBody;

  newArticle.title = articleTitle;
  newArticle.body = articleBody;
  newArticle.numberOfLikes = 0;

  res.json(newArticle);
  await newArticle.save();
});

// get all articles
router.get("/articles", async (req, res) => {
  try {
    const allArticles = await Article.find();
    console.log(allArticles);
    res.json(allArticles);
  } catch (error) {
    throw new Error("there is an error while getting all the articles");
  }
});

// get one article
router.get("/articles/:articleId", async (req, res) => {
  const articleId = req.params.articleId;
  try {
    const theArticle = await Article.findById(articleId);
    res.json(theArticle);
  } catch (error) {
    throw new Error("that Id is not found");
    return error;
  }
});

// delete an article
router.delete("/articles/:articleId", async (req, res) => {
  const articleId = req.params.articleId;
  try {
    const article = await Article.findByIdAndDelete(articleId);
    res.json(article);
  } catch (error) {
    throw new Error("There is no article with that id: ", articleId);
    return error;
  }
});

//update an existing article (task)

// show the data in the html(view)
router.get("/showArticles", async (req, res) => {
  try {
    const allArticles = await Article.find();
    res.render("allArticles.ejs", {
      allArticles: allArticles,
    });
  } catch (error) {}
});

module.exports = router;
