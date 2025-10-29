import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
  body("nombreProducto")
    .notEmpty()
    .withMessage("El nombre del producto es obligatorio")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del producto debe tener entre 2 y 100 caracteres"),

  body("precio")
    .notEmpty()
    .withMessage("El precio del producto es obligatorio")
    .isFloat({ min: 1, max: 1000000 })
    .withMessage("El precio del producto debe estar entre 1 y 1000000"),

  body("descripcion_breve")
    .notEmpty()
    .withMessage("La descripción breve es un dato obligatorio")
    .isLength({ min: 5, max: 250 })
    .withMessage("La descripción breve debe tener entre 5 y 250 caracteres"),

  body("descripcion_amplia")
    .notEmpty()
    .withMessage("La descripción amplia es un dato obligatorio")
    .isLength({ min: 10, max: 500 })
    .withMessage("La descripción amplia debe tener entre 10 y 500 caracteres"),

  body("categoria")
    .notEmpty()
    .withMessage("La categoría es un dato obligatorio")
    .isIn([
      "Acompañamientos",
      "Ensaladas",
      "Bebidas",
      "Hamburguesas",
      "Postres",
      "Pizzas",
      "Sándwiches y Wraps",
      "Veggie/Veganas",
    ])
    .withMessage(
      "La categoría debe ser uno de los siguientes términos: Acompañamientos, Ensaladas, Bebidas, Hamburguesas, Postres, Pizzas, Sándwiches y Wraps, Veggie/Veganas"
    ),

  body("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/^(https?:\/\/.*\.(?:png|jpg|jpeg|webp))$/i)
    .withMessage("La imagen debe ser una URL válida que termine en .jpg, .jpeg, .png o .webp"),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionProducto;
