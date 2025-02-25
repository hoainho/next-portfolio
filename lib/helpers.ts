export const getAuthorId = (): number | null => {
  const authorId = process.env.NEXT_PUBLIC_AUTHOR_ID;
  if (!authorId || authorId.trim() === "") {
    return null;
  }
  const parsedId = parseInt(authorId, 10);
  return isNaN(parsedId) ? null : parsedId;
};
