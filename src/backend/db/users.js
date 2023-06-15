import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstname: "ashok",
    lastname: "patel",
    username: "ashokpatel",
    password: "Ashokpatel123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "A people loving government worker!",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
    website: "https://parksandrecreation.fandom.com/wiki/Leslie_Knope",
    followers: [
      {
        firstname: "Shubham",
        lastname: "Soni",
        username: "shubhamsoni",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
      },
      {
        firstname: "Bharati",
        lastname: "Subramanian",
        username: "bhaaratii",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
      },
      {
        firstname: "John",
        lastname: "Doe",
        username: "johndoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
      },
      {
        firstname: "Jane",
        lastname: "Doe",
        username: "janedoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
      },
    ],
    following: [
      {
        firstname: "Shubham",
        lastname: "Soni",
        username: "shubhamsoni",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
      },
      {
        firstname: "John",
        lastname: "Doe",
        username: "johndoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
      },
      {
        firstname: "Jane",
        lastname: "Doe",
        username: "janedoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
      },
      {
        firstname: "Hermione",
        lastname: "Granger",
        username: "hergranger",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
      },
      {
        firstname: "Bharati",
        lastname: "Subramanian",
        username: "bhaaratii",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
      },
    ],

    bookmarks: [],
  },
  {
    _id: uuid(),
    firstname: "Shubham",
    lastname: "Soni",
    username: "shubhamsoni",
    password: "shubhamsoni123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Loves Code, Books, Coffee, and Songs in no particular order!",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
    website: "https://www.shubhamsoni.me/",
    followers: [
      {
        firstname: "ashok",
        lastname: "patel",
        username: "ashokpatel",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        website: "https://parksandrecreation.fandom.com/wiki/Leslie_Knope",
      },
      {
        firstname: "Bharati",
        lastname: "Subramanian",
        username: "bhaaratii",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
      },
      {
        firstname: "Annachase",
        lastname: "Chase",
        username: "annachase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
      },
      {
        firstname: "Perseus",
        lastname: "Jackson",
        username: "percyblues",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
      },
    ],
    following: [
      {
        firstname: "ashok",
        lastname: "patel",
        username: "ashokpatel",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        website: "https://parksandrecreation.fandom.com/wiki/Leslie_Knope",
      },
      {
        firstname: "Bharati",
        lastname: "Subramanian",
        username: "bhaaratii",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
      },
      {
        firstname: "Jane",
        lastname: "Doe",
        username: "janedoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
      },
    ],

    bookmarks: [],
  },
  {
    _id: uuid(),
    firstname: "Bharati",
    lastname: "Subramanian",
    username: "bhaaratii",
    password: "bharati098",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Loves Code, Books, Coffee, and Songs in no particular order!",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
    website: "bharati-21.github.io",
    followers: [
      {
        firstname: "Shubham",
        lastname: "Soni",
        username: "shubhamsoni",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
      },
      {
        firstname: "Hermione",
        lastname: "Granger",
        username: "hergranger",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
      },
      {
        firstname: "Alex",
        lastname: "Smith",
        username: "youknowwho",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
      },
      {
        firstname: "ashok",
        lastname: "patel",
        username: "ashokpatel",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        website: "https://parksandrecreation.fandom.com/wiki/Leslie_Knope",
      },
    ],
    following: [
      {
        firstname: "ashok",
        lastname: "patel",
        username: "ashokpatel",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        website: "https://parksandrecreation.fandom.com/wiki/Leslie_Knope",
      },
      {
        firstname: "Shubham",
        lastname: "Soni",
        username: "shubhamsoni",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
      },
      {
        firstname: "Hermione",
        lastname: "Granger",
        username: "hergranger",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
      },
      {
        firstname: "Annachase",
        lastname: "Chase",
        username: "annachase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
      },
      {
        firstname: "Perseus",
        lastname: "Jackson",
        username: "percyblues",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
      },
    ],

    bookmarks: [],
  },
  {
    _id: uuid(),
    firstname: "John",
    lastname: "Doe",
    username: "johndoe",
    password: "johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Graphic Design | UI/ UX Design | Photography",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
    website: "https://johndoe-portfolio.netlify.app/",
    followers: [
      {
        firstname: "ashok",
        lastname: "patel",
        username: "ashokpatel",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        website: "https://parksandrecreation.fandom.com/wiki/Leslie_Knope",
      },
      {
        firstname: "Jane",
        lastname: "Doe",
        username: "janedoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
      },
      {
        firstname: "Hermione",
        lastname: "Granger",
        username: "hergranger",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
      },
      {
        firstname: "Perseus",
        lastname: "Jackson",
        username: "percyblues",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
      },
    ],
    following: [
      {
        firstname: "ashok",
        lastname: "patel",
        username: "ashokpatel",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        website: "https://parksandrecreation.fandom.com/wiki/Leslie_Knope",
      },
      {
        firstname: "Jane",
        lastname: "Doe",
        username: "janedoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
      },
      {
        firstname: "Alex",
        lastname: "Smith",
        username: "youknowwho",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
      },
    ],

    bookmarks: [],
  },
  {
    _id: uuid(),
    firstname: "Jane",
    lastname: "Doe",
    username: "janedoe",
    password: "janedoe789",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Web Developer",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
    website: "https://dev-portfolio-template.netlify.app/",
    followers: [
      {
        firstname: "ashok",
        lastname: "patel",
        username: "ashokpatel",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        website: "https://parksandrecreation.fandom.com/wiki/Leslie_Knope",
      },
      {
        firstname: "Shubham",
        lastname: "Soni",
        username: "shubhamsoni",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
      },
      {
        firstname: "John",
        lastname: "Doe",
        username: "johndoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
      },
      {
        firstname: "Annachase",
        lastname: "Chase",
        username: "annachase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
      },
      {
        firstname: "Ryan",
        lastname: "Terry",
        username: "terrry",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
      },
    ],
    following: [
      {
        firstname: "ashok",
        lastname: "patel",
        username: "ashokpatel",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        website: "https://parksandrecreation.fandom.com/wiki/Leslie_Knope",
      },
      {
        firstname: "John",
        lastname: "Doe",
        username: "johndoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
      },
      {
        firstname: "Alex",
        lastname: "Smith",
        username: "youknowwho",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
      },
    ],

    bookmarks: [],
  },
  {
    _id: uuid(),
    firstname: "Hermione",
    lastname: "Granger",
    username: "hergranger",
    password: "granferspew",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Web Developer",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
    website: "https://harrypotter.fandom.com/wiki/Hermione_Granger",
    followers: [
      {
        firstname: "ashok",
        lastname: "patel",
        username: "ashokpatel",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1653879146/latest_idft5q.png",
        website: "https://parksandrecreation.fandom.com/wiki/Leslie_Knope",
      },
      {
        firstname: "Bharati",
        lastname: "Subramanian",
        username: "bhaaratii",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
      },
      {
        firstname: "Annachase",
        lastname: "Chase",
        username: "annachase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
      },
      {
        firstname: "Perseus",
        lastname: "Jackson",
        username: "percyblues",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
      },
    ],
    following: [
      {
        firstname: "Bharati",
        lastname: "Subramanian",
        username: "bhaaratii",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
      },
      {
        firstname: "John",
        lastname: "Doe",
        username: "johndoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
      },
      {
        firstname: "Annachase",
        lastname: "Chase",
        username: "annachase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
      },
      {
        firstname: "Perseus",
        lastname: "Jackson",
        username: "percyblues",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
      },
    ],

    bookmarks: [],
  },
  {
    _id: uuid(),
    firstname: "Annachase",
    lastname: "Chase",
    username: "annachase",
    password: "grayeyes",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Architecht | Demigod | Daughter of Athena",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
    website: "https://riordan.fandom.com/wiki/Annabeth_Chase",
    followers: [
      {
        firstname: "Bharati",
        lastname: "Subramanian",
        username: "bhaaratii",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
      },
      {
        firstname: "Hermione",
        lastname: "Granger",
        username: "hergranger",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
      },
      {
        firstname: "Perseus",
        lastname: "Jackson",
        username: "percyblues",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
      },
      {
        firstname: "Alex",
        lastname: "Smith",
        username: "youknowwho",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
      },
      {
        firstname: "Ryan",
        lastname: "Terry",
        username: "terrry",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
      },
    ],
    following: [
      {
        firstname: "Shubham",
        lastname: "Soni",
        username: "shubhamsoni",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
      },
      {
        firstname: "Jane",
        lastname: "Doe",
        username: "janedoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
      },
      {
        firstname: "Hermione",
        lastname: "Granger",
        username: "hergranger",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
      },
      {
        firstname: "Perseus",
        lastname: "Jackson",
        username: "percyblues",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
      },
    ],

    bookmarks: [],
  },
  {
    _id: uuid(),
    firstname: "Perseus",
    lastname: "Jackson",
    username: "percyblues",
    password: "riptide",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Demigod | Son of Poseidon | Loves Annachase and all food blue!",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
    website: "https://riordan.fandom.com/wiki/Percy_Jackson",
    followers: [
      {
        firstname: "Bharati",
        lastname: "Subramanian",
        username: "bhaaratii",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
      },
      {
        firstname: "Hermione",
        lastname: "Granger",
        username: "hergranger",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
      },
      {
        firstname: "Annachase",
        lastname: "Chase",
        username: "annachase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
      },
      {
        firstname: "Alex",
        lastname: "Smith",
        username: "youknowwho",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
      },
    ],
    following: [
      {
        firstname: "Shubham",
        lastname: "Soni",
        username: "shubhamsoni",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721963/photo-1633332755192-727a05c4013d_qo2tty.jpg",
      },
      {
        firstname: "John",
        lastname: "Doe",
        username: "johndoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
      },
      {
        firstname: "Hermione",
        lastname: "Granger",
        username: "hergranger",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722029/latest_ccm17c.jpg",
      },
      {
        firstname: "Annachase",
        lastname: "Chase",
        username: "annachase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
      },
    ],

    bookmarks: [],
  },
  {
    _id: uuid(),
    firstname: "Alex",
    lastname: "Smith",
    username: "youknowwho",
    password: "emgraphics",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Passionate Graphic Designer from New York",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
    website: "https://bootstrapmade.com/demo/templates/iPortfolio/",
    followers: [
      {
        firstname: "John",
        lastname: "Doe",
        username: "johndoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721997/photo-1531427186611-ecfd6d936c79_tmpw71.jpg",
      },
      {
        firstname: "Jane",
        lastname: "Doe",
        username: "janedoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
      },
    ],
    following: [
      {
        firstname: "Bharati",
        lastname: "Subramanian",
        username: "bhaaratii",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652721980/Bharati2_qxscpm.png",
      },
      {
        firstname: "Annachase",
        lastname: "Chase",
        username: "annachase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
      },
      {
        firstname: "Perseus",
        lastname: "Jackson",
        username: "percyblues",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722054/596_pkjzf6.jpg",
      },
      {
        firstname: "Alison",
        lastname: "Day",
        username: "aliiday",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
      },
    ],

    bookmarks: [],
  },
  {
    _id: uuid(),
    firstname: "Ryan",
    lastname: "Terry",
    username: "terrry",
    password: "9uQFF1Lh",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Award winning 2D generalist that loves making beautiful games, characters, apps, products and more.",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
    website: "https://ryanterry.net/",
    followers: [
      {
        firstname: "Sheldon",
        lastname: "Borenstein",
        username: "shelbor",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
      },
      {
        firstname: "Dennis",
        lastname: "Snellenberg",
        username: "dennsnell",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
      },
    ],
    following: [
      {
        firstname: "Annachase",
        lastname: "Chase",
        username: "annachase",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722040/596_jes87l.jpg",
      },
      {
        firstname: "Jane",
        lastname: "Doe",
        username: "janedoe",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722016/landingImg_dff0ku.png",
      },
    ],

    bookmarks: [],
  },
  {
    _id: uuid(),
    firstname: "Sheldon",
    lastname: "Borenstein",
    username: "shelbor",
    password: "CQutx25i8r",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "I teach at Sheldon’s art academy.",
    website: "https://www.artstation.com/sheldonborenstein",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
    followers: [],
    following: [
      {
        firstname: "Ryan",
        lastname: "Terry",
        username: "terrry",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
      },
      {
        firstname: "Jennifer",
        lastname: "Jäger",
        username: "jennyj",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
      },
    ],
  },
  {
    _id: uuid(),
    firstname: "Alison",
    lastname: "Day",
    username: "aliiday",
    password: "zY1nE46Zm",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Bestselling author, award-winning food writer, recipe developer, and food stylist.",
    website: "https://yummybeet.com/",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
    followers: [
      {
        firstname: "Alex",
        lastname: "Smith",
        username: "youknowwho",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652722175/profile-img_nxszbk.jpg",
      },
    ],
    following: [
      {
        firstname: "Dennis",
        lastname: "Snellenberg",
        username: "dennsnell",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
      },
    ],

    bookmarks: [],
  },
  {
    _id: uuid(),
    firstname: "Jennifer",
    lastname: "Jäger",
    username: "jennyj",
    password: "87hdjdhk",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Creative User Experience and Interface Designer",
    website: "https://jennifer-portfolio.netlify.app/",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
    followers: [
      {
        firstname: "Dennis",
        lastname: "Snellenberg",
        username: "dennsnell",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
      },
      {
        firstname: "Sheldon",
        lastname: "Borenstein",
        username: "shelbor",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858279/photo-1507003211169-0a1dd7228f2d_zgfurs.jpg",
      },
    ],
    following: [
      {
        firstname: "Dennis",
        lastname: "Snellenberg",
        username: "dennsnell",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
      },
    ],
  },

  {
    _id: uuid(),
    firstname: "Dennis",
    lastname: "Snellenberg",
    username: "dennsnell",
    password: "jsgjdsgj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Helping brands thrive in the digital world",
    website: "https://dennissnellenberg.com/",
    profileImage:
      "https://res.cloudinary.com/dylkclyom/image/upload/v1652859048/DSC07033_jomlkt.jpg",
    followers: [
      {
        firstname: "Jennifer",
        lastname: "Jäger",
        username: "jennyj",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
      },
      {
        firstname: "Alison",
        lastname: "Day",
        username: "aliiday",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858637/Allison-Day-1-2_skydx2.jpg",
      },
    ],
    following: [
      {
        firstname: "Ryan",
        lastname: "Terry",
        username: "terrry",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652857916/photo-1527980965255-d3b416303d12_qg20fu.jpg",
      },
      {
        firstname: "Jennifer",
        lastname: "Jäger",
        username: "jennyj",
        profileImage:
          "https://res.cloudinary.com/dylkclyom/image/upload/v1652858651/Circle_Team_Jennifer_qlyfwo.png",
      },
    ],

    bookmarks: [],
  },
];
