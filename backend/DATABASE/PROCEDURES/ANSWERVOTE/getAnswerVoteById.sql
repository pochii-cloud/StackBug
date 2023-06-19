CREATE OR ALTER PROCEDURE getAnswerVoteById
    @id VARCHAR ( 255 )
AS
BEGIN
    SELECT * FROM answer_votes WHERE id = @id
END