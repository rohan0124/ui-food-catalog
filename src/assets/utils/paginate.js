export const  paginate = (array, pageNumber,pageSize=LIMIT) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

export const LIMIT=10;