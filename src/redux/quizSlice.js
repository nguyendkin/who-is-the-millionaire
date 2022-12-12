import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    data: [
      {
        id: 1,
        question: "What is your favorite color? 1",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 2,
        question: "What is your favorite color? 2",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 3,
        question: "What is your favorite color? 3",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 4,
        question: "What is your favorite color? 4",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 5,
        question: "What is your favorite color? 5",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 6,
        question: "What is your favorite color? 6",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 7,
        question: "What is your favorite color? 7",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 8,
        question: "What is your favorite color? 8",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 9,
        question: "What is your favorite color? 9",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 10,
        question: "What is your favorite color? 10",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 11,
        question: "What is your favorite color? 11",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 12,
        question: "What is your favorite color? 12",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 13,
        question: "What is your favorite color? 13",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 14,
        question: "What is your favorite color? 14",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
      {
        id: 15,
        question: "What is your favorite color? 15",
        answers: [
          {
            text: "red",
            correct: true,
            id: 1,
          },
          {
            text: "green",
            correct: false,
            id: 2,
          },
          {
            text: "Yellow",
            correct: false,
            id: 3,
          },
          {
            text: "Black",
            correct: false,
            id: 4,
          },
        ],
      },
    ],

    questionTree: [
      {
        id: 1,
        money: "100 $",
      },
      {
        id: 2,
        money: "200 $",
      },
      {
        id: 3,
        money: "300 $",
      },
      {
        id: 4,
        money: "500 $",
      },
      {
        id: 6,
        money: "600 $",
      },
      {
        id: 7,
        money: "800 $",
      },
      {
        id: 9,
        money: "900 $",
      },
      {
        id: 10,
        money: "10.000 $",
      },
      {
        id: 11,
        money: "11.000 $",
      },
      {
        id: 12,
        money: "12.000 $",
      },
      {
        id: 13,
        money: "13.000 $",
      },
      {
        id: 14,
        money: "14.000 $",
      },
      {
        id: 15,
        money: "15.000 $",
      },
    ].reverse(),
  },

  reducers: {},
});

export default quizSlice.reducer;
