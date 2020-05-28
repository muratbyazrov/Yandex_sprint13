const Cards = require('../models/card');

module.exports.getCards = (req, res) => {
  Cards.find({})
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: err.message }));
};

module.exports.createCard = (req, res) => {
  const { name, link } = req.body;

  Cards.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: err.message }));
};


module.exports.deleteCard = async (req, res) => {
  await Cards.findByIdAndRemove(req.params.cardId)
    .then((card) => {
      if (card === null) {
        res.status(404).send({ message: 'Такой карточки нет' });
      } else {
        res.send({ data: card });
      }
    })
    .catch((err) => res.status(404).send({ message: err.message }));
};
