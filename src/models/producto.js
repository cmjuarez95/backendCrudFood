import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        minlenght: 2,
        maxlenght:100,
        required: true,
        unique: true
    },
    precio:{
        type: Number,
        required: true,
        min: 100,
        max: 1000000,
    },
    categoria:{
        type:String,
        required:true,
        enum:["Acompañamientos,",
            "Bedbidas",
            "Ensaladas",
            "Hamburguesas",
            "Postres",
            "Pizzas",
            "Sándwiches y Wraps",
            "Veggie/Veganas"
        ]

    },
    descripcion_breve:{
        type: String,
        required:true,
        minlenght: 5,
        maxlenght: 250
    },
    descripcion_amplia:{
        type: String,
        required:true,
        minlenght:10,
        maxlenght:500
    },

    imagen:{
        type: String,
        required: true,
        validate:{
            validator:(valor)=>{
                return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(valor)
            }
        }
    }



},
{
    timestamps: true   //agrega fecha de actualizacion y creacion
})

const Producto = mongoose.model('producto', productoSchema)

export default Producto