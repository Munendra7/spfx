import * as React from 'react';
import styles from './ListTable.module.scss';

interface IListTableProps {
  items: any[];
}

const ListTable: React.FC<IListTableProps> = ({ items }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortConfig, setSortConfig] = React.useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = sortedItems.filter(item =>
    item.Title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.tableContainer}>
      <input
        type="text"
        placeholder="Search by title"
        value={searchTerm}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th onClick={() => requestSort('Title')} className={styles.sortable}>
              Title
              {sortConfig && sortConfig.key === 'Title' && (
                <span className={styles.sortDirection}>
                  {sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}
                </span>
              )}
            </th>
            <th onClick={() => requestSort('Created')} className={styles.sortable}>
              Created Date
              {sortConfig && sortConfig.key === 'Created' && (
                <span className={styles.sortDirection}>
                  {sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}
                </span>
              )}
            </th>
            <th onClick={() => requestSort('Modified')} className={styles.sortable}>
              Modified Date
              {sortConfig && sortConfig.key === 'Modified' && (
                <span className={styles.sortDirection}>
                  {sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'}
                </span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <tr key={item.Id}>
                <td>{item.Title}</td>
                <td>{new Date(item.Created).toLocaleString()}</td>
                <td>{new Date(item.Modified).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No items found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable;