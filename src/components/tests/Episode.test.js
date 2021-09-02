import React from 'react';
import { queryByText, render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
  id: 1,
  name: '',
  image:
    'http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg',
  season: 1,
  number: 1,
  summary: '',
  runtime: 1,
};

const testEpisodeWithSummary = {
  ...testEpisode,
  summary:
    'In this episode shariq defeats captain underpants and saves the entire world from DOOM!',
};

const testEpisodeWithoutImage = { ...testEpisode, image: null };

test('Episode component renders without errors', () => {
  render(<Episode episode={testEpisode} />);
});

test('renders the summury test passed as prop', () => {
  // Arrange: The episode comopnent renders correctly with props
  render(<Episode episode={testEpisodeWithSummary} />);

  // Act: grabbing the summar text that is supposed to exist in the DOM
  const summaryElement = screen.queryByText(
    /In this episode shariq defeats captain underpants and saves the entire world from DOOM!/i
  );

  // Assert: Seeing that the element was actually grabbed and even exists
  expect(summaryElement).toBeTruthy();
  expect(summaryElement).not.toBeNull();
  expect(summaryElement).not.toBeFalsy();
  expect(summaryElement).toBeInTheDocument();
});

test('renders default image when image is not defined', () => {
  // Arrange: Render Episode component with prop (no image version)
  render(<Episode episode={testEpisodeWithoutImage} />);

  // Act: Arrange: Grab that image
  const defaultImage = screen.getByAltText('./stranger_things.png');

  // Assert: Make sure that the image has the expected defaulted to image
  expect(defaultImage).toBeInTheDocument();
  expect(defaultImage).not.toBeFalsy();
  expect(defaultImage).toBeTruthy();
  expect(defaultImage).toHaveAttribute('alt', './stranger_things.png');
});

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.
