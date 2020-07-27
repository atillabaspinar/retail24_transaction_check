const testdata: transaction[] = [
  {
    id: "5c868b22eb7069b50c6d2d32",
    age: 38,
    name: "Sanchez Collier",
    email: "sanchezcollier@equicom.com",
    phone: "(897) 421-3152",
    geoInfo: {
      latitude: -66.117512,
      longitude: -50.147742,
    },
    children: [
      {
        id: "5c868b227167edc396fc3754",
        age: 27,
        name: "Laverne Valdez",
        email: "lavernevaldez@equicom.com",
        phone: "(972) 587-2491",
        connectionInfo: {
          type: "sameGeoInfo",
          confidence: 1,
        },
        geoInfo: {
          latitude: -66.117512,
          longitude: -50.147742,
        },
        children: [
          {
            id: "5c868b2213b36f773efcee81",
            age: 40,
            name: "Love Hoffman",
            email: "lavernevaldez@equicom.com",
            phone: "(856) 488-3734",
            connectionInfo: {
              type: "sameEmail",
              confidence: 1,
            },
            geoInfo: {
              latitude: 5.393689,
              longitude: 91.586263,
            },
            children: [
              {
                id: "5c868b224aafffc5fcffd9c3",
                age: 20,
                name: "Love Hoffman",
                email: "shaunamckee@equicom.com",
                phone: "(888) 562-3854",
                connectionInfo: {
                  type: "sameName",
                  confidence: 0.8,
                },
                geoInfo: {
                  latitude: -86.013184,
                  longitude: -95.186326,
                },
                children: [
                  {
                    id: "5c868b22d84354bef2474acb",
                    age: 23,
                    name: "Wolfe Dotson",
                    email: "shaunamckee@equicom.com",
                    phone: "(989) 525-2851",
                    connectionInfo: {
                      type: "sameEmail",
                      confidence: 1,
                    },
                    geoInfo: {
                      latitude: 42.04286,
                      longitude: 124.724138,
                    },
                  },
                  {
                    id: "5c868b22ad377c7f0df5d5e4",
                    age: 27,
                    name: "Robertson Whitfield",
                    email: "robertsonwhitfield@equicom.com",
                    phone: "(888) 562-3854",
                    connectionInfo: {
                      type: "samePhoneNumber",
                      confidence: 1,
                    },
                    geoInfo: {
                      latitude: -69.686914,
                      longitude: -79.128395,
                    },
                  },
                  {
                    id: "5c868b22674806abad3a8f9c",
                    age: 30,
                    name: "Melanie Colon",
                    email: "melaniecolon@equicom.com",
                    phone: "(897) 501-2652",
                    connectionInfo: {
                      type: "sameDeviceToken",
                      confidence: 0.4,
                    },
                    geoInfo: {
                      latitude: 14.713102,
                      longitude: -34.703767,
                    },
                  },
                ],
              },
            ],
          },
          {
            id: "5c868b227d1acdd8c333dd44",
            age: 34,
            name: "Raquel Peters",
            email: "raquelpeters@equicom.com",
            phone: "(817) 598-2777",
            connectionInfo: {
              type: "sameEmail",
              confidence: 1,
            },
            geoInfo: {
              latitude: 14.938381,
              longitude: -123.729536,
            },
            children: [],
          },
          {
            id: "5c868b228f8d108091fc0053",
            age: 24,
            name: "Manuela Meyer",
            email: "manuelameyer@equicom.com",
            phone: "(902) 588-2074",
            connectionInfo: {
              type: "sameEmail",
              confidence: 1,
            },
            geoInfo: {
              latitude: 48.943732,
              longitude: -94.05825,
            },
            children: [
              {
                id: "5c868b223c158bf1f7a6a9df",
                age: 32,
                name: "Harvey Goodman",
                email: "harveygoodman@equicom.com",
                phone: "(848) 540-3876",
                connectionInfo: {
                  type: "sameEmail",
                  confidence: 1,
                },
                geoInfo: {
                  latitude: 68.134818,
                  longitude: 72.825049,
                },
                children: [
                  {
                    id: "5c868b223b2a9d287fa7f275",
                    age: 27,
                    name: "Whitney Dillard",
                    email: "whitneydillard@equicom.com",
                    phone: "(872) 463-3524",
                    connectionInfo: {
                      type: "sameEmail",
                      confidence: 1,
                    },
                    geoInfo: {
                      latitude: -57.068896,
                      longitude: 79.10501,
                    },
                  },
                  {
                    id: "5c868b22dd5d1d8e48408505",
                    age: 28,
                    name: "Coleman Ruiz",
                    email: "colemanruiz@equicom.com",
                    phone: "(902) 470-3136",
                    connectionInfo: {
                      type: "sameEmail",
                      confidence: 1,
                    },
                    geoInfo: {
                      latitude: -82.831814,
                      longitude: 32.270796,
                    },
                  },
                  {
                    id: "5c868b2227406edde5ddbb20",
                    age: 30,
                    name: "Bonnie Morales",
                    email: "bonniemorales@equicom.com",
                    phone: "(878) 430-3543",
                    connectionInfo: {
                      type: "sameEmail",
                      confidence: 1,
                    },
                    geoInfo: {
                      latitude: -14.526812,
                      longitude: -47.804693,
                    },
                  },
                  {
                    id: "5c868b22fe03e978a52c029f",
                    age: 28,
                    name: "Agnes Cruz",
                    email: "agnescruz@equicom.com",
                    phone: "(821) 459-2188",
                    connectionInfo: {
                      type: "sameEmail",
                      confidence: 1,
                    },
                    geoInfo: {
                      latitude: -41.111504,
                      longitude: -166.991531,
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "5c868b22e47b476dd6140495",
        age: 36,
        name: "Hurst Foley",
        email: "sanchezcollier@equicom.com",
        phone: "(894) 533-3943",
        connectionInfo: {
          type: "sameEmail",
          confidence: 1,
        },
        geoInfo: {
          latitude: -2.939937,
          longitude: 29.618843,
        },
        children: [],
      },
      {
        id: "5c868b2283f8d69da7ad459d",
        age: 20,
        name: "Hess Newman",
        email: "hessnewman@equicom.com",
        phone: "(910) 516-2110",
        connectionInfo: {
          type: "sameDevice",
          confidence: 0.8,
        },
        geoInfo: {
          latitude: 24.589854,
          longitude: 119.666883,
        },
        children: [
          {
            id: "5c868b2283f8d69da7adsd459d",
            age: 20,
            name: "Testing Newman",
            email: "hessnewman@equicom.com",
            phone: "(910) 516-2110",
            connectionInfo: {
              type: "sameDevice",
              confidence: 0.5,
            },
            geoInfo: {
              latitude: 24.589854,
              longitude: 119.666883,
            },
            children: [],
          },
        ],
      },
      {
        id: "5c868b2291d7da41e51f314a",
        age: 34,
        name: "Sanchez Collier",
        email: "wilcoxmcmahon@equicom.com",
        phone: "(828) 496-2100",
        connectionInfo: {
          type: "sameName",
          confidence: 1,
        },
        geoInfo: {
          latitude: 27.118481,
          longitude: 101.345203,
        },
        children: [],
      },
    ],
  },
  {
    id: "5c868b404c76ad62d445b91c",
    age: 21,
    name: "Fernandez Navarro",
    email: "fernandeznavarro@equicom.com",
    phone: "(862) 411-3092",
    geoInfo: {
      latitude: 4.463818,
      longitude: -79.440754,
    },
    children: [],
  },
  {
    id: "5c868b40ef4ed2aaef20ea1a",
    age: 23,
    name: "Nora Richardson",
    email: "norarichardson@equicom.com",
    phone: "(909) 469-2462",
    geoInfo: {
      latitude: -22.341707,
      longitude: 20.418298,
    },
    children: [],
  },
  {
    id: "5c868b9b89b9aadcd89bef44",
    age: 37,
    name: "Hendricks Gregory",
    email: "hendricksgregory@equicom.com",
    phone: "(916) 442-2364",
    geoInfo: {
      latitude: -77.750824,
      longitude: -179.512601,
    },
    children: [
      {
        id: "5c868b9b4afab211a31bf4a7",
        age: 35,
        name: "Naomi Horne",
        email: "naomihorne@equicom.com",
        phone: "(951) 599-2186",
        geoInfo: {
          latitude: -77.750824,
          longitude: -179.512601,
        },
        connectionInfo: {
          type: "sameGeoInfo",
          confidence: 0.4,
        },
        children: [],
      },
      {
        id: "5c868b9be2cabfda9cfc0569",
        age: 38,
        name: "Booker Castillo",
        email: "bookercastillo@equicom.com",
        phone: "(916) 442-2364",
        geoInfo: {
          latitude: -81.845732,
          longitude: 36.720565,
        },
        connectionInfo: {
          type: "samePhoneNumber",
          confidence: 1,
        },
        children: [],
      },
    ],
  },
  {
    id: "5c868b9b2bd0890233e5e06d",
    age: 26,
    name: "Liza Herring",
    email: "lizaherring@equicom.com",
    phone: "(904) 593-2226",
    geoInfo: {
      latitude: 63.270611,
      longitude: 16.796263,
    },
    children: [
      {
        id: "5c868b9b6c4fc9fe97f61d7b",
        age: 23,
        name: "Foreman Chaney",
        email: "foremanchaney@equicom.com",
        phone: "(953) 514-3450",
        geoInfo: {
          latitude: 49.465984,
          longitude: -78.229214,
        },
        children: [],
      },
      {
        id: "5c868b9b1025c3dee1dbc4fc",
        age: 24,
        name: "Laurie Gamble",
        email: "lauriegamble@equicom.com",
        phone: "(946) 433-3998",
        geoInfo: {
          latitude: 82.208122,
          longitude: 13.503506,
        },
        children: [],
      },
    ],
  },
];

module.exports = testdata;
