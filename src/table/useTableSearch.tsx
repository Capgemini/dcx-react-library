import React from 'react';

type TableSearch = {
  searchVal: string;
  data: any[];
};

export const useTableSearch = ({ searchVal, data }: TableSearch) => {
  const [filteredData, setFilteredData] = React.useState(data);
  React.useEffect(() => {
    if (searchVal) {
      const reqData = data.map((_data: any[], index: number) => {
        const _values: any = Object.values(_data)
          .filter(u => !(u instanceof Object))
          .join();
        if (_values.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0)
          return data[index];
        return null;
      });
      setFilteredData(reqData.filter((_data: any[]) => _data !== null));
    } else setFilteredData(data);
  }, [searchVal, data]);

  return { filteredData };
};
