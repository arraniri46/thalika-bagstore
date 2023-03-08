export default function getProduct(req, res) {
  res.status(200).json({
    id: 1,
    name: "hermes",
    price: 10000,
  });
}
