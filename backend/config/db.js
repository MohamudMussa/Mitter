'use strict'

const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { DB_URL, DB_NAME } = require('./CONSTS.json');

const twitterSchema = new Schema({
    user: { type: String, required: true },
    tweet: { type: String, required: true },
    datePosted: { type: Date, default: Date.now }

})

const twitterSchema = model(`Twitter`, twitterSchema);


mongoose.connect(`${DB_URL}/${DB_NAME}?authSource=admin&replicaSet=atlas-nzfvt5-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Connection has worked`);
    }
})

module.exports = {
    "Twitter": twitterSchema
}

