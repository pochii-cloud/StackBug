CREATE OR ALTER PROCEDURE getAnswerById
    @id VARCHAR(255)
AS
BEGIN
    SELECT *
    FROM ANSWERS
    WHERE id = @id;
END
