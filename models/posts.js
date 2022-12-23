const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    sku:{
        type: String,
        required: true

    },
    productname:{
        type: String,
        required: true

    },
    qty:{
        type: String,
        required: true

    },
    price:{
        type: String,
        required: true

    },
    productdecription:{
        type: String,
        required: true

    },
    productimages:{
        type: String,
        required: true

    }

    
});

module.exports = mongoose.model('Posts',postSchema);
