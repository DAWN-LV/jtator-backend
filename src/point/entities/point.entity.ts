export default [
  // Paper
  {
    id: 1,
    productIds: [1, 2, 3],
    points: [
      {
        id: 1,
        title: "Receiving paper into stock",
        description: "Delivering and checking paper to the warehouse, storing it in proper conditions.",
        timePerOne: 2,
      },
      {
        id: 2,
        title: "Preparing for slicing",
        description: "Preparatory steps before cutting paper to size.",
        timePerOne: 3,
      },
      {
        id: 3,
        title: "Slicing process",
        description: "The process of cutting paper into sheets.",
        timePerOne: 5,
      },
      {
        id: 4,
        title: "Quality control",
        description: "Checking the quality of cut sheets of paper.",
        timePerOne: 1,
      },
      {
        id: 5,
        title: "Packaging",
        description: "Sorting, packing and labelling of finished paper.",
        timePerOne: 2,
      },
      {
        id: 6,
        title: "Storage and shipping",
        description: "Storage of finished products in the warehouse and their shipment.",
        timePerOne: null,
      },
    ],
  },
  // Paper + Ink
  {
    id: 2,
    productIds: [4],
    points: [
      {
        id: 1,
        title: "Receiving paper into stock",
        description: "Delivering and checking paper to the warehouse, storing it in proper conditions.",
        timePerOne: 2,
      },
      {
        id: 2,
        title: "Printing",
        description: "Printing on the paper using high-quality printers.",
        timePerOne: 10,
      },
      {
        id: 3,
        title: "Preparing for slicing",
        description: "Preparatory steps before cutting paper to size.",
        timePerOne: 3,
      },
      {
        id: 4,
        title: "Slicing process",
        description: "The process of cutting paper into sheets.",
        timePerOne: 5,
      },
      {
        id: 5,
        title: "Quality control",
        description: "Checking the quality of cut sheets of paper.",
        timePerOne: 1,
      },
      {
        id: 6,
        title: "Packaging",
        description: "Sorting, packing and labelling of finished paper.",
        timePerOne: 2,
      },
      {
        id: 7,
        title: "Storage and shipping",
        description: "Storage of finished products in the warehouse and their shipment.",
        timePerOne: null,
      },
    ],
  },
  // Paper + Glue
  {
    id: 3,
    productIds: [7, 11],
    points: [
      {
        id: 1,
        title: "Receiving paper into stock",
        description: "Delivering and checking paper to the warehouse, storing it in proper conditions.",
        timePerOne: 2,
      },
      {
        id: 2,
        title: "Preparing for slicing",
        description: "Preparatory steps before cutting paper to size.",
        timePerOne: 3,
      },
      {
        id: 3,
        title: "Slicing process",
        description: "The process of cutting paper into sheets.",
        timePerOne: 5,
      },
      {
        id: 4,
        title: "Gluing",
        description: "The process of gluing sheets of paper together.",
        timePerOne: 4,
      },
      {
        id: 5,
        title: "Quality control",
        description: "Checking the quality of cut sheets of paper.",
        timePerOne: 1,
      },
      {
        id: 6,
        title: "Packaging",
        description: "Sorting, packing and labelling of finished paper.",
        timePerOne: 2,
      },
      {
        id: 7,
        title: "Storage and shipping",
        description: "Storage of finished products in the warehouse and their shipment.",
        timePerOne: null,
      },
    ],
  },
  // Paper + Inc + Glue
  {
    id: 4,
    productIds: [5, 6, 8, 9, 10],
    points: [
      {
        id: 1,
        title: "Receiving paper into stock",
        description: "Delivering and checking paper to the warehouse, storing it in proper conditions.",
        timePerOne: 2,
      },
      {
        id: 2,
        title: "Printing",
        description: "Printing on the paper using high-quality printers.",
        timePerOne: 10,
      },
      {
        id: 3,
        title: "Preparing for slicing",
        description: "Preparatory steps before cutting paper to size.",
        timePerOne: 3,
      },
      {
        id: 4,
        title: "Slicing process",
        description: "The process of cutting paper into sheets.",
        timePerOne: 5,
      },
      {
        id: 5,
        title: "Gluing",
        description: "The process of gluing sheets of paper together.",
        timePerOne: 4,
      },
      {
        id: 6,
        title: "Quality control",
        description: "Checking the quality of cut sheets of paper.",
        timePerOne: 1,
      },
      {
        id: 7,
        title: "Packaging",
        description: "Sorting, packing and labelling of finished paper.",
        timePerOne: 2,
      },
      {
        id: 8,
        title: "Storage and shipping",
        description: "Storage of finished products in the warehouse and their shipment.",
        timePerOne: null,
      },
    ],
  },
]