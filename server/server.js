// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");
// const path = require("path");
// const ScrapeContent = require("./scripts/scrapefromweb");
// const summarizeContent = require("./scripts/geminiApi");

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Welcome to my server!");
// });

// // app.get("/scrape", async (req, res) => {
// //   const keyword = req.query.keyword;

// //   if (!keyword) {
// //     return res
// //       .status(400)
// //       .json({ error: "Keyword is required in query parameters." });
// //   }

// //   console.log(`\n🔍 Scraping content for: ${keyword}`);

// //   try {
// //     const content = await ScrapeContent(keyword);
// //     console.log("\n📝 Extracted Content:\n", content);

// //     if (!content) {
// //       return res.status(500).json({ error: "Failed to fetch content." });
// //     }

// //     console.log("\n⏳ Summarizing content...");
// //     const summary = await summarizeContent(content);
// //     console.log("\n✅ Summary Generated:\n", summary);

// //     res.json({ keyword, summary });
// //   } catch (error) {
// //     console.error("Error processing request:", error);
// //     res.status(500).json({ error: "Failed to process request." });
// //   }
// // });

// // app.post("/summarize-course", async (req, res) => {
// //   const courseText = req.body.courseText;

// //   if (!courseText) {
// //     return res
// //       .status(400)
// //       .json({ error: "Course text is required in request body." });
// //   }

// //   try {
// //     // Extract course name
// //     const courseNameMatch = courseText.match(/Course Name:\s*(.+)/);
// //     const rawCourseName = courseNameMatch
// //       ? courseNameMatch[1].trim()
// //       : "unnamed_course";
// //     const safeCourseName = rawCourseName
// //       .replace(/[^a-z0-9]/gi, "_")
// //       .toLowerCase();

// //     const savedFiles = [];

// //     // Parse chapters and topics
// //     const chapterRegex =
// //       /Chapter\s(\d+):\s(.+?)\n([\s\S]+?)(?=(?:Chapter\s\d+:)|$)/g;
// //     let match;

// //     while ((match = chapterRegex.exec(courseText)) !== null) {
// //       const chapterNum = match[1];
// //       const chapterTitle = match[2].trim();
// //       const topicsBlock = match[3];

// //       const topicRegex = /-\sTopic\s(\d+):\s(.+)/g;
// //       let topicMatch;

// //       while ((topicMatch = topicRegex.exec(topicsBlock)) !== null) {
// //         const topicNum = topicMatch[1];
// //         const topicName = topicMatch[2].trim();

// //         console.log(`\n🔍 Processing: ${topicName}`);
// //         try {
// //           const content = await ScrapeContent(topicName);
// //           if (!content) throw new Error("Scrape failed");

// //           console.log("test", content);

// //           const summary = await summarizeContent(content);

// //           const safeTopicName = topicName
// //             .replace(/[^a-z0-9]/gi, "_")
// //             .toLowerCase();
// //           const outputDir = path.join(
// //             __dirname,
// //             "..",
// //             "Global Storage",
// //             "course_content",
// //             safeCourseName,
// //             `chapter${chapterNum}`,
// //             safeTopicName
// //           );

// //           fs.mkdirSync(outputDir, { recursive: true });

// //           const filePath = path.join(outputDir, `${safeTopicName}.txt`);
// //           fs.writeFileSync(filePath, summary, "utf-8");

// //           savedFiles.push(filePath);
// //           console.log(`✅ Saved: ${filePath}`);
// //         } catch (err) {
// //           console.error(`❌ Failed for "${topicName}":`, err.message);
// //         }
// //       }
// //     }

// //     res.json({
// //       message: `Course "${rawCourseName}" processed and saved.`,
// //       savedFiles,
// //     });
// //   } catch (error) {
// //     console.error("❌ Error in processing course:", error);
// //     res.status(500).json({ error: "Failed to process the course content." });
// //   }
// // });

// // Add this endpoint to your server.js file

