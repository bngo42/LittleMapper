import {CM_DirectionApiResponse} from "models/citymapper.model";

export const example: CM_DirectionApiResponse = {
  routes: [
    {
      "start": {
        "coordinates": {
          "lat": 48.894043,
          "lon": 2.300485
        }
      },
      "end": {
        "coordinates": {
          "lat": 48.822244,
          "lon": 2.362823
        }
      },
      "distance_meters": 1504,
      "duration_seconds": 2894,
      "duration_accuracy": "scheduled",
      "price": {
        "formatted": "2.85€",
        "currency": "EUR",
        "amount": "2.85"
      },
      "legs": [
        {
          "duration_seconds": 410,
          "path": "}rliHyh`M@DDHDPDR{A`ByAtAILCHAP?b@CL}A`BUVyA~AKPS[IIGIGKIBGBGHGHIWOc@COGUSL",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:29:54+02:00",
            "leg_arrival_time": "2022-09-10T15:36:44+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "enter_station",
          "walk_details_enter_station": {
            "recommended_exit": {
              "id": "ParisStation_Clichy_Levallois_E10454",
              "stop_id": "ParisStation_Clichy_Levallois",
              "coordinates": {
                "lat": 48.8967597,
                "lon": 2.2981978
              }
            },
            "alternate_exits": [
              {
                "id": "ParisStation_Clichy_Levallois_E7003",
                "stop_id": "ParisStation_Clichy_Levallois",
                "coordinates": {
                  "lat": 48.8985559,
                  "lon": 2.2955263
                }
              }
            ],
            "duration_seconds": 60
          }
        },
        {
          "duration_seconds": 330,
          "path": "wdmiH{{_Mly@w`BxcAq`A",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:41:30+02:00",
            "leg_arrival_time": "2022-09-10T15:47:00+02:00",
            "departures": [
              {
                "type": "scheduled",
                "service_id": "TransilienL",
                "headsign": "Paris Saint-Lazare",
                "short_name": "POPI",
                "scheduled_time": "2022-09-10T15:41:30+02:00",
                "time_status": "unknown"
              }
            ],
            "live_departure_availability": "unknown",
            "statuses": [
              {
                "type": "no_issues",
                "service_ids": [
                  "TransilienL"
                ]
              }
            ]
          },
          "vehicle_types": [
            "rail"
          ],
          "services": [
            {
              "id": "TransilienL",
              "name": "L",
              "vehicle_types": [
                "rail"
              ],
              "brand": {
                "id": "Transilien",
                "name": "Transilien",
                "images": [
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/0f5deba7cad589483333aeb82eca4ddd013877c6e7f5e0ac11395336/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/b3306f2538a7c7c0ecb6d405c70f445ee84274d4d5af90bdcc391af6/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/25ce35b4936f3db72aab4bc0b85e9b2f9e941c88bd9ea6f191b9e3e1/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/027b9a09a3dc4e8fdb8f0ac13a4ab9b4be358795f46afcc6dca29689/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/12bba749901758e1f9d8566e974bbde4aaef1f737a293710164e9a6c/d324a6fb/@2x.png",
                    "width": 13,
                    "height": 16,
                    "ui_role": "vehicle_compact"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/5562ddee195aac1d10c76950ce44ef5b80ca93141c96b23e9c6745ea/d324a6fb/@2x.png",
                    "width": 13,
                    "height": 16,
                    "ui_role": "vehicle_compact",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/85df60670444ab74ef47e431eb5d838e600dea7122f128fa4edc19e9/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/973833a27d4c0799db032ea169c7e05c526b30f4858bd41259b39ce4/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle",
                    "is_generic": true
                  }
                ]
              },
              "images": [
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/6e4b3b873c99d68c8ccba87c56a7ecd09c53ced67b27cf504a0ee45d/d324a6fb/@2x.png",
                  "width": 24,
                  "height": 24,
                  "ui_role": "service",
                  "replaces_name": true
                },
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/a11aecbe760e98057d1da9ee2b669d45564a21bbd394fce56678f19d/d324a6fb/@2x.png",
                  "width": 16,
                  "height": 16,
                  "ui_role": "service",
                  "replaces_name": true
                }
              ],
              "color": "#7584BC",
              "background_color": "#7584BC",
              "text_color": "#FFFFFF"
            }
          ],
          "travel_mode": "transit",
          "stops": [
            {
              "id": "ParisStation_Clichy_Levallois",
              "name": "Clichy - Levallois",
              "coordinates": {
                "lat": 48.896921,
                "lon": 2.29838
              }
            },
            {
              "id": "ParisStation_Pont_Cardinet",
              "name": "Pont-Cardinet",
              "coordinates": {
                "lat": 48.88757,
                "lon": 2.314019
              }
            },
            {
              "id": "ParisStation_Paris_Saint_Lazare",
              "name": "Gare Saint-Lazare",
              "coordinates": {
                "lat": 48.876928,
                "lon": 2.325024
              }
            }
          ],
          "best_boarding_sections": {
            "front": true,
            "middle": false,
            "back": false
          }
        },
        {
          "duration_seconds": 300,
          "path": "oeiiHe_eMiAeBjHkAa@vF",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:47:00+02:00",
            "leg_arrival_time": "2022-09-10T15:52:00+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "change_platform"
        },
        {
          "duration_seconds": 960,
          "path": "o_iiH_}dMUf@FH|FdExG?xLaKnBmANUx@gA~S}m@rB}DdAmBjCqCdQcp@dNiVNY~AkAvNmWfRkt@rPi]he@gr@??lAqCvBgCxRu[z@uAdBaCdEmEzEsStBqJ~AyCxDs@hJbHVXnE~EvFhZxF|SHn@D\\`@bAjK~[fCx_@R^",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:54:00+02:00",
            "leg_arrival_time": "2022-09-10T16:10:00+02:00",
            "departures": [
              {
                "type": "frequency",
                "service_id": "RATPMetro14",
                "frequency_seconds_range": [
                  211,
                  211
                ],
                "time_status": "unknown"
              }
            ],
            "live_departure_availability": "unknown",
            "statuses": [
              {
                "type": "no_issues",
                "service_ids": [
                  "RATPMetro14"
                ]
              }
            ]
          },
          "vehicle_types": [
            "metro"
          ],
          "services": [
            {
              "id": "RATPMetro14",
              "name": "M14",
              "vehicle_types": [
                "metro"
              ],
              "brand": {
                "id": "RATPMetro",
                "name": "Métro",
                "images": [
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/c1ea53c1c25b1f445dc45762fb5ff921c4b10871d163d9f7734c37bb/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2468e8016890c4f3eabb93d1eaed56900057f3f6260100737928632f/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png",
                    "width": 15,
                    "height": 16,
                    "ui_role": "vehicle_compact",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle",
                    "is_generic": true
                  }
                ]
              },
              "images": [
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/f0e6271c41558643e0adb5f6117c6d052059e10ff458702d8e83336b/d324a6fb/@2x.png",
                  "width": 24,
                  "height": 24,
                  "ui_role": "service",
                  "replaces_name": true
                },
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/c04e264ba6db3284b180fe3412473cb0694e26f639eaafbafba0e5f8/d324a6fb/@2x.png",
                  "width": 16,
                  "height": 16,
                  "ui_role": "service",
                  "replaces_name": true
                }
              ],
              "color": "#67328E",
              "background_color": "#67328E",
              "text_color": "#FFFFFF"
            }
          ],
          "travel_mode": "transit",
          "stops": [
            {
              "id": "ParisStation_Saint_Lazare",
              "name": "Saint-Lazare",
              "coordinates": {
                "lat": 48.875428,
                "lon": 2.325399
              }
            },
            {
              "id": "ParisStation_Madeleine",
              "name": "Madeleine",
              "coordinates": {
                "lat": 48.87024,
                "lon": 2.32553
              }
            },
            {
              "id": "ParisStation_Pyramides",
              "name": "Pyramides",
              "coordinates": {
                "lat": 48.866172,
                "lon": 2.334288
              }
            },
            {
              "id": "ParisStation_Chatelet",
              "name": "Châtelet",
              "coordinates": {
                "lat": 48.858772,
                "lon": 2.347511
              }
            },
            {
              "id": "ParisStation_Gare_de_Lyon",
              "name": "Gare de Lyon",
              "coordinates": {
                "lat": 48.84471,
                "lon": 2.374415
              }
            },
            {
              "id": "ParisStation_Bercy",
              "name": "Bercy",
              "coordinates": {
                "lat": 48.840298,
                "lon": 2.379134
              }
            },
            {
              "id": "ParisStation_Cour_Saint_Emilion",
              "name": "Cour Saint-Émilion",
              "coordinates": {
                "lat": 48.833401,
                "lon": 2.385784
              }
            },
            {
              "id": "ParisStation_Bibliotheque_Francois_Mitterrand_RATPMetro",
              "name": "Bibliothèque François Mitterrand",
              "coordinates": {
                "lat": 48.829854,
                "lon": 2.376662
              }
            },
            {
              "id": "ParisStation_Olympiades",
              "name": "Olympiades",
              "coordinates": {
                "lat": 48.826891,
                "lon": 2.366315
              }
            }
          ],
          "direction_description": "Olympiades",
          "best_boarding_sections": {
            "front": true,
            "middle": false,
            "back": false
          }
        },
        {
          "duration_seconds": 672,
          "path": "un_iH{`mMODBd@L~AJxABT@XBR?DDd@@LBn@PHJHr@b@ANzB|A^Rb@Xr@f@N@P@lCz@nA^@BJNFEtAaATQTQjAy@LKFEh@_@",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T16:10:00+02:00",
            "leg_arrival_time": "2022-09-10T16:21:12+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "exit_station",
          "walk_details_exit_station": {
            "recommended_exit": {
              "id": "ParisStation_Olympiades_E2",
              "stop_id": "ParisStation_Olympiades",
              "coordinates": {
                "lat": 48.82683,
                "lon": 2.36574
              },
              "name": "rue Baudricourt",
              "short_name": "2"
            },
            "alternate_exits": [
              {
                "id": "ParisStation_Olympiades_E1",
                "stop_id": "ParisStation_Olympiades",
                "coordinates": {
                  "lat": 48.8269161,
                  "lon": 2.3663106
                },
                "name": "rue Nationale",
                "short_name": "1"
              },
              {
                "id": "ParisStation_Olympiades_E3",
                "stop_id": "ParisStation_Olympiades",
                "coordinates": {
                  "lat": 48.826994,
                  "lon": 2.365746
                },
                "name": "rue de Tolbiac",
                "short_name": "3"
              },
              {
                "id": "ParisStation_Olympiades_E4",
                "stop_id": "ParisStation_Olympiades",
                "coordinates": {
                  "lat": 48.82736,
                  "lon": 2.36817
                },
                "name": "rue du Château des Rentiers",
                "short_name": "4"
              }
            ],
            "duration_seconds": 120
          }
        }
      ],
      "route_departure_time": "2022-09-10T15:29:54+02:00",
      "route_arrival_time": "2022-09-10T16:21:12+02:00",
      "signature": "v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY2MjgxNjU5NiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTAxNTcsXCJkdXJhdGlvblwiOjI4OTQsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQ4LjgyMjI0NCwyLjM2MjgyM1wifSxcImpyX2luZGV4XCI6MCxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjo0NjIsXCJkdXJhdGlvblwiOjQxMCxcImVjXCI6XCI0OC44OTY3NiwyLjI5ODJcIixcImluX3N0YXRpb25cIjpcIjAvNjBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0OC44OTQwNywyLjMwMDQ1XCIsXCJ0b19leGl0XCI6XCJQYXJpc1N0YXRpb25fQ2xpY2h5X0xldmFsbG9pc19FMTA0NTRcIn0se1wiZHVyYXRpb25cIjozMzAsXCJlbmRcIjpcIlBhcmlzU3RhdGlvbl9QYXJpc19TYWludF9MYXphcmVcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIlRyYW5zaWxpZW5MXCJdLFwic3RhcnRcIjpcIlBhcmlzU3RhdGlvbl9DbGljaHlfTGV2YWxsb2lzXCIsXCJzdG9wX2NvdW50XCI6MyxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fUGFyaXNDbGljaHlMZXZhbGxvaXNfTF9kU0VcIixcIlBsYXRmb3JtX1BhcmlzUGFyaXNTYWludExhemFyZV9UcmFuc2lsaWVuXCJdfSx7XCJkaXN0YW5jZVwiOjMxNyxcImR1cmF0aW9uXCI6MzAwLFwiZWNcIjpcIjQ4Ljg3NTYsMi4zMjQxNlwiLFwiaW5fc3RhdGlvblwiOlwiMS8zMDBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0OC44NzY1NiwyLjMyNDUxXCJ9LHtcImR1cmF0aW9uXCI6OTYwLFwiZW5kXCI6XCJQYXJpc1N0YXRpb25fT2x5bXBpYWRlc1wiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiUkFUUE1ldHJvMTRcIl0sXCJzdGFydFwiOlwiUGFyaXNTdGF0aW9uX1NhaW50X0xhemFyZVwiLFwic3RvcF9jb3VudFwiOjksXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1BhcmlzU2FpbnRMYXphcmVfTTE0X2RTXCIsXCJQbGF0Zm9ybV9QYXJpc09seW1waWFkZXNfUkFUUE1ldHJvXCJdfSx7XCJkaXN0YW5jZVwiOjcyNSxcImR1cmF0aW9uXCI6NjcyLFwiZWNcIjpcIjQ4LjgyMjI5LDIuMzYyOTZcIixcImZyb21fZXhpdFwiOlwiUGFyaXNTdGF0aW9uX09seW1waWFkZXNfRTJcIixcImluX3N0YXRpb25cIjpcIjIvMTIwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDguODI2ODMsMi4zNjU3NFwifV0sXCJwcmljZV9wZW5jZVwiOjI4NSxcInJlZ2lvblwiOlwiZnItcGFyaXNcIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiMGUwMWQ2OGEtMTg3YS00YWVhLTgzMzEtMGY2ZmFlODFkNTUxXCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNDguODk0MDQzLDIuMzAwNDg1XCJ9LFwidGltZVwiOlwiMjAyMi0wOS0xMFQxNToyOTo1NCswMjowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6ImZyLXBhcmlzIn0.cR-B1OuQlvQFUdb2P4ZoJHbpuL5wF6mb575ncCJmgNE",
      "requested_time_type": "depart_approximate"
    },
    {
      "start": {
        "coordinates": {
          "lat": 48.894043,
          "lon": 2.300485
        }
      },
      "end": {
        "coordinates": {
          "lat": 48.822244,
          "lon": 2.362823
        }
      },
      "distance_meters": 1576,
      "duration_seconds": 3069,
      "duration_accuracy": "scheduled",
      "price": {
        "formatted": "3.80€",
        "currency": "EUR",
        "amount": "3.80"
      },
      "legs": [
        {
          "duration_seconds": 485,
          "path": "}rliHyh`M@DDHDPDRHI?GAE?GAGAE?C?C?C?C@A@C@AxBoC@C@A@?@?@?B?@@^PJFNFh@tA@@@?B???@A`@i@FKTUBERUx@gABCBCBANEHCJO@ABCT]V]RWf@s@LQNUV_@Xe@JQFG?AXc@b@s@@AJOd@IRl@`@bACB",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:29:54+02:00",
            "leg_arrival_time": "2022-09-10T15:37:59+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "enter_station",
          "walk_details_enter_station": {
            "recommended_exit": {
              "id": "ParisTramStation_PorteDasnieresMargueriteLong_default",
              "stop_id": "ParisTramStation_PorteDasnieresMargueriteLong",
              "coordinates": {
                "lat": 48.889808,
                "lon": 2.303119
              }
            },
            "duration_seconds": 5
          }
        },
        {
          "duration_seconds": 180,
          "path": "ixkiHoy`MLa@iTal@cHkVJk@",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:38:00+02:00",
            "leg_arrival_time": "2022-09-10T15:41:00+02:00",
            "departures": [
              {
                "type": "frequency",
                "service_id": "RATPTramT3b",
                "frequency_seconds_range": [
                  360,
                  360
                ],
                "time_status": "unknown"
              }
            ],
            "live_departure_availability": "unknown",
            "statuses": [
              {
                "type": "no_issues",
                "service_ids": [
                  "RATPTramT3b"
                ]
              }
            ]
          },
          "vehicle_types": [
            "tram"
          ],
          "services": [
            {
              "id": "RATPTramT3b",
              "name": "T3b",
              "vehicle_types": [
                "tram"
              ],
              "brand": {
                "id": "RATPTram",
                "name": "Tram",
                "images": [
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/6a98c67e50bbbedecb98fcca6e25b2753792caaf358109377ce0354a/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/1645dd506e856e06bccbd321cf8054b165bb1901d3014916b13c23d0/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/a45f8a45884a8e8d603ef1d32a613467ca455dee2d85abfd780d9890/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/a8b223f43107e3ef917fecfd02ad6fc996e94a71dbce84f92c308152/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/5902d5c1fcf716397d11375f634ffe2be3e5810fa5ead13b68712517/d324a6fb/@2x.png",
                    "width": 10,
                    "height": 16,
                    "ui_role": "vehicle_compact",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/dc3ec677ec503427a3d0746d58994fcd29434c0c4411f98e95cc155c/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle",
                    "is_generic": true
                  }
                ]
              },
              "images": [
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/be9a376520335dcb1cd301379321db8bc4a63241a1630f3db677f4d6/d324a6fb/@2x.png",
                  "width": 24,
                  "height": 24,
                  "ui_role": "service",
                  "replaces_name": true
                },
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/e5e219aee64baf86a0b96b65ba76b04cd2cbbc755b167c3138966fde/d324a6fb/@2x.png",
                  "width": 16,
                  "height": 16,
                  "ui_role": "service",
                  "replaces_name": true
                }
              ],
              "color": "#008b5a",
              "background_color": "#008b5a",
              "text_color": "#FFFFFF"
            }
          ],
          "travel_mode": "transit",
          "stops": [
            {
              "id": "ParisTramStation_PorteDasnieresMargueriteLong",
              "name": "Porte d'Asnières - Marguerite Long",
              "coordinates": {
                "lat": 48.889808,
                "lon": 2.303119
              }
            },
            {
              "id": "ParisTramStation_PorteDeClichyTribunalDeParis",
              "name": "Porte de Clichy",
              "coordinates": {
                "lat": 48.894718,
                "lon": 2.314225
              }
            }
          ],
          "direction_description": "Porte de Vincennes",
          "best_boarding_sections": {
            "front": false,
            "middle": false,
            "back": true
          }
        },
        {
          "duration_seconds": 307,
          "path": "ouliHs|bMROHZHVBFDPHG",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:41:00+02:00",
            "leg_arrival_time": "2022-09-10T15:46:07+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "walk_between_stations",
          "walk_details_enter_station": {
            "recommended_exit": {
              "id": "ParisStation_Porte_de_Clichy_E1",
              "stop_id": "ParisStation_Porte_de_Clichy",
              "coordinates": {
                "lat": 48.8941771,
                "lon": 2.3135936
              },
              "name": "boulevard Berthier",
              "short_name": "1"
            },
            "alternate_exits": [
              {
                "id": "ParisStation_Porte_de_Clichy_E2",
                "stop_id": "ParisStation_Porte_de_Clichy",
                "coordinates": {
                  "lat": 48.8944087,
                  "lon": 2.3142093
                },
                "name": "boulevard Bessières",
                "short_name": "2"
              },
              {
                "id": "ParisStation_Porte_de_Clichy_E3",
                "stop_id": "ParisStation_Porte_de_Clichy",
                "coordinates": {
                  "lat": 48.8948196,
                  "lon": 2.3139788
                },
                "name": "avenue de la Porte de Clichy",
                "short_name": "3"
              },
              {
                "id": "ParisStation_Porte_de_Clichy_E4",
                "stop_id": "ParisStation_Porte_de_Clichy",
                "coordinates": {
                  "lat": 48.8947,
                  "lon": 2.31348
                },
                "name": "avenue du cimetière des Batignolles",
                "short_name": "4"
              },
              {
                "id": "ParisStation_Porte_de_Clichy_E5",
                "stop_id": "ParisStation_Porte_de_Clichy",
                "coordinates": {
                  "lat": 48.89504,
                  "lon": 2.31101
                },
                "name": "Tribunal de Paris",
                "short_name": "5"
              },
              {
                "id": "ParisStation_Porte_de_Clichy_E6",
                "stop_id": "ParisStation_Porte_de_Clichy",
                "coordinates": {
                  "lat": 48.89428,
                  "lon": 2.31289
                },
                "name": "rue André Suarès",
                "short_name": "6"
              },
              {
                "id": "ParisStation_Porte_de_Clichy_E7",
                "stop_id": "ParisStation_Porte_de_Clichy",
                "coordinates": {
                  "lat": 48.8939801,
                  "lon": 2.3146683
                },
                "name": "Avenue de Clichy"
              }
            ],
            "duration_seconds": 240
          },
          "walk_details_exit_station": {
            "recommended_exit": {
              "id": "ParisTramStation_PorteDeClichyTribunalDeParis_ParisTramPorteDeClichyTribunalDeParis_E1",
              "stop_id": "ParisTramStation_PorteDeClichyTribunalDeParis",
              "coordinates": {
                "lat": 48.89448,
                "lon": 2.31386
              }
            },
            "alternate_exits": [
              {
                "id": "ParisTramStation_PorteDeClichyTribunalDeParis_ParisTramPorteDeClichyTribunalDeParis_E2",
                "stop_id": "ParisTramStation_PorteDeClichyTribunalDeParis",
                "coordinates": {
                  "lat": 48.89474,
                  "lon": 2.31457
                }
              }
            ],
            "duration_seconds": 30
          }
        },
        {
          "duration_seconds": 1200,
          "path": "grliHe`cMJ~@r@SbQoB`FwBfCs@RInCaAxPmP`IgMnEsHjCsGJ}IrAqF`C}AxGY|EpCpLvMjAdBFH|FdExG?xLaKnBmANUx@gA~S}m@rB}DdAmBjCqCdQcp@dNiVNY~AkAvNmWfRkt@rPi]he@gr@??lAqCvBgCxRu[z@uAdBaCdEmEzEsStBqJ~AyCxDs@hJbHVXnE~EvFhZxF|SHn@D\\`@bAjK~[fCx_@R^",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:50:00+02:00",
            "leg_arrival_time": "2022-09-10T16:10:00+02:00",
            "departures": [
              {
                "type": "frequency",
                "service_id": "RATPMetro14",
                "frequency_seconds_range": [
                  210,
                  210
                ],
                "time_status": "unknown"
              }
            ],
            "live_departure_availability": "unknown",
            "statuses": [
              {
                "type": "no_issues",
                "service_ids": [
                  "RATPMetro14"
                ]
              }
            ]
          },
          "vehicle_types": [
            "metro"
          ],
          "services": [
            {
              "id": "RATPMetro14",
              "name": "M14",
              "vehicle_types": [
                "metro"
              ],
              "brand": {
                "id": "RATPMetro",
                "name": "Métro",
                "images": [
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/c1ea53c1c25b1f445dc45762fb5ff921c4b10871d163d9f7734c37bb/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2468e8016890c4f3eabb93d1eaed56900057f3f6260100737928632f/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png",
                    "width": 15,
                    "height": 16,
                    "ui_role": "vehicle_compact",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle",
                    "is_generic": true
                  }
                ]
              },
              "images": [
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/f0e6271c41558643e0adb5f6117c6d052059e10ff458702d8e83336b/d324a6fb/@2x.png",
                  "width": 24,
                  "height": 24,
                  "ui_role": "service",
                  "replaces_name": true
                },
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/c04e264ba6db3284b180fe3412473cb0694e26f639eaafbafba0e5f8/d324a6fb/@2x.png",
                  "width": 16,
                  "height": 16,
                  "ui_role": "service",
                  "replaces_name": true
                }
              ],
              "color": "#67328E",
              "background_color": "#67328E",
              "text_color": "#FFFFFF"
            }
          ],
          "travel_mode": "transit",
          "stops": [
            {
              "id": "ParisStation_Porte_de_Clichy",
              "name": "Porte de Clichy",
              "coordinates": {
                "lat": 48.89396,
                "lon": 2.314433
              }
            },
            {
              "id": "ParisStation_Pont_Cardinet_RATPMetro",
              "name": "Pont Cardinet",
              "coordinates": {
                "lat": 48.88883,
                "lon": 2.31568
              }
            },
            {
              "id": "ParisStation_Saint_Lazare",
              "name": "Saint-Lazare",
              "coordinates": {
                "lat": 48.875428,
                "lon": 2.325399
              }
            },
            {
              "id": "ParisStation_Madeleine",
              "name": "Madeleine",
              "coordinates": {
                "lat": 48.87024,
                "lon": 2.32553
              }
            },
            {
              "id": "ParisStation_Pyramides",
              "name": "Pyramides",
              "coordinates": {
                "lat": 48.866172,
                "lon": 2.334288
              }
            },
            {
              "id": "ParisStation_Chatelet",
              "name": "Châtelet",
              "coordinates": {
                "lat": 48.858772,
                "lon": 2.347511
              }
            },
            {
              "id": "ParisStation_Gare_de_Lyon",
              "name": "Gare de Lyon",
              "coordinates": {
                "lat": 48.84471,
                "lon": 2.374415
              }
            },
            {
              "id": "ParisStation_Bercy",
              "name": "Bercy",
              "coordinates": {
                "lat": 48.840298,
                "lon": 2.379134
              }
            },
            {
              "id": "ParisStation_Cour_Saint_Emilion",
              "name": "Cour Saint-Émilion",
              "coordinates": {
                "lat": 48.833401,
                "lon": 2.385784
              }
            },
            {
              "id": "ParisStation_Bibliotheque_Francois_Mitterrand_RATPMetro",
              "name": "Bibliothèque François Mitterrand",
              "coordinates": {
                "lat": 48.829854,
                "lon": 2.376662
              }
            },
            {
              "id": "ParisStation_Olympiades",
              "name": "Olympiades",
              "coordinates": {
                "lat": 48.826891,
                "lon": 2.366315
              }
            }
          ],
          "direction_description": "Olympiades",
          "best_boarding_sections": {
            "front": true,
            "middle": false,
            "back": false
          }
        },
        {
          "duration_seconds": 672,
          "path": "un_iH{`mMODBd@L~AJxABT@XBR?DDd@@LBn@PHJHr@b@ANzB|A^Rb@Xr@f@N@P@lCz@nA^@BJNFEtAaATQTQjAy@LKFEh@_@",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T16:10:00+02:00",
            "leg_arrival_time": "2022-09-10T16:21:12+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "exit_station",
          "walk_details_exit_station": {
            "recommended_exit": {
              "id": "ParisStation_Olympiades_E2",
              "stop_id": "ParisStation_Olympiades",
              "coordinates": {
                "lat": 48.82683,
                "lon": 2.36574
              },
              "name": "rue Baudricourt",
              "short_name": "2"
            },
            "alternate_exits": [
              {
                "id": "ParisStation_Olympiades_E1",
                "stop_id": "ParisStation_Olympiades",
                "coordinates": {
                  "lat": 48.8269161,
                  "lon": 2.3663106
                },
                "name": "rue Nationale",
                "short_name": "1"
              },
              {
                "id": "ParisStation_Olympiades_E3",
                "stop_id": "ParisStation_Olympiades",
                "coordinates": {
                  "lat": 48.826994,
                  "lon": 2.365746
                },
                "name": "rue de Tolbiac",
                "short_name": "3"
              },
              {
                "id": "ParisStation_Olympiades_E4",
                "stop_id": "ParisStation_Olympiades",
                "coordinates": {
                  "lat": 48.82736,
                  "lon": 2.36817
                },
                "name": "rue du Château des Rentiers",
                "short_name": "4"
              }
            ],
            "duration_seconds": 120
          }
        }
      ],
      "route_departure_time": "2022-09-10T15:29:54+02:00",
      "route_arrival_time": "2022-09-10T16:21:12+02:00",
      "signature": "v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY2MjgxNjU5NiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTAxNTcsXCJkdXJhdGlvblwiOjMwNjksXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQ4LjgyMjI0NCwyLjM2MjgyM1wifSxcImpyX2luZGV4XCI6MSxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjo2NTUsXCJkdXJhdGlvblwiOjQ4NSxcImVjXCI6XCI0OC44ODk4MSwyLjMwMzEyXCIsXCJpbl9zdGF0aW9uXCI6XCIwLzVcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0OC44OTQwNywyLjMwMDQ1XCIsXCJ0b19leGl0XCI6XCJQYXJpc1RyYW1TdGF0aW9uX1BvcnRlRGFzbmllcmVzTWFyZ3Vlcml0ZUxvbmdfZGVmYXVsdFwifSx7XCJkdXJhdGlvblwiOjE4MCxcImVuZFwiOlwiUGFyaXNUcmFtU3RhdGlvbl9Qb3J0ZURlQ2xpY2h5VHJpYnVuYWxEZVBhcmlzXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJSQVRQVHJhbVQzYlwiXSxcInN0YXJ0XCI6XCJQYXJpc1RyYW1TdGF0aW9uX1BvcnRlRGFzbmllcmVzTWFyZ3Vlcml0ZUxvbmdcIixcInN0b3BfY291bnRcIjoyLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9QYXJpc1RyYW1Qb3J0ZURhc25pZXJlc01hcmd1ZXJpdGVMb25nX1QzX1RcIixcIlBsYXRmb3JtX1BhcmlzVHJhbVBvcnRlRGVDbGljaHlUcmlidW5hbERlUGFyaXNfVDNfZE5FXCJdfSx7XCJkaXN0YW5jZVwiOjE5NixcImR1cmF0aW9uXCI6MzA3LFwiZWNcIjpcIjQ4Ljg5NDE4LDIuMzEzNTlcIixcImZyb21fZXhpdFwiOlwiUGFyaXNUcmFtU3RhdGlvbl9Qb3J0ZURlQ2xpY2h5VHJpYnVuYWxEZVBhcmlzX1BhcmlzVHJhbVBvcnRlRGVDbGljaHlUcmlidW5hbERlUGFyaXNfRTFcIixcImluX3N0YXRpb25cIjpcIjMvMzA3XCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDguODk0NDgsMi4zMTM4NlwiLFwidG9fZXhpdFwiOlwiUGFyaXNTdGF0aW9uX1BvcnRlX2RlX0NsaWNoeV9FMVwifSx7XCJkdXJhdGlvblwiOjEyMDAsXCJlbmRcIjpcIlBhcmlzU3RhdGlvbl9PbHltcGlhZGVzXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJSQVRQTWV0cm8xNFwiXSxcInN0YXJ0XCI6XCJQYXJpc1N0YXRpb25fUG9ydGVfZGVfQ2xpY2h5XCIsXCJzdG9wX2NvdW50XCI6MTEsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1BhcmlzUG9ydGVkZUNsaWNoeV9NMTRfZFNcIixcIlBsYXRmb3JtX1BhcmlzT2x5bXBpYWRlc19SQVRQTWV0cm9cIl19LHtcImRpc3RhbmNlXCI6NzI1LFwiZHVyYXRpb25cIjo2NzIsXCJlY1wiOlwiNDguODIyMjksMi4zNjI5NlwiLFwiZnJvbV9leGl0XCI6XCJQYXJpc1N0YXRpb25fT2x5bXBpYWRlc19FMlwiLFwiaW5fc3RhdGlvblwiOlwiMi8xMjBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0OC44MjY4MywyLjM2NTc0XCJ9XSxcInByaWNlX3BlbmNlXCI6MzgwLFwicmVnaW9uXCI6XCJmci1wYXJpc1wiLFwicm91dGluZ19yZXF1ZXN0X2lkXCI6XCIwZTAxZDY4YS0xODdhLTRhZWEtODMzMS0wZjZmYWU4MWQ1NTFcIixcInN0YXJ0XCI6e1wiY29vcmRzXCI6XCI0OC44OTQwNDMsMi4zMDA0ODVcIn0sXCJ0aW1lXCI6XCIyMDIyLTA5LTEwVDE1OjI5OjU0KzAyOjAwL05PV0lTSFwiLFwidmVyc2lvblwiOjJ9IiwicmVnaW9uX2lkIjoiZnItcGFyaXMifQ.AGDg4oNpgxA_4n51nssD7ezBT831PVTVloM5GhgczpI",
      "requested_time_type": "depart_approximate"
    },
    {
      "start": {
        "coordinates": {
          "lat": 48.894043,
          "lon": 2.300485
        }
      },
      "end": {
        "coordinates": {
          "lat": 48.822244,
          "lon": 2.362823
        }
      },
      "distance_meters": 1171,
      "duration_seconds": 3221,
      "duration_accuracy": "scheduled",
      "price": {
        "formatted": "3.80€",
        "currency": "EUR",
        "amount": "3.80"
      },
      "legs": [
        {
          "duration_seconds": 116,
          "path": "}rliHyh`M@DDHDPDRHI`AzBBFDJLP@CFIl@{@??FN",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:29:54+02:00",
            "leg_arrival_time": "2022-09-10T15:31:50+02:00"
          },
          "travel_mode": "walk"
        },
        {
          "duration_seconds": 540,
          "path": "emliHed`MIUvGuIZm@n@y@rHoJ~FkA|Dw@v@VVMJ_@w@cNy@kNKeB?cH\\yFTyAHD",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:41:00+02:00",
            "leg_arrival_time": "2022-09-10T15:50:00+02:00",
            "departures": [
              {
                "type": "frequency",
                "service_id": "RATPBus94",
                "frequency_seconds_range": [
                  840,
                  840
                ],
                "time_status": "unknown"
              }
            ],
            "live_departure_availability": "unknown",
            "statuses": [
              {
                "type": "no_issues",
                "service_ids": [
                  "RATPBus94"
                ]
              }
            ]
          },
          "vehicle_types": [
            "bus"
          ],
          "services": [
            {
              "id": "RATPBus94",
              "name": "94",
              "vehicle_types": [
                "bus"
              ],
              "brand": {
                "id": "RATPBus",
                "name": "Bus",
                "images": [
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/d97d11b98e1d4178335067f3948cb80ec1b98badab6d5aa6af62afbf/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/bb11377addd08ab5d2ba85a4f1ce6e8519db8ea681ab13490523a186/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/67e2c62aac64fc7ee9d19791f3d309874353a20323e7390c101f1c10/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/4fb5a26e2e7558278c069c0ce6f72b672054069ddbac96f2b4d951f4/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/8b4e44e1cdc30e49e8c21edb97e389be3a07b34f1c45cac0b3ef7de7/d324a6fb/@2x.png",
                    "width": 13,
                    "height": 16,
                    "ui_role": "vehicle_compact",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/83a375cedd40ff34d59ffc95791be1a130c712d0799ffb782b26eeef/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle",
                    "is_generic": true
                  }
                ]
              },
              "images": [
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/5a74467e6bf35da53315b353ecffce57fc095064c4c2d3b91c39cd79/d324a6fb/@2x.png",
                  "width": 24,
                  "height": 24,
                  "ui_role": "service",
                  "replaces_name": true
                },
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/ab6f51bf780d7501821c32da2a6bbeefbe406f6f39400c8dd9c1e818/d324a6fb/@2x.png",
                  "width": 16,
                  "height": 16,
                  "ui_role": "service",
                  "replaces_name": true
                }
              ],
              "color": "#A0006E",
              "background_color": "#A0006E",
              "text_color": "#FFFFFF"
            }
          ],
          "travel_mode": "transit",
          "stops": [
            {
              "id": "ParisStop_AlsaceNW_1",
              "name": "Alsace",
              "coordinates": {
                "lat": 48.893148,
                "lon": 2.299712
              }
            },
            {
              "id": "ParisStop_PorteDasnieresMargueriteLong_S_3",
              "name": "Porte d'Asnières - Marguerite Long",
              "coordinates": {
                "lat": 48.891353,
                "lon": 2.301932
              }
            },
            {
              "id": "ParisStop_JulietteLamber_SE",
              "name": "Juliette Lamber",
              "coordinates": {
                "lat": 48.888588,
                "lon": 2.304192
              }
            },
            {
              "id": "ParisStop_Pereire_TocquevilleNW",
              "name": "Pereire - Tocqueville",
              "coordinates": {
                "lat": 48.887408,
                "lon": 2.307099
              }
            },
            {
              "id": "ParisStop_PereireSaussure_E_3",
              "name": "Pereire Saussure",
              "coordinates": {
                "lat": 48.88771,
                "lon": 2.30955
              }
            },
            {
              "id": "ParisStop_PontCardinet_SE_2",
              "name": "Pont Cardinet",
              "coordinates": {
                "lat": 48.887506,
                "lon": 2.31318
              }
            }
          ],
          "direction_description": "Gare Montparnasse"
        },
        {
          "duration_seconds": 429,
          "path": "}ikiHkxbMKEFg@@ILu@F]BQF]Q]KQGK??EKEGs@mA?AIMQSa@_@g@c@a@_@OIUUIIIV",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:50:00+02:00",
            "leg_arrival_time": "2022-09-10T15:57:09+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "enter_station",
          "walk_details_enter_station": {
            "recommended_exit": {
              "id": "ParisStation_Pont_Cardinet_RATPMetro_E1",
              "stop_id": "ParisStation_Pont_Cardinet_RATPMetro",
              "coordinates": {
                "lat": 48.88883,
                "lon": 2.31568
              },
              "name": "Rue Cardinet",
              "short_name": "1"
            },
            "alternate_exits": [
              {
                "id": "ParisStation_Pont_Cardinet_RATPMetro_E2",
                "stop_id": "ParisStation_Pont_Cardinet_RATPMetro",
                "coordinates": {
                  "lat": 48.88963,
                  "lon": 2.31378
                },
                "name": "Rue Mstislav Rostropovitch",
                "short_name": "2"
              }
            ],
            "duration_seconds": 180
          }
        },
        {
          "duration_seconds": 1080,
          "path": "erkiH_hcM??nCaAxPmP`IgMnEsHjCsGJ}IrAqF`C}AxGY|EpCpLvMjAdBFH|FdExG?xLaKnBmANUx@gA~S}m@rB}DdAmBjCqCdQcp@dNiVNY~AkAvNmWfRkt@rPi]he@gr@??lAqCvBgCxRu[z@uAdBaCdEmEzEsStBqJ~AyCxDs@hJbHVXnE~EvFhZxF|SHn@D\\`@bAjK~[fCx_@R^",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:59:00+02:00",
            "leg_arrival_time": "2022-09-10T16:17:00+02:00",
            "departures": [
              {
                "type": "frequency",
                "service_id": "RATPMetro14",
                "frequency_seconds_range": [
                  209,
                  209
                ],
                "time_status": "unknown"
              }
            ],
            "live_departure_availability": "unknown",
            "statuses": [
              {
                "type": "no_issues",
                "service_ids": [
                  "RATPMetro14"
                ]
              }
            ]
          },
          "vehicle_types": [
            "metro"
          ],
          "services": [
            {
              "id": "RATPMetro14",
              "name": "M14",
              "vehicle_types": [
                "metro"
              ],
              "brand": {
                "id": "RATPMetro",
                "name": "Métro",
                "images": [
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/c1ea53c1c25b1f445dc45762fb5ff921c4b10871d163d9f7734c37bb/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2468e8016890c4f3eabb93d1eaed56900057f3f6260100737928632f/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png",
                    "width": 15,
                    "height": 16,
                    "ui_role": "vehicle_compact",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle",
                    "is_generic": true
                  }
                ]
              },
              "images": [
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/f0e6271c41558643e0adb5f6117c6d052059e10ff458702d8e83336b/d324a6fb/@2x.png",
                  "width": 24,
                  "height": 24,
                  "ui_role": "service",
                  "replaces_name": true
                },
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/c04e264ba6db3284b180fe3412473cb0694e26f639eaafbafba0e5f8/d324a6fb/@2x.png",
                  "width": 16,
                  "height": 16,
                  "ui_role": "service",
                  "replaces_name": true
                }
              ],
              "color": "#67328E",
              "background_color": "#67328E",
              "text_color": "#FFFFFF"
            }
          ],
          "travel_mode": "transit",
          "stops": [
            {
              "id": "ParisStation_Pont_Cardinet_RATPMetro",
              "name": "Pont Cardinet",
              "coordinates": {
                "lat": 48.88883,
                "lon": 2.31568
              }
            },
            {
              "id": "ParisStation_Saint_Lazare",
              "name": "Saint-Lazare",
              "coordinates": {
                "lat": 48.875428,
                "lon": 2.325399
              }
            },
            {
              "id": "ParisStation_Madeleine",
              "name": "Madeleine",
              "coordinates": {
                "lat": 48.87024,
                "lon": 2.32553
              }
            },
            {
              "id": "ParisStation_Pyramides",
              "name": "Pyramides",
              "coordinates": {
                "lat": 48.866172,
                "lon": 2.334288
              }
            },
            {
              "id": "ParisStation_Chatelet",
              "name": "Châtelet",
              "coordinates": {
                "lat": 48.858772,
                "lon": 2.347511
              }
            },
            {
              "id": "ParisStation_Gare_de_Lyon",
              "name": "Gare de Lyon",
              "coordinates": {
                "lat": 48.84471,
                "lon": 2.374415
              }
            },
            {
              "id": "ParisStation_Bercy",
              "name": "Bercy",
              "coordinates": {
                "lat": 48.840298,
                "lon": 2.379134
              }
            },
            {
              "id": "ParisStation_Cour_Saint_Emilion",
              "name": "Cour Saint-Émilion",
              "coordinates": {
                "lat": 48.833401,
                "lon": 2.385784
              }
            },
            {
              "id": "ParisStation_Bibliotheque_Francois_Mitterrand_RATPMetro",
              "name": "Bibliothèque François Mitterrand",
              "coordinates": {
                "lat": 48.829854,
                "lon": 2.376662
              }
            },
            {
              "id": "ParisStation_Olympiades",
              "name": "Olympiades",
              "coordinates": {
                "lat": 48.826891,
                "lon": 2.366315
              }
            }
          ],
          "direction_description": "Olympiades",
          "best_boarding_sections": {
            "front": true,
            "middle": false,
            "back": false
          }
        },
        {
          "duration_seconds": 672,
          "path": "un_iH{`mMODBd@L~AJxABT@XBR?DDd@@LBn@PHJHr@b@ANzB|A^Rb@Xr@f@N@P@lCz@nA^@BJNFEtAaATQTQjAy@LKFEh@_@",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T16:17:00+02:00",
            "leg_arrival_time": "2022-09-10T16:28:12+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "exit_station",
          "walk_details_exit_station": {
            "recommended_exit": {
              "id": "ParisStation_Olympiades_E2",
              "stop_id": "ParisStation_Olympiades",
              "coordinates": {
                "lat": 48.82683,
                "lon": 2.36574
              },
              "name": "rue Baudricourt",
              "short_name": "2"
            },
            "alternate_exits": [
              {
                "id": "ParisStation_Olympiades_E1",
                "stop_id": "ParisStation_Olympiades",
                "coordinates": {
                  "lat": 48.8269161,
                  "lon": 2.3663106
                },
                "name": "rue Nationale",
                "short_name": "1"
              },
              {
                "id": "ParisStation_Olympiades_E3",
                "stop_id": "ParisStation_Olympiades",
                "coordinates": {
                  "lat": 48.826994,
                  "lon": 2.365746
                },
                "name": "rue de Tolbiac",
                "short_name": "3"
              },
              {
                "id": "ParisStation_Olympiades_E4",
                "stop_id": "ParisStation_Olympiades",
                "coordinates": {
                  "lat": 48.82736,
                  "lon": 2.36817
                },
                "name": "rue du Château des Rentiers",
                "short_name": "4"
              }
            ],
            "duration_seconds": 120
          }
        }
      ],
      "route_departure_time": "2022-09-10T15:29:54+02:00",
      "route_arrival_time": "2022-09-10T16:28:12+02:00",
      "signature": "v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY2MjgxNjU5NiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTAxNTcsXCJkdXJhdGlvblwiOjMyMjEsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQ4LjgyMjI0NCwyLjM2MjgyM1wifSxcImpyX2luZGV4XCI6MixcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjoxNTUsXCJkdXJhdGlvblwiOjExNixcImVjXCI6XCI0OC44OTMxNSwyLjI5OTcxXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDguODk0MDcsMi4zMDA0NVwifSx7XCJkdXJhdGlvblwiOjU0MCxcImVuZFwiOlwiUGFyaXNTdG9wX1BvbnRDYXJkaW5ldF9TRV8yXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJSQVRQQnVzOTRcIl0sXCJzdGFydFwiOlwiUGFyaXNTdG9wX0Fsc2FjZU5XXzFcIixcInN0b3BfY291bnRcIjo2fSx7XCJkaXN0YW5jZVwiOjI5MSxcImR1cmF0aW9uXCI6NDI5LFwiZWNcIjpcIjQ4Ljg4ODgzLDIuMzE1NjhcIixcImluX3N0YXRpb25cIjpcIjAvMTgwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDguODg3NTEsMi4zMTMxOFwiLFwidG9fZXhpdFwiOlwiUGFyaXNTdGF0aW9uX1BvbnRfQ2FyZGluZXRfUkFUUE1ldHJvX0UxXCJ9LHtcImR1cmF0aW9uXCI6MTA4MCxcImVuZFwiOlwiUGFyaXNTdGF0aW9uX09seW1waWFkZXNcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIlJBVFBNZXRybzE0XCJdLFwic3RhcnRcIjpcIlBhcmlzU3RhdGlvbl9Qb250X0NhcmRpbmV0X1JBVFBNZXRyb1wiLFwic3RvcF9jb3VudFwiOjEwLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9QYXJpc1BvbnRfQ2FyZGluZXRfUkFUUE1ldHJvX00xNF9kU1wiLFwiUGxhdGZvcm1fUGFyaXNPbHltcGlhZGVzX1JBVFBNZXRyb1wiXX0se1wiZGlzdGFuY2VcIjo3MjUsXCJkdXJhdGlvblwiOjY3MixcImVjXCI6XCI0OC44MjIyOSwyLjM2Mjk2XCIsXCJmcm9tX2V4aXRcIjpcIlBhcmlzU3RhdGlvbl9PbHltcGlhZGVzX0UyXCIsXCJpbl9zdGF0aW9uXCI6XCIyLzEyMFwiLFwibW9kZVwiOlwid2Fsa1wiLFwic2NcIjpcIjQ4LjgyNjgzLDIuMzY1NzRcIn1dLFwicHJpY2VfcGVuY2VcIjozODAsXCJyZWdpb25cIjpcImZyLXBhcmlzXCIsXCJyb3V0aW5nX3JlcXVlc3RfaWRcIjpcIjBlMDFkNjhhLTE4N2EtNGFlYS04MzMxLTBmNmZhZTgxZDU1MVwiLFwic3RhcnRcIjp7XCJjb29yZHNcIjpcIjQ4Ljg5NDA0MywyLjMwMDQ4NVwifSxcInRpbWVcIjpcIjIwMjItMDktMTBUMTU6Mjk6NTQrMDI6MDAvTk9XSVNIXCIsXCJ2ZXJzaW9uXCI6Mn0iLCJyZWdpb25faWQiOiJmci1wYXJpcyJ9.c5m1KhHzlgsvlazhD-cnop1AWv-WMRn1ryr0JBlmvhc",
      "requested_time_type": "depart_approximate"
    },
    {
      "start": {
        "coordinates": {
          "lat": 48.894043,
          "lon": 2.300485
        }
      },
      "end": {
        "coordinates": {
          "lat": 48.822244,
          "lon": 2.362823
        }
      },
      "distance_meters": 1283,
      "duration_seconds": 3186,
      "duration_accuracy": "scheduled",
      "price": {
        "formatted": "2.85€",
        "currency": "EUR",
        "amount": "2.85"
      },
      "legs": [
        {
          "duration_seconds": 410,
          "path": "}rliHyh`M@DDHDPDR{A`ByAtAILCHAP?b@CL}A`BUVyA~AKPS[IIGIGKIBGBGHGHIWOc@COGUSL",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:29:54+02:00",
            "leg_arrival_time": "2022-09-10T15:36:44+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "enter_station",
          "walk_details_enter_station": {
            "recommended_exit": {
              "id": "ParisStation_Clichy_Levallois_E10454",
              "stop_id": "ParisStation_Clichy_Levallois",
              "coordinates": {
                "lat": 48.8967597,
                "lon": 2.2981978
              }
            },
            "alternate_exits": [
              {
                "id": "ParisStation_Clichy_Levallois_E7003",
                "stop_id": "ParisStation_Clichy_Levallois",
                "coordinates": {
                  "lat": 48.8985559,
                  "lon": 2.2955263
                }
              }
            ],
            "duration_seconds": 60
          }
        },
        {
          "duration_seconds": 330,
          "path": "wdmiH{{_Mly@w`BxcAq`A",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:41:30+02:00",
            "leg_arrival_time": "2022-09-10T15:47:00+02:00",
            "departures": [
              {
                "type": "scheduled",
                "service_id": "TransilienL",
                "headsign": "Paris Saint-Lazare",
                "short_name": "POPI",
                "scheduled_time": "2022-09-10T15:41:30+02:00",
                "time_status": "unknown"
              }
            ],
            "live_departure_availability": "unknown",
            "statuses": [
              {
                "type": "no_issues",
                "service_ids": [
                  "TransilienL"
                ]
              }
            ]
          },
          "vehicle_types": [
            "rail"
          ],
          "services": [
            {
              "id": "TransilienL",
              "name": "L",
              "vehicle_types": [
                "rail"
              ],
              "brand": {
                "id": "Transilien",
                "name": "Transilien",
                "images": [
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/0f5deba7cad589483333aeb82eca4ddd013877c6e7f5e0ac11395336/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/b3306f2538a7c7c0ecb6d405c70f445ee84274d4d5af90bdcc391af6/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/25ce35b4936f3db72aab4bc0b85e9b2f9e941c88bd9ea6f191b9e3e1/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/027b9a09a3dc4e8fdb8f0ac13a4ab9b4be358795f46afcc6dca29689/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/12bba749901758e1f9d8566e974bbde4aaef1f737a293710164e9a6c/d324a6fb/@2x.png",
                    "width": 13,
                    "height": 16,
                    "ui_role": "vehicle_compact"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/5562ddee195aac1d10c76950ce44ef5b80ca93141c96b23e9c6745ea/d324a6fb/@2x.png",
                    "width": 13,
                    "height": 16,
                    "ui_role": "vehicle_compact",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/85df60670444ab74ef47e431eb5d838e600dea7122f128fa4edc19e9/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/973833a27d4c0799db032ea169c7e05c526b30f4858bd41259b39ce4/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle",
                    "is_generic": true
                  }
                ]
              },
              "images": [
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/6e4b3b873c99d68c8ccba87c56a7ecd09c53ced67b27cf504a0ee45d/d324a6fb/@2x.png",
                  "width": 24,
                  "height": 24,
                  "ui_role": "service",
                  "replaces_name": true
                },
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/a11aecbe760e98057d1da9ee2b669d45564a21bbd394fce56678f19d/d324a6fb/@2x.png",
                  "width": 16,
                  "height": 16,
                  "ui_role": "service",
                  "replaces_name": true
                }
              ],
              "color": "#7584BC",
              "background_color": "#7584BC",
              "text_color": "#FFFFFF"
            }
          ],
          "travel_mode": "transit",
          "stops": [
            {
              "id": "ParisStation_Clichy_Levallois",
              "name": "Clichy - Levallois",
              "coordinates": {
                "lat": 48.896921,
                "lon": 2.29838
              }
            },
            {
              "id": "ParisStation_Pont_Cardinet",
              "name": "Pont-Cardinet",
              "coordinates": {
                "lat": 48.88757,
                "lon": 2.314019
              }
            },
            {
              "id": "ParisStation_Paris_Saint_Lazare",
              "name": "Gare Saint-Lazare",
              "coordinates": {
                "lat": 48.876928,
                "lon": 2.325024
              }
            }
          ],
          "best_boarding_sections": {
            "front": true,
            "middle": false,
            "back": false
          }
        },
        {
          "duration_seconds": 300,
          "path": "oeiiHe_eMiAeBjHkAGxF",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:47:00+02:00",
            "leg_arrival_time": "2022-09-10T15:52:00+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "change_platform"
        },
        {
          "duration_seconds": 120,
          "path": "u~hiH}|dMBJTOd@i@bFyHPs@T}CLm@RYXc@j@kAfGoMv@oBbBuDf@w@r@{@@B",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:56:00+02:00",
            "leg_arrival_time": "2022-09-10T15:58:00+02:00",
            "departures": [
              {
                "type": "frequency",
                "service_id": "RATPMetro3",
                "frequency_seconds_range": [
                  268,
                  268
                ],
                "time_status": "unknown"
              }
            ],
            "live_departure_availability": "unknown",
            "statuses": [
              {
                "type": "no_issues",
                "service_ids": [
                  "RATPMetro3"
                ]
              }
            ]
          },
          "vehicle_types": [
            "metro"
          ],
          "services": [
            {
              "id": "RATPMetro3",
              "name": "M3",
              "vehicle_types": [
                "metro"
              ],
              "brand": {
                "id": "RATPMetro",
                "name": "Métro",
                "images": [
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/c1ea53c1c25b1f445dc45762fb5ff921c4b10871d163d9f7734c37bb/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2468e8016890c4f3eabb93d1eaed56900057f3f6260100737928632f/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png",
                    "width": 15,
                    "height": 16,
                    "ui_role": "vehicle_compact",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle",
                    "is_generic": true
                  }
                ]
              },
              "images": [
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/bebcb9a1fe9cbabbc48b1896ad9fd39be30ffa96d64d529a768b3c8a/d324a6fb/@2x.png",
                  "width": 24,
                  "height": 24,
                  "ui_role": "service",
                  "replaces_name": true
                },
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/0122841ef99b4c4525cd1857720cdda68a9d176e22cc16b68dea4cbf/d324a6fb/@2x.png",
                  "width": 16,
                  "height": 16,
                  "ui_role": "service",
                  "replaces_name": true
                }
              ],
              "color": "#9A9940",
              "background_color": "#9A9940",
              "text_color": "#FFFFFF"
            }
          ],
          "travel_mode": "transit",
          "stops": [
            {
              "id": "ParisStation_Saint_Lazare",
              "name": "Saint-Lazare",
              "coordinates": {
                "lat": 48.875428,
                "lon": 2.325399
              }
            },
            {
              "id": "ParisStation_Havre_Caumartin",
              "name": "Havre - Caumartin",
              "coordinates": {
                "lat": 48.873645,
                "lon": 2.327364
              }
            },
            {
              "id": "ParisStation_Opera",
              "name": "Opéra",
              "coordinates": {
                "lat": 48.870672,
                "lon": 2.332382
              }
            }
          ],
          "direction_description": "Gallieni",
          "best_boarding_sections": {
            "front": true,
            "middle": false,
            "back": false
          }
        },
        {
          "duration_seconds": 120,
          "path": "_ahiHuofM??HUTe@",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:58:00+02:00",
            "leg_arrival_time": "2022-09-10T16:00:00+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "change_platform"
        },
        {
          "duration_seconds": 1080,
          "path": "_`hiHqqfMUh@JA~Bi@tTqHfQ_G`@_@HIh@qAr@_CbD{Q\\m@h@]r@OnAAlITn@MZ]Vk@Jo@p@{GBS`AkFlE{Vp@wDbAkFhL{`@bEsOrE}Pj@}Av@oA~DgFnDsE`@[f@IXBXL^`@vO~Xn@tAXbATdANhAJjAB|ABhIBh@BTDRLf@`DrHb@n@l@`@jAZtE`@dMhAx@T??`JzD^F\\?l@O|KcH|XiQpAq@??tAk@`Co@hZkG~U_FgAdA",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T16:00:00+02:00",
            "leg_arrival_time": "2022-09-10T16:18:00+02:00",
            "departures": [
              {
                "type": "frequency",
                "service_id": "RATPMetro7",
                "frequency_seconds_range": [
                  249,
                  249
                ],
                "time_status": "unknown"
              }
            ],
            "live_departure_availability": "unknown",
            "statuses": [
              {
                "type": "no_issues",
                "service_ids": [
                  "RATPMetro7"
                ]
              }
            ]
          },
          "vehicle_types": [
            "metro"
          ],
          "services": [
            {
              "id": "RATPMetro7",
              "name": "M7",
              "vehicle_types": [
                "metro"
              ],
              "brand": {
                "id": "RATPMetro",
                "name": "Métro",
                "images": [
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/c1ea53c1c25b1f445dc45762fb5ff921c4b10871d163d9f7734c37bb/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2468e8016890c4f3eabb93d1eaed56900057f3f6260100737928632f/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png",
                    "width": 15,
                    "height": 16,
                    "ui_role": "vehicle_compact",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle",
                    "is_generic": true
                  }
                ]
              },
              "images": [
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/016151bb9186426aa76040105c8e6b39fdb4290f03628b9113b8373f/d324a6fb/@2x.png",
                  "width": 24,
                  "height": 24,
                  "ui_role": "service",
                  "replaces_name": true
                },
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/6878744016a90fbad8e90c6b5bf1ae5076004099014ccf848c24f36a/d324a6fb/@2x.png",
                  "width": 16,
                  "height": 16,
                  "ui_role": "service",
                  "replaces_name": true
                }
              ],
              "color": "#DF9AB1",
              "background_color": "#DF9AB1",
              "text_color": "#000000"
            }
          ],
          "travel_mode": "transit",
          "stops": [
            {
              "id": "ParisStation_Opera",
              "name": "Opéra",
              "coordinates": {
                "lat": 48.870672,
                "lon": 2.332382
              }
            },
            {
              "id": "ParisStation_Pyramides",
              "name": "Pyramides",
              "coordinates": {
                "lat": 48.866172,
                "lon": 2.334288
              }
            },
            {
              "id": "ParisStation_Palaisroyal",
              "name": "Palais-Royal - Musée du Louvre",
              "coordinates": {
                "lat": 48.862372,
                "lon": 2.336574
              }
            },
            {
              "id": "ParisStation_Pont_Neuf",
              "name": "Pont Neuf",
              "coordinates": {
                "lat": 48.858589,
                "lon": 2.342431
              }
            },
            {
              "id": "ParisStation_Chatelet",
              "name": "Châtelet",
              "coordinates": {
                "lat": 48.858772,
                "lon": 2.347511
              }
            },
            {
              "id": "ParisStation_Pont_Marie_Cite_Des_Arts",
              "name": "Pont Marie",
              "coordinates": {
                "lat": 48.853464,
                "lon": 2.357384
              }
            },
            {
              "id": "ParisStation_Sully_Morland",
              "name": "Sully - Morland",
              "coordinates": {
                "lat": 48.851044,
                "lon": 2.362449
              }
            },
            {
              "id": "ParisStation_Jussieu",
              "name": "Jussieu",
              "coordinates": {
                "lat": 48.846014,
                "lon": 2.354688
              }
            },
            {
              "id": "ParisStation_Place_Monge_Jardin_Des_Plantes",
              "name": "Place Monge",
              "coordinates": {
                "lat": 48.843122,
                "lon": 2.351983
              }
            },
            {
              "id": "ParisStation_Censier_Daubenton",
              "name": "Censier - Daubenton",
              "coordinates": {
                "lat": 48.840594,
                "lon": 2.351756
              }
            },
            {
              "id": "ParisStation_Les_Gobelins",
              "name": "Les Gobelins",
              "coordinates": {
                "lat": 48.836127,
                "lon": 2.352081
              }
            },
            {
              "id": "ParisStation_Place_d_Italie",
              "name": "Place d'Italie",
              "coordinates": {
                "lat": 48.831552,
                "lon": 2.355333
              }
            },
            {
              "id": "ParisStation_Tolbiac",
              "name": "Tolbiac",
              "coordinates": {
                "lat": 48.826159,
                "lon": 2.357019
              }
            },
            {
              "id": "ParisStation_Maison_Blanche",
              "name": "Maison Blanche",
              "coordinates": {
                "lat": 48.822526,
                "lon": 2.358466
              }
            }
          ],
          "direction_description": "Sud",
          "best_boarding_sections": {
            "front": false,
            "middle": false,
            "back": true
          }
        },
        {
          "duration_seconds": 451,
          "path": "{u~hHsqkMAWBALCGg@m@kDoByLGa@EUFEtAaATQTQjAy@LKFEh@_@",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T16:18:00+02:00",
            "leg_arrival_time": "2022-09-10T16:25:31+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "exit_station",
          "walk_details_exit_station": {
            "recommended_exit": {
              "id": "ParisStation_Maison_Blanche_E4",
              "stop_id": "ParisStation_Maison_Blanche",
              "coordinates": {
                "lat": 48.822856,
                "lon": 2.358179
              },
              "name": "rue Bourgon",
              "short_name": "4"
            },
            "alternate_exits": [
              {
                "id": "ParisStation_Maison_Blanche_E1",
                "stop_id": "ParisStation_Maison_Blanche",
                "coordinates": {
                  "lat": 48.821489,
                  "lon": 2.358953
                },
                "name": "avenue d'Italie",
                "short_name": "1"
              },
              {
                "id": "ParisStation_Maison_Blanche_E3",
                "stop_id": "ParisStation_Maison_Blanche",
                "coordinates": {
                  "lat": 48.823014,
                  "lon": 2.358475
                },
                "name": "rue de la Vistule",
                "short_name": "3"
              }
            ],
            "duration_seconds": 90
          }
        }
      ],
      "route_departure_time": "2022-09-10T15:29:54+02:00",
      "route_arrival_time": "2022-09-10T16:25:31+02:00",
      "signature": "v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY2MjgxNjU5NiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTAxNTcsXCJkdXJhdGlvblwiOjMxODYsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQ4LjgyMjI0NCwyLjM2MjgyM1wifSxcImpyX2luZGV4XCI6MyxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjo0NjIsXCJkdXJhdGlvblwiOjQxMCxcImVjXCI6XCI0OC44OTY3NiwyLjI5ODJcIixcImluX3N0YXRpb25cIjpcIjAvNjBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0OC44OTQwNywyLjMwMDQ1XCIsXCJ0b19leGl0XCI6XCJQYXJpc1N0YXRpb25fQ2xpY2h5X0xldmFsbG9pc19FMTA0NTRcIn0se1wiZHVyYXRpb25cIjozMzAsXCJlbmRcIjpcIlBhcmlzU3RhdGlvbl9QYXJpc19TYWludF9MYXphcmVcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIlRyYW5zaWxpZW5MXCJdLFwic3RhcnRcIjpcIlBhcmlzU3RhdGlvbl9DbGljaHlfTGV2YWxsb2lzXCIsXCJzdG9wX2NvdW50XCI6MyxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fUGFyaXNDbGljaHlMZXZhbGxvaXNfTF9kU0VcIixcIlBsYXRmb3JtX1BhcmlzUGFyaXNTYWludExhemFyZV9UcmFuc2lsaWVuXCJdfSx7XCJkaXN0YW5jZVwiOjMxNixcImR1cmF0aW9uXCI6MzAwLFwiZWNcIjpcIjQ4Ljg3NTQ3LDIuMzI0MTVcIixcImluX3N0YXRpb25cIjpcIjEvMzAwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDguODc2NTYsMi4zMjQ1MVwifSx7XCJkdXJhdGlvblwiOjEyMCxcImVuZFwiOlwiUGFyaXNTdGF0aW9uX09wZXJhXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJSQVRQTWV0cm8zXCJdLFwic3RhcnRcIjpcIlBhcmlzU3RhdGlvbl9TYWludF9MYXphcmVcIixcInN0b3BfY291bnRcIjozLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9QYXJpc1NhaW50TGF6YXJlX00zX2RTRVwiLFwiUGxhdGZvcm1fUGFyaXNPcGVyYV9NM19kRVwiXX0se1wiZGlzdGFuY2VcIjoyOCxcImR1cmF0aW9uXCI6MTIwLFwiZWNcIjpcIjQ4Ljg3MDU2LDIuMzMyNTdcIixcImluX3N0YXRpb25cIjpcIjEvMTIwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDguODcwNzIsMi4zMzIyN1wifSx7XCJkdXJhdGlvblwiOjEwODAsXCJlbmRcIjpcIlBhcmlzU3RhdGlvbl9NYWlzb25fQmxhbmNoZVwiLFwibW9kZVwiOlwidHJhbnNpdFwiLFwicm91dGVfaWRzXCI6W1wiUkFUUE1ldHJvN1wiXSxcInN0YXJ0XCI6XCJQYXJpc1N0YXRpb25fT3BlcmFcIixcInN0b3BfY291bnRcIjoxNCxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fUGFyaXNPcGVyYV9NN19kU1wiLFwiUGxhdGZvcm1fUGFyaXNNYWlzb25CbGFuY2hlX003X2RTXCJdfSx7XCJkaXN0YW5jZVwiOjQ3NyxcImR1cmF0aW9uXCI6NDUxLFwiZWNcIjpcIjQ4LjgyMjI5LDIuMzYyOTZcIixcImZyb21fZXhpdFwiOlwiUGFyaXNTdGF0aW9uX01haXNvbl9CbGFuY2hlX0U0XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDguODIyODYsMi4zNTgxOFwifV0sXCJwcmljZV9wZW5jZVwiOjI4NSxcInJlZ2lvblwiOlwiZnItcGFyaXNcIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiMGUwMWQ2OGEtMTg3YS00YWVhLTgzMzEtMGY2ZmFlODFkNTUxXCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNDguODk0MDQzLDIuMzAwNDg1XCJ9LFwidGltZVwiOlwiMjAyMi0wOS0xMFQxNToyOTo1NCswMjowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6ImZyLXBhcmlzIn0.EcJ-5p9DBYFCiWLIsEn0BdrvZ3ObzV57AwL7FvaH04I",
      "requested_time_type": "depart_approximate"
    },
    {
      "start": {
        "coordinates": {
          "lat": 48.894043,
          "lon": 2.300485
        }
      },
      "end": {
        "coordinates": {
          "lat": 48.822244,
          "lon": 2.362823
        }
      },
      "distance_meters": 1150,
      "duration_seconds": 3288,
      "duration_accuracy": "scheduled",
      "price": {
        "formatted": "2.85€",
        "currency": "EUR",
        "amount": "2.85"
      },
      "legs": [
        {
          "duration_seconds": 410,
          "path": "}rliHyh`M@DDHDPDR{A`ByAtAILCHAP?b@CL}A`BUVyA~AKPS[IIGIGKIBGBGHGHIWOc@COGUSL",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:29:54+02:00",
            "leg_arrival_time": "2022-09-10T15:36:44+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "enter_station",
          "walk_details_enter_station": {
            "recommended_exit": {
              "id": "ParisStation_Clichy_Levallois_E10454",
              "stop_id": "ParisStation_Clichy_Levallois",
              "coordinates": {
                "lat": 48.8967597,
                "lon": 2.2981978
              }
            },
            "alternate_exits": [
              {
                "id": "ParisStation_Clichy_Levallois_E7003",
                "stop_id": "ParisStation_Clichy_Levallois",
                "coordinates": {
                  "lat": 48.8985559,
                  "lon": 2.2955263
                }
              }
            ],
            "duration_seconds": 60
          }
        },
        {
          "duration_seconds": 330,
          "path": "wdmiH{{_Mly@w`BxcAq`A",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:41:30+02:00",
            "leg_arrival_time": "2022-09-10T15:47:00+02:00",
            "departures": [
              {
                "type": "scheduled",
                "service_id": "TransilienL",
                "headsign": "Paris Saint-Lazare",
                "short_name": "POPI",
                "scheduled_time": "2022-09-10T15:41:30+02:00",
                "time_status": "unknown"
              }
            ],
            "live_departure_availability": "unknown",
            "statuses": [
              {
                "type": "no_issues",
                "service_ids": [
                  "TransilienL"
                ]
              }
            ]
          },
          "vehicle_types": [
            "rail"
          ],
          "services": [
            {
              "id": "TransilienL",
              "name": "L",
              "vehicle_types": [
                "rail"
              ],
              "brand": {
                "id": "Transilien",
                "name": "Transilien",
                "images": [
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/0f5deba7cad589483333aeb82eca4ddd013877c6e7f5e0ac11395336/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/b3306f2538a7c7c0ecb6d405c70f445ee84274d4d5af90bdcc391af6/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/25ce35b4936f3db72aab4bc0b85e9b2f9e941c88bd9ea6f191b9e3e1/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/027b9a09a3dc4e8fdb8f0ac13a4ab9b4be358795f46afcc6dca29689/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/12bba749901758e1f9d8566e974bbde4aaef1f737a293710164e9a6c/d324a6fb/@2x.png",
                    "width": 13,
                    "height": 16,
                    "ui_role": "vehicle_compact"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/5562ddee195aac1d10c76950ce44ef5b80ca93141c96b23e9c6745ea/d324a6fb/@2x.png",
                    "width": 13,
                    "height": 16,
                    "ui_role": "vehicle_compact",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/85df60670444ab74ef47e431eb5d838e600dea7122f128fa4edc19e9/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/973833a27d4c0799db032ea169c7e05c526b30f4858bd41259b39ce4/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle",
                    "is_generic": true
                  }
                ]
              },
              "images": [
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/6e4b3b873c99d68c8ccba87c56a7ecd09c53ced67b27cf504a0ee45d/d324a6fb/@2x.png",
                  "width": 24,
                  "height": 24,
                  "ui_role": "service",
                  "replaces_name": true
                },
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/a11aecbe760e98057d1da9ee2b669d45564a21bbd394fce56678f19d/d324a6fb/@2x.png",
                  "width": 16,
                  "height": 16,
                  "ui_role": "service",
                  "replaces_name": true
                }
              ],
              "color": "#7584BC",
              "background_color": "#7584BC",
              "text_color": "#FFFFFF"
            }
          ],
          "travel_mode": "transit",
          "stops": [
            {
              "id": "ParisStation_Clichy_Levallois",
              "name": "Clichy - Levallois",
              "coordinates": {
                "lat": 48.896921,
                "lon": 2.29838
              }
            },
            {
              "id": "ParisStation_Pont_Cardinet",
              "name": "Pont-Cardinet",
              "coordinates": {
                "lat": 48.88757,
                "lon": 2.314019
              }
            },
            {
              "id": "ParisStation_Paris_Saint_Lazare",
              "name": "Gare Saint-Lazare",
              "coordinates": {
                "lat": 48.876928,
                "lon": 2.325024
              }
            }
          ],
          "best_boarding_sections": {
            "front": true,
            "middle": false,
            "back": false
          }
        },
        {
          "duration_seconds": 300,
          "path": "oeiiHe_eMiAeBjHkAGxF",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:47:00+02:00",
            "leg_arrival_time": "2022-09-10T15:52:00+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "change_platform"
        },
        {
          "duration_seconds": 120,
          "path": "u~hiH}|dMBJTOd@i@bFyHPs@T}CLm@RYXc@j@kAfGoMv@oBbBuDf@w@r@{@@B",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:56:00+02:00",
            "leg_arrival_time": "2022-09-10T15:58:00+02:00",
            "departures": [
              {
                "type": "frequency",
                "service_id": "RATPMetro3",
                "frequency_seconds_range": [
                  268,
                  268
                ],
                "time_status": "unknown"
              }
            ],
            "live_departure_availability": "unknown",
            "statuses": [
              {
                "type": "no_issues",
                "service_ids": [
                  "RATPMetro3"
                ]
              }
            ]
          },
          "vehicle_types": [
            "metro"
          ],
          "services": [
            {
              "id": "RATPMetro3",
              "name": "M3",
              "vehicle_types": [
                "metro"
              ],
              "brand": {
                "id": "RATPMetro",
                "name": "Métro",
                "images": [
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/c1ea53c1c25b1f445dc45762fb5ff921c4b10871d163d9f7734c37bb/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2468e8016890c4f3eabb93d1eaed56900057f3f6260100737928632f/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png",
                    "width": 15,
                    "height": 16,
                    "ui_role": "vehicle_compact",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle",
                    "is_generic": true
                  }
                ]
              },
              "images": [
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/bebcb9a1fe9cbabbc48b1896ad9fd39be30ffa96d64d529a768b3c8a/d324a6fb/@2x.png",
                  "width": 24,
                  "height": 24,
                  "ui_role": "service",
                  "replaces_name": true
                },
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/0122841ef99b4c4525cd1857720cdda68a9d176e22cc16b68dea4cbf/d324a6fb/@2x.png",
                  "width": 16,
                  "height": 16,
                  "ui_role": "service",
                  "replaces_name": true
                }
              ],
              "color": "#9A9940",
              "background_color": "#9A9940",
              "text_color": "#FFFFFF"
            }
          ],
          "travel_mode": "transit",
          "stops": [
            {
              "id": "ParisStation_Saint_Lazare",
              "name": "Saint-Lazare",
              "coordinates": {
                "lat": 48.875428,
                "lon": 2.325399
              }
            },
            {
              "id": "ParisStation_Havre_Caumartin",
              "name": "Havre - Caumartin",
              "coordinates": {
                "lat": 48.873645,
                "lon": 2.327364
              }
            },
            {
              "id": "ParisStation_Opera",
              "name": "Opéra",
              "coordinates": {
                "lat": 48.870672,
                "lon": 2.332382
              }
            }
          ],
          "direction_description": "Gallieni",
          "best_boarding_sections": {
            "front": true,
            "middle": false,
            "back": false
          }
        },
        {
          "duration_seconds": 120,
          "path": "_ahiHuofM??HUTe@",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T15:58:00+02:00",
            "leg_arrival_time": "2022-09-10T16:00:00+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "change_platform"
        },
        {
          "duration_seconds": 1200,
          "path": "_`hiHqqfMUh@JA~Bi@tTqHfQ_G`@_@HIh@qAr@_CbD{Q\\m@h@]r@OnAAlITn@MZ]Vk@Jo@p@{GBS`AkFlE{Vp@wDbAkFhL{`@bEsOrE}Pj@}Av@oA~DgFnDsE`@[f@IXBXL^`@vO~Xn@tAXbATdANhAJjAB|ABhIBh@BTDRLf@`DrHb@n@l@`@jAZtE`@dMhAx@T??`JzD^F\\?l@O|KcH|XiQpAq@??tAk@`Co@hZkG~U_FjQuDb@Wb@m@??Pc@No@F_AAeA]aGU_B_BgIi@uBLa@",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T16:00:00+02:00",
            "leg_arrival_time": "2022-09-10T16:20:00+02:00",
            "departures": [
              {
                "type": "frequency",
                "service_id": "RATPMetro7",
                "frequency_seconds_range": [
                  498,
                  498
                ],
                "time_status": "unknown"
              }
            ],
            "live_departure_availability": "unknown",
            "statuses": [
              {
                "type": "no_issues",
                "service_ids": [
                  "RATPMetro7"
                ]
              }
            ]
          },
          "vehicle_types": [
            "metro"
          ],
          "services": [
            {
              "id": "RATPMetro7",
              "name": "M7",
              "vehicle_types": [
                "metro"
              ],
              "brand": {
                "id": "RATPMetro",
                "name": "Métro",
                "images": [
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/c1ea53c1c25b1f445dc45762fb5ff921c4b10871d163d9f7734c37bb/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/7ad2e46c402b60d6c7504f9e7d51d2b20346238f551c7f2f2f590075/d324a6fb/@2x.png",
                    "width": 33,
                    "height": 33,
                    "ui_role": "station",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2468e8016890c4f3eabb93d1eaed56900057f3f6260100737928632f/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin"
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/2de58cc981d0472d2cdd91b1683be590513ce72bb7903a4e977b7389/d324a6fb/@2x.png",
                    "width": 38,
                    "height": 41,
                    "ui_role": "pin",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/db1134a025fe35e5138aeedeaac229b231e639e521281714c8c5276e/d324a6fb/@2x.png",
                    "width": 15,
                    "height": 16,
                    "ui_role": "vehicle_compact",
                    "is_generic": true
                  },
                  {
                    "url": "https://d3440lt1d9mf95.cloudfront.net/1403a6bce9d32a85e8b1739818699862112481edb570f774ffde2bb3/d324a6fb/@2x.png",
                    "width": 24,
                    "height": 33,
                    "ui_role": "vehicle",
                    "is_generic": true
                  }
                ]
              },
              "images": [
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/016151bb9186426aa76040105c8e6b39fdb4290f03628b9113b8373f/d324a6fb/@2x.png",
                  "width": 24,
                  "height": 24,
                  "ui_role": "service",
                  "replaces_name": true
                },
                {
                  "url": "https://d3440lt1d9mf95.cloudfront.net/6878744016a90fbad8e90c6b5bf1ae5076004099014ccf848c24f36a/d324a6fb/@2x.png",
                  "width": 16,
                  "height": 16,
                  "ui_role": "service",
                  "replaces_name": true
                }
              ],
              "color": "#DF9AB1",
              "background_color": "#DF9AB1",
              "text_color": "#000000"
            }
          ],
          "travel_mode": "transit",
          "stops": [
            {
              "id": "ParisStation_Opera",
              "name": "Opéra",
              "coordinates": {
                "lat": 48.870672,
                "lon": 2.332382
              }
            },
            {
              "id": "ParisStation_Pyramides",
              "name": "Pyramides",
              "coordinates": {
                "lat": 48.866172,
                "lon": 2.334288
              }
            },
            {
              "id": "ParisStation_Palaisroyal",
              "name": "Palais-Royal - Musée du Louvre",
              "coordinates": {
                "lat": 48.862372,
                "lon": 2.336574
              }
            },
            {
              "id": "ParisStation_Pont_Neuf",
              "name": "Pont Neuf",
              "coordinates": {
                "lat": 48.858589,
                "lon": 2.342431
              }
            },
            {
              "id": "ParisStation_Chatelet",
              "name": "Châtelet",
              "coordinates": {
                "lat": 48.858772,
                "lon": 2.347511
              }
            },
            {
              "id": "ParisStation_Pont_Marie_Cite_Des_Arts",
              "name": "Pont Marie",
              "coordinates": {
                "lat": 48.853464,
                "lon": 2.357384
              }
            },
            {
              "id": "ParisStation_Sully_Morland",
              "name": "Sully - Morland",
              "coordinates": {
                "lat": 48.851044,
                "lon": 2.362449
              }
            },
            {
              "id": "ParisStation_Jussieu",
              "name": "Jussieu",
              "coordinates": {
                "lat": 48.846014,
                "lon": 2.354688
              }
            },
            {
              "id": "ParisStation_Place_Monge_Jardin_Des_Plantes",
              "name": "Place Monge",
              "coordinates": {
                "lat": 48.843122,
                "lon": 2.351983
              }
            },
            {
              "id": "ParisStation_Censier_Daubenton",
              "name": "Censier - Daubenton",
              "coordinates": {
                "lat": 48.840594,
                "lon": 2.351756
              }
            },
            {
              "id": "ParisStation_Les_Gobelins",
              "name": "Les Gobelins",
              "coordinates": {
                "lat": 48.836127,
                "lon": 2.352081
              }
            },
            {
              "id": "ParisStation_Place_d_Italie",
              "name": "Place d'Italie",
              "coordinates": {
                "lat": 48.831552,
                "lon": 2.355333
              }
            },
            {
              "id": "ParisStation_Tolbiac",
              "name": "Tolbiac",
              "coordinates": {
                "lat": 48.826159,
                "lon": 2.357019
              }
            },
            {
              "id": "ParisStation_Maison_Blanche",
              "name": "Maison Blanche",
              "coordinates": {
                "lat": 48.822526,
                "lon": 2.358466
              }
            },
            {
              "id": "ParisStation_Porte_d_Italie",
              "name": "Porte d'Italie",
              "coordinates": {
                "lat": 48.819113,
                "lon": 2.359535
              }
            },
            {
              "id": "ParisStation_Porte_de_Choisy",
              "name": "Porte de Choisy",
              "coordinates": {
                "lat": 48.819951,
                "lon": 2.364816
              }
            }
          ],
          "direction_description": "Sud",
          "best_boarding_sections": {
            "front": false,
            "middle": false,
            "back": true
          }
        },
        {
          "duration_seconds": 308,
          "path": "wd~hHcxlMHGEQCBACACACCAEOCBCBo@b@qA~@KFa@XMHYV_An@GDMHMJOJIFIFIFIFe@^",
          "updatable_detail": {
            "leg_departure_time": "2022-09-10T16:20:00+02:00",
            "leg_arrival_time": "2022-09-10T16:25:08+02:00"
          },
          "travel_mode": "walk",
          "station_walk_type": "exit_station",
          "walk_details_exit_station": {
            "recommended_exit": {
              "id": "ParisStation_Porte_de_Choisy_E3537",
              "stop_id": "ParisStation_Porte_de_Choisy",
              "coordinates": {
                "lat": 48.8201197,
                "lon": 2.3643386
              },
              "name": "boulevard Masséna",
              "short_name": "2"
            },
            "alternate_exits": [
              {
                "id": "ParisStation_Porte_de_Choisy_E3536",
                "stop_id": "ParisStation_Porte_de_Choisy",
                "coordinates": {
                  "lat": 48.8199201,
                  "lon": 2.3645183
                },
                "name": "avenue de la Porte de Choisy",
                "short_name": "1"
              }
            ],
            "duration_seconds": 90
          }
        }
      ],
      "route_departure_time": "2022-09-10T15:29:54+02:00",
      "route_arrival_time": "2022-09-10T16:25:08+02:00",
      "signature": "v2.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjbTp0cmFuc2l0MSIsImlhdCI6MTY2MjgxNjU5NiwiZnJvbnRlbmRfc2lnbmF0dXJlIjoie1wiY2FyXCI6MTAxNTcsXCJkdXJhdGlvblwiOjMyODgsXCJlbmRcIjp7XCJjb29yZHNcIjpcIjQ4LjgyMjI0NCwyLjM2MjgyM1wifSxcImpyX2luZGV4XCI6NCxcImxlZ3NcIjpbe1wiZGlzdGFuY2VcIjo0NjIsXCJkdXJhdGlvblwiOjQxMCxcImVjXCI6XCI0OC44OTY3NiwyLjI5ODJcIixcImluX3N0YXRpb25cIjpcIjAvNjBcIixcIm1vZGVcIjpcIndhbGtcIixcInNjXCI6XCI0OC44OTQwNywyLjMwMDQ1XCIsXCJ0b19leGl0XCI6XCJQYXJpc1N0YXRpb25fQ2xpY2h5X0xldmFsbG9pc19FMTA0NTRcIn0se1wiZHVyYXRpb25cIjozMzAsXCJlbmRcIjpcIlBhcmlzU3RhdGlvbl9QYXJpc19TYWludF9MYXphcmVcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIlRyYW5zaWxpZW5MXCJdLFwic3RhcnRcIjpcIlBhcmlzU3RhdGlvbl9DbGljaHlfTGV2YWxsb2lzXCIsXCJzdG9wX2NvdW50XCI6MyxcInN0b3BfaWRzXCI6W1wiUGxhdGZvcm1fUGFyaXNDbGljaHlMZXZhbGxvaXNfTF9kU0VcIixcIlBsYXRmb3JtX1BhcmlzUGFyaXNTYWludExhemFyZV9UcmFuc2lsaWVuXCJdfSx7XCJkaXN0YW5jZVwiOjMxNixcImR1cmF0aW9uXCI6MzAwLFwiZWNcIjpcIjQ4Ljg3NTQ3LDIuMzI0MTVcIixcImluX3N0YXRpb25cIjpcIjEvMzAwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDguODc2NTYsMi4zMjQ1MVwifSx7XCJkdXJhdGlvblwiOjEyMCxcImVuZFwiOlwiUGFyaXNTdGF0aW9uX09wZXJhXCIsXCJtb2RlXCI6XCJ0cmFuc2l0XCIsXCJyb3V0ZV9pZHNcIjpbXCJSQVRQTWV0cm8zXCJdLFwic3RhcnRcIjpcIlBhcmlzU3RhdGlvbl9TYWludF9MYXphcmVcIixcInN0b3BfY291bnRcIjozLFwic3RvcF9pZHNcIjpbXCJQbGF0Zm9ybV9QYXJpc1NhaW50TGF6YXJlX00zX2RTRVwiLFwiUGxhdGZvcm1fUGFyaXNPcGVyYV9NM19kRVwiXX0se1wiZGlzdGFuY2VcIjoyOCxcImR1cmF0aW9uXCI6MTIwLFwiZWNcIjpcIjQ4Ljg3MDU2LDIuMzMyNTdcIixcImluX3N0YXRpb25cIjpcIjEvMTIwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDguODcwNzIsMi4zMzIyN1wifSx7XCJkdXJhdGlvblwiOjEyMDAsXCJlbmRcIjpcIlBhcmlzU3RhdGlvbl9Qb3J0ZV9kZV9DaG9pc3lcIixcIm1vZGVcIjpcInRyYW5zaXRcIixcInJvdXRlX2lkc1wiOltcIlJBVFBNZXRybzdcIl0sXCJzdGFydFwiOlwiUGFyaXNTdGF0aW9uX09wZXJhXCIsXCJzdG9wX2NvdW50XCI6MTYsXCJzdG9wX2lkc1wiOltcIlBsYXRmb3JtX1BhcmlzT3BlcmFfTTdfZFNcIixcIlBsYXRmb3JtX1BhcmlzUG9ydGVkZUNob2lzeV9NN19kTkVcIl19LHtcImRpc3RhbmNlXCI6MzQ0LFwiZHVyYXRpb25cIjozMDgsXCJlY1wiOlwiNDguODIyMjksMi4zNjI5NlwiLFwiZnJvbV9leGl0XCI6XCJQYXJpc1N0YXRpb25fUG9ydGVfZGVfQ2hvaXN5X0UzNTM3XCIsXCJpbl9zdGF0aW9uXCI6XCIyLzkwXCIsXCJtb2RlXCI6XCJ3YWxrXCIsXCJzY1wiOlwiNDguODIwMTIsMi4zNjQzNFwifV0sXCJwcmljZV9wZW5jZVwiOjI4NSxcInJlZ2lvblwiOlwiZnItcGFyaXNcIixcInJvdXRpbmdfcmVxdWVzdF9pZFwiOlwiMGUwMWQ2OGEtMTg3YS00YWVhLTgzMzEtMGY2ZmFlODFkNTUxXCIsXCJzdGFydFwiOntcImNvb3Jkc1wiOlwiNDguODk0MDQzLDIuMzAwNDg1XCJ9LFwidGltZVwiOlwiMjAyMi0wOS0xMFQxNToyOTo1NCswMjowMC9OT1dJU0hcIixcInZlcnNpb25cIjoyfSIsInJlZ2lvbl9pZCI6ImZyLXBhcmlzIn0.E-6WHKgHRBAZcCMC7P75P_6OuyaOyBE9N5C5DdJQwf8",
      "requested_time_type": "depart_approximate"
    }
  ]
}
