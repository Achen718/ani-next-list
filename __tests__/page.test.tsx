import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnimeDetailsPage from '@/app/anime/[id]/page';
import { AnimeProvider } from '@/context/AnimeContext';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: [{ id: 1, title: 'Test Anime' }] }),
  })
) as jest.Mock;

describe('AnimeDetailsPage', () => {
  it('fetches and displays data', async () => {
    render(
      <AnimeProvider>
        <AnimeDetailsPage />
      </AnimeProvider>
    );

    // Check if loading indicator is displayed
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for the data to be fetched and displayed
    await waitFor(() => {
      expect(screen.getByText('Test Anime')).toBeInTheDocument();
    });
  });
});
