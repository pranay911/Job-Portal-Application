const errorMiddleware = (err, req, res, next) => {
  // Check if the error is a Zod error
  if (err.name === "ZodError") {
    // If it's a Zod error, extract the error messages
    const validationErrors = err.errors.map((error) => error.message);

    // Respond with a 400 status code and send the validation errors
    res.status(400).send({
      success: false,
      message: "Validation Error",
      errors: validationErrors,
    });
  } else {
    // For other errors, log the error and send a generic error response
    console.error(err);
    res.status(500).send({
      success: false,
      message: "Something Went Wrong",
      err: err.message, // Sending only the error message for non-Zod errors
    });
  }
};

export default errorMiddleware;
