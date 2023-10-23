const express = require("express");
const app = express();
const cors = require("cors");
const { faker } = require("@faker-js/faker");
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send(`Server running on port ${port}`);
});

app.get("/getBuildings", (req, res) => {
  const house = Array(10)
    .fill(0)
    .map(() => {
      return Array(14)
        .fill(0)
        .map(() => {
          const area = faker.number.int({ min: 25, max: 150 });
          return {
            city: faker.location.city(),
            street: faker.location.street(),
            index: faker.location.buildingNumber(),
            area: area,
            price: area * faker.number.int({ min: 300000, max: 400000 }),
          };
        });
    });

  res.send(house);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
