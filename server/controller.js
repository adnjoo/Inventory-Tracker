const testRoute = (req, res) => {
  res.status(200).send('test route');
};

module.exports = {
  testRoute,
};
