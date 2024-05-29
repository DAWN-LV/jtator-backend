export default [
  // Paper
  {
    id: 1,
    productIds: [1, 2, 3],
    points: [
      {
        id: 1,
        title: 'Receiving paper into stock',
        description:
          'Delivering and checking paper to the warehouse, storing it in proper conditions.',
        timePerOne: 2,
      },
      {
        id: 2,
        title: 'Preparing for slicing',
        description: 'Preparatory steps before cutting paper to A4 size.',
        timePerOne: 3,
      },
      {
        id: 3,
        title: 'Slicing process',
        description: 'The process of cutting paper into A4 sheets.',
        timePerOne: 5,
      },
      {
        id: 4,
        title: 'Quality control',
        description: 'Checking the quality of cut sheets of A4 paper.',
        timePerOne: 1,
      },
      {
        id: 5,
        title: 'Packaging',
        description: 'Sorting, packing and labelling of finished A4 paper.',
        timePerOne: 2,
      },
      {
        id: 6,
        title: 'Storage and shipping',
        description:
          'Storage of finished products in the warehouse and their shipment.',
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
        title: 'Material selection',
        description:
          'Selecting the appropriate paper and other materials required for diploma production.',
        timePerOne: 2,
      },
      {
        id: 2,
        title: 'Printing',
        description: 'Printing the diplomas using high-quality printers.',
        timePerOne: 10,
      },
      {
        id: 3,
        title: 'Lamination (if applicable)',
        description:
          'Applying a protective laminate layer to the diplomas, if required.',
        timePerOne: 4,
      },
      {
        id: 4,
        title: 'Cutting and trimming',
        description:
          'Cutting the printed sheets to the final diploma size and trimming any excess.',
        timePerOne: 3,
      },
      {
        id: 5,
        title: 'Quality control',
        description:
          'Inspecting each diploma for printing errors, alignment, and overall quality.',
        timePerOne: 2,
      },
      {
        id: 6,
        title: 'Numbering and signing',
        description:
          'Applying unique identification numbers and signatures to the diplomas as required.',
        timePerOne: 5,
      },
      {
        id: 7,
        title: 'Embossing or sealing',
        description: 'Adding official seals or embossing for authenticity.',
        timePerOne: 4,
      },
      {
        id: 8,
        title: 'Packaging',
        description:
          'Carefully packaging the finished diplomas for protection during shipping.',
        timePerOne: 2,
      },
      {
        id: 9,
        title: 'Storage',
        description:
          'Storing the diplomas in a controlled environment until they are ready for shipment.',
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
        title: 'Material selection',
        description:
          'Choosing the appropriate paper, cover material, and other necessary supplies.',
        timePerOne: 2,
      },
      {
        id: 2,
        title: 'Printing pages',
        description:
          'Printing the inner pages of the sketchbook or photo album.',
        timePerOne: 10,
      },
      {
        id: 3,
        title: 'Cover printing',
        description: 'Printing the covers for the sketchbook or photo album.',
        timePerOne: 5,
      },
      {
        id: 4,
        title: 'Lamination (if applicable)',
        description:
          'Applying a protective laminate to the covers, if required.',
        timePerOne: 4,
      },
      {
        id: 5,
        title: 'Cutting and trimming',
        description: 'Cutting the printed sheets and covers to the final size.',
        timePerOne: 3,
      },
      {
        id: 6,
        title: 'Binding',
        description:
          'Binding the pages together with the cover using spiral, glue, or stitching methods.',
        timePerOne: 6,
      },
      {
        id: 7,
        title: 'Quality control',
        description:
          'Inspecting each sketchbook or photo album for printing and binding quality.',
        timePerOne: 2,
      },
      {
        id: 8,
        title: 'Embossing or stamping (if applicable)',
        description:
          'Adding any special embossing, stamping, or decorations to the cover.',
        timePerOne: 4,
      },
      {
        id: 9,
        title: 'Packaging',
        description:
          'Carefully packaging the finished sketchbooks or photo albums for shipping.',
        timePerOne: 2,
      },
      {
        id: 10,
        title: 'Storage',
        description:
          'Storing the products in a controlled environment until shipment.',
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
        title: 'Material selection',
        description:
          'Choosing the appropriate paper, cover material, and other necessary supplies.',
        timePerOne: 2,
      },
      {
        id: 2,
        title: 'Printing pages',
        description:
          'Printing the inner pages of the notebook, journal, diary, or planner.',
        timePerOne: 10,
      },
      {
        id: 3,
        title: 'Cover printing',
        description:
          'Printing the covers for the notebook, journal, diary, or planner.',
        timePerOne: 5,
      },
      {
        id: 4,
        title: 'Lamination (if applicable)',
        description:
          'Applying a protective laminate to the covers, if required.',
        timePerOne: 4,
      },
      {
        id: 5,
        title: 'Cutting and trimming',
        description: 'Cutting the printed sheets and covers to the final size.',
        timePerOne: 3,
      },
      {
        id: 6,
        title: 'Binding',
        description:
          'Binding the pages together with the cover using spiral, glue, or stitching methods.',
        timePerOne: 6,
      },
      {
        id: 7,
        title: 'Quality control',
        description:
          'Inspecting each notebook, journal, diary, or planner for printing and binding quality.',
        timePerOne: 2,
      },
      {
        id: 8,
        title: 'Embossing or stamping (if applicable)',
        description:
          'Adding any special embossing, stamping, or decorations to the cover.',
        timePerOne: 4,
      },
      {
        id: 9,
        title: 'Storage',
        description:
          'Storing the products in a controlled environment until shipment.',
        timePerOne: null,
      },
    ],
  },
];