// app.post("/summarize-course", async (req, res) => {
//   const courseText = req.body.courseText;

//   if (!courseText) {
//     return res
//       .status(400)
//       .json({ error: "Course text is required in request body." });
//   }

//   try {
//     // Extract course name
//     const courseNameMatch = courseText.match(/(?:Course Name|Title):\s*(.+)/i);
//     const rawCourseName = courseNameMatch
//       ? courseNameMatch[1].trim()
//       : "unnamed_course";
//     const safeCourseName = rawCourseName
//       .replace(/[^a-z0-9]/gi, "_")
//       .toLowerCase();

//     const courseDir = path.join(
//       __dirname,
//       "..",
//       "Global Storage",
//       "course_content",
//       safeCourseName
//     );

//     // ✅ Check if course has already been processed
//     if (fs.existsSync(courseDir)) {
//       return res.status(200).json({
//         message: `Course "${rawCourseName}" already exists and was previously processed.`,
//         courseDirectory: courseDir,
//       });
//     }

//     const savedFiles = [];

//     // Parse chapters and topics
//     const chapterRegex =
//       /Chapter\s(\d+):\s(.+?)\n([\s\S]+?)(?=(?:Chapter\s\d+:)|$)/g;
//     let match;

//     while ((match = chapterRegex.exec(courseText)) !== null) {
//       const chapterNum = match[1];
//       const chapterTitle = match[2].trim();
//       const topicsBlock = match[3];

//       const topicRegex = /-\sTopic\s(\d+):\s(.+)/g;
//       let topicMatch;

//       while ((topicMatch = topicRegex.exec(topicsBlock)) !== null) {
//         const topicNum = topicMatch[1];
//         const topicName = topicMatch[2].trim();

//         console.log(`\n🔍 Processing: ${topicName}`);
//         try {
//           const content = await ScrapeContent(topicName);
//           if (!content) throw new Error("Scrape failed");

//           const summary = await summarizeContent(content);

//           const safeTopicName = topicName
//             .replace(/[^a-z0-9]/gi, "_")
//             .toLowerCase();
//           const outputDir = path.join(
//             courseDir,
//             `chapter${chapterNum}`,
//             safeTopicName
//           );

//           fs.mkdirSync(outputDir, { recursive: true });

//           const filePath = path.join(outputDir, `${safeTopicName}.txt`);
//           fs.writeFileSync(filePath, summary, "utf-8");

//           savedFiles.push(filePath);
//           console.log(`✅ Saved: ${filePath}`);
//         } catch (err) {
//           console.error(`❌ Failed for "${topicName}":`, err.message);
//         }
//       }
//     }

//     res.json({
//       message: `Course "${rawCourseName}" processed and saved.`,
//       savedFiles,
//     });
//   } catch (error) {
//     console.error("❌ Error in processing course:", error);
//     res.status(500).json({ error: "Failed to process the course content." });
//   }
// });

// app.get("/api/file-content", (req, res) => {
//   const { courseName, chapterNumber, topicName } = req.query;

//   if (!courseName || !chapterNumber || !topicName) {
//     return res.status(400).json({
//       error:
//         "Missing required parameters: courseName, chapterNumber, or topicName",
//     });
//   }

//   // Format the parameters to match your file structure
//   const safeCourseName = courseName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
//   const safeTopicName = topicName.replace(/[^a-z0-9]/gi, "_").toLowerCase();

//   const filePath = path.join(
//     __dirname,
//     "..",
//     "Global Storage",
//     "course_content",
//     safeCourseName,
//     `chapter${chapterNumber}`,
//     safeTopicName,
//     `${safeTopicName}.txt`
//   );

//   // Check if file exists
//   fs.access(filePath, fs.constants.F_OK, (err) => {
//     if (err) {
//       console.error(`File not found: ${filePath}`, err);
//       return res.status(404).json({ error: "File not found" });
//     }

