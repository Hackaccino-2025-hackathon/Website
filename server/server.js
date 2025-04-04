const express = require("express");
const ScrapeContent = require("./scripts/scrapefromweb");
const summarizeContent = require("./scripts/geminiApi");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

app.get("/scrape", async (req, res) => {
  const keyword = req.query.keyword;

  if (!keyword) {
    return res
      .status(400)
      .json({ error: "Keyword is required in query parameters." });
  }

  console.log(`\n🔍 Scraping content for: ${keyword}`);

  try {
    const content = await ScrapeContent(keyword);
    console.log("\n📝 Extracted Content:\n", content);

    if (!content) {
      return res.status(500).json({ error: "Failed to fetch content." });
    }

    console.log("\n⏳ Summarizing content...");
    const summary = await summarizeContent(content);
    console.log("\n✅ Summary Generated:\n", summary);

    res.json({ keyword, summary });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Failed to process request." });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
