CREATE OR ALTER PROCEDURE getAllQuestions
    @page INT,
    @pageSize INT
AS
BEGIN
    SELECT *
    FROM QUESTIONS
    WHERE is_deleted = 0
    ORDER BY created_at DESC
    OFFSET (@page - 1) * @pageSize ROWS
    FETCH NEXT @pageSize ROWS ONLY
END;


EXEC getAllQuestions @page = 1, @pageSize = 10;