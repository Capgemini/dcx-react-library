export function calculatePageNumbers(
  currentPage: number,
  totalPages: number,
  siblingCount: number,
  boundaryCount: number
): (number | string)[] {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, totalPages));
  const endPages = range(
    Math.max(totalPages - boundaryCount + 1, boundaryCount + 1),
    totalPages
  );

  const siblingStart = Math.max(
    Math.min(
      currentPage - siblingCount,
      totalPages - boundaryCount - siblingCount * 2 - 1
    ),
    boundaryCount + 2
  );

  const siblingEnd = Math.min(
    Math.max(currentPage + siblingCount, boundaryCount + siblingCount * 2 + 2),
    totalPages - boundaryCount - 1
  );

  let startSiblingsToAdd: (number | string)[];

  if (siblingStart > boundaryCount + 2) {
    startSiblingsToAdd = ['...'];
  } else if (boundaryCount + 1 < totalPages - boundaryCount) {
    startSiblingsToAdd = [boundaryCount + 1];
  } else {
    startSiblingsToAdd = [];
  }

  let endSiblingsToAdd: (number | string)[];

  if (siblingEnd < totalPages - boundaryCount - 1) {
    endSiblingsToAdd = ['...'];
  } else if (totalPages - boundaryCount > boundaryCount) {
    endSiblingsToAdd = [totalPages - boundaryCount];
  } else {
    endSiblingsToAdd = [];
  }

  const itemList = [
    ...startPages,
    ...startSiblingsToAdd,
    ...range(siblingStart, siblingEnd),
    ...endSiblingsToAdd,
    ...endPages,
  ];
  return itemList;
}
