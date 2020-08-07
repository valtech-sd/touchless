export default {
  itemConditions: ['help me find', 'where can I get', 'where can I find'],
  locationConditions: [
    'where is',
    'how do i get to',
    'navigate to',
    'directions',
  ],
  findConditions: [
    'where is',
    'how do i get to',
    'navigate to',
    'directions',
    'help me find',
    'where can I get',
    'where can I find',
  ],
  //x: 668.5, y: 327
  locations: [
    // Dining
    {
      name: 'Dunkin',
      directions: ['M 704 347 H 641 V 302 H 689 V 309'],
      items: ['donut'],
    },
    {
      name: 'Jose',
      directions: ['M 704 347 H 641 V 302 H 619 V 288'],
      items: ['tequila', 'wine'],
    },
    {
      name: 'Quiznos',
      directions: ['M 704 347 H 641 V 302 H 540 V 309'],
      items: ['sandwich', 'sub'],
    },
    {
      name: "Nathan's",
      directions: ['M 704 347 H 641 V 302 H 530 V 309'],
    },
    {
      name: "Shula's",
      directions: ['M 704 347 H 641 V 302 H 510 V 309'],
      items: ['beer', 'food', 'bar', 'hamburger'],
    },
    {
      name: 'Starbucks',
      directions: ['M 704 347 H 641 V 302 H 485 V 288'],
      items: ['coffee'],
    },

    // Shopping
    {
      name: 'Beaches',
      directions: ['M 704 347 H 641 V 302 H 421 V 309'],
      items: ['travelmart', 'market', 'travel'],
    },
    {
      name: 'Coastal',
      directions: ['M 704 347 H 641 V 302 H 610 V 309'],
      items: ['news'],
    },
    {
      name: "Dylan's",
      directions: ['M 704 347 H 641 V 302 H 592 V 309'],
      items: ['candy'],
    },
    {
      name: 'Brighton',
      directions: ['M 704 347 H 641 V 302 H 575 V 309'],
      items: ['gift', 'giftshop', 'collectibles', 'collection'],
    },
    {
      name: 'PGA',
      directions: ['M 704 347 H 641 V 302 H 560 V 309'],
      items: ['tour', 'golf'],
    },

    // Restrooms
    { name: 'Restroom', directions: ['M 704 347 H 654 V 331'] },
    // Airline Ticket Counter
    { name: 'Air Canada', directions: ['M 704 347 H 724 V 335'] },
    { name: 'Frontier', directions: ['M 704 347 H 702 V 335'] },
    { name: 'eurowings', directions: ['M 704 347 H 680 V 335'] },
    { name: 'United', directions: ['M 704 347 H 608 V 335'] },
    { name: 'Sun Country', directions: ['M 704 347 H 594 V 335'] },
    { name: 'Southwest', directions: ['M 704 347 H 566 V 335'] },
    { name: 'Spirit', directions: ['M 704 347 H 544 V 335'] },
    { name: 'WestJet', directions: ['M 704 347 H 522 V 335'] },
    { name: 'Delta', directions: ['M 704 347 H 502 V 335'] },
    { name: 'American', directions: ['M 704 347 H 415 V 335'] },
    { name: 'Jetblue', directions: ['M 704 347 H 383 V 335'] },

    // Concourse D Gates
    { name: 'D7', directions: ['M 704 347 H 641 V 302 H 335 L 172 137'] },
    {
      name: 'D10',
      directions: ['M 704 347 H 641 V 302 H 335 L 164.5  133 L 152.5  145'],
    },
    {
      name: 'D8',
      directions: ['M 704 347 H 641 V 302 H 335 L 196.5  166 L 182.5  176'],
    },
    {
      name: 'D5',
      directions: ['M 704 347 H 641 V 302 H 335 L 210.5  181 L 228.5  167'],
    },
    {
      name: 'D6',
      directions: ['M 704 347 H 641 V 302 H 335 L 218.5  189 L 205.5  200'],
    },
    {
      name: 'D3',
      directions: ['M 704 347 H 641 V 302 H 335 L 259.5  223 L 271.5  212'],
    },
    {
      name: 'D4',
      directions: ['M 704 347 H 641 V 302 H 335 L 272.5  243 L 263.5  256'],
    },
    {
      name: 'D1',
      directions: ['M 704 347 H 641 V 302 H 335 L 284.5  252 L 296.5  239'],
    },
    {
      name: 'D2',
      directions: ['M 704 347 H 641 V 302 H 335 L 304.5  272 L 292.5  283'],
    },

    {
      name: 'C1',
      directions: ['M 704 347 H 641 V 302 H 553 V 211 H 571'],
    },
    {
      name: 'C2',
      directions: ['M 704 347 H 641 V 302 H 553 V 192 H 534'],
    }, // "M 704 347 H 641 V 302 H 553 L 555.5  211 L 551.5  191 L 552.5  158 L 547.5  130 L 550.5  121 L 550.5  69"
    {
      name: 'C3',
      directions: ['M 704 347 H 641 V 302 H 553 V 158 H 571'],
    },
    {
      name: 'C4',
      directions: ['M 704 347 H 641 V 302 H 553 V 130 H 534'],
    },
    {
      name: 'C5',
      directions: ['M 704 347 H 641 V 302 H 553 V 121 H 571'],
    },
    {
      name: 'C6',
      directions: ['M 704 347 H 641 V 302 H 553 V 69 H 534'],
    },
    {
      name: 'C7',
      directions: ['M 704 347 H 641 V 302 H 553 V 69 H 571'],
    },
    {
      name: 'C8',
      directions: ['M 704 347 H 641 V 302 H 553 V 69 L 539 43'],
    },
    {
      name: 'C9',
      directions: ['M 704 347 H 641 V 302 H 553 V 69 L 564 43'],
    },
    {
      name: 'B1',
      directions: ['M 704 347 H 641 V 302 H 768 L 824.5  240 L 848.5  259'],
    },
    {
      name: 'B2',
      directions: ['M 704 347 H 641 V 302 H 768 L 820.5  243 L 810.5  232'],
    },
    {
      name: 'B3',
      directions: ['M 704 347 H 641 V 302 H 768 L 868.5  201 L 891.5  222'],
    },
    {
      name: 'B4',
      directions: ['M 704 347 H 641 V 302 H 768 L 854.5  218 L 838.5  204'],
    },
    {
      name: 'B5',
      directions: ['M 704 347 H 641 V 302 H 768 L 915.5  147 L 930.5  164'],
    },
    {
      name: 'B6',
      directions: ['M 704 347 H 641 V 302 H 768 L 899.5  170 L 886.5  156'],
    },
    {
      name: 'B7',
      directions: ['M 704 347 H 641 V 302 H 768 L 931.5  134 L 950.5  139'],
    },
    {
      name: 'B8',
      directions: [
        'M 704 347 H 641 V 302 H 768 L 927.5  137 L 927.5  137 L 916.5  126',
      ],
    },
    {
      name: 'B9',
      directions: [
        'M 704 347 H 641 V 302 H 768 L 924.5  137 L 924.5  137 L 931.5  119',
      ],
    },
    //"JC Penney's",
    //'Dillards',
    //{
    //  name: 'Dicks',
    //  directions: 'M 315 285 H 133',
    //  items: ['baseball', 'golf', 'basketball', 'tennis', 'soccer'],
    //},
    //{ name: 'Gap', directions: 'M 315 285 H 410 V 275' },
    //'Aeropostale',
    //'American Eagle',
    //'animal world',
    //'Aspen Dental',
    //{
    //  name: 'Starbucks',
    //  directions: 'M 315 285 H 535 V 150 H 495',
    //  items: ['coffee'],
    //},
    //'Verizon Wireless',
    //'Dollar Tree',
    //'Ace Hardware',
    //{
    //  name: 'McDonalds',
    //  directions: 'M 315 285 H 535 V 125',
    //  items: ['sandwich', 'hamburger'],
    //},
    //{
    //  name: 'Chipotle',
    //  directions: 'M 315 285 H 535 V 150 H 495',
    //  items: ['mexican', 'burrito', 'taco'],
    //},
  ],
  trySaying: [
    'navigate to Starbucks',
    'help me find coffee',
    'how do i get to get C8',
    'directions to Dunkin Donuts',
    'where is the American Airline ticket counter',
    'where can I get food',
  ],
};
