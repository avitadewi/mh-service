// Mock database for Minor Hotels Content Composition API (cch-content-service)
// Supports localization in 'en' and 'th' (Thai)
// Programmatically expanded to contain exactly 50 properties with random Picsum images

const mockData = {
  en: {
    navigation: {
      mainMenus: [
        { id: "menu-home", label: "Home", actionUrl: "/" },
        {
          id: "menu-explore",
          label: "Explore Destinations",
          actionUrl: "/explore",
        },
        { id: "menu-offers", label: "Special Offers", actionUrl: "/offers" },
        {
          id: "menu-wellness",
          label: "Wellness & Spa",
          actionUrl: "/wellness",
        },
        {
          id: "menu-dining",
          label: "Dining Experiences",
          actionUrl: "/dining",
        },
      ],
      utilities: {
        languages: {
          iconUrl: "https://cdn.example.com/icons/globe.svg",
          options: [
            { code: "en", label: "English" },
            { code: "th", label: "ไทย" },
          ],
        },
        currencies: {
          iconUrl: "https://cdn.example.com/icons/wallet.svg",
          options: [
            { code: "USD", symbol: "$", label: "US Dollar" },
            { code: "THB", symbol: "฿", label: "Thai Baht" },
            { code: "EUR", symbol: "€", label: "Euro" },
          ],
        },
        helpSupport: {
          label: "Help & Support",
          iconUrl: "https://cdn.example.com/icons/help.svg",
          actionUrl: "/support",
        },
      },
    },
    footer: {
      mainLogoUrl: "https://cdn.example.com/brands/minor-hotels-logo.png",
      discoveryLogoUrl: "https://cdn.example.com/brands/discovery-loyalty.png",
      downloadApp: {
        title: "Experience the World of Minor Hotels",
        subtitle:
          "Download our mobile app to book and manage stays seamlessly.",
        stores: [
          {
            label: "App Store",
            actionUrl: "https://apps.apple.com/app/minor-hotels",
            iconUrl: "https://cdn.example.com/icons/app-store.png",
          },
          {
            label: "Google Play",
            actionUrl: "https://play.google.com/store/minor-hotels",
            iconUrl: "https://cdn.example.com/icons/google-play.png",
          },
        ],
      },
      explore: {
        title: "Explore",
        links: [
          { label: "Our Brands", actionUrl: "/brands" },
          { label: "Destinations", actionUrl: "/destinations" },
          { label: "Meeting & Events", actionUrl: "/meetings" },
          { label: "Gifting Experience", actionUrl: "/gifts" },
        ],
      },
      connect: {
        title: "Connect",
        links: [
          {
            label: "Facebook",
            actionUrl: "https://facebook.com/minorhotels",
            iconKey: "facebook",
          },
          {
            label: "Instagram",
            actionUrl: "https://instagram.com/minorhotels",
            iconKey: "instagram",
          },
          {
            label: "LinkedIn",
            actionUrl: "https://linkedin.com/company/minorhotels",
            iconKey: "linkedin",
          },
        ],
      },
      legalAndCopyright: {
        links: [
          { label: "Privacy Policy", actionUrl: "/privacy" },
          { label: "Terms & Conditions", actionUrl: "/terms" },
          { label: "Cookie Policy", actionUrl: "/cookies" },
        ],
        copyright: "© 2026 Minor Hotels. All rights reserved.",
      },
    },
    homeSections: {
      language: "en",
      containers: [
        {
          containerType: "HERO",
          background: {
            type: "image",
            value:
              "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
            themeMode: "dark",
          },
          data: {
            title: "Escape to Luxury",
            subtitle:
              "Unforgettable journeys across our globally curated collection of resorts.",
            tagline: "EXPLORE MINOR HOTELS",
            ctaLabel: "Book Now",
            searchPlaceholder: "Where would you like to go?",
          },
        },
        {
          containerType: "EXPLORE_DESTINATIONS",
          background: {
            type: "color",
            value: "#FFFFFF",
            themeMode: "light",
          },
          data: {
            title: "Featured Destinations",
            subtitle: "Discover unique locations and curated travel guides.",
            items: [
              {
                label: "Phuket",
                propertyCount: "12 Properties",
                imageUrl:
                  "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
                action: {
                  type: "SEARCH",
                  target: "/search",
                  params: { cityCode: "HKT", countryCode: "TH" },
                },
              },
              {
                label: "Bangkok",
                propertyCount: "8 Properties",
                imageUrl:
                  "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
                action: {
                  type: "SEARCH",
                  target: "/search",
                  params: { cityCode: "BKK", countryCode: "TH" },
                },
              },
              {
                label: "Maldives",
                propertyCount: "5 Properties",
                imageUrl:
                  "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
                action: {
                  type: "SEARCH",
                  target: "/search",
                  params: { regionName: "Maldives" },
                },
              },
            ],
          },
        },
        {
          containerType: "OUR_BRANDS",
          background: {
            type: "color",
            value: "#F9F9F9",
            themeMode: "light",
          },
          data: {
            title: "Our Celebrated Brands",
            subtitle:
              "A diverse portfolio of luxury hospitality experiences tailored for you.",
            brands: [
              {
                brandName: "Anantara Resorts & Hotels",
                description:
                  "Indigenous luxury experiences deeply connected to each destination.",
                logoUrl: "https://cdn.example.com/brands/anantara.svg",
                backgroundImageUrl:
                  "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
                ctaLabel: "Explore Anantara",
                action: { type: "BRAND_PAGE", target: "/brands/anantara" },
              },
              {
                brandName: "Avani Hotels & Resorts",
                description:
                  "Modern, vibrant, and essential spaces designed for smart travelers.",
                logoUrl: "https://cdn.example.com/brands/avani.svg",
                backgroundImageUrl:
                  "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
                ctaLabel: "Explore Avani",
                action: { type: "BRAND_PAGE", target: "/brands/avani" },
              },
            ],
          },
        },
        {
          containerType: "BENEFITS",
          background: {
            type: "color",
            value: "#111111",
            themeMode: "dark",
          },
          data: {
            title: "Why Book Direct?",
            subtitle:
              "Enjoy exclusive rewards and guarantees every time you book through our website.",
            benefits: [
              {
                number: "01",
                text: "Best Rate Guarantee",
                description:
                  "Find a lower rate elsewhere within 24 hours and we will match it and give an extra 10% off.",
              },
              {
                number: "02",
                text: "Exclusive Member Rates",
                description:
                  "Sign in as a DISCOVERY member to save an additional 10% or more on all bookings.",
              },
              {
                number: "03",
                text: "Direct Stay Perks",
                description:
                  "Enjoy complimentary high-speed Wi-Fi, flexible cancellation, and priority early check-in.",
              },
            ],
          },
        },
      ],
    },
    searchConfig: {
      title: "Find Your Perfect Escape",
      searchFields: {
        destination: {
          id: "dest",
          label: "Destination",
          placeholder: "Where to?",
          iconUrl: "https://cdn.example.com/icons/map-pin.svg",
        },
        dates: {
          id: "dates",
          label: "Dates",
          placeholder: "Check-in - Check-out",
          iconUrl: "https://cdn.example.com/icons/calendar.svg",
        },
        rooms: {
          id: "rooms",
          label: "Guests & Rooms",
          placeholder: "1 Room, 2 Adults",
          iconUrl: "https://cdn.example.com/icons/guests.svg",
        },
      },
      buttons: {
        submitLabel: "Search",
        promoCodeLabel: "Promo Code",
      },
    },
    filters: {
      filterCategories: [
        { code: "brand", label: "Brands" },
        { code: "price", label: "Price Range" },
        { code: "stars", label: "Hotel Stars" },
        { code: "tags", label: "Interests & Themes" },
        { code: "amenities", label: "Amenities" },
      ],
    },
    sortOptions: {
      sortOptions: [
        { code: "", label: "Best Match" },
        { code: "price-low-to-high", label: "Price: Low to High" },
        { code: "price-high-to-low", label: "Price: High to Low" },
        { code: "top-review-score", label: "Top Guest Reviews" },
      ],
    },
    staticResources: {
      home: {
        welcome_title: { text: "Welcome to Minor Hotels", iconUrl: null },
        search_button: {
          text: "Search Hotels",
          iconUrl: "https://cdn.example.com/icons/search.svg",
        },
        booking_guarantee: {
          text: "Best Rate Guarantee",
          iconUrl: "https://cdn.example.com/icons/shield.svg",
        },
      },
      support: {
        contact_us: {
          text: "Contact Support",
          iconUrl: "https://cdn.example.com/icons/mail.svg",
        },
        faq: {
          text: "Frequently Asked Questions",
          iconUrl: "https://cdn.example.com/icons/info.svg",
        },
      },
    },
  },
  th: {
    navigation: {
      mainMenus: [
        { id: "menu-home", label: "หน้าแรก", actionUrl: "/" },
        {
          id: "menu-explore",
          label: "สำรวจจุดหมายปลายทาง",
          actionUrl: "/explore",
        },
        { id: "menu-offers", label: "ข้อเสนอพิเศษ", actionUrl: "/offers" },
        { id: "menu-wellness", label: "เวลเนสและสปา", actionUrl: "/wellness" },
        {
          id: "menu-dining",
          label: "ห้องอาหารและประสบการณ์ทานอาหาร",
          actionUrl: "/dining",
        },
      ],
      utilities: {
        languages: {
          iconUrl: "https://cdn.example.com/icons/globe.svg",
          options: [
            { code: "en", label: "English" },
            { code: "th", label: "ไทย" },
          ],
        },
        currencies: {
          iconUrl: "https://cdn.example.com/icons/wallet.svg",
          options: [
            { code: "USD", symbol: "$", label: "ดอลลาร์สหรัฐ" },
            { code: "THB", symbol: "฿", label: "บาทไทย" },
            { code: "EUR", symbol: "€", label: "ยูโร" },
          ],
        },
        helpSupport: {
          label: "ความช่วยเหลือและสนับสนุน",
          iconUrl: "https://cdn.example.com/icons/help.svg",
          actionUrl: "/support",
        },
      },
    },
    footer: {
      mainLogoUrl: "https://cdn.example.com/brands/minor-hotels-logo.png",
      discoveryLogoUrl: "https://cdn.example.com/brands/discovery-loyalty.png",
      downloadApp: {
        title: "สัมผัสประสบการณ์ระดับโลกกับ ไมเนอร์ โฮเทลส์",
        subtitle:
          "ดาวน์โหลดแอปมือถือของเราเพื่อจองและจัดการการเข้าพักได้อย่างง่ายดาย",
        stores: [
          {
            label: "App Store",
            actionUrl: "https://apps.apple.com/app/minor-hotels",
            iconUrl: "https://cdn.example.com/icons/app-store.png",
          },
          {
            label: "Google Play",
            actionUrl: "https://play.google.com/store/minor-hotels",
            iconUrl: "https://cdn.example.com/icons/google-play.png",
          },
        ],
      },
      explore: {
        title: "สำรวจ",
        links: [
          { label: "แบรนด์ของเรา", actionUrl: "/brands" },
          { label: "จุดหมายปลายทาง", actionUrl: "/destinations" },
          { label: "การประชุมและงานจัดเลี้ยง", actionUrl: "/meetings" },
          { label: "บัตรของขวัญและประสบการณ์", actionUrl: "/gifts" },
        ],
      },
      connect: {
        title: "การเชื่อมต่อ",
        links: [
          {
            label: "Facebook",
            actionUrl: "https://facebook.com/minorhotels",
            iconKey: "facebook",
          },
          {
            label: "Instagram",
            actionUrl: "https://instagram.com/minorhotels",
            iconKey: "instagram",
          },
          {
            label: "LinkedIn",
            actionUrl: "https://linkedin.com/company/minorhotels",
            iconKey: "linkedin",
          },
        ],
      },
      legalAndCopyright: {
        links: [
          { label: "นโยบายความเป็นส่วนตัว", actionUrl: "/privacy" },
          { label: "ข้อกำหนดและเงื่อนไข", actionUrl: "/terms" },
          { label: "นโยบายคุกกี้", actionUrl: "/cookies" },
        ],
        copyright: "© 2026 ไมเนอร์ โฮเทลส์. สงวนลิขสิทธิ์ทั้งหมด.",
      },
    },
    homeSections: {
      language: "th",
      containers: [
        {
          containerType: "HERO",
          background: {
            type: "image",
            value:
              "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
            themeMode: "dark",
          },
          data: {
            title: "หลีกหนีสู่ความหรูหรา",
            subtitle:
              "การเดินทางที่น่าจดจำ ณ รีสอร์ทหรูระดับโลกที่คัดสรรมาเพื่อคุณ",
            tagline: "สำรวจ ไมเนอร์ โฮเทลส์",
            ctaLabel: "จองเลย",
            searchPlaceholder: "คุณอยากไปเที่ยวที่ไหน?",
          },
        },
        {
          containerType: "EXPLORE_DESTINATIONS",
          background: {
            type: "color",
            value: "#FFFFFF",
            themeMode: "light",
          },
          data: {
            title: "จุดหมายปลายทางยอดนิยม",
            subtitle:
              "ค้นพบสถานที่ท่องเที่ยวที่ไม่เหมือนใครและคู่มือการเดินทางที่คัดสรรมาแล้ว",
            items: [
              {
                label: "ภูเก็ต",
                propertyCount: "12 โรงแรม",
                imageUrl:
                  "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
                action: {
                  type: "SEARCH",
                  target: "/search",
                  params: { cityCode: "HKT", countryCode: "TH" },
                },
              },
              {
                label: "กรุงเทพฯ",
                propertyCount: "8 โรงแรม",
                imageUrl:
                  "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
                action: {
                  type: "SEARCH",
                  target: "/search",
                  params: { cityCode: "BKK", countryCode: "TH" },
                },
              },
              {
                label: "มัลดีฟส์",
                propertyCount: "5 โรงแรม",
                imageUrl:
                  "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
                action: {
                  type: "SEARCH",
                  target: "/search",
                  params: { regionName: "Maldives" },
                },
              },
            ],
          },
        },
        {
          containerType: "OUR_BRANDS",
          background: {
            type: "color",
            value: "#F9F9F9",
            themeMode: "light",
          },
          data: {
            title: "แบรนด์ชั้นนำในเครือของเรา",
            subtitle:
              "แบรนด์โรงแรมหลากหลายรูปแบบที่ได้รับการออกแบบมาให้ตอบรับกับความต้องการของคุณ",
            brands: [
              {
                brandName: "อนันตรา รีสอร์ท แอนด์ โฮเทลส์",
                description:
                  "สัมผัสความหรูหราแบบท้องถิ่นที่เชื่อมโยงคุณเข้ากับเสน่ห์ของแต่ละจุดหมายปลายทาง",
                logoUrl: "https://cdn.example.com/brands/anantara.svg",
                backgroundImageUrl:
                  "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
                ctaLabel: "สำรวจอนันตรา",
                action: { type: "BRAND_PAGE", target: "/brands/anantara" },
              },
              {
                brandName: "อวานี โฮเทลส์ แอนด์ รีสอร์ท",
                description:
                  "พื้นที่ทันสมัย มีชีวิตชีวา และลงตัว ออกแบบมาเพื่อนักเดินทางที่ชาญฉลาด",
                logoUrl: "https://cdn.example.com/brands/avani.svg",
                backgroundImageUrl:
                  "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
                ctaLabel: "สำรวจอวานี",
                action: { type: "BRAND_PAGE", target: "/brands/avani" },
              },
            ],
          },
        },
        {
          containerType: "BENEFITS",
          background: {
            type: "color",
            value: "#111111",
            themeMode: "dark",
          },
          data: {
            title: "ทำไมต้องจองตรงกับเรา?",
            subtitle:
              "เพลิดเพลินกับรางวัลและสิทธิประโยชน์พิเศษทุกครั้งที่คุณจองผ่านเว็บไซต์ของเรา",
            benefits: [
              {
                number: "01",
                text: "รับประกันราคาดีที่สุด",
                description:
                  "หากคุณพบราคาที่ถูกกว่าที่อื่นภายใน 24 ชั่วโมง เรายินดีปรับราคาให้เท่ากันและลดเพิ่มอีก 10%",
              },
              {
                number: "02",
                text: "ราคาพิเศษสำหรับสมาชิก",
                description:
                  "เข้าสู่ระบบในฐานะสมาชิก DISCOVERY เพื่อประหยัดเพิ่มอีก 10% หรือมากกว่าในการจองทุกครั้ง",
              },
              {
                number: "03",
                text: "สิทธิพิเศษการจองตรง",
                description:
                  "เพลิดเพลินกับบริการ Wi-Fi ความเร็วสูงฟรี นโยบายการยกเลิกที่ยืดหยุ่น และสิทธิ์เช็คอินก่อนเวลา",
              },
            ],
          },
        },
      ],
    },
    searchConfig: {
      title: "ค้นหาสถานที่พักผ่อนที่สมบูรณ์แบบของคุณ",
      searchFields: {
        destination: {
          id: "dest",
          label: "จุดหมายปลายทาง",
          placeholder: "คุณอยากไปที่ไหน?",
          iconUrl: "https://cdn.example.com/icons/map-pin.svg",
        },
        dates: {
          id: "dates",
          label: "วันที่เข้าพัก",
          placeholder: "เช็คอิน - เช็คเอาท์",
          iconUrl: "https://cdn.example.com/icons/calendar.svg",
        },
        rooms: {
          id: "rooms",
          label: "ผู้เข้าพัก & ห้องพัก",
          placeholder: "1 ห้อง, ผู้ใหญ่ 2 ท่าน",
          iconUrl: "https://cdn.example.com/icons/guests.svg",
        },
      },
      buttons: {
        submitLabel: "ค้นหา",
        promoCodeLabel: "รหัสโปรโมชั่น",
      },
    },
    filters: {
      filterCategories: [
        { code: "brand", label: "แบรนด์" },
        { code: "price", label: "ช่วงราคา" },
        { code: "stars", label: "ระดับดาว" },
        { code: "tags", label: "ความสนใจ & ธีมการท่องเที่ยว" },
        { code: "amenities", label: "สิ่งอำนวยความสะดวก" },
      ],
    },
    sortOptions: {
      sortOptions: [
        { code: "", label: "ตรงกับความต้องการที่สุด" },
        { code: "price-low-to-high", label: "ราคา: ต่ำไปสูง" },
        { code: "price-high-to-low", label: "ราคา: สูงไปต่ำ" },
        { code: "top-review-score", label: "คะแนนรีวิวยอดเยี่ยม" },
      ],
    },
    staticResources: {
      home: {
        welcome_title: {
          text: "ยินดีต้อนรับสู่ เครือไมเนอร์ โฮเทลส์",
          iconUrl: null,
        },
        search_button: {
          text: "ค้นหาโรงแรม",
          iconUrl: "https://cdn.example.com/icons/search.svg",
        },
        booking_guarantee: {
          text: "รับประกันราคาดีที่สุด",
          iconUrl: "https://cdn.example.com/icons/shield.svg",
        },
      },
      support: {
        contact_us: {
          text: "ติดต่อฝ่ายบริการลูกค้า",
          iconUrl: "https://cdn.example.com/icons/mail.svg",
        },
        faq: {
          text: "คำถามที่พบบ่อย",
          iconUrl: "https://cdn.example.com/icons/info.svg",
        },
      },
    },
  },
};

