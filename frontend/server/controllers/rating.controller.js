const Rating = require('../models/rating');
const ratingCtrl = {};

const options = {
  "limit": 20,
  "skip": 10
};

ratingCtrl.getRatings = async (req, res) => {
  if (req.query['url']) {
    console.log(req.body.urlBody);
    ratingCtrl.searchUrlRating(req, res);
  } else {
    const ratings = await Rating.find({}, options);
    res.json(ratings);
  }
};

ratingCtrl.createRating = async (req, res) => {
  const rating = new Rating({
    query: req.body.query,
    url: req.body.url,
    rating: req.body.rating,
    note: req.body.note,
  });
  await rating.save();

  res.json(rating);
};

ratingCtrl.getRating = async (req, res) => {
  const rating = await Rating.findById(req.params.id);

  res.json(rating);
};

ratingCtrl.editRating = async (req, res) => {
  const {id} = req.params;
  const rating = {
    query: req.body.query,
    url: req.body.url,
    rating: req.body.rating,
    note: req.body.note,
  };
  await Rating.findByIdAndUpdate(id, {$set: rating}, {new: true});

  res.json({
    status: 'Rating updated'
  });
};

ratingCtrl.deleteRating = async (req, res) => {
  await Rating.findByIdAndRemove(req.params.id);

  res.json({
    status: 'Rating deleted'
  });
};

ratingCtrl.searchUrlRating = async (req, res) => {
  console.log(':: START searchUrlRating ::');
  let url = req.headers.url;
  let urlReplaced = url.trim().replace(/^(http(s|):\/\/)?(www\.|)/g, '').replace(' ', '');
  // let urlReplaced2 = urlReplaced.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
  let regexSearch = '^.*'+urlReplaced+'.*';
  let regExp = new RegExp(regexSearch.toLocaleLowerCase(), "i");
  console.log('Server - regExp: ' + regExp);
  console.log(':: END searchUrlRating ::');
  let rating = await Rating.find({
    url: {$regex: regExp}
  });
  // .then(ratingRes => {
  //     console.log('Resultado: ');
  //     console.log(ratingRes);
  // })
  // .catch(e => {
  // });
  //     console.error(e)

  res.json(rating);
};


module.exports = ratingCtrl;
