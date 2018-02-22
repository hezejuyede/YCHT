const  mongoose = require('mongoose');
const db = require('./db.js');
const usershoppingCartSchema = new mongoose.Schema({

    "username"                                     :String,
    "goodsID"                                      :Number,
    "price"                                        :String,
    "goodsType"                                   :String,
    "goodsTitle"                                  :String,
    "goodsNumber"                                 :String
});

usershoppingCartSchema.index({"aid":1});

const usershoppingCartModel = db.model('usershoppingCart',usershoppingCartSchema);

module.exports= usershoppingCartModel;
