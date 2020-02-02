const express = require("express").Router();
const Helpers = require("./employeeHelpers");

express.get("/", (req, res) => {
  Helpers.getEmployees()
    .then(employees => {
      res.status(200).json(employees);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching employees", error: err });
    });
});

express.get("/:id", (req, res) => {
  const { id } = req.params;
  Helpers.findById({ id })
    .then(employee => {
      res.status(200).json(employee);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching rentals", error: err });
      console.log(err);
    });
});

express.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Helpers
      .update(changes, id)
      .then(updated => {
        res.status(200).json(updated);
      })
  
      .catch(err => {
        res.status(500).json({ message: "Failed to update rental" });
        console.log(err);
      });
  });

  express.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    Helpers
      .remove(id)
      .then(deleted => {
        if (deleted) {
          res.json({ removed: `deleted rental with id ${id}` });
        } else {
          res
            .status(404)
            .json({ message: "Could not find rental with given id" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to delete rental" });
      });
  });

module.exports = express;
