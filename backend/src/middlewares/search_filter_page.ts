import { Request, Response, NextFunction } from "express";

export const filterResults =
  (model: any) => async (req: any, res: any, next: NextFunction) => {
    try {
      let query;
      const reqQuery = { ...req.query };
      // fields to be removed
      const removeFields = ["select", "sort", "page", "limit", "keyword"];
      removeFields.forEach((param) => delete reqQuery[param]);

      // filtering the data
      let queryStr = JSON.stringify(reqQuery);
      query = queryStr.replace(
        /\b(gt|gte|lt|lte|eq|ne|in)\b/g,
        (match) => `$${match}`
      );
      query = JSON.parse(query);
      let appendFiterQuery = model.find(query);

      // searching
      let searchme: any = req.query.keyword
        ? {
            name: {
              $regex: req.query.keyword,
              $options: "i",
            },
          }
        : {};
     const me = appendFiterQuery.find({ ...searchme });


      // selection of the fields
      if (req.query.select) {
        const fields: any = req.query.select.split(",").join(" ");
        appendFiterQuery = appendFiterQuery.select(fields);
      }
      // sorting the documents
      if (req.query.sort) {
        const fields = req.query.select.split(",").join(" ");
        appendFiterQuery = appendFiterQuery.sort("-averageCost");
      } else {
        appendFiterQuery = appendFiterQuery.sort("-createdAt");
      }
      // for pagination
      let page = Number(req.query.page) || 1;
      let limit = Number(req.query.limit) || 10;
      let skip = (page - 1) * limit;
      console.log(limit, skip, "wow");
      appendFiterQuery = appendFiterQuery.skip(skip).limit(limit);

      const total = await model.countDocuments();

      let data = await appendFiterQuery;
      let pagination: any = {};

      let endIndex = page * limit;
      if (endIndex < total) {
        pagination.next = {
          page: page + 1,
          limit,
        };
      }
      if (skip > 0) {
        pagination.prev = {
          page: page - 1,
          limit,
        };
      }

      if (data.length > 0) {
        res.filterData = {
          success: true,
          data,
          total,
          pagination,
        };
        next();
      } else {
        res.filterData = {
          success: true,
          data:[]
         
        };


     
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };
