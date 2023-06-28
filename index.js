const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors({ origin: true }));

// #############################################################
// ######################## App Routing ########################
// #############################################################

app.get("/dashboard", (req, res) => {
  const previewCards = {
    totalRevenue: 2129430,
    totalTransactions: 1520,
    totalLikes: 9721,
    totalUsers: 892,
  };

  const lineChart = {
    data: [
      {
        week: "",
        guest: 200,
        user: 100,
      },
      {
        week: "Week 1",
        guest: 175,
        user: 255,
      },
      {
        week: "Week 2",
        guest: 300,
        user: 200,
      },
      {
        week: "Week 3",
        guest: 350,
        user: 420,
      },
      {
        week: "Week 4",
        guest: 150,
        user: 280,
      },
      {
        week: "",
        guest: 450,
        user: 360,
      },
    ],
    lineColors: {
      guest: "#E9A0A0",
      user: "#9BDD7C",
    },
  };

  const pieChart = [
    {
      name: "Basic Tees",
      value: 55,
      color: "#98D89E",
    },
    {
      name: "Custom Short Pants",
      value: 31,
      color: "#F6DC7D",
    },
    {
      name: "Super Hoodies",
      value: 14,
      color: "#EE8484",
    },
  ];

  const schedules = [
    {
      title: "Meeting with suppliers from Kuta Bali",
      time: "14.00-15.00",
      location: "at Sunset Road, Kuta, Bali",
      color: "#9BDD7C",
    },
    {
      title: "Check operation at Giga Factory 1",
      time: "18.00-20.00",
      location: "at Central Jakarta ",
      color: "#6972C3",
    },
  ];

  const dashboard = {
    previewCards: previewCards,
    lineChart: lineChart,
    pieChart: pieChart,
    schedules: schedules,
  };

  res.json(dashboard);
  res.end();
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
