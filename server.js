const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");
const path = require("path");
const { mockData, destinations, properties, propertyCatalog } = require("./mockData");

const app = express();
const PORT = process.env.PORT || 8080;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Request logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Load OpenAPI YAML specification
let swaggerDocument;
try {
  const fs = require("fs");
  let openapiPath = path.join(process.cwd(), "openapi.yaml");
  if (!fs.existsSync(openapiPath)) {
    openapiPath = path.join(__dirname, "openapi.yaml");
  }
  if (!fs.existsSync(openapiPath)) {
    openapiPath = path.join(__dirname, "..", "openapi.yaml");
  }
  swaggerDocument = yaml.load(openapiPath);
  console.log("Successfully loaded OpenAPI YAML file.");
} catch (error) {
  console.error("Failed to load openapi.yaml:", error);
}

// Serve Swagger UI
if (swaggerDocument) {
  const swaggerOptions = {
    customCssUrl: "https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui.css",
    customJs: [
      "https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-bundle.js",
      "https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-standalone-preset.js"
    ]
  };
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));
  app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));
  console.log(`Swagger UI is available at http://localhost:${PORT}/swagger and http://localhost:${PORT}/api-docs`);
}

// Helper to extract language (header 'x-language' or query 'x-language')
function getLanguage(req) {
  let lang = req.headers["x-language"] || req.query["x-language"];
  if (lang) {
    lang = lang.toLowerCase();
  }
  return (lang === "th" || lang === "th-th") ? "th" : "en";
}

// Helper to build standard ErrorResponse
function makeErrorResponse(code, message, traceId = "mock-trace-id") {
  return {
    error: {
      code,
      message,
      traceId
    }
  };
}

// -------------------------------------------------------------
// HEALTH ENDPOINTS
// -------------------------------------------------------------

// 1. GET /health/live
app.get("/health/live", (req, res) => {
  res.json({
    data: {
      service: "content-service",
      state: "ok",
      checkedAt: new Date().toISOString()
    }
  });
});

// 2. GET /health/ready
app.get("/health/ready", (req, res) => {
  // Mock readiness logic (always ready in mock)
  res.json({
    data: {
      service: "content-service",
      state: "ok",
      checkedAt: new Date().toISOString()
    }
  });
});

// -------------------------------------------------------------
// LAYOUT & CONFIGURATION ENDPOINTS
// -------------------------------------------------------------

// 3. GET /content/v1/layout/top-navigation
app.get("/content/v1/layout/top-navigation", (req, res) => {
  const lang = getLanguage(req);
  res.json({
    data: mockData[lang].navigation
  });
});

// 4. GET /content/v1/layout/footer
app.get("/content/v1/layout/footer", (req, res) => {
  const lang = getLanguage(req);
  res.json({
    data: mockData[lang].footer
  });
});

// 5. GET /content/v1/home/sections
app.get("/content/v1/home/sections", (req, res) => {
  const lang = getLanguage(req);
  res.json({
    data: mockData[lang].homeSections
  });
});

// 6. GET /content/v1/properties/search-config
app.get("/content/v1/properties/search-config", (req, res) => {
  const lang = getLanguage(req);
  res.json({
    data: mockData[lang].searchConfig
  });
});

// 7. GET /content/v1/properties/filters
app.get("/content/v1/properties/filters", (req, res) => {
  const lang = getLanguage(req);
  res.json({
    data: mockData[lang].filters
  });
});

// 8. GET /content/v1/properties/sort-options
app.get("/content/v1/properties/sort-options", (req, res) => {
  const lang = getLanguage(req);
  res.json({
    data: mockData[lang].sortOptions
  });
});

// 9. GET /content/v1/static-resources
app.get("/content/v1/static-resources", (req, res) => {
  const lang = getLanguage(req);
  const page = req.query.page;
  const allResources = mockData[lang].staticResources;

  if (page) {
    if (allResources[page]) {
      return res.json({
        data: {
          [page]: allResources[page]
        }
      });
    } else {
      return res.json({ data: {} });
    }
  }

  res.json({
    data: allResources
  });
});

// -------------------------------------------------------------
// SEARCH & PROPERTY ENDPOINTS
// -------------------------------------------------------------

