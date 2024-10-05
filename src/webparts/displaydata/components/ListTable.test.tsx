// // src/webparts/myWebPart/components/ListTable.test.tsx

// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import ListTable from './ListTable';

// const items = [
//   { Id: 1, Title: 'Item A', Created: '2024-10-05T15:52:05Z', Modified: '2024-10-05T15:52:09Z' },
//   { Id: 2, Title: 'Item B', Created: '2024-10-04T15:52:05Z', Modified: '2024-10-04T15:52:09Z' },
//   { Id: 3, Title: 'Item C', Created: '2024-10-03T15:52:05Z', Modified: '2024-10-03T15:52:09Z' },
// ];

// describe('ListTable Component', () => {
//   test('renders the table with items', () => {
//     render(<ListTable items={items} />);

//     // Check if the titles are rendered
//     expect(screen.getByText('Item A')).toBeInTheDocument();
//     expect(screen.getByText('Item B')).toBeInTheDocument();
//     expect(screen.getByText('Item C')).toBeInTheDocument();
//   });

//   test('sorts items by Title ascending', () => {
//     render(<ListTable items={items} />);
    
//     // Click the Title header to sort
//     fireEvent.click(screen.getByText('Title'));
    
//     // Verify that the items are sorted correctly
//     const rows = screen.getAllByRole('row').slice(1); // Skip header row
//     expect(rows[0]).toHaveTextContent('Item A');
//     expect(rows[1]).toHaveTextContent('Item B');
//     expect(rows[2]).toHaveTextContent('Item C');
//   });

//   test('sorts items by Title descending', () => {
//     render(<ListTable items={items} />);
    
//     // Click the Title header twice to sort descending
//     fireEvent.click(screen.getByText('Title'));
//     fireEvent.click(screen.getByText('Title'));

//     // Verify that the items are sorted correctly
//     const rows = screen.getAllByRole('row').slice(1); // Skip header row
//     expect(rows[0]).toHaveTextContent('Item C');
//     expect(rows[1]).toHaveTextContent('Item B');
//     expect(rows[2]).toHaveTextContent('Item A');
//   });

//   test('filters items based on search input', () => {
//     render(<ListTable items={items} />);
    
//     // Input search term
//     const searchInput = screen.getByPlaceholderText('Search by title');
//     fireEvent.change(searchInput, { target: { value: 'Item A' } });

//     // Verify that only the matching item is displayed
//     expect(screen.getByText('Item A')).toBeInTheDocument();
//     expect(screen.queryByText('Item B')).not.toBeInTheDocument();
//     expect(screen.queryByText('Item C')).not.toBeInTheDocument();
//   });

//   test('shows no items found when search term does not match', () => {
//     render(<ListTable items={items} />);
    
//     // Input a search term that does not match any item
//     const searchInput = screen.getByPlaceholderText('Search by title');
//     fireEvent.change(searchInput, { target: { value: 'Nonexistent' } });

//     // Verify that "No items found" is displayed
//     expect(screen.getByText('No items found')).toBeInTheDocument();
//   });
// });