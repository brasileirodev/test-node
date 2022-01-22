"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.get('/', (req, res) => res.json({
  message: 'GoStack'
}));
app.post('/users', (req, res) => {
  const {
    name,
    email
  } = req.body;
  const userTemp = {
    name,
    email
  };
  return res.status(201).json(userTemp);
});
app.listen(3333, () => {
  console.log('Server started on port 3333! 🚀');
});