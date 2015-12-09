'use strict'

let data = [
  {
    "first_name": "Joyce",
    "last_name": "Horton",
    "gender": "male",
    "registered": "2015-05-31T11:07:59 -02:00",
    "tags": [
      "deserunt",
      "veniam",
      "adipisicing"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "Beach",
    "last_name": "Powell",
    "gender": "male",
    "registered": "2015-09-25T11:36:12 -02:00",
    "tags": [
      "duis",
      "sunt",
      "pariatur"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "Baird",
    "last_name": "Pearson",
    "gender": "male",
    "registered": "2015-04-16T05:21:43 -02:00",
    "tags": [
      "anim",
      "ad",
      "incididunt"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "English",
    "last_name": "Davis",
    "gender": "male",
    "registered": "2015-06-12T01:14:56 -02:00",
    "tags": [
      "consequat",
      "sint",
      "laborum"
    ],
    "favoriteFruit": "apple"
  },
  {
    "first_name": "Summer",
    "last_name": "Sawyer",
    "gender": "female",
    "registered": "2015-08-06T04:20:05 -02:00",
    "tags": [
      "qui",
      "pariatur",
      "dolor"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "Benson",
    "last_name": "Frye",
    "gender": "male",
    "registered": "2015-07-12T11:42:19 -02:00",
    "tags": [
      "dolore",
      "proident",
      "excepteur"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Fernandez",
    "last_name": "Kline",
    "gender": "male",
    "registered": "2015-07-03T06:17:40 -02:00",
    "tags": [
      "dolor",
      "et",
      "pariatur"
    ],
    "favoriteFruit": "apple"
  },
  {
    "first_name": "Jacquelyn",
    "last_name": "Nixon",
    "gender": "female",
    "registered": "2015-05-07T09:00:12 -02:00",
    "tags": [
      "id",
      "ut",
      "aliquip"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "Dorothea",
    "last_name": "Nolan",
    "gender": "female",
    "registered": "2015-11-13T11:45:35 -01:00",
    "tags": [
      "ipsum",
      "mollit",
      "nisi"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Price",
    "last_name": "Mayo",
    "gender": "male",
    "registered": "2015-08-02T05:12:23 -02:00",
    "tags": [
      "esse",
      "qui",
      "irure"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Lula",
    "last_name": "Compton",
    "gender": "female",
    "registered": "2015-05-30T05:35:51 -02:00",
    "tags": [
      "laboris",
      "minim",
      "Lorem"
    ],
    "favoriteFruit": "apple"
  },
  {
    "first_name": "Farmer",
    "last_name": "Whitfield",
    "gender": "male",
    "registered": "2015-04-17T05:37:48 -02:00",
    "tags": [
      "ipsum",
      "laboris",
      "non"
    ],
    "favoriteFruit": "apple"
  },
  {
    "first_name": "Goodman",
    "last_name": "Montoya",
    "gender": "male",
    "registered": "2015-01-22T02:15:23 -01:00",
    "tags": [
      "eiusmod",
      "pariatur",
      "cupidatat"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "Rosalyn",
    "last_name": "Blevins",
    "gender": "female",
    "registered": "2015-04-20T05:26:30 -02:00",
    "tags": [
      "nisi",
      "laborum",
      "dolor"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Key",
    "last_name": "Brooks",
    "gender": "male",
    "registered": "2015-08-18T06:52:57 -02:00",
    "tags": [
      "occaecat",
      "laborum",
      "proident"
    ],
    "favoriteFruit": "apple"
  },
  {
    "first_name": "Alyson",
    "last_name": "Lee",
    "gender": "female",
    "registered": "2015-07-25T09:52:08 -02:00",
    "tags": [
      "dolore",
      "cupidatat",
      "veniam"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "Thelma",
    "last_name": "Briggs",
    "gender": "female",
    "registered": "2015-03-20T04:15:43 -01:00",
    "tags": [
      "minim",
      "sunt",
      "culpa"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Baldwin",
    "last_name": "Conrad",
    "gender": "male",
    "registered": "2015-06-03T04:08:29 -02:00",
    "tags": [
      "aute",
      "officia",
      "minim"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "Strong",
    "last_name": "Mckenzie",
    "gender": "male",
    "registered": "2015-07-27T11:34:25 -02:00",
    "tags": [
      "cupidatat",
      "exercitation",
      "nostrud"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Romero",
    "last_name": "Church",
    "gender": "male",
    "registered": "2015-11-14T11:31:24 -01:00",
    "tags": [
      "laboris",
      "aute",
      "duis"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Mandy",
    "last_name": "Park",
    "gender": "female",
    "registered": "2015-05-08T04:50:55 -02:00",
    "tags": [
      "veniam",
      "cillum",
      "elit"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Hickman",
    "last_name": "Tate",
    "gender": "male",
    "registered": "2015-06-16T02:18:25 -02:00",
    "tags": [
      "quis",
      "consequat",
      "excepteur"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "Audra",
    "last_name": "Bailey",
    "gender": "female",
    "registered": "2015-11-15T10:05:01 -01:00",
    "tags": [
      "anim",
      "deserunt",
      "cillum"
    ],
    "favoriteFruit": "apple"
  },
  {
    "first_name": "Jacobson",
    "last_name": "Wilson",
    "gender": "male",
    "registered": "2015-01-15T08:25:34 -01:00",
    "tags": [
      "excepteur",
      "irure",
      "commodo"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Lillie",
    "last_name": "Elliott",
    "gender": "female",
    "registered": "2015-05-26T07:42:53 -02:00",
    "tags": [
      "pariatur",
      "do",
      "incididunt"
    ],
    "favoriteFruit": "apple"
  },
  {
    "first_name": "Lucille",
    "last_name": "Hughes",
    "gender": "female",
    "registered": "2015-07-29T11:27:33 -02:00",
    "tags": [
      "duis",
      "proident",
      "minim"
    ],
    "favoriteFruit": "apple"
  },
  {
    "first_name": "Stein",
    "last_name": "Barlow",
    "gender": "male",
    "registered": "2015-01-31T02:22:18 -01:00",
    "tags": [
      "fugiat",
      "sint",
      "officia"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Daugherty",
    "last_name": "Crane",
    "gender": "male",
    "registered": "2015-05-10T09:17:18 -02:00",
    "tags": [
      "commodo",
      "deserunt",
      "mollit"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Stacey",
    "last_name": "Berger",
    "gender": "female",
    "registered": "2015-01-16T12:14:18 -01:00",
    "tags": [
      "voluptate",
      "amet",
      "Lorem"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Powell",
    "last_name": "Weeks",
    "gender": "male",
    "registered": "2015-05-07T09:27:09 -02:00",
    "tags": [
      "duis",
      "est",
      "non"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Rhea",
    "last_name": "Hansen",
    "gender": "female",
    "registered": "2015-03-31T07:46:10 -02:00",
    "tags": [
      "id",
      "adipisicing",
      "irure"
    ],
    "favoriteFruit": "apple"
  },
  {
    "first_name": "Brandy",
    "last_name": "Crawford",
    "gender": "female",
    "registered": "2015-07-06T08:56:01 -02:00",
    "tags": [
      "quis",
      "eiusmod",
      "consectetur"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Whitfield",
    "last_name": "Wilkerson",
    "gender": "male",
    "registered": "2015-10-11T03:38:36 -02:00",
    "tags": [
      "cupidatat",
      "non",
      "esse"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "Helen",
    "last_name": "Baird",
    "gender": "female",
    "registered": "2015-10-08T06:59:25 -02:00",
    "tags": [
      "eiusmod",
      "magna",
      "enim"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "Rowe",
    "last_name": "Gilmore",
    "gender": "male",
    "registered": "2015-05-06T02:42:28 -02:00",
    "tags": [
      "reprehenderit",
      "tempor",
      "pariatur"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "Margret",
    "last_name": "Leach",
    "gender": "female",
    "registered": "2015-02-12T01:54:02 -01:00",
    "tags": [
      "nulla",
      "occaecat",
      "voluptate"
    ],
    "favoriteFruit": "apple"
  },
  {
    "first_name": "Julia",
    "last_name": "Stanley",
    "gender": "female",
    "registered": "2015-10-24T01:48:59 -02:00",
    "tags": [
      "adipisicing",
      "dolor",
      "consectetur"
    ],
    "favoriteFruit": "apple"
  },
  {
    "first_name": "Hooper",
    "last_name": "Mclaughlin",
    "gender": "male",
    "registered": "2015-01-30T09:37:33 -01:00",
    "tags": [
      "et",
      "et",
      "anim"
    ],
    "favoriteFruit": "strawberry"
  },
  {
    "first_name": "Beverly",
    "last_name": "Cole",
    "gender": "female",
    "registered": "2015-08-19T08:28:09 -02:00",
    "tags": [
      "consectetur",
      "velit",
      "fugiat"
    ],
    "favoriteFruit": "banana"
  },
  {
    "first_name": "Marla",
    "last_name": "Jacobson",
    "gender": "female",
    "registered": "2015-01-30T10:51:10 -01:00",
    "tags": [
      "amet",
      "cillum",
      "do"
    ],
    "favoriteFruit": "apple"
  }
];

module.exports = data;