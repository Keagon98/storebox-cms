import express from 'express';

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
    console.log("Get all products");
    res.send("Get all products");
});

productRouter.get("/:id", (req, res) => {
    const product = req.params.id;
    console.log(`Get product ${product}`);
    res.send(`Get product ${product}`);
});

productRouter.post("/create", (req, res) => {
    console.log("Create product");
    res.send("Create product");
});

productRouter.put("/update/:id", (req, res) => {
    const product = req.params.id;
    console.log(`Update product ${product}`);
    res.send(`Update product ${product}`);
});

productRouter.delete("/:id", (req, res) => {
    const product = req.params.id;
    console.log(`Remove product ${product}`);
    res.send(`Remove product ${product}`);
});

export default productRouter;