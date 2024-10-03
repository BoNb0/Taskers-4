export const createTaskValidationSchema = {
  title: {
    notEmpty: {
      errorMessage: "title must not be empty",
    },
    isString: {
      errorMessage: "must be a string",
    },
  },
  isCompleted: {
    isBoolean: {
      errorMessage: "must be boolean",
    },
  },
};