// 10. GET /content/v1/destination-search
app.get("/content/v1/destination-search", (req, res) => {
  const q = req.query.q;
  
  // Custom headers or query lang requirement
  const headerLang = req.headers["x-language"];
  if (!headerLang) {
    // OpenAPI states x-language is required for autocomplete search
    console.warn("Warning: x-language header should be provided for autocomplete");
  }

  if (!q || q.length < 2) {
    return res.status(400).json(
      makeErrorResponse("BAD_REQUEST", "Query parameter 'q' is required and must be at least 2 characters.")
    );
  }

  const queryLower = q.toLowerCase();

  // Filter destinations and properties based on query 'q'
  const matchedDestinations = destinations.filter(
    d => d.title.toLowerCase().includes(queryLower) || 
         (d.countryName && d.countryName.toLowerCase().includes(queryLower))
  );

  const matchedProperties = properties.filter(
    p => p.title.toLowerCase().includes(queryLower) || 
         p.cityName.toLowerCase().includes(queryLower)
  );

  res.json({
    data: {
      destinations: matchedDestinations,
      properties: matchedProperties
    }
  });
});

// 11. GET /content/v1/properties/property-list-search
app.get("/content/v1/properties/property-list-search", (req, res) => {
  const { cityCode, countryCode, from, to, rooms, adults, children, infants, tags, promoCode, sort, nextCursor } = req.query;

  // Validate mandatory query parameters based on OpenAPI schema
  const missingParams = [];
  if (!from) missingParams.push("from");
  if (!to) missingParams.push("to");
  if (rooms === undefined) missingParams.push("rooms");
  if (adults === undefined) missingParams.push("adults");
  if (children === undefined) missingParams.push("children");
  if (infants === undefined) missingParams.push("infants");

  if (missingParams.length > 0) {
    return res.status(400).json(
      makeErrorResponse("BAD_REQUEST", `Missing required query parameters: ${missingParams.join(", ")}`)
    );
  }

  // Parse pagination parameters (hardcoded default limit of 10 as requested)
  const limit = 10;
  let page = 1;
  if (nextCursor) {
    const match = nextCursor.match(/cursor-page-(\d+)/);
    if (match) {
      page = parseInt(match[1], 10);
    }
  }
  const offset = (page - 1) * limit;

  // Convert catalog to property-list array with list-specific formats
  let results = Object.values(propertyCatalog).map(prop => {
    // Generate standard pricePerNight dynamically based on catalog or default to a reasonable value
    const baseRoom = prop.rooms[0];
    const pricePerNight = baseRoom ? baseRoom.fromPrice.amount : 5000;

    return {
      searchId: prop.searchId,
      propertyCode: prop.propertyCode,
      title: prop.title,
      cityName: prop.cityName,
      tags: prop.tags,
      tripadvisorReviewScore: prop.tripadvisorReviewScore,
      hotelStars: prop.hotelStars,
      brandIcon: prop.brandIcon,
      pricePerNight: pricePerNight,
      media: {
        gallery: prop.media.gallery,
        view360Url: prop.media.view360Url
      }
    };
  });

  // Filter results if cityCode or countryCode is specified
  if (cityCode) {
    const cityLower = cityCode.toLowerCase();
    results = results.filter(p => {
      // Maps common city codes to names for mocking convenience
      if (cityLower === "hkt" && p.cityName.toLowerCase() === "phuket") return true;
      if (cityLower === "bkk" && p.cityName.toLowerCase() === "bangkok") return true;
      return p.cityName.toLowerCase().includes(cityLower);
    });
  }

  if (countryCode) {
    const countryLower = countryCode.toLowerCase();
    results = results.filter(p => {
      const parentProp = propertyCatalog[p.propertyCode];
      return parentProp && parentProp.countryCode.toLowerCase() === countryLower;
    });
  }

  // Apply sorting
  if (sort === "price-low-to-high") {
    results.sort((a, b) => a.pricePerNight - b.pricePerNight);
  } else if (sort === "price-high-to-low") {
    results.sort((a, b) => b.pricePerNight - a.pricePerNight);
  } else if (sort === "top-review-score") {
    results.sort((a, b) => b.tripadvisorReviewScore - a.tripadvisorReviewScore);
  }

  // Apply slice-based pagination with page name format cursor
  const totalResults = results.length;
  const paginatedProperties = results.slice(offset, offset + limit);
  const hasMore = (offset + limit) < totalResults;
  const nextCursorValue = hasMore ? `cursor-page-${page + 1}` : null;

  res.json({
    data: {
      pagination: {
        nextCursor: nextCursorValue
      },
      properties: paginatedProperties
    }
  });
});

