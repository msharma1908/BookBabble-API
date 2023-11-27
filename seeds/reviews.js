/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const fs = require("fs");
const express = require("express");
const app = express();
const reviews = [
  {
    id: 1,
    review:
      "It's been one week since I finished Iron Flame and I am still unwell. No matter how hard I try, I cannot get this book out of my head, all because of those last 25 pages . . . ⁠How dare Rebecca do this to us, knowing we have to wait god knows how long for book 3.",
    book_id: 2,
  },
  {
    id: 2,
    review:
      "if you decided not to read this book, you are missing nothing I can't believe this trash got approved for 5 books, RY literally what more do you have to say??",
    book_id: 2,
  },
  {
    id: 3,
    review: "A truly richly accomplished piece of work.",
    book_id: 1,
  },
  {
    id: 4,
    review:
      "Must-read for fans of fantasy romance and admirers of Yarros’s high standards",
    book_id: 1,
  },
  {
    id: 5,
    review:
      "It’s a book that leaves you contemplating long after you’ve turned the last page",
    book_id: 3,
  },
  {
    id: 6,
    review: "Most satisfying and intense stories he has ever produced.",
    book_id: 3,
  },
  {
    id: 7,
    review:
      "A must-read for fans of historical fiction and admirers of Albom’s high standards",
    book_id: 4,
  },
  {
    id: 8,
    review:
      "Powerful novel that moves from a coastal Greek city during the Holocaust, to America, where the intertwined lives of three survivors are forever changed by the perils of deception and the grace of redemption",
    book_id: 4,
  },
  {
    id: 9,
    review:
      "Feels like somewhat loopy standard-issue legal thriller has been papered over with characters from The Firm",
    book_id: 5,
  },
  {
    id: 10,
    review: "Flattening and uplifting.",
    book_id: 5,
  },
  {
    id: 11,
    review: "One of the best novels of the year",
    book_id: 6,
  },
  {
    id: 12,
    review:
      "The depth of characterizations and the pitch-perfect dialogue of his characters have been particularly appreciated",
    book_id: 6,
  },
  {
    id: 13,
    review:
      " McBride’s storytelling prowess shines through, with readers lauding his ability to weave a complex narrative that explores the life-or-death issues behind every move in the game",
    book_id: 7,
  },
  {
    id: 14,
    review:
      "Its boisterous hymn to community, mercy, and karmic justice is worth being sung out loud",
    book_id: 7,
  },
  {
    id: 15,
    review:
      "Dynamic duo of Mickey Haller and Harry Bosch in a riveting narrative that keeps you hooked from the first page to the last",
    book_id: 8,
  },
  {
    id: 16,
    review:
      "“Resurrection Walk” is a testament to Michael Connelly’s mastery of the legal thriller genre",
    book_id: 8,
  },
  {
    id: 17,
    review: "Engaging and addictive writing",
    book_id: 9,
  },
  {
    id: 18,
    review:
      "Fast-paced novel that takes readers on a journey through the life of Elizabeth Zott, a chemist who finds herself the star of a cooking show",
    book_id: 9,
  },
  {
    id: 19,
    review:
      "It’s a gripping thriller that keeps readers on the edge of their seats",
    book_id: 10,
  },
  {
    id: 20,
    review:
      "“The Secret” is the 28th installment of the best-selling Jack Reacher series. The story is set in 1992 and follows Jack Reacher, an exceptional soldier",
    book_id: 10,
  },
  {
    id: 21,
    review:
      "Must-read for those who appreciate crime fiction and character-driven narratives",
    book_id: 11,
  },
  {
    id: 22,
    review:
      "“Dirty Thirty” remains a classic piece of literature that offers a brilliant evocation of time and place",
    book_id: 11,
  },
  {
    id: 23,
    review:
      "It’s a fast-paced mission that wraps up its plot in a satisfying way and leaves readers eager for more",
    book_id: 12,
  },
  {
    id: 24,
    review:
      "It's a must-read for those who appreciate poetry and character-driven narratives",
    book_id: 13,
  },
  {
    id: 25,
    review:
      "The book is filled with over seventy poems that chronicle all the ways in which we fit ourselves into the shape of the ones we love, even if it means losing ourselves in the process",
    book_id: 13,
  },
  {
    id: 26,
    review:
      "The novel is praised for its composite of the crime and horror genres, and its dark and lyrical thriller set during the pandemic",
    book_id: 14,
  },
  {
    id: 27,
    review:
      "Compelling novel that takes readers on a journey through the gruesome truth behind multiple disappearances in a midwestern town",
    book_id: 14,
  },
  {
    id: 28,
    review:
      "Hitting most of the big plot points of “David Copperfield”, but in ways that fit perfectly with the new time and setting",
    book_id: 15,
  },
  {
    id: 29,
    review:
      "Powerful reimagining of Charles Dickens’s “David Copperfield”, transposed to the contemporary American South",
    book_id: 15,
  },
  {
    id: 30,
    review:
      "Must-read for those who appreciate fantasy fiction and character-driven narratives",
    book_id: 16,
  },
  {
    id: 31,
    review:
      "Vivid depiction of the spectacular world of Middle-earth and recounts the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent",
    book_id: 16,
  },
  {
    id: 32,
    review:
      "The book is filled with brave and good heroes and heroines, despicable villains, a decent dose of comic relief, a great and complex plot, and plenty of suspense of the mostly restrained, emotional variety",
    book_id: 17,
  },
  {
    id: 33,
    review:
      "“Pride and Prejudice” by Jane Austen is a timeless classic that offers a detailed picture of life in the 19th century.",
    book_id: 17,
  },
  {
    id: 34,
    review:
      "The story revolves around two children, Lyra Belacqua and Will Parry, who are on a perilous journey through shimmering haunted otherworlds",
    book_id: 18,
  },
  {
    id: 35,
    review:
      "An epic trilogy of fantasy novels that takes readers on a journey through a series of parallel universes",
    book_id: 18,
  },
  {
    id: 36,
    review:
      "It’s a wild satire of present institutions and a fun, relaxing read even when Earth is destroyed",
    book_id: 19,
  },
  {
    id: 37,
    review: "Classic of science fiction and humor",
    book_id: 19,
  },
  {
    id: 38,
    review:
      "It explores themes of friendship, courage, and the power of good over evil",
    book_id: 20,
  },
  {
    id: 39,
    review:
      "Thrilling adventure that takes readers on a journey through the magical world of Hogwarts",
    book_id: 20,
  },
  {
    id: 40,
    review:
      "The novel is deserving of its classic status, with a timeless message of love that remains relevant today",
    book_id: 21,
  },
  {
    id: 41,
    review:
      "Timeless classic that provides a deep insight into the life of Scout, a child living in a racist society",
    book_id: 21,
  },
  {
    id: 42,
    review:
      "Charming and funny narrative, making it perfectly suitable for all ages",
    book_id: 22,
  },
  {
    id: 43,
    review:
      "It’s touchingly faithful to Walt’s original 1960s cartoons as much as A.A. Milne’s stories",
    book_id: 22,
  },
  {
    id: 44,
    review:
      "The story is set in a world where the Party and its leader, Big Brother, exert total control",
    book_id: 23,
  },
  {
    id: 45,
    review:
      "“Nineteen Eighty-Four” is a powerful, thought-provoking novel that presents a compelling portrait of a dystopian future",
    book_id: 23,
  },
  {
    id: 46,
    review:
      "The story revolves around four children – Lucy, Peter, Susan, and Edmund – who enter Narnia through a wardrobe and find themselves in a land where animals talk and an evil witch reigns",
    book_id: 24,
  },
  {
    id: 47,
    review:
      "“The Lion, the Witch and the Wardrobe” is a timeless classic that transports readers to the magical world of Narnia",
    book_id: 24,
  },
  {
    id: 48,
    review:
      " The narrative is enriched with a touching story and is one of the most remarkably written classics",
    book_id: 25,
  },
  {
    id: 49,
    review:
      "“Jane Eyre” is a classic novel that provides a deep insight into the life of a young English country girl, Jane, who endures a harsh childhood being an orphan and taken in under the guidance of her maltreating aunt, Mrs. Reed",
    book_id: 25,
  },
  {
    id: 50,
    review:
      "Mr. Heller’s story rises above mere realism and soars into the stratosphere of satire, grotesque exaggeration, fantasy, farce, and sheer lunacy",
    book_id: 26,
  },
  {
    id: 51,
    review:
      "“Catch-22” is a classic of American satire writing that takes readers on a journey through the madness of war",
    book_id: 26,
  },
  {
    id: 52,
    review:
      "Despite these minor drawbacks, “Wuthering Heights” remains a classic piece of literature that offers a brilliant evocation of time and place",
    book_id: 27,
  },
  {
    id: 53,
    review:
      "“Wuthering Heights” is a classic novel that takes readers on a journey through the grim moors of winter",
    book_id: 27,
  },
  {
    id: 54,
    review:
      "It is neither anti-war nor heroic, but a fitting tribute to all who served in the Great War",
    book_id: 28,
  },
  {
    id: 55,
    review:
      "“Birdsong” is a compelling novel that takes readers on a journey through the horrors and passions of the Great War",
    book_id: 28,
  },
  {
    id: 56,
    review:
      " The novel is set in the beautiful Manderley and revolves around a young woman who marries a rich widower and finds herself haunted by the ghost of her husband’s ex-wife",
    book_id: 29,
  },
  {
    id: 57,
    review:
      "“Rebecca” is a masterful story of suspense that takes readers into a world of mystery and intrigue",
    book_id: 29,
  },
  {
    id: 58,
    review:
      "“The Catcher in the Rye” is a must-read for those who appreciate historical fiction and character-driven narratives",
    book_id: 30,
  },
  {
    id: 59,
    review:
      "“The Catcher in the Rye” is a classic novel that provides a deep insight into adolescence and the rebellious teenage mind",
    book_id: 30,
  },
  {
    id: 60,
    review:
      "The book is praised for its blend of humor, adventure, and moral lessons",
    book_id: 31,
  },
  {
    id: 61,
    review:
      "“Wind in the Willows” is a delightful tale that has entertained readers of all ages. The story is set in the English countryside and follows the adventures of four anthropomorphic animals: Mole, Ratty, Toad, and Badger",
    book_id: 31,
  },
  {
    id: 62,
    review:
      "The novel is praised for its vivid portrayal of life during the early 19th century Victorian England",
    book_id: 32,
  },
  {
    id: 63,
    review:
      "“Great Expectations” is a classic novel by Charles Dickens that is known for its intricate plot and memorable characters",
    book_id: 32,
  },
  {
    id: 64,
    review:
      "Louisa May Alcott's writing is elegant, poignant, and perfect for the era it is set in.",
    book_id: 33,
  },
  {
    id: 65,
    review:
      "“Little Women” is a heartwarming classic that has captivated readers of all ages and genders.",
    book_id: 33,
  },
  {
    id: 66,
    review:
      "The narrative is filled with fortuitous coincidences, extraordinary parallels, and set pieces, keeping readers engaged until the end",
    book_id: 34,
  },
  {
    id: 67,
    review:
      "“Captain Corelli's Mandolin” is a beautifully crafted novel that takes readers to the Greek island of Cephalonia during World War II.",
    book_id: 34,
  },
  {
    id: 68,
    review:
      "The novel is a must-read for those interested in historical fiction and character-driven narratives",
    book_id: 35,
  },
  {
    id: 69,
    review:
      "'War and Peace' is a literary masterpiece that offers a profound exploration of history, philosophy, and the human condition. Set during the Napoleonic Wars, the novel intertwines the lives of two very different families of the Russian nobility",
    book_id: 35,
  },
  {
    id: 70,
    review:
      "Mitchell's narrative is rich in historical detail, providing a vivid depiction of the Civil War and Reconstruction era. However, the novel’s portrayal of race and slavery has sparked controversy, and some readers may find it challenging to reconcile these aspects with the engrossing storyline.",
    book_id: 36,
  },
  {
    id: 71,
    review:
      "Some readers may find it challenging to follow the story without having read “Network Effect” first",
    book_id: 12,
  },
  {
    id: 72,
    review:
      "“Gone with the Wind” is a sweeping epic that transports readers to the American South during one of the most tumultuous periods in history. The novel’s protagonist, Scarlett O'Hara, is a character of immense complexity, evolving from a naive young girl into a woman of resilience and determination.",
    book_id: 36,
  },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("book_reviews").del(reviews);
  await knex("book_reviews").insert(reviews);
};