//     // Read and send file content
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) {
//         console.error(`Error reading file: ${filePath}`, err);
//         return res.status(500).json({ error: "Failed to read file" });
//       }

//       res.json({ content: data });
//     });
//   });
// });

// app.listen(port, () => {
//   console.log(`🚀 Server is running on port ${port}`);
// });

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const ScrapeContent = require("./scripts/scrapefromweb");
const summarizeContent = require("./scripts/geminiApi");
const axios = require("axios"); // Add this for HTTP requests

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

// Existing endpoints...

app.post("/summarize-course", async (req, res) => {
  const courseText = req.body.courseText;

  if (!courseText) {
    return res
      .status(400)
      .json({ error: "Course text is required in request body." });
  }

  try {
    // Extract course name
    const courseNameMatch = courseText.match(/(?:Course Name|Title):\s*(.+)/i);
    const rawCourseName = courseNameMatch
      ? courseNameMatch[1].trim()
      : "unnamed_course";
    const safeCourseName = rawCourseName
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase();

    const courseDir = path.join(
      __dirname,
      "..",
      "Global Storage",
      "course_content",
      safeCourseName
    );

    // ✅ Check if course has already been processed
    if (fs.existsSync(courseDir)) {
      return res.status(200).json({
        message: `Course "${rawCourseName}" already exists and was previously processed.`,
        courseDirectory: courseDir,
      });
    }

    const savedFiles = [];

    // Parse chapters and topics
    const chapterRegex =
      /Chapter\s(\d+):\s(.+?)\n([\s\S]+?)(?=(?:Chapter\s\d+:)|$)/g;
    let match;

    while ((match = chapterRegex.exec(courseText)) !== null) {
      const chapterNum = match[1];
      const chapterTitle = match[2].trim();
      const topicsBlock = match[3];

      const topicRegex = /-\sTopic\s(\d+):\s(.+)/g;
      let topicMatch;

      while ((topicMatch = topicRegex.exec(topicsBlock)) !== null) {
        const topicNum = topicMatch[1];
        const topicName = topicMatch[2].trim();

        console.log(`\n🔍 Processing: ${topicName}`);
        try {
          const content = await ScrapeContent(topicName);
          if (!content) throw new Error("Scrape failed");

          const summary = await summarizeContent(content);

          const safeTopicName = topicName
            .replace(/[^a-z0-9]/gi, "_")
            .toLowerCase();
          const outputDir = path.join(
            courseDir,
            `chapter${chapterNum}`,
            safeTopicName
          );

          fs.mkdirSync(outputDir, { recursive: true });

          const filePath = path.join(outputDir, `${safeTopicName}.txt`);
          fs.writeFileSync(filePath, summary, "utf-8");

          savedFiles.push(filePath);
          console.log(`✅ Saved: ${filePath}`);
        } catch (err) {
          console.error(`❌ Failed for "${topicName}":`, err.message);
        }
      }
    }

    res.json({
      message: `Course "${rawCourseName}" processed and saved.`,
      savedFiles,
    });
  } catch (error) {
    console.error("❌ Error in processing course:", error);
    res.status(500).json({ error: "Failed to process the course content." });
  }
});

app.get("/api/file-content", (req, res) => {
  const { courseName, chapterNumber, topicName } = req.query;

  if (!courseName || !chapterNumber || !topicName) {
    return res.status(400).json({
      error:
        "Missing required parameters: courseName, chapterNumber, or topicName",
    });
  }

  // Format the parameters to match your file structure
  const safeCourseName = courseName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  const safeTopicName = topicName.replace(/[^a-z0-9]/gi, "_").toLowerCase();

  const filePath = path.join(
    __dirname,
    "..",
    "Global Storage",
    "course_content",
    safeCourseName,
    `chapter${chapterNumber}`,
    safeTopicName,
    `${safeTopicName}.txt`
  );

  // Check if file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`File not found: ${filePath}`, err);
      return res.status(404).json({ error: "File not found" });
    }

    // Read and send file content
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(`Error reading file: ${filePath}`, err);
        return res.status(500).json({ error: "Failed to read file" });
      }

      res.json({ content: data });
    });
  });
});

