const express = require("express");
const pug = require("pug"); 
const path = require("path");
const app = express();
const router = require("./route");

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "pug"); 

app.use("/public", express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'files')))
// app.use(express.static(path.join(__dirname, 'uploads')))

var Articles = [{
    uid: "A001",
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
        },{
            path: "dress4.jpg"
        },{
            path: "dress5.jpg"
        }
    ]
},{
    uid: "A002",
    title: "Ropa damas de moda",
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
    uid: "A003",
    title: "Our first Look",
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
    uid: "A004",
    title: "wedding women dress",
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
    uid: "A005",
    title: "women suites",
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
    uid: "A006",
    title: "Violettas story",
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
    uid: "A007",
    title: "Une bell soiree",
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
    uid: "A008",
    title: "the Concert Dress",
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
    uid: "A009",
    title: "Celine Dress",
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
    uid: "A010",
    title: "Best fit 2021",
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
    uid: "A011",
    title: "For the winter dress",
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
    uid: "A012",
    title: "Only for you",
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

var cartItems = [
    {
        title: "Women dress",
        lot: "#lot: 251454",
        price: "Us$ 252",
        href: "dress0.jpg"
    },{
        title: "Women dress 1",
        lot: "#lot: 251454",
        price: "Us$ 562",
        href: "dress1.jpg"
    },{
        title: "Women dress 2",
        lot: "#lot: 251454",
        price: "Us$ 152",
        href: "dress2.jpg"
    }
];

app.get("/", (req, res) => {
    res.render("index", {
        title: "Sarash New York : Home",
        articles: Articles
    })
});

// app.use('/', router);

app.get("/checkout", (req, res) => {
    res.render("checkout", {
        title: "Sarash: Checkout",
        "cartItems": cartItems
    });
});

app.get("/login", (req, res) => {
    res.render("login", {
        title: "Sarash: Login"
    });
});

app.get("/articles/:id", async (req, res) => {
    let uid = req.params.id;

    const article = await Articles.findIndex((item)=> {
        return item.uid === uid;
    });
    let art = Articles[article];
    
    res.render("articles", {
        title: `Sarash: ${art.title}`,
        "article": art,
        "articles": Articles
    });
});

app.get("/collections/add-article", async (req, res) => {
    // let uid = req.params.id;

    // const article = await Articles.findIndex((item)=> {
    //     return item.uid === uid;
    // });
    // let art = Articles[article];
    
    res.render("add-article", {
        title: `Sarash: Add new Article`
    });
}); 

app.get("/collections", (req, res) => {
    res.render("collections", {
        title: "Sarash: Collections",
        "articles": Articles
    });
});

app.get("/events", (req, res) => {
    res.render("events", {
        title: "Sarash: Events"
    });
});

app.get("/contacts", (req, res) => {
    res.render("contacts", {
        title: "Sarash: Contacts"
    });
});

app.get("/contacts/response", (req, res) => {
    res.render("contact-response", {
        title: "Sarash: Contacts: Message Sent"
    });
});

app.post("/contacts", (req, res) => {
    res.redirect(301, "/contacts/response")
});

app.get("/about-me", (req, res) => {
    res.render("about-me", {
        title: "Sarash: About me"
    });
});

app.post("/suscribe", (req, res) => {
    res.redirect("/")
});

const port = 5500;
app.listen(port, ()=> {
    console.log(`Sarash App is running on port ${port}`)
});