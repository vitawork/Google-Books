const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "Becoming",
    authors: ["Michelle Obama"],
    description:
      "An intimate, powerful, and inspiring memoir by the former First Lady of the United States #1 NEW YORK TIMES BESTSELLER • OPRAH’S BOOK CLUB PICK • NAACP IMAGE AWARD WINNER In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America—the first African American to serve in that role—she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments. Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare. In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world’s most famous address. With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private, telling her full story as she has lived it—in her own words and on her own terms. Warm, wise, and revelatory, Becoming is the deeply personal reckoning of a woman of soul and substance who has steadily defied expectations—and whose story inspires us to do the same.",
    image:
      "http://books.google.com/books/content?id=YbtNDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link:
      "http://play.google.com/books/reader?id=YbtNDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api"
  },
  {
    title: "Lord of the Flies",
    authors: ["William Golding"],
    description:
      "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    image:
      "http://books.google.com/books/content?id=iyfgqV5dxXQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    link:
      "http://play.google.com/books/reader?id=iyfgqV5dxXQC&hl=&printsec=frontcover&source=gbs_api"
  },
  {
    title: "Peter's Destiny",
    authors: ["Craig Graham"],
    description:
      "When Peter steps through the wardrobe and into the land of Narnia, he is guided by Aslan, the Great Lion, to lead an army against the White Witch to free Narnia from her.",
    image:
      "http://books.google.com/books/content?id=KGCfG8pGAIQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    link:
      "http://play.google.com/books/reader?id=KGCfG8pGAIQC&hl=&printsec=frontcover&source=gbs_api"
  },
  {
    title: "The Hunger Games",
    authors: ["Suzanne Collins"],
    description:
      "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image:
      "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link:
      "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
  }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
