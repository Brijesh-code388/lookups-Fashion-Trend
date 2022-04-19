

///master search engine


// Load wink-bm25-text-search
// var bm25 = require('wink-bm25-text-search');
// Create search engine's instance
// var engine = bm25();
// Load NLP utilities
// var nlp = require('wink-nlp-utils');
// Load sample data (load any other JSON data instead of sample)
// var docs = require('./data3.json');
// console.log(docs)

// var docs;

// var fs = require('fs')

// var s = process.argv[2]
// console.log(s);

// var arg = ['women', 'wedding', 'saree', 'yellow', 'sada-suhagan', 'mixxy ']

// let string = '';
// arg.map((word) => {
//     string = string + word + ' ';
// })

// console.log(string)

// Step I: Define config
// Only field weights are required in this example.
// engine.defineConfig({ fldWeights: { description: 20, title: 20 } });

// Step II: Define PrepTasks
// Set up preparatory tasks for 'body' field
// engine.definePrepTasks([
//     nlp.string.lowerCase,
//     nlp.string.removeExtraSpaces,
//     nlp.string.tokenize0,
//     nlp.tokens.propagateNegations,
//     nlp.tokens.removeWords,
//     nlp.tokens.stem
// ], 'title');
// Set up 'default' preparatory tasks i.e. for everything else
// engine.definePrepTasks([
//     nlp.string.lowerCase,
//     nlp.string.removeExtraSpaces,
//     nlp.string.tokenize0,
//     nlp.tokens.propagateNegations,
//     nlp.tokens.stem
// ]);
// -> Michelle LaVaughn Robinson Obama (born January 17, 1964) is...

// fs.writeFile("ans.json", JSON.stringify(ans), function (err) {
//     if (err) throw err;
//     console.log('complete');
// }
// );


const Products = require('../models/productModel')

// Filter, sorting and paginating

class APIfeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    filtering() {
        const queryObj = { ...this.queryString } //queryString = req.query
        // console.log(queryObj)
        // console.log(queryObj)
        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete (queryObj[el]))
        // console.log('brijesh')


        //pelanu che
        // console.log(queryObj)
        // let queryStr = JSON.stringify(queryObj)
        // queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)



        //new upadate
        let searchObj;
        let queryStr2;
        if (queryObj['category'] === undefined) {
            searchObj = {
                "$or": [
                    { title: { '$regex': queryObj['title'].regex, '$options': 'i' } },
                    { description: { '$regex': queryObj['title'].regex, '$options': 'i' } },
                ]
            }
            queryStr2 = JSON.stringify(searchObj)
        } else {
            searchObj = {
                "$and": [
                    { category: queryObj['category'] },
                    {
                        "$or": [
                            { title: { '$regex': queryObj['title'].regex, '$options': 'i' } },
                            { description: { '$regex': queryObj['title'].regex, '$options': 'i' } },
                        ]
                    }
                ]
            }
            queryStr2 = JSON.stringify(searchObj)
        }

        // console.log(queryStr2)

        this.query.find(JSON.parse(queryStr2))

        return this;
    }

    sorting() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort('-like')
        }

        return this;
    }

    paginating() {
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 100
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const productCtrl = {
    getProducts: async (req, res) => {
        try {
            // console.log(req.query)
            // console.log(req.query.Search.regex)
            // let string = req.query.Search.regex
            const features = new APIfeatures(Products.find(), req.query)
                .filtering().sorting().paginating()

            const products = await features.query
            // console.log('---------------------------------')
            //console.log(products)
            // //start
            // docs = products
            // console.log(docs.length)

            // // Step III: Add Docs
            // // Add documents now...
            // docs.forEach(function (doc, i) {
            //     // Note, 'i' becomes the unique id for 'doc'
            //     engine.addDoc(doc, i);
            // });

            // // Step IV: Consolidate
            // // Consolidate before searching
            // await engine.consolidate();

            // // All set, start searching!
            // var results = await engine.search(string, [1000]);
            // // results is an array of [ doc-id, score ], sorted by score
            // // results[ 0 ][ 0 ] i.e. the top result is:

            // console.log("+++++++++++++++++++");
            // console.log(results.length);
            // console.log(results);
            // console.log("+++++++++++++++++++");


            // var ans = []

            // results.map((id) => {
            //     ans.push(docs[id[0]])
            // })

            // console.log(ans)

            res.json({
                status: 'success',
                result: products.length,
                products: products
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    createProduct: async (req, res) => {
        try {
            // const {product_id, title, price, description, content, images, category} = req.body;
            const { product_id, title, like, description, links, images, category } = req.body;
            if (!images) return res.status(400).json({ msg: "No image upload" })

            const product = await Products.findOne({ product_id })
            if (product)
                return res.status(400).json({ msg: "This product already exists." })

            const newProduct = new Products({
                // product_id, title: title.toLowerCase(), price, description, content, images, category
                product_id, title, like, description, links, images, category
            })

            await newProduct.save()
            res.json({ msg: "Created a product" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await Products.findByIdAndDelete(req.params.id)
            res.json({ msg: "Deleted a Product" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateProduct: async (req, res) => {
        try {
            // const {title, price, description, content, images, category} = req.body;
            const { title, like, description, links, images, category } = req.body;
            console.log('yes')
            if (!images) return res.status(400).json({ msg: "No image upload" })

            await Products.findOneAndUpdate({ _id: req.params.id }, {
                // title: title.toLowerCase(), price, description, content, images, category
                title, like, description, links, images, category
            })

            res.json({ msg: "Updated a Product" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}


module.exports = productCtrl