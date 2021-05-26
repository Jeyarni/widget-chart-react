const express = require("express");
const router = express.Router();
const connection = require("../db/mysqlConn");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM chart", (error, result) => {
    if (error) throw error;

    return res.send(result);
  });
});

router.get("/:id", (req, res) => {
  connection.query(
    `SELECT * FROM chart where studentId = ${req.params.id}`,
    (error, result) => {
      if (error) throw error;

      return res.status(200).send(result[0]);
    }
  );
});

router.post("/", (req, res) => {
  const chartdata = {
    // studentId:req.body.studentId,
    subject:req.body.subject,
    mark:req.body.mark,
    semester:req.body.semester,
    studentName:req.body.studentName,
    grade:req.body.grade,
    year:req.body.year
  };
  connection.query("INSERT INTO chart set ?", chartdata, (error, result) => {
    if (error) throw error;
    return res.status(200).send(result);
  });
});

router.post("/list", (req, res) => {
  // req.body.datalist.map(dl=>{res.send(dl)})
  for (let index = 0; index < req.body.datalist.length; index++) {
    // return res.send(req.body.datalist[index]);
    
  const chartdata = {
    subject:req.body.datalist[index].subject,
    mark:req.body.datalist[index].mark,
    semester:req.body.datalist[index].semester,
    studentName:req.body.datalist[index].studentName,
    grade:req.body.datalist[index].grade,
    year:req.body.datalist[index].year
  };
  connection.query("INSERT INTO chart set ?", chartdata, (error, result) => {
    if (error) throw error;
    return res.status(200).send(result);
  });
}
});

router.put("/:id", (req, res) => {
  let chartdata = [
    // req.body.studentId,
    req.body.subject,
    req.body.mark,
    req.body.semester,
    req.body.studentName,
    req.body.grade,
    req.body.year
  ];
  connection.query(
    `SELECT * FROM chart where studentId = ${req.params.id}`,
    (error, result) => {
      if (error) throw error;
      if (result[0]) {
        connection.query(
          `UPDATE chart SET subject = ?, mark = ?, semester = ?, studentName = ?, grade = ?, year = ? WHERE studentId = ${
            req.params.id
          }`,
          chartdata,
          (error, result) => {
            if (error) {
              throw error;
            }
            return res.status(200).send("Data updated successfully...");
          }
        );
      } else {
        return res.status(404).send("Data not found...");
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  connection.query(
    `DELETE FROM chart WHERE studentId = ${req.params.id}`,
    (error, result) => {
      if (error) {
        return res.status(404).send("The given id was not found");
      }
      return res.status(200).send("Data deleted successfully...");
    }
  );
});

module.exports = router;