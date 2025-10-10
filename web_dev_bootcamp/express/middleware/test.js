import express from "express";
const app = express();

// First middleware
function logger(req, res, next) {
  console.log("--- LOGGER MIDDLEWARE ---");
  console.log("Request URL:", req.url);
  console.log("Request Method:", req.method);
  console.log("Timestamp:", new Date().toISOString());

  // Timestamp tracking (just an example of middleware modification)
  req.loggerTimestamp = Date.now();

  next(); // CRITICAL: Passes control to next middleware
}

// Second middleware
function timeTracker(req, res, next) {
  console.log("--- TIME TRACKER MIDDLEWARE ---");
  console.log("Logger started at:", req.loggerTimestamp);

  // Another example of middleware modification
  req.visitCount = (req.visitCount || 0) + 1;

  next();
}

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));

// Apply our custom middlewares
app.use(logger);
app.use(timeTracker);

// GET route
app.get("/", (req, res) => {
  console.log("--- ROOT ROUTE HANDLER ---");
  console.log("Visit count:", req.visitCount);
  res.send("Hello from the root route!");
});

// POST route
app.post("/submit", (req, res) => {
  console.log("--- SUBMIT ROUTE HANDLER ---");
  console.log("Form data:", req.body);
  console.log("Visit count:", req.visitCount);
  res.send("Form submitted successfully!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
