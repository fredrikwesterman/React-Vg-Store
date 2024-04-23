Mall för att "get" från apit(servern)

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users;", (err, result) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(result);
    }
  });
});

Mall för att posta till apit(servern)

app.post("/users", (req, res) => {

  const { email, password } = req.body;

  db.query(
    "INSERT INTO users (email, password) VALUES (?,?)",
    [email, password],
    (err, result) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).json(result);
      }
    }
  );
});

_______________________________________________________________________________________________________________________________________________________________________________
mockdata för products mySQL (mySQL script)

INSERT INTO products (name, brand, length, waterResistance, ropeDescription, thickness, price) VALUES 
('Precision 60', 'Petzl', '60m', 'high', 'Versatile and durable climbing rope suitable for various climbing styles.', '10.1mm', 159.99),
('Onyx 70', 'Black Diamond', '70m', 'medium', 'Smooth-handling rope ideal for both sport and trad climbing.', '9.8mm', 179.99),
('Summit 80', 'Sterling', '80m', 'high', 'High-performance rope designed for long routes and challenging conditions.', '9.5mm', 199.99),
('Breeze 60', 'Beal', '60m', 'low', 'Lightweight and flexible rope perfect for fast and light alpine climbing.', '9.4mm', 149.99),
('Earthwise 70', 'Edelrid', '70m', 'medium', 'Eco-friendly rope with excellent handling and durability.', '9.2mm', 169.99),
('Maverick 60', 'Metolius', '60m', 'low', 'Affordable and reliable rope suitable for gym and outdoor climbing.', '10.2mm', 139.99),
('Master 70', 'Mammut', '70m', 'high', 'High-quality rope with excellent abrasion resistance, ideal for demanding routes.', '9.6mm', 189.99),
('Blaze 80', 'BlueWater', '80m', 'high', 'Dynamic and durable rope engineered for high-performance climbing.', '9.8mm', 209.99),
('Titan 60', 'Trango', '60m', 'medium', 'Versatile rope suitable for both single and multi-pitch climbing.', '10.0mm', 159.99),
('Evergreen 70', 'Edelweiss', '70m', 'low', 'Superbly crafted rope offering a good balance between performance and durability.', '9.5mm', 179.99),
('Defender 60', 'DMM', '60m', 'high', 'Robust and reliable rope designed for a wide range of climbing applications.', '9.7mm', 169.99),
('Catalyst 70', 'ClimbX', '70m', 'medium', 'Value-packed rope offering good handling and durability at an affordable price.', '10.5mm', 129.99),
('Endeavor 60', 'Evolv', '60m', 'low', 'High-performance rope designed for aggressive sport climbing and bouldering.', '9.9mm', 159.99),
('Frontier 70', 'Fusion', '70m', 'medium', 'Durable and versatile rope suitable for both beginner and advanced climbers.', '9.8mm', 179.99),
('Legacy 60', 'La Sportiva', '60m', 'high', 'Premium-quality rope offering exceptional handling and durability for demanding climbs.', '9.3mm', 199.99);
_______________________________________________________________________________________________________________________________________________________________________________