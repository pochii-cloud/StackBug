CREATE OR ALTER PROCEDURE getAnswerVoteByAnswerId
    @answer_id VARCHAR(255)
AS
BEGIN
    SELECT * FROM answer_votes WHERE answer_id = @answer_id;
END