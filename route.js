const express = require("express");
const Router = express.Router();
const pug = require("pug"); 
const path = require("path");


var Articles = [{
    title: "Modern Women Catalina",
    ratings: "⭐⭐⭐⭐⭐",
    viewsCount: 26,
    imageURL: "dress0.jpg", 
    likesCount: 20,
    price: 135,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!",
    imgs: [
        {
            path: "dress0.jpg"
        },{
            path: "dress1.jpg"
        },{
            path: "dress2.jpg"
        },{
            path: "dress3.jpg"
        }
    ]
},{
    title: "Modern Women Catalina",
    ratings: "⭐⭐⭐⭐⭐",
    viewsCount: 26,
    imageURL: "dress1.jpg",
    likesCount: 20,
    price: 135,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!",
    imgs: [
        {
            path: "dress0.jpg"
        },{
            path: "dress1.jpg"
        },{
            path: "dress2.jpg"
        },{
            path: "dress3.jpg"
        }
    ]
},{
    title: "Modern Women Catalina",
    ratings: "⭐⭐⭐⭐⭐",
    viewsCount: 26,
    imageURL: "dress2.jpg",
    likesCount: 20,
    price: 135,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!",
    imgs: [
        {
            path: "dress0.jpg"
        },{
            path: "dress1.jpg"
        },{
            path: "dress2.jpg"
        },{
            path: "dress3.jpg"
        }
    ]
},{
    title: "Modern Women Catalina",
    ratings: "⭐⭐⭐⭐⭐",
    viewsCount: 26,
    imageURL: "dress3.jpg",
    likesCount: 20,
    price: 135,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!",
    imgs: [
        {
            path: "dress0.jpg"
        },{
            path: "dress1.jpg"
        },{
            path: "dress2.jpg"
        },{
            path: "dress3.jpg"
        }
    ]
},{
    title: "Modern Women Catalina",
    ratings: "⭐⭐⭐⭐⭐",
    viewsCount: 26,
    imageURL: "dress4.jpg",
    likesCount: 20,
    price: 135,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!",
    imgs: [
        {
            path: "dress0.jpg"
        },{
            path: "dress1.jpg"
        },{
            path: "dress2.jpg"
        },{
            path: "dress3.jpg"
        }
    ]
},{
    title: "Modern Women Catalina",
    ratings: "⭐⭐⭐⭐⭐",
    viewsCount: 26,
    imageURL: "dress5.jpg",
    likesCount: 20,
    price: 135,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!",
    imgs: [
        {
            path: "dress0.jpg"
        },{
            path: "dress1.jpg"
        },{
            path: "dress2.jpg"
        },{
            path: "dress3.jpg"
        }
    ]
},{
    title: "Modern Women Catalina",
    ratings: "⭐⭐⭐⭐⭐",
    viewsCount: 26,
    imageURL: "dress6.jpg",
    likesCount: 20,
    price: 135,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!",
    imgs: [
        {
            path: "dress0.jpg"
        },{
            path: "dress1.jpg"
        },{
            path: "dress2.jpg"
        },{
            path: "dress3.jpg"
        }
    ]
},{
    title: "Modern Women Catalina",
    ratings: "⭐⭐⭐⭐⭐",
    viewsCount: 26,
    imageURL: "dress7.jpg",
    likesCount: 20,
    price: 135,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!",
    imgs: [
        {
            path: "dress0.jpg"
        },{
            path: "dress1.jpg"
        },{
            path: "dress2.jpg"
        },{
            path: "dress3.jpg"
        }
    ]
},{
    title: "Modern Women Catalina",
    ratings: "⭐⭐⭐⭐⭐",
    viewsCount: 26,
    imageURL: "dress8.jpg",
    likesCount: 20,
    price: 135,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!",
    imgs: [
        {
            path: "dress0.jpg"
        },{
            path: "dress1.jpg"
        },{
            path: "dress2.jpg"
        },{
            path: "dress3.jpg"
        }
    ]
},{
    title: "Modern Women Catalina",
    ratings: "⭐⭐⭐⭐⭐",
    viewsCount: 26,
    imageURL: "dress9.jpg",
    likesCount: 20,
    price: 135,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!",
    imgs: [
        {
            path: "dress0.jpg"
        },{
            path: "dress1.jpg"
        },{
            path: "dress2.jpg"
        },{
            path: "dress3.jpg"
        }
    ]
},{
    title: "Modern Women Catalina",
    ratings: "⭐⭐⭐⭐⭐",
    viewsCount: 26,
    imageURL: "dress10.jpg",
    likesCount: 20,
    price: 135,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!",
    imgs: [
        {
            path: "dress0.jpg"
        },{
            path: "dress1.jpg"
        },{
            path: "dress2.jpg"
        },{
            path: "dress3.jpg"
        }
    ]
},{
    title: "Modern Women Catalina",
    ratings: "⭐⭐⭐⭐⭐",
    viewsCount: 26,
    imageURL: "dress11.jpg",
    likesCount: 20,
    price: 135,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus aliquid nisi enim iure vitae quaerat laboriosam, modi sint voluptatum architecto praesentium quibusdam dicta labore laborum, quasi, reiciendis optio quisquam!",
    imgs: [
        {
            path: "dress0.jpg"
        },{
            path: "dress1.jpg"
        },{
            path: "dress2.jpg"
        },{
            path: "dress3.jpg"
        }
    ]
}
];

const getCheckout = (req, res, next)=> {
    res.render("index", {
        title: "Sarash: Home",
        articles: Articles
    });
}


Router.route("/")
    .get(getCheckout)
    .post((req, res, next) => {

    });

Router.route("/checkout")
    .get((req, res, next) => {
        res.render("checkout", {
            title: "Sarash: Checkout"
        });
    })
    .post((req, res, next) => {

    });

Router.route("/login")
    .get((req, res, next) => {
        res.render("login", {
            title: "Sarash: Login"
        });
    })
    .post((req, res, next) => {

    });

Router.route("/collection")
    .get((req, res, next) => {
        res.render("collection", {
            title: "Sarash: Collection"
        });
    })
    .post((req, res, next) => {

    });

Router.route("/about-me")
    .get((req, res, next) => {
        res.render("about-me", {
            title: "Sarash: About me"
        });
    })
    .post((req, res, next) => {

    });

Router.route("/events")
    .get((req, res, next) => {
        res.render("events", {
            title: "Sarash: Events"
        });
    })
    .post((req, res, next) => {

    });

Router.route("/articles")
    .get((req, res, next) => {
        res.render("articles", {
            title: "Sarash: Articles"
        });
    })
    .post((req, res, next) => {

    });



module.exports = Router;