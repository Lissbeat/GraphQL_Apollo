import * as yup from "yup";
export const ValidationCreate = yup.object().shape({
    movie_name: yup
      .string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
      genre: yup
      .string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
      description: yup.string().min(2, "Too Short!").max(100, "Too Long!"),

  });