// Autocomplete and searches databases
const destinations = [
  {
    id: "dest-phuket",
    title: "Phuket",
    destinationType: "city",
    propertyCount: 15,
    countryName: "Thailand",
    regionName: "Southeast Asia",
  },
  {
    id: "dest-bangkok",
    title: "Bangkok",
    destinationType: "city",
    propertyCount: 12,
    countryName: "Thailand",
    regionName: "Southeast Asia",
  },
  {
    id: "dest-samui",
    title: "Koh Samui",
    destinationType: "city",
    propertyCount: 8,
    countryName: "Thailand",
    regionName: "Southeast Asia",
  },
  {
    id: "dest-bali",
    title: "Bali",
    destinationType: "city",
    propertyCount: 6,
    countryName: "Indonesia",
    regionName: "Southeast Asia",
  },
  {
    id: "dest-maldives",
    title: "Maldives",
    destinationType: "region",
    propertyCount: 5,
    countryName: "Maldives",
    regionName: "Indian Ocean",
  },
  {
    id: "dest-dubai",
    title: "Dubai",
    destinationType: "city",
    propertyCount: 4,
    countryName: "United Arab Emirates",
    regionName: "Middle East",
  },
];

// Predefined special properties
const propertyCatalog = {
  "AN-TH-004": {
    searchId: "property-AN-TH-004",
    propertyCode: "AN.TH-004",
    propertyId: "AN-TH-004",
    propertyBackCode: "AN-TH-DD-004",
    title: "Anantara Koh Yao Yai Resort & Villas",
    cityName: "Phuket",
    locationName: "Ko Yao Yai Island",
    countryCode: "TH",
    tags: [
      { label: "Wellness", value: "WELLNESS" },
      { label: "Family", value: "FAMILY" },
      { label: "Pet Friendly", value: "PET_FRIENDLY" },
    ],
    tripadvisorReviewScore: 4.8,
    tripadvisorReviewCount: 248,
    hotelStars: 5,
    brandIcon: { domain: "cdn.example.com", path: "/brands/anantara.svg" },
    thumbnailUrl:
      "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
    overview: {
      shortDescription:
        "An all-villa sanctuary surrounded by emerald limestone cliffs, turquoise waters and lush jungle.",
      fullDescription:
        "At Anantara, we believe that every journey should live long in the memory. This all-villa sanctuary offers an intimate escape into nature, surrounded by emerald limestone cliffs, turquoise waters and lush jungle.",
    },
    media: {
      gallery: [
        {
          id: "property-image-1",
          url: "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
          thumbnailUrl:
            "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
          altText: "Resort outdoor lounge",
          sortOrder: 1,
        },
        {
          id: "property-image-2",
          url: "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
          thumbnailUrl:
            "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
          altText: "Luxury beach villa",
          sortOrder: 2,
        },
      ],
      view360Url: "https://cdn.example.com/properties/AN-TH-004/360view.html",
    },
    accommodationSummary: [
      { type: "SUITE", label: "Suites", count: 148 },
      { type: "VILLA", label: "Villas", count: 42 },
      { type: "RESIDENCE", label: "Residences", count: 27 },
    ],
    guestLovedFeatures: [
      { code: "BEACHFRONT", label: "Beachfront", icon: "beachfront" },
      { code: "PRIVATE_BEACH", label: "Private beach", icon: "private-beach" },
      { code: "PRIVATE_POOL", label: "Private pool", icon: "pool" },
    ],
    amenities: {
      featured: [
        {
          code: "BUSINESS_SERVICES",
          label: "Business services",
          icon: "business-services",
        },
        { code: "WATERSPORTS", label: "Water sports", icon: "watersports" },
        { code: "INTERNET_ACCESS", label: "Internet access", icon: "wifi" },
        { code: "TECHNOGYM", label: "Technogym", icon: "gym" },
      ],
      other: [
        { code: "VALET_SERVICES", label: "Valet services", icon: "car" },
        { code: "SPA", label: "Anantara Spa", icon: "spa" },
      ],
    },
    location: {
      address: {
        addressLine1: "25/25 Moo 4, Koh Yao Yai",
        city: "Phuket",
        province: "Phang Nga",
        postalCode: "82160",
        countryCode: "TH",
      },
      coordinates: { latitude: 8.0261, longitude: 98.6015 },
      travelInformation: [
        "45-minute speedboat transfer from Ao Po Grand Marina in Phuket.",
      ],
      directionUrl: "https://maps.google.com/?q=Anantara+Koh+Yao+Yai",
    },
    rooms: [
      {
        roomCode: "SUITE-VILLA-01",
        roomName: "One Bedroom Luxury Oceanview Pool Villa",
        description:
          "An ultra-luxurious private pool villa overlooking the Andaman Sea.",
        bedConfiguration: [{ bedType: "KING", label: "King Bed", quantity: 1 }],
        maximumOccupancy: { totalGuests: 3, adults: 2, children: 1 },
        size: { value: 170, unit: "sqm" },
        remainingRooms: 4,
        roomCategoryCode: "VILLA",
        summaryFeatures: [
          { code: "OCEAN_VIEW", label: "Ocean View", icon: "ocean" },
        ],
        highlights: [
          {
            code: "BUTLER_SERVICE",
            label: "24-Hour Butler Service",
            icon: "butler",
          },
        ],
        amenities: [
          { code: "WIFI", label: "Free High-Speed Wi-Fi", icon: "wifi" },
        ],
        bathroomAmenities: [
          {
            code: "ORGANIC_TOILETRIES",
            label: "Organic Luxury Toiletries",
            icon: "spa",
          },
        ],
        media: {
          gallery: [
            {
              id: "room-image-1",
              url: "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
              thumbnailUrl:
                "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
              altText: "Villa bedroom",
              sortOrder: 1,
            },
          ],
        },
        fromPrice: { amount: 12040, currency: "THB", numberOfNights: 1 },
        rateGroups: [
          {
            type: "PUBLIC",
            label: "Standard Flexible Rates",
            rates: [
              {
                ratePlanCode: "BB-FLEX",
                rateGroupCode: "PUBLIC-FLEX",
                codeForReservation: {
                  propertyCode: "AN-TH-004",
                  roomCode: "SUITE-VILLA-01",
                  ratePlanCode: "BB-FLEX",
                  rateGroupCode: "PUBLIC-FLEX",
                },
                rateName: "Best Flexible Rate with Breakfast",
                rateDescription: "Includes breakfast. Cancel 3 days prior.",
                badges: ["BREAKFAST_INCLUDED", "FREE_CANCELLATION"],
                pricing: {
                  currency: "THB",
                  total: 12040,
                  pricePerNight: 12040,
                  numberOfNights: 1,
                },
                cancellation: {
                  refundable: true,
                  freeCancellation: true,
                  freeCancellationDeadline: "2026-07-10T14:00:00Z",
                  timezone: "Asia/Bangkok",
                  displayText: "Free cancellation.",
                  penaltyAmount: 12040,
                },
                loyalty: {
                  earnAmount: 1204,
                  redeemableAmount: 12040,
                  currency: "D-POINTS",
                },
                directBookingBenefits: [
                  {
                    code: "EARLY_CHECKIN",
                    label: "Priority Early Check-in",
                    icon: "clock",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  "AV-TH-001": {
    searchId: "property-AV-TH-001",
    propertyCode: "AV.TH-001",
    propertyId: "AV-TH-001",
    propertyBackCode: "AV-TH-DD-001",
    title: "Avani+ Riverside Bangkok Hotel",
    cityName: "Bangkok",
    locationName: "Thonburi",
    countryCode: "TH",
    tags: [
      { label: "City", value: "CITY" },
      { label: "Skyline Pool", value: "SKYLINE_POOL" },
      { label: "Dining", value: "DINING" },
    ],
    tripadvisorReviewScore: 4.6,
    tripadvisorReviewCount: 1250,
    hotelStars: 5,
    brandIcon: { domain: "cdn.example.com", path: "/brands/avani.svg" },
    thumbnailUrl:
      "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
    overview: {
      shortDescription:
        "A chic, stylish riverside hotel rising above the Chao Phraya River, featuring stunning rooftop views.",
      fullDescription:
        "Soaring high above the River of Kings, Avani+ Riverside Bangkok Hotel combines contemporary style with incredible vistas.",
    },
    media: {
      gallery: [
        {
          id: "property-image-1",
          url: "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
          thumbnailUrl:
            "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
          altText: "Rooftop infinity pool skyline view",
          sortOrder: 1,
        },
      ],
      view360Url: "https://cdn.example.com/properties/AV-TH-001/360view.html",
    },
    accommodationSummary: [
      { type: "ROOM", label: "Rooms", count: 248 },
      { type: "SUITE", label: "Suites", count: 26 },
    ],
    guestLovedFeatures: [
      { code: "RIVERFRONT", label: "Riverfront", icon: "river" },
      { code: "ROOFTOP_POOL", label: "Rooftop infinity pool", icon: "pool" },
    ],
    amenities: {
      featured: [
        {
          code: "BUSINESS_SERVICES",
          label: "Meeting facilities",
          icon: "business-services",
        },
        { code: "ROOFTOP_BAR", label: "Rooftop dining", icon: "drink" },
        { code: "INTERNET_ACCESS", label: "Free Wi-Fi", icon: "wifi" },
      ],
      other: [],
    },
    location: {
      address: {
        addressLine1: "257 Charoennakorn Road, Thonburi",
        city: "Bangkok",
        province: "Bangkok",
        postalCode: "10600",
        countryCode: "TH",
      },
      coordinates: { latitude: 13.7022, longitude: 100.4939 },
      travelInformation: [
        "15-minute boat ride from Saphan Taksin BTS Skytrain Station.",
      ],
      directionUrl: "https://maps.google.com/?q=Avani+Riverside+Bangkok",
    },
    rooms: [
      {
        roomCode: "ROOM-AVANI-01",
        roomName: "Avani River View Room",
        description:
          "A sleek, modern room with floor-to-ceiling windows boasting panoramic views of Chao Phraya River.",
        bedConfiguration: [{ bedType: "KING", label: "King Bed", quantity: 1 }],
        maximumOccupancy: { totalGuests: 2, adults: 2, children: 0 },
        size: { value: 30, unit: "sqm" },
        remainingRooms: 15,
        roomCategoryCode: "ROOM",
        summaryFeatures: [
          { code: "RIVER_VIEW", label: "River View", icon: "river" },
        ],
        highlights: [
          { code: "WORK_STATION", label: "Dedicated Workspace", icon: "desk" },
        ],
        amenities: [
          { code: "WIFI", label: "Free High-Speed Wi-Fi", icon: "wifi" },
        ],
        bathroomAmenities: [
          {
            code: "AVANI_TOILETRIES",
            label: "Avani Bath Products",
            icon: "bath",
          },
        ],
        media: {
          gallery: [
            {
              id: "room-image-1",
              url: "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
              thumbnailUrl:
                "https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D",
              altText: "River view bedroom",
              sortOrder: 1,
            },
          ],
        },
        fromPrice: { amount: 4500, currency: "THB", numberOfNights: 1 },
        rateGroups: [
          {
            type: "PUBLIC",
            label: "Standard Flexible Rates",
            rates: [
              {
                ratePlanCode: "RO-FLEX",
                rateGroupCode: "PUBLIC-FLEX",
                codeForReservation: {
                  propertyCode: "AV-TH-001",
                  roomCode: "ROOM-AVANI-01",
                  ratePlanCode: "RO-FLEX",
                  rateGroupCode: "PUBLIC-FLEX",
                },
                rateName: "Best Flexible Rate (Room Only)",
                rateDescription:
                  "Standard room rate. Cancel up to 1 day prior.",
                badges: ["FREE_CANCELLATION"],
                pricing: {
                  currency: "THB",
                  total: 4500,
                  pricePerNight: 4500,
                  numberOfNights: 1,
                },
                cancellation: {
                  refundable: true,
                  freeCancellation: true,
                  freeCancellationDeadline: "2026-07-12T14:00:00Z",
                  timezone: "Asia/Bangkok",
                  displayText: "Free cancellation.",
                  penaltyAmount: 4500,
                },
                loyalty: {
                  earnAmount: 450,
                  redeemableAmount: 4500,
                  currency: "D-POINTS",
                },
                directBookingBenefits: [
                  {
                    code: "EARLY_CHECKIN",
                    label: "Priority Early Check-in",
                    icon: "clock",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

// -------------------------------------------------------------
// PROGRAMMATIC GENERATOR FOR EXACTLY 50 PROPERTIES
// -------------------------------------------------------------

const BRANDS = [
  {
    name: "Anantara",
    code: "AN",
    path: "/brands/anantara.svg",
    domain: "cdn.example.com",
  },
  {
    name: "Avani",
    code: "AV",
    path: "/brands/avani.svg",
    domain: "cdn.example.com",
  },
  {
    name: "Tivoli",
    code: "TV",
    path: "/brands/tivoli.svg",
    domain: "cdn.example.com",
  },
  {
    name: "Oaks",
    code: "OK",
    path: "/brands/oaks.svg",
    domain: "cdn.example.com",
  },
  {
    name: "NH Hotels",
    code: "NH",
    path: "/brands/nh.svg",
    domain: "cdn.example.com",
  },
];

const LOCATIONS = [
  {
    city: "Phuket",
    countryCode: "TH",
    country: "Thailand",
    province: "Phuket",
    postalCode: "83000",
  },
  {
    city: "Bangkok",
    countryCode: "TH",
    country: "Thailand",
    province: "Bangkok",
    postalCode: "10110",
  },
  {
    city: "Koh Samui",
    countryCode: "TH",
    country: "Thailand",
    province: "Surat Thani",
    postalCode: "84320",
  },
  {
    city: "Chiang Mai",
    countryCode: "TH",
    country: "Thailand",
    province: "Chiang Mai",
    postalCode: "50000",
  },
  {
    city: "Bali",
    countryCode: "ID",
    country: "Indonesia",
    province: "Bali",
    postalCode: "80361",
  },
  {
    city: "Maldives",
    countryCode: "MV",
    country: "Maldives",
    province: "Male Atoll",
    postalCode: "20000",
  },
  {
    city: "Dubai",
    countryCode: "AE",
    country: "United Arab Emirates",
    province: "Dubai",
    postalCode: "00000",
  },
  {
    city: "Lisbon",
    countryCode: "PT",
    country: "Portugal",
    province: "Lisboa",
    postalCode: "1100",
  },
  {
    city: "Rome",
    countryCode: "IT",
    country: "Italy",
    province: "Roma",
    postalCode: "00184",
  },
  {
    city: "London",
    countryCode: "GB",
    country: "United Kingdom",
    province: "London",
    postalCode: "SW1A",
  },
];

const ADJECTIVES = [
  "Grand",
  "Luxury",
  "Riverside",
  "Resort & Spa",
  "Palace",
  "Boutique Hotel",
  "Suites",
  "Villas",
  "Haven",
  "Sanctuary",
];

const TAG_COMBOS = [
  [
    { label: "Wellness", value: "WELLNESS" },
    { label: "Family", value: "FAMILY" },
    { label: "Pet Friendly", value: "PET_FRIENDLY" },
  ],
  [
    { label: "City", value: "CITY" },
    { label: "Skyline Pool", value: "SKYLINE_POOL" },
    { label: "Dining", value: "DINING" },
  ],
  [
    { label: "Beachfront", value: "BEACHFRONT" },
    { label: "Luxury", value: "LUXURY" },
    { label: "Honeymoon", value: "HONEYMOON" },
  ],
  [
    { label: "Nature", value: "NATURE" },
    { label: "Adventure", value: "ADVENTURE" },
    { label: "Eco Friendly", value: "ECO_FRIENDLY" },
  ],
  [
    { label: "Business", value: "BUSINESS" },
    { label: "Conference", value: "CONFERENCE" },
    { label: "Spa", value: "SPA" },
  ],
];

let generatedIndex = 1;

while (Object.keys(propertyCatalog).length < 50) {
  const brand = BRANDS[generatedIndex % BRANDS.length];
  const loc = LOCATIONS[generatedIndex % LOCATIONS.length];
  const adj = ADJECTIVES[generatedIndex % ADJECTIVES.length];
  const tags = TAG_COMBOS[generatedIndex % TAG_COMBOS.length];

  // Format id like AN-TH-102
  const codeNum = String(100 + generatedIndex).slice(1);
  const propertyId = `${brand.code}-${loc.countryCode}-${codeNum}`;
  const propertyCode = `${brand.code}.${loc.countryCode}-${codeNum}`;

  if (propertyCatalog[propertyId]) {
    generatedIndex++;
    continue;
  }

  const title = `${brand.name} ${loc.city} ${adj}`;
  const reviewScore = Number((4.0 + (generatedIndex % 11) * 0.1).toFixed(1));
  const reviewCount = 50 + ((generatedIndex * 37) % 1500);
  const stars = 4 + (generatedIndex % 2);
  const basePrice = 3500 + ((generatedIndex * 410) % 18000);

  propertyCatalog[propertyId] = {
    searchId: `property-${propertyId}`,
    propertyCode: propertyCode,
    propertyId: propertyId,
    propertyBackCode: `${brand.code}-${loc.countryCode}-DD-${codeNum}`,
    title: title,
    cityName: loc.city,
    locationName: `${loc.city} Center`,
    countryCode: loc.countryCode,
    tags: tags,
    tripadvisorReviewScore: reviewScore,
    tripadvisorReviewCount: reviewCount,
    hotelStars: stars,
    brandIcon: { domain: brand.domain, path: brand.path },
    thumbnailUrl: `https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D`,
    overview: {
      shortDescription: `A premium hotel of the ${brand.name} collection located in the beautiful surroundings of ${loc.city}.`,
      fullDescription: `Welcome to ${title}. Experience top-tier accommodation by ${brand.name}, featuring modern high-end finishes, scenic city/resort views, and signature culinary spots designed to elevate your stay in ${loc.city}.`,
    },
    media: {
      gallery: [
        {
          id: "img-1",
          url: `https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D`,
          thumbnailUrl: `https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D`,
          altText: "Exterior view",
          sortOrder: 1,
        },
        {
          id: "img-2",
          url: `https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D`,
          thumbnailUrl: `https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D`,
          altText: "Restaurant scene",
          sortOrder: 2,
        },
      ],
      view360Url: `https://cdn.example.com/properties/${propertyId}/360view.html`,
    },
    accommodationSummary: [
      { type: "ROOM", label: "Rooms", count: 120 },
      { type: "SUITE", label: "Suites", count: 30 },
    ],
    guestLovedFeatures: [
      { code: "LOCATION", label: "Prime location", icon: "map-pin" },
      { code: "SERVICE", label: "Exceptional service", icon: "bell" },
    ],
    amenities: {
      featured: [
        { code: "INTERNET_ACCESS", label: "Free Wi-Fi", icon: "wifi" },
        { code: "POOL", label: "Swimming Pool", icon: "pool" },
        { code: "GYM", label: "Fitness Center", icon: "gym" },
      ],
      other: [],
    },
    location: {
      address: {
        addressLine1: `100/1 ${brand.name} Avenue`,
        city: loc.city,
        province: loc.province,
        postalCode: loc.postalCode,
        countryCode: loc.countryCode,
      },
      coordinates: {
        latitude: -90.0 + ((generatedIndex * 17.135) % 180),
        longitude: -180.0 + ((generatedIndex * 31.425) % 360),
      },
      travelInformation: [
        `Conveniently accessible from ${loc.city} central terminals.`,
      ],
      directionUrl: `https://maps.google.com/?q=${encodeURIComponent(title)}`,
    },
    rooms: [
      {
        roomCode: `ROOM-${brand.code}-01`,
        roomName: `${brand.name} Deluxe Room`,
        description: `Stunning layout with full amenities, modern styling, and comfortable settings in ${loc.city}.`,
        bedConfiguration: [{ bedType: "KING", label: "King Bed", quantity: 1 }],
        maximumOccupancy: { totalGuests: 2, adults: 2, children: 0 },
        size: { value: 38, unit: "sqm" },
        remainingRooms: 8,
        roomCategoryCode: "ROOM",
        summaryFeatures: [
          { code: "WIFI", label: "High-Speed Wi-Fi", icon: "wifi" },
        ],
        highlights: [],
        amenities: [],
        bathroomAmenities: [],
        media: {
          gallery: [
            {
              id: "room-1",
              url: `https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D`,
              thumbnailUrl: `https://xmc-deloittedig5e69-ddseamhpocdcef-dev71fb.sitecorecloud.io/-/media/Project/mh/mh-base/nh-boat-lagoon-phuket-resort.jpg?h=800&iar=0&w=1200&ttc=63919794914&tt=78C5935D8E1CF084B51D288C4D83DA49&hash=D7F6CCA536D53B7AB76DB1CAEF91E66D`,
              altText: "Bed area",
              sortOrder: 1,
            },
          ],
        },
        fromPrice: { amount: basePrice, currency: "THB", numberOfNights: 1 },
        rateGroups: [
          {
            type: "PUBLIC",
            label: "Best Flexible Rate",
            rates: [
              {
                ratePlanCode: "RO-FLEX",
                rateGroupCode: "PUBLIC",
                codeForReservation: {
                  propertyCode: propertyId,
                  roomCode: `ROOM-${brand.code}-01`,
                  ratePlanCode: "RO-FLEX",
                  rateGroupCode: "PUBLIC",
                },
                rateName: "Standard Room Only",
                rateDescription: "Flexible cancellation up to 24 hours.",
                badges: ["FREE_CANCELLATION"],
                pricing: {
                  currency: "THB",
                  total: basePrice,
                  pricePerNight: basePrice,
                  numberOfNights: 1,
                },
                cancellation: {
                  refundable: true,
                  freeCancellation: true,
                  freeCancellationDeadline: "2026-07-12T14:00:00Z",
                  timezone: "UTC",
                  displayText: "Free cancellation.",
                  penaltyAmount: basePrice,
                },
                loyalty: {
                  earnAmount: basePrice * 0.1,
                  redeemableAmount: basePrice,
                  currency: "D-POINTS",
                },
                directBookingBenefits: [],
              },
            ],
          },
        ],
      },
    ],
  };

  generatedIndex++;
}

// Ensure autocomplete list also holds all generated items
const allPropertiesAutocomplete = Object.values(propertyCatalog).map((prop) => {
  return {
    id: `prop-${prop.propertyId || prop.propertyCode}`,
    title: prop.title,
    cityName: prop.cityName,
    countryName:
      prop.countryCode === "TH" ? "Thailand" : locFromCode(prop.countryCode),
    regionName: "Global Collection",
    iconDomain: prop.brandIcon.domain,
    iconPath: prop.brandIcon.path,
    tripadvisorReviewScore: prop.tripadvisorReviewScore,
  };
});

function locFromCode(code) {
  const matching = LOCATIONS.find((l) => l.countryCode === code);
  return matching ? matching.country : "International";
}

module.exports = {
  mockData,
  destinations,
  properties: allPropertiesAutocomplete, // Exporting full list of 50 for autocomplete
  propertyCatalog,
};
