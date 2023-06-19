CREATE OR ALTER PROCEDURE getAnswersByQuestionId
    @id VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM ANSWERS WHERE question_id = @id
END

select * from ANSWERS