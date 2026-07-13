const request = require("supertest");
const app = require("./server");

describe("Minor Hotels Mock API Tests", () => {
  
  // -------------------------------------------------------------
  // HEALTH ENDPOINTS
  // -------------------------------------------------------------
  describe("Health Check Endpoints", () => {
    it("should return 200 and live status for /health/live", async () => {
      const res = await request(app).get("/health/live");
      expect(res.status).toBe(200);
      expect(res.body.data.service).toBe("content-service");
      expect(res.body.data.state).toBe("ok");
      expect(res.body.data.checkedAt).toBeDefined();
    });

    it("should return 200 and ready status for /health/ready", async () => {
      const res = await request(app).get("/health/ready");
      expect(res.status).toBe(200);
      expect(res.body.data.service).toBe("content-service");
      expect(res.body.data.state).toBe("ok");
      expect(res.body.data.checkedAt).toBeDefined();
    });
  });

  // -------------------------------------------------------------
  // LAYOUT & CONFIGURATION ENDPOINTS
  // -------------------------------------------------------------
  describe("Layout and Config Endpoints", () => {
    it("should return top navigation with English by default", async () => {
      const res = await request(app).get("/content/v1/layout/top-navigation");
      expect(res.status).toBe(200);
      expect(res.body.data.mainMenus[0].label).toBe("Home");
      expect(res.body.data.utilities.languages.options[0].code).toBe("en");
    });

    it("should return top navigation with Thai language when x-language header is th", async () => {
      const res = await request(app)
        .get("/content/v1/layout/top-navigation")
        .set("x-language", "th");
      expect(res.status).toBe(200);
      expect(res.body.data.mainMenus[0].label).toBe("หน้าแรก");
    });

    it("should return footer structure", async () => {
      const res = await request(app).get("/content/v1/layout/footer");
      expect(res.status).toBe(200);
      expect(res.body.data.mainLogoUrl).toBeDefined();
      expect(res.body.data.legalAndCopyright.copyright).toBe("© 2026 Minor Hotels. All rights reserved.");
    });

    it("should return footer structure in Thai when x-language header is th", async () => {
      const res = await request(app)
        .get("/content/v1/layout/footer")
        .set("x-language", "th");
      expect(res.status).toBe(200);
      expect(res.body.data.legalAndCopyright.copyright).toBe("© 2026 ไมเนอร์ โฮเทลส์. สงวนลิขสิทธิ์ทั้งหมด.");
    });

    it("should return home screen sections", async () => {
      const res = await request(app).get("/content/v1/home/sections");
      expect(res.status).toBe(200);
      expect(res.body.data.language).toBe("en");
      expect(res.body.data.containers.length).toBeGreaterThan(0);
    });

    it("should return search-config for main fields", async () => {
      const res = await request(app).get("/content/v1/properties/search-config");
      expect(res.status).toBe(200);
      expect(res.body.data.title).toBe("Find Your Perfect Escape");
      expect(res.body.data.searchFields.destination.label).toBe("Destination");
    });

    it("should return filters and sort-options", async () => {
      const filterRes = await request(app).get("/content/v1/properties/filters");
      expect(filterRes.status).toBe(200);
      expect(filterRes.body.data.filterCategories.length).toBeGreaterThan(0);

      const sortRes = await request(app).get("/content/v1/properties/sort-options");
      expect(sortRes.status).toBe(200);
      expect(sortRes.body.data.sortOptions.length).toBeGreaterThan(0);
    });

    it("should support filtering static resources by page query parameter", async () => {
      const res = await request(app).get("/content/v1/static-resources?page=home");
      expect(res.status).toBe(200);
      expect(res.body.data.home).toBeDefined();
      expect(res.body.data.support).toBeUndefined();
    });
  });

  // -------------------------------------------------------------
  // SEARCH & PROPERTY DETAILS ENDPOINTS
  // -------------------------------------------------------------
  describe("Destination Search and Autocomplete", () => {
    it("should reject query parameter 'q' shorter than 2 characters with 400", async () => {
      const res = await request(app).get("/content/v1/destination-search?q=p");
      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe("BAD_REQUEST");
    });

    it("should return autocomplete suggestions for a valid query", async () => {
      const res = await request(app).get("/content/v1/destination-search?q=phuket");
      expect(res.status).toBe(200);
      expect(res.body.data.destinations.length).toBeGreaterThanOrEqual(1);
      expect(res.body.data.destinations[0].title).toBe("Phuket");
      expect(res.body.data.properties.length).toBeGreaterThanOrEqual(1);
      expect(res.body.data.properties[0].cityName).toBe("Phuket");
    });
  });

  describe("Property List Search", () => {
    it("should return 400 if required parameters are missing", async () => {
      const res = await request(app).get("/content/v1/properties/property-list-search");
      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe("BAD_REQUEST");
      expect(res.body.error.message).toContain("Missing required query parameters");
    });

    it("should return property listings matching the default limit of 10 and return nextCursor as cursor-page-2", async () => {
      const res = await request(app).get(
        "/content/v1/properties/property-list-search?from=2026-07-20&to=2026-07-25&rooms=1&adults=2&children=0&infants=0"
      );
      expect(res.status).toBe(200);
      expect(res.body.data.properties.length).toBe(10); // Default limit is 10
      expect(res.body.data.pagination.nextCursor).toBe("cursor-page-2"); // Next cursor page
      expect(res.body.data.properties[0].pricePerNight).toBeDefined();
    });

    it("should fetch the second page when passing nextCursor=cursor-page-2 and return nextCursor as cursor-page-3", async () => {
      const res = await request(app).get(
        "/content/v1/properties/property-list-search?from=2026-07-20&to=2026-07-25&rooms=1&adults=2&children=0&infants=0&nextCursor=cursor-page-2"
      );
      expect(res.status).toBe(200);
      expect(res.body.data.properties.length).toBe(10);
      expect(res.body.data.pagination.nextCursor).toBe("cursor-page-3");
    });

    it("should fetch the fifth page (final page) and return nextCursor as null", async () => {
      const res = await request(app).get(
        "/content/v1/properties/property-list-search?from=2026-07-20&to=2026-07-25&rooms=1&adults=2&children=0&infants=0&nextCursor=cursor-page-5"
      );
      expect(res.status).toBe(200);
      expect(res.body.data.properties.length).toBe(10); // 40 to 49
      expect(res.body.data.pagination.nextCursor).toBeNull(); // Last page reached
    });

    it("should support filtering by cityCode HKT (Phuket)", async () => {
      const res = await request(app).get(
        "/content/v1/properties/property-list-search?from=2026-07-20&to=2026-07-25&rooms=1&adults=2&children=0&infants=0&cityCode=HKT"
      );
      expect(res.status).toBe(200);
      expect(res.body.data.properties.length).toBeGreaterThanOrEqual(1);
      expect(res.body.data.properties[0].cityName).toBe("Phuket");
    });

    it("should support sorting by price low to high", async () => {
      const res = await request(app).get(
        "/content/v1/properties/property-list-search?from=2026-07-20&to=2026-07-25&rooms=1&adults=2&children=0&infants=0&sort=price-low-to-high"
      );
      expect(res.status).toBe(200);
      const firstPrice = res.body.data.properties[0].pricePerNight;
      const secondPrice = res.body.data.properties[1].pricePerNight;
      expect(firstPrice).toBeLessThanOrEqual(secondPrice);
    });
  });

  describe("Property Details by Code", () => {
    it("should return details for an existing property code", async () => {
      const res = await request(app).get("/content/v1/properties/AN-TH-004");
      expect(res.status).toBe(200);
      expect(res.body.data.property.propertyCode).toBe("AN-TH-004");
      expect(res.body.data.property.title).toBe("Anantara Koh Yao Yai Resort & Villas");
      expect(res.body.data.property.rooms.length).toBeGreaterThan(0);
    });

    it("should return 404 for a non-existent property code", async () => {
      const res = await request(app).get("/content/v1/properties/NON-EXISTENT");
      expect(res.status).toBe(404);
      expect(res.body.error.code).toBe("NOT_FOUND");
    });
  });

  // -------------------------------------------------------------
  // SWAGGER UI ENDPOINTS
  // -------------------------------------------------------------
  describe("Swagger UI Endpoints", () => {
    it("should redirect or serve 200 with HTML for /swagger/", async () => {
      const res = await request(app).get("/swagger/");
      expect(res.status).toBe(200);
      expect(res.headers["content-type"]).toContain("text/html");
      expect(res.text).toContain("https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui.css");
      expect(res.text).toContain("https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-bundle.js");
      expect(res.text).toContain("https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-standalone-preset.js");
    });

    it("should redirect or serve 200 with HTML for /api-docs/", async () => {
      const res = await request(app).get("/api-docs/");
      expect(res.status).toBe(200);
      expect(res.headers["content-type"]).toContain("text/html");
      expect(res.text).toContain("https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui.css");
    });
  });
});
