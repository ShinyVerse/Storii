# Storii

So you have an idea for a story and you've written your first line. Wouldn't it be great to collobarte and get a community to contribute to your work? As your contributes create entries to your story, see the seeds of your story grow as they twist and turn before you creating adventures never before thought of. Who knows where your next story will lead you? Let's create memories, let's create Storiis, together.

![book](https://www.incimages.com/uploaded_files/image/970x450/getty_883231284_200013331818843182490_335833.jpg)

### THIS REPO ONLY INCLUDES THE FRONTEND FOR STORII. FOR THE BACKEND REPO, [CLICK HERE](https://github.com/Nimzyow/storii_server).

## Table of content

- [Installation](#installation)
- [Database](#database)
- [Testing](#testing)
- [Running the application](#running-the-application)
- [Tech stack](#tech-stack)
- [A bit about us](#a-bit-about-us)
- [Extra notes](#extra-notes)
- [User stories](#user-stories)

## Installation

Follow these steps to install required dependencies:

1. In the root of the projecttype the following in your terminal:

```
$ npm install
```

A point to note:

To get Storii working properly, you will need to install the backend. This will include setting up MongoDB and the correct environment variables. Instructions are in the [backend repo](https://github.com/Nimzyow/storii_server)

That's it! Phew!

## Testing

Follow these steps to run tests for the backend:

1. In the root of the project, type the following in your terminal:

```
$ npm test
```

You should see the tests for the frontend in the terminal.

## Running the application

Make sure to first run the backend. Instructions are found in the [backend repo](https://github.com/Nimzyow/storii_server)

Follow these steps to run the frontend:

1. In the root of the project, type the following in your terminal:

```
$ npm run build
```

then

```
$ npm start
```

Yay! You just turned on the frontend for this project!

## Planning

This project was done as a pair by Laura Jackson and Nima Soufiani. We decided to give ourselves an exciting and cute project to do to level up ourselves. The majority of thought was placed into TDD and readability. Everyday we discussed ways to make our work more readable and we vigirously stuck to TDD'ing with Jest and Enzyme.

The frontend, which is this very repo you're on, was built with React but without create-react-app. If you're not aware, this basically means guaranteed nightmare sessions with webpack. However, this approach was taken precisely because we wanted to gain an better understanding of webpack and to not rely on some of the magic of create-react-app. Many lessons were learnt through interacting with webpack and it has made us better developers in the process.

We also decided very early on to use Redux to deal with state management. Although it requires more boilerplate, Redux allowed us access to superb developer tools to understand what is going on with our state at any point in our application. Very useful for debugging.

We took the time to really discuss what our MVP should be and what it should look like. After extensive planning on Miro, we decided on the MVP and planned out the general structure of our file as well. Working as a team, it is important that time is taken to really lay out the structure so as to cause as little confusion as possible.

## Tech stack

- JavaScript
- React (hooks)
- Redux
- Jest and Enzyme
- eslint
- prettier

## A bit about us

| Name          | Favourite color | Favourite food | favourite activity | Favourite country | Recommended book         |
| :------------ | :-------------- | :------------- | :----------------- | :---------------- | :----------------------- |
| Laura Jackson | yellow          | potato wedges  | gaming             | England           | The Morbidly obese Ninja |
| Nima Soufiani | blue            | Ramen          | Scuba diving       | Japan             | Animal farm              |

## Extra notes

This project was done entirely remotely which allowed us practice pairing and remote working. Altogether it's been very productive so far and demonstrated that even when working remotely we can still get stuff done. Putting real thought into the structure, naming and placement of files in this repo was great fun and has paid off in dividends as it is very intuitive where any file should be. We will apply this same thought process as the application grows further.

## User Stories

Storii

As a user
I want to see the story on the page
So that I know where it's up to

As a user
I want to be able to submit a new part of the story
So that the story can grow

As a user
I want to see my story entry
To know that it has been added

As a user
I want to be able to scroll
So that I can see past points of the story
