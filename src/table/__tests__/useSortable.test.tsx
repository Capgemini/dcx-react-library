import { act, renderHook } from '@testing-library/react-hooks';
import { useSortableData } from '../useSortable';

const data = [
  { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
  { id: 3, name: 'Milk', price: 1.9, stock: 32 },
  { id: 2, name: 'Yoghurt', price: 2.4, stock: 12 },
];

const dataSameId = [
  { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
  { id: 1, name: 'Milk', price: 1.9, stock: 32 },
  { id: 1, name: 'Yoghurt', price: 2.4, stock: 12 },
];

const orderListDesc = [
  { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
  { id: 2, name: 'Yoghurt', price: 2.4, stock: 12 },
  { id: 3, name: 'Milk', price: 1.9, stock: 32 },
];

const orderListAsc = [
  { id: 3, name: 'Milk', price: 1.9, stock: 32 },
  { id: 2, name: 'Yoghurt', price: 2.4, stock: 12 },
  { id: 1, name: 'Cheese', price: 4.9, stock: 20 },
];

const useSort = (data: any[], config?: any) => {
  const { items, requestSort, sortConfig } = useSortableData(data, config);
  return { items, requestSort, sortConfig };
};

describe('useSortable', () => {
  it('should order descending', () => {
    const { result } = renderHook(() => useSort(data));
    act(() => result.current.requestSort('id'));
    expect(result.current.items).toStrictEqual(orderListDesc);
  });
  it('should order ascending', () => {
    const { result } = renderHook(() =>
      useSort(data, { key: 'id', direction: 'ascending' })
    );
    act(() => result.current.requestSort('id'));
    expect(result.current.items).toStrictEqual(orderListAsc);
  });
  it('should not sort', () => {
    const { result } = renderHook(() =>
      useSort(dataSameId, { key: 'id', direction: 'ascending' })
    );
    act(() => result.current.requestSort('id'));
    expect(result.current.items).toStrictEqual(dataSameId);
  });
});