// 12. GET /content/v1/properties/:propertyCode
app.get("/content/v1/properties/:propertyCode", (req, res) => {
  const propertyCode = req.params.propertyCode;

  if (!propertyCode || propertyCode.trim() === "") {
    return res.status(400).json(
      makeErrorResponse("BAD_REQUEST", "Property code path parameter is required.")
    );
  }

  const property = propertyCatalog[propertyCode];

  if (!property) {
    return res.status(404).json(
      makeErrorResponse("NOT_FOUND", `Property with code '${propertyCode}' was not found. Try 'AN-TH-004' or 'AV-TH-001'.`)
    );
  }

  res.json({
    data: {
      property: property
    }
  });
});

// Base URL / Homepage instructions
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Minor Hotels Mock API</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; padding: 40px; max-width: 800px; margin: 0 auto; color: #333; }
          h1 { color: #d3a13b; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; }
          .endpoint { background: #f8f9fa; border: 1px solid #e9ecef; border-left: 4px solid #d3a13b; padding: 15px; margin-bottom: 15px; border-radius: 4px; }
          .method { font-weight: bold; color: #fff; background: #28a745; padding: 3px 8px; border-radius: 3px; font-size: 0.85em; margin-right: 10px; }
          .path { font-family: monospace; font-size: 1.1em; }
          .desc { margin: 5px 0 0 0; color: #666; font-size: 0.95em; }
          a { color: #d3a13b; text-decoration: none; font-weight: bold; }
          a:hover { text-decoration: underline; }
          .btn { display: inline-block; background: #d3a13b; color: white; padding: 10px 20px; border-radius: 4px; margin-top: 15px; }
        </style>
      </head>
      <body>
        <h1>Minor Hotels Mock Content API</h1>
        <p>Welcome! The Mock ExpressJS service is fully running and serving endpoints based on <code>openapi.yaml</code>.</p>
        
        <a class="btn" href="/swagger">Open Swagger API Docs ➔</a>
        
        <h2 style="margin-top: 40px;">Core Mock Endpoints Available</h2>
        
        <div class="endpoint">
          <span class="method" style="background: #17a2b8;">GET</span>
          <span class="path">/health/live</span>
          <p class="desc">Liveness probe to check if service process is running.</p>
        </div>
        
        <div class="endpoint">
          <span class="method" style="background: #17a2b8;">GET</span>
          <span class="path">/health/ready</span>
          <p class="desc">Readiness probe to check if service is ready to accept requests.</p>
        </div>

        <div class="endpoint">
          <span class="method">GET</span>
          <span class="path">/content/v1/layout/top-navigation</span>
          <p class="desc">Fetch localized navigation headers and items. Headers: <code>x-language: en|th</code>.</p>
        </div>

        <div class="endpoint">
          <span class="method">GET</span>
          <span class="path">/content/v1/layout/footer</span>
          <p class="desc">Fetch localized columns, app store URLs, connect and social links.</p>
        </div>

        <div class="endpoint">
          <span class="method">GET</span>
          <span class="path">/content/v1/home/sections</span>
          <p class="desc">Fetch home page composition containers (Hero banner, Featured destinations, Brands grid).</p>
        </div>

        <div class="endpoint">
          <span class="method">GET</span>
          <span class="path">/content/v1/properties/search-config</span>
          <p class="desc">Fetch the property search input box configurations.</p>
        </div>

        <div class="endpoint">
          <span class="method">GET</span>
          <span class="path">/content/v1/destination-search?q=phuket</span>
          <p class="desc">Auto-complete lookup matching destinations or properties (minimum 2 characters).</p>
        </div>

        <div class="endpoint">
          <span class="method">GET</span>
          <span class="path">/content/v1/properties/property-list-search?from=2026-07-20&to=2026-07-25&rooms=1&adults=2&children=0&infants=0&cityCode=HKT</span>
          <p class="desc">Search and filter properties. Supports sorting by price or reviews.</p>
        </div>

        <div class="endpoint">
          <span class="method">GET</span>
          <span class="path">/content/v1/properties/AN-TH-004</span>
          <p class="desc">Fetch property catalog specs, galleries, geolocations, and full room/rate breakdowns.</p>
        </div>

        <p style="color: #999; margin-top: 50px; font-size: 0.85em;">Developed dynamically for Minor Hotels CCH content composition layer.</p>
      </body>
    </html>
  `);
});

// Fallback 404 for unhandled routes
app.use((req, res) => {
  res.status(404).json(
    makeErrorResponse("NOT_FOUND", `The requested route '${req.method} ${req.url}' was not found in this service.`)
  );
});

// Start Express server if run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`🚀 Minor Hotels Mock Service listening on port ${PORT}`);
    console.log(`👉 Main portal: http://localhost:${PORT}/`);
    console.log(`👉 Swagger UI Docs: http://localhost:${PORT}/swagger`);
    console.log(`==================================================`);
  });
}

module.exports = app;
