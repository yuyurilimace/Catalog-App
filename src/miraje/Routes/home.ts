import { Server } from "miragejs";
import type { AnyFactories, AnyModels, Registry } from "miragejs/-types";

const HomeMockRoutes = (server: Server<Registry<AnyModels, AnyFactories>>) => {
  return server.get("/collection", (schema, Request) => {
    const params = Request.queryParams;
    const mock = [
      {
        Name: "One Piece",
        Author: "Eiichiro Oda",
        Publisher: "Shueisha",
        Priority: "High",
        "Released Volumes": 105,
        "Collection Volumes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        "Missing Volumes": [12, 13, 14, 15, 16, 17, 18, 19, 20],
      },
      {
        Name: "Jujutsu Kaisen",
        Author: "Gege Akutami",
        Publisher: "Shueisha",
        Priority: "Medium",
        "Released Volumes": 25,
        "Collection Volumes": [1, 2, 3, 4, 5, 6, 7],
        "Missing Volumes": [8, 9, 10, 11, 12],
      },
      {
        Name: "Chainsaw Man",
        Author: "Tatsuki Fujimoto",
        Publisher: "Shueisha",
        Priority: "Low",
        "Released Volumes": 16,
        "Collection Volumes": [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        ],
        "Missing Volumes": [16],
      },
    ];
    if (params.empty) {
      return { collection: [] };
    }
    return { collection: mock };
  });
};

export default HomeMockRoutes;
