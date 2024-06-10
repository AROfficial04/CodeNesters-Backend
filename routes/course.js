const express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const {
  createCourseCategoryController,
  createCourseController,
  deleteCourseCategoryController,
  updateCourseCategoryController,
  deleteCourseController,
  getAllCoursesController,
  getAllCourseCategoryController,
  getCourseController,
  uploadCourseImageController,
  getCourseImageController,
} = require("../controllers/courseController");
const router = express.Router();
const { body } = require("express-validator");

//! ROUTE 1 : CREATE COURSE CATEGORY
router.post(
  "/create-course-category",
  requireSignIn,
  isAdmin,
  createCourseCategoryController
);

router.put(
  "/update-course-category",
  requireSignIn,
  isAdmin,
  updateCourseCategoryController
);

router.delete(
  "/delete-course-category",
  requireSignIn,
  isAdmin,
  deleteCourseCategoryController
);

router.get(
  "/get-all-course-categories",
  requireSignIn,
  isAdmin,
  getAllCourseCategoryController
);

//! ROUTE 4 : CREATE COURSE
router.post(
  "/create-course",
  requireSignIn,
  isAdmin,
  [
    body("courseName", "Course Name is Required").exists(),
    body("courseCategory", "Course Category Id is Required").exists(),
    body("courseCategoryName", "Course Category Name is Required").exists(),
    body("courseContent", "Course Content is Required").exists(),
    body("coursePrice", "Course Price is Required").exists(),
    body("coursePriceDiscount", "Course Price Discount is Required").exists(),
    body(
      "courseDiscountedPrice",
      "Course Discounted Price is Required"
    ).exists(),
    body("courseRating", "Course Rating is Required").exists(),
  ],
  createCourseController
);

//! ROUTE 5 : DELETE COURSE
router.delete("/delete-course", requireSignIn, isAdmin, deleteCourseController);

//! ROUTE 6 : GET ALL COURSES
router.get("/get-all-courses", getAllCoursesController);

//! ROUTE 7 : GET SINGLE COURSES
router.get("/get-course/:id", getCourseController);

//! ROUTE 8 : UPLOAD COURSE IMAGE
router.post(
  "/upload-course-image",
  requireSignIn,
  isAdmin,
  uploadCourseImageController
);

//! ROUTE 9 : GETTING COURSE IMAGE URL
router.post("/get-course-image", getCourseImageController);

module.exports = router;