// New endpoint to handle video file requests
app.get("/api/video-content", async (req, res) => {
  const { courseName, chapterNumber, topicName } = req.query;

  if (!courseName || !chapterNumber || !topicName) {
    return res.status(400).json({
      error:
        "Missing required parameters: courseName, chapterNumber, or topicName",
    });
  }

  // Format the parameters to match your file structure
  const safeCourseName = courseName.replace(/[^a-z0-9]/gi, "_").toLowerCase();
  const safeTopicName = topicName.replace(/[^a-z0-9]/gi, "_").toLowerCase();

  // Define video file path
  const videoDir = path.join(
    __dirname,
    "..",
    "Global Storage",
    "course_content",
    safeCourseName,
    `chapter${chapterNumber}`,
    safeTopicName
  );

  // Check if directory exists, create if not
  if (!fs.existsSync(videoDir)) {
    fs.mkdirSync(videoDir, { recursive: true });
  }

  // Check for video files with common extensions
  const videoExtensions = [".mp4", ".webm", ".avi", ".mov"];
  let videoFile = null;

  for (const ext of videoExtensions) {
    const potentialVideoPath = path.join(videoDir, `${safeTopicName}${ext}`);
    if (fs.existsSync(potentialVideoPath)) {
      videoFile = potentialVideoPath;
      break;
    }
  }

  // If video exists, return the path
  if (videoFile) {
    res.json({
      videoExists: true,
      videoPath: `/video-stream?path=${encodeURIComponent(videoFile)}`,
    });
  } else {
    // Video doesn't exist, try to generate it
    try {
      console.log(`🎬 Generating video for: ${topicName}`);

      const generateResponse = await axios.post(
        "http://127.0.0.1:5005/generate_lecture",
        {
          courseName: safeCourseName,
          chapterNumber: chapterNumber,
          topic: safeTopicName,
        }
      );

      if (generateResponse.status === 200) {
        // Assuming the service returns the path or filename of the generated video
        const generatedVideoPath =
          generateResponse.data.videoPath ||
          path.join(videoDir, `${safeTopicName}.mp4`);

        // Check if video was actually created
        if (fs.existsSync(generatedVideoPath)) {
          res.json({
            videoExists: true,
            videoPath: `/video-stream?path=${encodeURIComponent(
              generatedVideoPath
            )}`,
            generated: true,
          });
        } else {
          throw new Error(
            "Video generation claimed success but file wasn't created"
          );
        }
      } else {
        throw new Error(
          `Video generation failed with status: ${generateResponse.status}`
        );
      }
    } catch (error) {
      console.error("❌ Error generating video:", error);
      res.status(500).json({
        videoExists: false,
        error: `Failed to generate video: ${error.message}`,
      });
    }
  }
});

// Add endpoint to stream video files
app.get("/video-stream", (req, res) => {
  const filePath = req.query.path;

  if (!filePath) {
    return res.status(400).send("Video path is required");
  }

  // Security check to prevent path traversal attacks
  const normalizedPath = path.normalize(filePath);
  const basePath = path.join(__dirname, "..", "Global Storage");

  if (!normalizedPath.startsWith(basePath)) {
    return res.status(403).send("Access denied");
  }

  // Check if file exists
  fs.access(normalizedPath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send("Video not found");
    }

    // Get file stats
    const stat = fs.statSync(normalizedPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      // Handle range requests for video streaming
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = end - start + 1;
      const file = fs.createReadStream(normalizedPath, { start, end });

      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunksize,
        "Content-Type": "video/mp4", // Adjust content type as needed
      });

      file.pipe(res);
    } else {
      // Send entire file
      res.writeHead(200, {
        "Content-Length": fileSize,
        "Content-Type": "video/mp4", // Adjust content type as needed
      });

      fs.createReadStream(normalizedPath).pipe(res);
    }
  });
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
