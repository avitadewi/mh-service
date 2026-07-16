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

    it("should return all 50 property listings and not contain pagination", async () => {
      const res = await request(app).get(
        "/content/v1/properties/property-list-search?from=2026-07-20&to=2026-07-25&rooms=1&adults=2&children=0&infants=0"
      );
      expect(res.status).toBe(200);
      expect(res.body.data.properties.length).toBe(50);
      expect(res.body.data.pagination).toBeUndefined();
      expect(res.body.data.properties[0].pricePerNight).toBeDefined();
    });

    it("should support filtering by cityCode HKT (Phuket)", async () => {
      const res = await request(app).get(
        "/content/v1/properties/property-list-search?from=2026-07-20&to=2026-07-25&rooms=1&adults=2&children=0&infants=0&cityCode=HKT"
      );
      expect(res.status).toBe(200);
      expect(res.body.data.properties.length).toBeGreaterThanOrEqual(1);
      expect(res.body.data.properties[0].cityName).toBe("Phuket");
      expect(res.body.data.properties[0].tags[0]).toEqual({
        label: expect.any(String),
        value: expect.any(String)
      });
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

  describe("Property Details by ID", () => {
    it("should return details for an existing property ID", async () => {
      const res = await request(app).get("/content/v1/properties/AN-TH-004");
      expect(res.status).toBe(200);
      expect(res.body.data.property.propertyCode).toBe("AN.TH-004");
      expect(res.body.data.property.propertyId).toBe("AN-TH-004");
      expect(res.body.data.property.title).toBe("Anantara Koh Yao Yai Resort & Villas");
      expect(res.body.data.property.rooms.length).toBeGreaterThan(0);
      expect(res.body.data.property.tags).toEqual([
        { label: "Wellness", value: "WELLNESS" },
        { label: "Family", value: "FAMILY" },
        { label: "Pet Friendly", value: "PET_FRIENDLY" }
      ]);
    });

    it("should return 404 for a non-existent property ID", async () => {
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

  // -------------------------------------------------------------
  // GHA MEMBER-SERVICE MOCK TESTS
  // -------------------------------------------------------------
  describe("GHA Member-Service Endpoints", () => {
    it("should return 400 for login without X-CCH-Channel header", async () => {
      const res = await request(app)
        .post("/gha/auth/login")
        .send({ login: "john@example.com", password: "password123" });
      expect(res.status).toBe(400);
      expect(res.body.code).toBe("INVALID_REQUEST");
    });

    it("should return 400 for login with missing credentials", async () => {
      const res = await request(app)
        .post("/gha/auth/login")
        .set("X-CCH-Channel", "web")
        .send({ login: "" });
      expect(res.status).toBe(400);
      expect(res.body.code).toBe("INVALID_REQUEST");
    });

    it("should return 200 and auth token pair on valid login credentials", async () => {
      const res = await request(app)
        .post("/gha/auth/login")
        .set("X-CCH-Channel", "web")
        .send({ login: "john@example.com", password: "password123" });
      expect(res.status).toBe(200);
      expect(res.body.accessToken).toBeDefined();
      expect(res.body.refreshToken).toBeDefined();
      expect(res.body.member.firstName).toBe("John");
      expect(res.body.member.membershipCardNo).toBeDefined();
    });

    it("should return 401 on incorrect login credentials", async () => {
      const res = await request(app)
        .post("/gha/auth/login")
        .set("X-CCH-Channel", "web")
        .send({ login: "invalid@example.com", password: "wrong" });
      expect(res.status).toBe(401);
      expect(res.body.code).toBe("INVALID_CREDENTIALS");
    });

    it("should return GHA profile with a valid Bearer token", async () => {
      const res = await request(app)
        .get("/gha/auth/profile")
        .set("Authorization", "Bearer mock-access-token-123");
      expect(res.status).toBe(200);
      expect(res.body.member.firstName).toBe("John");
    });

    it("should return 401 for profile with an invalid Bearer token", async () => {
      const res = await request(app)
        .get("/gha/auth/profile")
        .set("Authorization", "Bearer invalid-token");
      expect(res.status).toBe(401);
      expect(res.body.code).toBe("INVALID_TOKEN");
    });

    it("should return GHA languages list", async () => {
      const res = await request(app).get("/gha/languages");
      expect(res.status).toBe(200);
      expect(res.body.items).toBeDefined();
      expect(res.body.items[0].code).toBe("en");
    });

    it("should return GHA countries list", async () => {
      const res = await request(app).get("/gha/countries");
      expect(res.status).toBe(200);
      expect(res.body.items).toBeDefined();
      expect(res.body.items[0].code).toBe("TH");
    });

    it("should return 400 for GHA states list when countryCode query parameter is missing", async () => {
      const res = await request(app).get("/gha/states");
      expect(res.status).toBe(400);
      expect(res.body.code).toBe("INVALID_REQUEST");
    });

    it("should return states for US and TH", async () => {
      const usRes = await request(app).get("/gha/states?countryCode=US");
      expect(usRes.status).toBe(200);
      expect(usRes.body.items.length).toBeGreaterThan(0);
      expect(usRes.body.items[0].code).toBe("CA");

      const thRes = await request(app).get("/gha/states?countryCode=TH");
      expect(thRes.status).toBe(200);
      expect(thRes.body.items.length).toBeGreaterThan(0);
      expect(thRes.body.items[0].code).toBe("BKK");
    });

    it("should register a GHA member successfully", async () => {
      const res = await request(app)
        .post("/gha/auth/register")
        .send({
          email: "newmember@example.com",
          password: "Password123!",
          firstName: "Alice",
          lastName: "Smith",
          language: "en",
          ghaMarketingYn: false,
          consentFlags: {
            termsAccepted: true,
            privacyAccepted: true
          }
        });
      expect(res.status).toBe(201);
      expect(res.body.accessToken).toBeDefined();
    });

    it("should reject GHA registration with 409 conflict for existing email", async () => {
      const res = await request(app)
        .post("/gha/auth/register")
        .send({
          email: "existing@example.com",
          password: "Password123!",
          firstName: "Alice",
          lastName: "Smith",
          language: "en",
          ghaMarketingYn: false,
          consentFlags: {
            termsAccepted: true,
            privacyAccepted: true
          }
        });
      expect(res.status).toBe(409);
      expect(res.body.code).toBe("ACCOUNT_ALREADY_EXISTS");
    });
  });

  // -------------------------------------------------------------
  // RESERVATION-SERVICE MOCK TESTS
  // -------------------------------------------------------------
  describe("Reservation-Service Endpoints", () => {
    it("should return 400 for get reservation with missing reservationId", async () => {
      const res = await request(app).get("/reservations/v1/reservations");
      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe("INVALID_REQUEST");
      expect(res.body.error.message).toBe("reservationId path parameter is required.");
    });

    it("should return pending reservation by reservationId", async () => {
      const res = await request(app).get("/reservations/v1/reservations/resv_pending");
      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe("PENDING");
      expect(res.body.data.property.propertyCode).toBe("AN.TH-004");
      expect(res.body.data.property.propertyId).toBe("AN-TH-004");
      expect(res.body.data.priceSummary.isEstimate).toBe(true);
    });

    it("should return confirmed reservation by reservationId", async () => {
      const res = await request(app).get("/reservations/v1/reservations/resv_confirmed");
      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe("CONFIRMED");
      expect(res.body.data.property.propertyCode).toBe("AN.TH-004");
      expect(res.body.data.property.propertyId).toBe("AN-TH-004");
      expect(res.body.data.primaryGuest.firstName).toBe("Ada");
      expect(res.body.data.priceSummary.isEstimate).toBe(false);
    });

    it("should return nationalities list", async () => {
      const res = await request(app).get("/reservations/v1/reference/nationalities");
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
      expect(res.body.data[0].code).toBe("TH");
    });

    it("should return country codes list", async () => {
      const res = await request(app).get("/reservations/v1/reference/country-codes");
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
      expect(res.body.data[0].code).toBe("TH");
      expect(res.body.data[0].countryCode).toBe("+66");
    });

    it("should return room preferences list", async () => {
      const res = await request(app).get("/reservations/v1/reference/room-preferences");
      expect(res.status).toBe(200);
      expect(res.body.data.questions).toBeDefined();
      expect(res.body.data.questions[0].multiple).toBe(false);
      expect(res.body.data.options).toBeDefined();
    });

    it("should support reservation creation and return newly generated reservationId", async () => {
      const res = await request(app)
        .post("/reservations/v1/reservations")
        .set("Idempotency-Key", "idempotency_key_test_123")
        .send({
          from: "2026-07-24",
          to: "2026-07-27",
          codeForReservation: {
            propertyCode: "AN-TH-004",
            roomCode: "DELUXE_POOL_VILLA",
            ratePlanCode: "ONHR",
            rateGroupCode: "ADVANCE_SAVER"
          },
          rooms: [
            {
              adultsCount: 2,
              childrenCount: 2,
              childAges: [2, 4]
            }
          ]
        });
      expect(res.status).toBe(201);
      expect(res.body.data.reservationId).toBeDefined();
      expect(res.body.data.reservationId).toContain("resv_");
    });

    it("should support confirming a reservation", async () => {
      const res = await request(app)
        .patch("/reservations/v1/reservations/resv_pending/confirm")
        .set("Idempotency-Key", "idempotency_key_test_456")
        .send({
          primaryGuest: {
            firstName: "John",
            lastName: "Smith",
            email: "john@example.com",
            nationality: "US",
            phone: {
              countryCode: "+1",
              number: "5551234"
            }
          },
          guestRooms: [
            {
              guests: [
                { firstName: "John", lastName: "Smith" }
              ]
            }
          ]
        });
      expect(res.status).toBe(200);
      expect(res.body.data.orderId).toBeDefined();
      expect(res.body.data.payment.service).toBe("JUSPAY");

      // Verify that getting the reservation now returns its updated status
      const getRes = await request(app).get("/reservations/v1/reservations/resv_pending");
      expect(getRes.status).toBe(200);
      expect(getRes.body.data.status).toBe("CONFIRMED");
      expect(getRes.body.data.primaryGuest.firstName).toBe("John");
    });

    it("should support canceling a reservation", async () => {
      const res = await request(app)
        .post("/reservations/v1/reservations/resv_confirmed/cancel");
      expect(res.status).toBe(200);
      expect(res.body.data).toEqual({});

      // Verify that getting the reservation now returns its updated status as CANCELLED
      const getRes = await request(app).get("/reservations/v1/reservations/resv_confirmed");
      expect(getRes.status).toBe(200);
      expect(getRes.body.data.status).toBe("CANCELLED");
    });
  });
});
