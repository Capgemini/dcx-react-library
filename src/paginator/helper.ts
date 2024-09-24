export function calculatePageNumbers(
  currentPage: number,
  totalPages: number,
  siblingCount: number,
  boundaryCount: number
): (number | string | null)[] {
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

  const itemList = [
    ...startPages,

    ...(siblingStart > boundaryCount + 2
      ? ['...']
      : boundaryCount + 1 < totalPages - boundaryCount
        ? [boundaryCount + 1]
        : []),

    // Sibling pages
    ...range(siblingStart, siblingEnd),

    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingEnd < totalPages - boundaryCount - 1
      ? ['...']
      : totalPages - boundaryCount > boundaryCount
        ? [totalPages - boundaryCount]
        : []),

    ...endPages,
  ];
  return itemList;
}
