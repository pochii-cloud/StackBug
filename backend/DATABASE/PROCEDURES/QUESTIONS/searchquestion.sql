CREATE PROCEDURE SearchQuestions
    @searchTerm VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT *
    FROM QUESTIONS
    WHERE title LIKE '%' + @searchTerm + '%'
        AND is_deleted = 0;
END
